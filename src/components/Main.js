import React from 'react'
import Typography from '@material-ui/core/Typography'
import AccordionElement from './AccordionElement'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(() => ({
  progress: {
    position: 'fixed',
    left: 'calc(50% - 20px)',
    top: 'calc(50% + 80px)',
    color: '#4caf50'
  }
}))

const Main = ({
  cities,
  country,
  error,
  showed
}) => {
  const classes = useStyles()
  const preloader = showed ? 'none' : 'block'

  return (
    <>
      <Typography variant="h4" align="center" paragraph>{country || error}</Typography>
      <div>
        <CircularProgress style={{ display: preloader }} className={classes.progress} />
        {cities.map((city) => (
          <AccordionElement
            city={city}
            showed={showed}
            key={`city${city.cityName}`}
            country={country}
          />
        ))}
      </div>
    </>
  )
}
export default Main
