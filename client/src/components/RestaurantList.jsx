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
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Street Address</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Zipcode</TableCell>
                            <TableCell>Price Range</TableCell>
                            <TableCell>Food Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.restaurants.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align="inherit">{row.name}</TableCell>
                                <TableCell align="inherit">{row.street_address}</TableCell>
                                <TableCell align="inherit">{row.city}</TableCell>
                                <TableCell align="inherit">{row.zipcode}</TableCell>
                                <TableCell align="inherit">{row.price_range}</TableCell>
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