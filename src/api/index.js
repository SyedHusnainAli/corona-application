import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
try {
    const {data : {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);

// const modifiedData = {
//  confirm,  
//  recovered, 
//  deaths,
//  lastUpData,  
// }

    return {confirmed, recovered, deaths, lastUpdate};
} catch (error) {
    alert('chl')
}
}

//{confirmed, recovered, deaths, lastUpdata}
// {confirmed, recovered, deaths, lastUpdata}


