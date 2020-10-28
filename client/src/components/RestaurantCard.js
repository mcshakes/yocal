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
                {props.data.data.data &&
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.data.data.data.rating}
                        </Typography>
                    </CardContent>
                }

            </Card>
        </div>
    )
}

export default RestaurantCard;