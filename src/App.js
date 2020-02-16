import React, { Component } from 'react'
import MetaTags from 'react-meta-tags'
import NavBar from './components/NavBar'
import sort from './utils/sort'
import Main from './components/Main'
import './App.css'


class App extends Component {
  state = {
    cities: [],
    countryInput: null,
    countryName: null,
    error: null,
    accordionIsShowed: true
  }
  /** LocalStorage getting */
  async componentDidMount() {
    const localData = JSON.parse(localStorage.getItem('localData'))
    const localDataCountry = JSON.parse(localStorage.getItem('localDataCountry'))

    if (localData) {
      let countryName = localDataCountry

      switch (countryName) {
        case 'FR': countryName = 'France'
          break
        case 'DE': countryName = 'Germany'
          break
        case 'PL': countryName = 'Poland'
          break
        case 'ES': countryName = 'Spain'
          break
        default: // nothing to do here
          break
      }
      this.setState({
        countryName,
        cities: localData
      })
    }
  }

   onChangeSearch = async(e) => {
    if (e) {
      const { value } = e
      let actualCountryInput

      switch (value) {
        case 'France': actualCountryInput = 'FR'
          break
        case 'Germany': actualCountryInput = 'DE'
          break
        case 'Poland': actualCountryInput = 'PL'
          break
        case 'Spain': actualCountryInput = 'ES'
          break
        default: // nothing to do here
          break
      }

      const { countryInput } = this.state
      if (actualCountryInput !== countryInput) {
        await this.setState({
          countryInput: actualCountryInput,
          accordionIsShowed: false,
          countryName: value
        })
        await this.getData()
        this.setState({ accordionIsShowed: true })
      }
    }
  }

  async getData() {
    const { countryInput } = this.state

    const url = `https://api.openaq.org/v1/latest?country=${countryInput}&order_by=city&limit=10000`
    const res = await fetch(url)

    if (res.ok) {
      localStorage.setItem('localDataCountry', JSON.stringify(this.state.countryInput))
      const data = await res.json()

      if (data.results) {
        const datas = await sort(data.results)
        this.setState({ cities: datas, error: null })
        localStorage.setItem('localData', JSON.stringify(datas))
      }
    } else {
      this.setState({ error: res.statusText })
    }
  }

  render() {
    const {
      cities, accordionIsShowed, error
    } = this.state
    return (
      <>
        <MetaTags>
          <title>Top 10 air pollution city</title>
          <meta
            name="description"
            content="Top 10 air-polluted cities in Europe. Latest air quality
             measure in European Union. App show true quality of European country."
          />
          <meta name="keywords" content="air, quality, pollution, latest, tests" />
          <meta property="og:title" content="Air quality" />
          <meta name="author" content="Brian Wala" />
        </MetaTags>
        <NavBar onChangeSearch={this.onChangeSearch} />
        <Main
          cities={cities}
          showed={accordionIsShowed}
          error={error}
        />
      </>
    )
  }
}

export default App
