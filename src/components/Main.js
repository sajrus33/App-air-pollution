import React from 'react';
import Typography from "@material-ui/core/Typography";
import AccordionElement from '../components/AccordionElement';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

/**custom Classes*/

const useStyles = makeStyles(theme => ({

    progress: {
        position: "fixed",
        left: "calc(50% - 20px)",
        top: "calc(50% + 80px)",
        color: "#4caf50"
    }
}));

/** Main > SearchInput + Accordion */

const Main = props => {
    const classes = useStyles();
    const createdElements = [];

    let preloader;
    preloader = props.showed ? "none" : "block";

    /** Create Accordion based on SearchInput value */
    const loadAccordion = () => {
        props.cities.forEach((city, i) => {
            const pm25 = props.cities[i][0];
            const pm10 = props.cities[i][1];
            const co = props.cities[i][2];
            const o3 = props.cities[i][3];
            const bc = props.cities[i][4];
            const so2 = props.cities[i][5];
            const no2 = props.cities[i][6];
            const cityName = props.cities[i][7];


            createdElements.push(
                <AccordionElement
                    classes={classes}
                    showed={props.showed}
                    key={i}
                    index={i}
                    cityName={cityName}
                    cityDescribe={`  
                        Latest air pollution measurement in ${props.country}.
                     `}
                     pm25={pm25}
                     pm10={pm10}
                     co={co}
                     o3={o3}
                     bc={bc}
                     so2={so2}
                     no2={no2}
                    />
            )
        })
    }
    loadAccordion();

    return (
        <React.Fragment>
            <Typography variant="h4" align="center" paragraph={true}>{props.country ? props.country : props.error}</Typography>
            <div>
                <CircularProgress style={{ display: preloader }} className={classes.progress} />
                {createdElements}
            </div>
        </React.Fragment>
    );
}
export default Main;

