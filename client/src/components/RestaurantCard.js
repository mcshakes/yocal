import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


const RestaurantCard = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    let util = <div><h1>NOTHING</h1></div>;
    console.log(props.data.data)
    if (props.data.data && props.data.data.data) {
        util = (
            <CardContent>
                <Typography variant="body2" component="h4">
                    {props.data.data.data.review_count}
                </Typography>
            </CardContent>
        )
    }

    return (

        <div>
            <Card className={classes.root}>
                {
                    props.initial &&
                    <CardHeader
                        title={props.initial.name}
                        subheader={props.initial.street_address + ", " + props.initial.city}
                    />
                }
                {util}

            </Card>
        </div>
    )
}

export default RestaurantCard;