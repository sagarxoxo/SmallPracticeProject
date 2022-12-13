import React, { useState } from 'react';
import './BirthdayReminder.css';
import {Container, Typography, Card, CardContent, Button} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Data from './Data'

function BirthdayReminder() {

    const [birthdays , setBirthdays] = useState(Data);
    console.log(birthdays)

    function handleClick(){
        setBirthdays([])
    }

  return (
    <div className='birthDyPage'>
    <Container maxWidth="xll" sx={{ display: "flex", flexDirection: "row",position: "absolute", alignItems: "center", justifyContent: "center", height: "100%",}}>
        <Card sx={{ padding: "20px", minWidth: 400, display: 'flex', boxShadow: "0 5px 15px rgb(0 0 0 / 40%)", }}>
        <CardContent>
            <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
            {birthdays.length} Birthdays Today
            </Typography>
            {
                birthdays.map(birthday => {
                    return (
                        <div className='singleInfo'>
                            <img src={birthday.image} className="imgRes"/>
                            <div className='info'>
                                <Typography variant='body1'>{birthday.name}</Typography>
                                <Typography variant='body2' sx={{opacity: "0.8"}}>{birthday.age}</Typography>
                            </div>
                        </div>
                    )
                })
            }
            <Button onClick={handleClick} variant="contained" sx={{marginTop: "40px", width: "400px", height: "50px", backgroundColor: "#8a2be2"}}>Clear All</Button>
        </CardContent>
        </Card>
    </Container>
    </div>
  )
}

export default BirthdayReminder;