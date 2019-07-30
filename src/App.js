import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import NavBar from './components/NavBar';
import sort from './components/sort';


import Main from './components/Main';

import './App.css';


class App extends Component {
  state = {
    cities: [],
    countryInput: null,
    countryName: null,
    error: null,
    AccordionShowed: true
  }

  /** Fetch data and validate it */

  async getData() {

    /** Sort data */
    // imported from components/sort.js
    const sortData = sort;


    // fetch data
    const country = this.state.countryInput;

    const url = `https://api.openaq.org/v1/latest?country=${country}&order_by=city&limit=10000`;
    const res = await fetch(url);
    let data;

    if (res.ok) {
      localStorage.setItem("localDataCountry", JSON.stringify(this.state.countryInput));
      data = await res.json();

      if (data.results) {

        const datas = await sortData(data.results);
        this.setState({ cities: datas, error: null });

        // storage actual data
        localStorage.setItem("localData", JSON.stringify(datas));

      }
      // custom Throw Error
    } else {
      this.setState({ error: res.statusText });
    }
  }

  /** LocalStorage getting */

  async componentDidMount() {

    const localData = JSON.parse(localStorage.getItem("localData"));
    const localDataCountry = JSON.parse(localStorage.getItem("localDataCountry"));

    if (localData) {
      let countryName = localDataCountry;

      switch (countryName) {
        case "FR": countryName = "France"
          break;
        case "DE": countryName = "Germany"
          break;
        case "PL": countryName = "Poland"
          break;
        case "ES": countryName = "Spain"
          break;
        default: //nothing to do here
          break;
      }

      this.setState({
        countryName: countryName,
        cities: localData,
      })
    }
  }


  /** Input change handler for SearchInput */

  async onChangeSearch(e) {
    
    if(e){
    const inputValue = e.value;

      let shortcutValue = this.state.countryInput;

      switch (inputValue) {
        case "France": shortcutValue = "FR"
          break;
        case "Germany": shortcutValue = "DE"
          break;
        case "Poland": shortcutValue = "PL"
          break;
        case "Spain": shortcutValue = "ES"
          break;
        default: //nothing to do here
          break;
    }
    // if there is different input than last one
    if (shortcutValue !== this.state.countryInput) {

      await this.setState({
        countryInput: shortcutValue,
        AccordionShowed: false,
        countryName: inputValue
      });
      // fetch new data
      await this.getData();
      // Run Accordion Elements Animation <Fade>
      this.setState({ AccordionShowed: true });
    }

    }

    
  }

  render() {
    return (
      <React.Fragment >
       <MetaTags>
            <title>Top 10 air pollution city</title>
            <meta name="description" 
            content="Top 10 air-polluted cities in Europe. Latest air quality
             measure in European Union. App show true quality of European country." />
            <meta name="keywords" content="air, quality, pollution, latest, tests"></meta>
            <meta property="og:title" content="Air quality" />
            <meta name="author" content="Brian Wala"/>
          </MetaTags>
        <NavBar onChangeSearch={this.onChangeSearch.bind(this)} />
        <Main
          country={this.state.countryName}
          cities={this.state.cities}
          showed={this.state.AccordionShowed}
          error={this.state.error} />
      </React.Fragment>
    );
  }

}

export default App;
