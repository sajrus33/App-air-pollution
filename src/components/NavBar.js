import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import { makeStyles } from '@material-ui/core/styles';
import SearchInput from '../components/SearchInput';


/** custom Classes */

const useStyles = makeStyles(theme => ({
    bar: {
        backgroundColor: "#4caf50",
        paddingTop: 15,
        marginBottom: 15,
        position: "sticky"
    },
    h1: {
        fontSize: "2.5em",
        fontWeight: 600,
        color: "#000",
        marginRight: "auto"
    },
    barBtn: {
        fontSize: "26"
    },
    barIco: {
        color: "#4caf50",
        fontSize: 32
    }
}));

/** Navigation Bar */

const NavBar = props => {
    const classes = useStyles();

    /** Click handler for NavBar > Button */

    const handleNavBtn = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (

        <AppBar className={classes.bar} >
            <ToolBar>
                <Typography variant="h1" className={classes.h1}>
                    High air pollution !
                </Typography>
                <IconButton aria-label="Scroll up" onClick={handleNavBtn} className={classes.barBtn} style={{ backgroundColor: "black" }}>
                    <ArrowUpward className={classes.barIco} />
                </IconButton>
            </ToolBar>
            <SearchInput onChangeSearch={props.onChangeSearch} />

        </AppBar>

    )
}
export default NavBar;
