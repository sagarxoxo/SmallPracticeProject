import { Button, Card, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./Tours.css"

export default function Tours() {

    const url = 'https://course-api.com/react-tours-project'

    const [tourData, setTourData] = useState([]);
    const [read, setRead] = useState(false);
    
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setTourData(data))
    },[])
    
    console.log(tourData)

    function filter(id){
       const updatedTours =  tourData.filter(data => data.id !== id)
       setTourData(updatedTours)
    }

    const styles = {
        height: tourData.length === 0 ? "100%" : "100vh !important"
    };

  return (
    <div className='tourPage' style={styles}>
        <Typography variant='h3' sx={{fontWeight: "500", marginBottom: "40px"}}>{tourData.length === 0 ? "No List Refresh" : "Our Tours"}</Typography>
        {tourData?.map(data => <Card sx={{ maxWidth: 600, display: 'flex', boxShadow: "0 5px 15px rgb(0 0 0 / 40%)",marginBottom: "40px" }}>
            <CardContent sx={{padding: "0px",}}>
                <img src={data.image} className="imgTour"/>
                <div className='cardInfo'>
                    <div className='pr'>
                        <Typography variant='h4'>{data.name}</Typography>
                        <Button className='prBtn'>{data.price}</Button>
                    </div>
                    <Typography variant='subtitle' className='infoDesc'>{read ? data.info  : (data.info).slice(0, 220)}</Typography>
                    <span onClick={() => setRead(prevState => !prevState)} className="spanRead">
                        {read ? "...Read Less" : "...Read More"}
                    </span>
                    <div className='nt'>
                    <Button 
                        variant="outlined" 
                        sx={{ color: "#bb2525", border: "1px solid #bb252550"}} 
                        className='ntBtn'
                        onClick={() => filter(data.id)}
                        >
                        Not Intrested
                    </Button>
                    </div>
                </div>
            </CardContent>
        </Card>) 
        }
    </div>
  )
}
