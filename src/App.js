import React from 'react';
import './App.css';
import Cards from './compoment/Cards/Cards'
import Charts from './compoment/chart/chart'
import Country from './compoment/CountryPicker/Country'
import styles from './app.module.css'
import { fetchData } from "./api/index";
// import { render } from '@testing-library/react';



class App extends React.Component {

  async componentDidMount()  {
const data = await fetchData();
console.log(data) 
}

render(){
  return (
  <div className={styles.container}>
   <Cards />
   <  Charts />
   <Country />
 
     </div>   
  );
}
}

export default App;
