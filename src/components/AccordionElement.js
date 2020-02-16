import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Box from '@material-ui/core/Box'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    overflowX: 'hidden'
  },
  panelSummary: {
    fontWeight: 700
  },
  h2: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: 600
  },
  table: {
    minWidth: '650',
    overflowX: 'auto'
  },
  pCityDescribe: {
    marginBottom: '15px'
  }
}))


const AccordionElement = ({
  city,
  country,
  showed
}) => {
  const classes = useStyles()
  const {
    cityName, pm25, pm10, co, o3, bc, so2, no2
  } = city
  return (
    <Fade in={showed} timeout={400}>
      <Paper className={classes.paper}>
        <ExpansionPanel className={classes.panelExpansion}>
          <ExpansionPanelSummary
            className={classes.panelSummary}
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${cityName}a-content`}
            id={`panel${cityName}a-header`}
          >
            <Typography variant="h2" className={classes.h2}>
              {cityName}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Box display="flex" flexDirection="column" style={{ overflowX: 'auto' }}>
              <Typography className={classes.pCityDescribe}>
                {`Latest air pollution measurement in ${country}.`}
              </Typography>
              <Box display="flex" flexDirection="column">
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">PM25</TableCell>
                      <TableCell align="left">PM10</TableCell>
                      <TableCell align="left">CO</TableCell>
                      <TableCell align="left">O3</TableCell>
                      <TableCell align="left">BC</TableCell>
                      <TableCell align="left">SO2</TableCell>
                      <TableCell align="left">NO2</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow key="row">
                      <TableCell align="left">{`${pm25} µg/m³`}</TableCell>
                      <TableCell align="left">{`${pm10} µg/m³`}</TableCell>
                      <TableCell align="left">{`${co} µg/m³`}</TableCell>
                      <TableCell align="left">{`${o3} µg/m³`}</TableCell>
                      <TableCell align="left">{`${bc} µg/m³`}</TableCell>
                      <TableCell align="left">{`${so2} µg/m³`}</TableCell>
                      <TableCell align="left">{`${no2} µg/m³`}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Box>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Paper>
    </Fade>
  )
}
export default AccordionElement
