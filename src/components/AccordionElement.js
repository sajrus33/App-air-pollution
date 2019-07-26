import React from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        overflowX: 'hidden',

    },
    panelSummary: {
        fontWeight: 700,
    },
    heading: {
        fontSize: theme.typography.pxToRem(17),
        fontWeight: 600,
    },
    table: {
        minwidth:"650",
        overflowX: 'auto',

    },
}));

/** Single Accordion Element */

const AccordionElement = props => {
    const classes = useStyles();
    return (

        <Fade in={props.showed} timeout={400}>
            <Paper className={classes.root}>
                <ExpansionPanel className={classes.panelExpansion} >
                    <ExpansionPanelSummary className={classes.panelSummary}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={"panel" + props.index + "a-content"}
                        id={"panel" + props.index + "a-header"}>
                        <Typography variant="h2" className={classes.heading}> {props.cityName}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <Box display="flex" flexDirection="column" style={{ overflowX: "auto" }}>
                            <Typography style={{ marginBottom: "15px" }}>
                                {props.cityDescribe}
                            </Typography>
                            <Box display="flex" flexDirection="column" style={{ overflowX: "auto" }}>
                                <Table className={classes.table} >
                                    <TableHead >
                                        <TableRow >
                                            <TableCell align="left">PM25</TableCell>
                                            <TableCell align="left">PM10</TableCell>
                                            <TableCell align="left">CO</TableCell>
                                            <TableCell align="left">O3</TableCell>
                                            <TableCell align="left">BC</TableCell>
                                            <TableCell align="left">SO2</TableCell>
                                            <TableCell align="left">NO2</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        <TableRow key={"row"}>
                                            <TableCell align="left">{props.pm25} µg/m³</TableCell>
                                            <TableCell align="left">{props.pm10} µg/m³</TableCell>
                                            <TableCell align="left">{props.co} µg/m³</TableCell>
                                            <TableCell align="left">{props.o3} µg/m³</TableCell>
                                            <TableCell align="left">{props.bc} µg/m³</TableCell>
                                            <TableCell align="left">{props.so2} µg/m³</TableCell>
                                            <TableCell align="left">{props.no2} µg/m³</TableCell>
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
export default AccordionElement;
