import React   from "react";
import {Card, CardContent, Typography, Grid} from '@mui/material';
import CountUp from 'react-countup'
import styles from './Cards.module.css'
//import { render } from "@testing-library/react";


const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'Loading...'
    }
   console.log(confirmed)
   
return(
    <div className={ styles.container}>
      <Grid container spacing={3} justify="center">
       <Grid item component={Card}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>
               Infected
            </Typography>
            <Typography variant="h5">
                { <CountUp  start={0.0}  end={confirmed.value} duration={2.5}separator=','/> }
            </Typography>
            <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()} </Typography>
            <Typography  variant="body2">Number of active cases of Covid-19</Typography>
        </CardContent>
       </Grid>

       <Grid item component={Card}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>
            Recovered
            </Typography>
            <Typography variant="h5">
            { <CountUp  start={0.0}  end={recovered.value} duration={2.5}separator=','/> }
            </Typography>
            <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()}</Typography>
            <Typography  variant="body2">Number of Recovered from Covid-19</Typography>
        </CardContent>
       </Grid>

       <Grid item component={Card}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>
               Deaths
            </Typography>
            <Typography variant="h5">
            { <CountUp  start={0.0}  end={deaths.value} duration={2.5}separator=','/> }
            </Typography>
            <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()}</Typography>
            <Typography  variant="body2">Number of Deaths cases by Covid-19</Typography>
        </CardContent>
       </Grid>

      </Grid>
    </div>
   
)
   
}            

export default Cards;