//import * as React from 'react';
import { useEffect, useState } from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  marginTop: 50,
  color: theme.palette.text.secondary,
}));

export default function Info() {

  const [globalData, setGlobalData] = useState();
  useEffect(()=>{
    async function getData(){
  const respon = await fetch('https://covid19.mathdro.id/api');
  let aPiData = await respon.json();
  console.log(aPiData) 
  console.log(aPiData.deaths.value) 
  setGlobalData(aPiData)
    }
    getData()
  },[])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {/* {Array.from(Array(5)).map((_, index) => ( */}
          <Grid xs={2} sm={4} md={4} >
            <Item><h1>
          confirmed: {globalData?.confirmed?.value}
        </h1></Item>

        <Item><h1>
          deaths: {globalData?.deaths?.value}
        </h1></Item>
        <Item><h1>
          deaths: {globalData?.recovered?.value}
        </h1></Item>
        <Item><h1>
        lastUpdate : {globalData?.lastUpdate}
        </h1></Item>

          </Grid>
        {/* ))}; */}
        
      </Grid>
    </Box>
  );
}

//Arry 6