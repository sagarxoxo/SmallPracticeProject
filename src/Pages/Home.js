import { Button, Grid } from "@mui/material";
import React from "react";

function Home() {
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
    {
      BR: "Menu",
      linkName: "menus",
    },
    {
      BR: "Experience",
      linkName: "experience",
    },
    {
      BR: "ParaGenerator",
      linkName: "para-generator",
    },
  ];
  return (
    <div className="homePage">
      <Grid container spacing={2}>
        {data.map((link) => {
          return (
            <Grid item lg={3}>
              <Button href={link.linkName} variant="contained">
                {link.BR}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Home;
