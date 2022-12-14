import React from 'react'
import "./Menu.css"
import MenuData from "./Data";

import { Button, Card, CardContent, Typography } from '@mui/material'

export default function Menu() {
  return (
    <div className='menuPage'>
         <Typography variant='h3' sx={{fontWeight: "500", marginBottom: "40px"}}>Our Menus</Typography>
    </div>
  )
}
