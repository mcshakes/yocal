import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const PriceRange = (props) => {
    const classes = useStyles();
    const [price, setPrice] = useState("");

    const handleChange = (event) => {
        setPrice(event.target.value);
        props.onSetPrice(event.target.value)
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="price-selection-label">Price Range</InputLabel>
                <Select
                    id="price-selection"
                    labelId="price-selection-label"
                    value={price}
                    onChange={handleChange}
                >
                    <MenuItem value="1">$</MenuItem>
                    <MenuItem value="2">$$</MenuItem>
                    <MenuItem value="3">$$$</MenuItem>
                    <MenuItem value="4">$$$$</MenuItem>
                    <MenuItem value="5">$$$$$</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default PriceRange;