import {Stack,Typography,Switch} from '@mui/material'
import { useState } from 'react'
import UpData from '../components/UpData'
import DownData from '../components/DownData'
export default function MainPage() {

    const [checked, setChecked] = useState(true)

    const handleChange = (e) => {
        setChecked(e.target.checked)
        console.log(checked)
    }

    return (
        <Stack component='main'>
            <Stack component='header'>
               <Stack id='headTop-info'>
               <Typography variant='h1'>  Social Media Dashboard</Typography>
               <Typography variant='p'>Total Followers: 23,004</Typography>
               </Stack>

               <Stack id='DarkMode-toggle'>
               <Typography variant='h2' fontSize='1em'>Dark Mode</Typography>
               <Switch 
               checked={checked}
                onChange={handleChange}/>
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
                      <Stack component='article'  key={index}>
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