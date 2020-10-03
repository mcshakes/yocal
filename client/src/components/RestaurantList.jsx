import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const RestaurantList = (props) => {
    const classes = useStyles();

    return (
        <div className="list-group">
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <caption>A table list of all the restaurants in database</caption>
                    <TableHead>
                        <TableRow>
                            <TableCell scope="col">Name</TableCell>
                            <TableCell scope="col">Street Address</TableCell>
                            <TableCell scope="col">City</TableCell>
                            <TableCell scope="col">Zipcode</TableCell>
                            <TableCell scope="col">Price Range</TableCell>
                            <TableCell scope="col">Food Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.restaurants && props.restaurants.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell align="inherit" component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="inherit">{row.street_address}</TableCell>
                                <TableCell align="inherit">{row.city}</TableCell>
                                <TableCell align="inherit">{row.zipcode}</TableCell>
                                <TableCell align="inherit">{"$".repeat(row.price_range)}</TableCell>
                                <TableCell align="inherit">{row.food_type}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default RestaurantList;