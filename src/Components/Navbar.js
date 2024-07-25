//React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './Navbar_StyleSheet.css';
import { Button, 
        IconButton, 
        Tab, 
        TextField, 
        Toolbar,
        useTheme, 
        useMediaQuery
        } from '@mui/material'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ResumeButton from './Images/ResumeButton.svg'


export default function Navbar(){
    // Define a state variable 'value' with initial value '1' and a setter function 'setValue'
    const [value, setValue] = React.useState('1');
    // Define a function to handle tab change
    const handleChange = (event, newValue) => {
        setValue(newValue); // Update the state variable 'value' with the new tab value
    };

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return(
        //Component is wrapped in box container
        <Box className='BoxContainer'>
        <AppBar className='AppBar'>
                <Toolbar sx={{ backgroundColor: '#A8BA9A'}} elevation={2}>
                    <IconButton
                        size='small'
                        edge='start'
                        color='success'
                        aria-label='menu'
                    >
                    <div>
                            <img
                                src={ResumeButton}
                                alt='Resume'
                                className='imgSize'
                            />
                    </div>
                    </IconButton>
                    <Box sx={{
                        typography: 'body1', flexGrow: 1,
                        display: 'flex',
                    }} className='Tabs'>
                        {/* Provide a context for the tabs with the current selected tab value */}
                    <TabContext value={value}>
                            <Box>
                                <TabList onChange={handleChange} aria-label="Page Tabs"
                                    TabIndicatorProps={{
                                        style: {
                                            backgroundColor: 'white', 
                                            opacity: isSmallScreen ? 0 : 1,
                                        },
                                    }}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        '& .MuiTabs-flexContainer': {
                                            flexWrap: 'wrap',
                                        },
                                    }}
                                >
                                    {/* Define individual tabs with labels and values */}
                                    <Tab label="Home" value="1" 
                                    sx={{
                                        '&.Mui-selected': {
                                            color: 'white', 
                                            fontWeight: 'bold' 
                                        },
                                        minWidth: { xs: '10px', sm: '12px' }
                                    }}
                                    />
                                    <Tab label="Experiences" value="2"
                                        sx={{
                                            '&.Mui-selected': {
                                                color: 'white',
                                                fontWeight: 'bold'
                                            },
                                            minWidth: { xs: '100px', sm: '120px' },
                                        }}
                                    />
                                    <Tab label="Projects" value="3" 
                                        sx={{
                                            '&.Mui-selected': {
                                                color: 'white',
                                                fontWeight: 'bold'
                                            },
                                            minWidth: { xs: '100px', sm: '120px' }, 
                                        }}
                                    />
                                    <Tab label="Lets Connect!" value="4" 
                                        sx={{
                                            '&.Mui-selected': {
                                                color: 'white',
                                                fontWeight: 'bold'
                                            },
                                            minWidth: { xs: '100px', sm: '120px' }, 
                                        }}
                                    />   
                        </TabList>
                        </Box>
                    </TabContext>
                    </Box>
            </Toolbar>
        </AppBar>
        </Box>
    );
}