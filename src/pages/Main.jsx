import {Stack,Typography,Switch} from '@mui/material'
import { useState } from 'react'
import { styled } from '@mui/material/styles';
import UpData from '../components/UpData'
import DownData from '../components/DownData'
export default function MainPage() {

    const [checked, setChecked] = useState(true)

    const handleChange = (e) => {
        setChecked(e.target.checked)
        console.log(checked)
    }



    const IOSSwitch = styled((props) => (
      <Switch focusVisibleClassName=".Mui-focusVisible" 
      checked={checked}
       onChange={handleChange} disableRipple {...props} />
    ))(({ theme }) => ({
      width: 58,
      height: 34,
      padding: 7,
      '& .MuiSwitch-switchBase': {
        padding: 1,
        '&.Mui-checked': {
          transform: 'translateX(24px)',
          color: '#fff',
          '& .MuiSwitch-thumb': {
            backgroundColor: 'red', // bolinha ativa
          },
          '& + .MuiSwitch-track': {
            backgroundColor: 'purple', // trilha ativa
          },
        },
        '& .MuiSwitch-thumb': {
          backgroundColor: 'pink', // bolinha desativada
        },
      },
      '& .MuiSwitch-thumb': {
         margin: 8,
        width: 15,
        height: 15,
      },
      '& .MuiSwitch-track': {
        borderRadius: 20,
        backgroundColor: 'blue', // trilha desativada
        opacity: 1,
      },
    }));
    
    

    return (
        <Stack component='main'
         className={checked ? 'dark' : 'light'}
          padding={{xs: ' 1.5em 1em', lg: '2em'}}>
            <Stack component='header' sx={{display: 'flex',
                flexDirection: {xs: 'column', lg: 'row'},
                justifyContent: {xs: 'flex-start', lg: 'space-between', margin: '1em 0 '}}}>
               <Stack id='headTop-info'>
               <Typography variant='h1' 
               fontSize={{xs:'1.5em', lg:'1.7em'}} marginY={1} >  Social Media Dashboard</Typography>
               <Typography variant='p'>Total Followers: 23,004</Typography>

               <Stack marginY={2} display={{xs:'block', lg:'none'}}>
                  <hr/>
               </Stack>
               </Stack>

               <Stack id='DarkMode-toggle' sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: {xs: 'space-between', lg: 'flex-start'}}}>
               <Typography variant='h2' fontSize='1em'>Dark Mode</Typography>
               <Stack marginRight={1}>
               <IOSSwitch/>
               </Stack>
               </Stack>
            </Stack>
            <Stack component='section'>
               {
                UpData.map((item, index) => {
                   return (
                      <Stack component='article' key={index}>
                         <Stack>
                            <img src={item.icon} width='30px' alt='social icon'/>
                            <Typography variant='h3'> {item.title}</Typography>
                         </Stack>
                         <Stack>
                         <Typography variant='h3'> {item.followN}</Typography>
                            <Typography variant='h4'> {item.subTitle}</Typography>
                         </Stack>
                         <Stack>
                           
                            <Typography variant='h4'>  <img src={item.arrowIcon} width='15px' alt='arrow icon'/> {item.upOrDown}</Typography>
                         </Stack>
                      </Stack>
                   )
                })
               }
            </Stack>
            <Stack component='section'>
               {
                DownData.map((item, index) => {
                   return (
                      <Stack component='article' className='top-cards'  key={index}>
                         <Stack>

                         <Typography variant='h3'> {item.title}</Typography>
                            <img src={item.socialIcon} width='30px' alt='social icon'/>
                         </Stack>
                         <Stack>
                            <Typography variant='h4'> {item.num}</Typography>
                            <Stack className='mini'>
                            
                            <Typography variant='h4'> <img src={item.arrowIcon} width='15px' alt='arrow icon'/> {item.porcent}</Typography>
                         </Stack>
                         </Stack>
                      </Stack>
                   )
                })
               }
            </Stack>

        </Stack>
    )
}