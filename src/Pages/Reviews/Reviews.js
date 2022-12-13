import React from 'react'
import "./Review.css"
import ReviewData from "./Data";
import { Button, Card, CardContent, Typography } from '@mui/material'
export default function Reviews() {

   
  return (
    <div className='reviewPage'>
        <Typography variant='h3' sx={{fontWeight: "500", marginBottom: "40px"}}>Our Reviews</Typography>
        <Card sx={{ width: 600, display: 'flex', boxShadow: "0 5px 15px rgb(0 0 0 / 40%)",marginBottom: "40px" }}>
            <CardContent sx={{padding: "0px",}}>

            </CardContent>
        </Card>
    </div>
  )
}
