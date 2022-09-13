import React from 'react';
import './App.css';
import Cards from './compoment/Cards/Cards'
import Charts from './compoment/chart/chart'
import Country from './compoment/CountryPicker/Country'
import styles from './app.module.css'
import { fetchData } from "./api/index";
 import { render } from '@testing-library/react';



class App extends React.Component {

state = {
  data: {},
}

  async componentDidMount()  {

    const fetchedData = await fetchData();
    this.setState({data: fetchedData})


// const data = await fetchData();

}

render(){

  const { data } = this.state

  return (
  <div className={styles.container}>
   <Cards data={data} />
   <  Charts />
   <Country />
 
     </div>   
  );
}
}

export default App;
