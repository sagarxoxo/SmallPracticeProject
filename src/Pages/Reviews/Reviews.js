import React, { useState } from 'react'
import "./Review.css"
import ReviewData from "./Data";
import { Button, Card, CardContent, Typography } from '@mui/material'

export default function Reviews() {

const [slide, setSlide] = useState(0);
const n = ReviewData.length - 1
   
  return (
    <div className='reviewPage'>
        <Typography variant='h3' sx={{fontWeight: "500", marginBottom: "40px"}}>Our Reviews</Typography>
        <Card sx={{ width: 600, display: 'flex', boxShadow: "0 5px 15px rgb(0 0 0 / 40%)",marginBottom: "40px", padding: "20px", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <CardContent sx={{padding: "0px",}}>
              <img src={ReviewData[slide].image} />
              <Typography variant='h5' sx={{fontWeight: "500", textTransform: "capitalize", fontSize: "1.25rem", paddingTop: "10px" }}>{ReviewData[slide].name}</Typography>
              <Typography variant='h6' sx={{fontWeight: "400", textTransform: "uppercase", color: "#49a6e9", fontSize: "0.85rem",}}>{ReviewData[slide].job}</Typography>
              <Typography variant='subtitle2' sx={{color: "#617d98", fontWeight: "400", fontSize: "0.95rem", padding: "10px 20px"}}>{ReviewData[slide].text}</Typography>
              <div className='btnBun'>
                  <Button onClick={() => setSlide(prevSlide => prevSlide === 0 ? n : prevSlide - 1)}>Left</Button>
                  <Button onClick={() => setSlide(prevSlide => prevSlide === n ? 0 : prevSlide + 1)}>Right</Button>
              </div>
              <div style={{textAlign: "center"}}>
                <Button className='rndBtn' onClick={() => setSlide(Math.floor(Math.random() * n))}>Surprise Me</Button>
              </div>
            </CardContent>
        </Card>
    </div>
  )
}
