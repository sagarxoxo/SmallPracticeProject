import React, { useState } from 'react'
import "./Menu.css"
import MenuData from "./Data";

import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import { data } from 'autoprefixer';

export default function Menu() {

  const [foodData, setFoodData] = useState(MenuData)

  function filter(food){
    setFoodData(MenuData)
    food === "all" ? setFoodData(MenuData) : setFoodData(prevData => prevData.filter(item => item.category === food))
    console.log(foodData)
  }

  return (
    <div className='menuPage'>
        <Typography variant='h3' sx={{fontWeight: "500", marginBottom: "40px"}}>Our Menus</Typography>
        {["all","breakfast","lunch", "shakes"].map(data => {
          return(
            <Button sx={{padding: "0px 20px"}} onClick={() => filter(data)}>{data}</Button>
          )
        })}
      <div className='cradContainer'>
        <Grid container spacing={6} sx={{padding: "40px"}}>
          {foodData.map(data => {
            return(
            <Grid item xs={6} sx={{display: "flex", flexDirection: "row"}}>
              <img src={data.img} className="imgFod"/>
              <div >
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between",}}>
                  <Typography variant='h5' sx={{ paddingLeft: "10px", textTransform: "capitalize", fontSize: "16px", fontWeight: "500"}}>{data.title}</Typography>
                  <Typography variant='h5' sx={{paddingLeft: "10px", fontSize: "16px", fontWeight: "500", color: "#1987E0"}}>{data.price}$</Typography>
                </div>
                <Typography variant="body2" sx={{paddingLeft: "10px", fontSize: "14px", textAlign: "left", color: "#617d98"}}>{data.desc}</Typography>
              </div>
            </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  )
}
