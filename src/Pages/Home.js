import { Button, Grid } from "@mui/material";
import React from "react";

function Home(){

    const data = [
        {
        BR: "Birthday Reminder",
        linkName: "birthday-reminder",
    },
    {
        BR: "Tours",
        linkName: "tours",
    },
    {
        BR: "Reviews",
        linkName: "reviews",
    },
]
    return (
        <div className='homePage'>
        <Grid container spacing={2}>
        {data.map(linkdata => {
            return (
                <Grid item lg={3}>
                    <Button href={linkdata.linkName} variant="contained">{linkdata.BR}</Button>
                </Grid>
            )
        })}
        </Grid>
        </div>
    )
}

export default Home;