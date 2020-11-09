import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import clsx from 'clsx';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CardActions, Typography } from "@material-ui/core";
import Collapse from '@material-ui/core/Collapse';
import { dateConverter } from "../utilities/date";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "42rem",
        minWidth: "42rem",
        backgroundColor: "#222831",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "rgba(0, 0, 0, 0.7)",
        color: "white"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        boxShadow: "inset 0 0 0 4px #58cdd1",
        color: "#58afd1",
        webkitTransition: "color 0.25s 0.0833333333s",
        transition: "color 0.25s 0.0833333333s",
        position: "relative",
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        "&::before": {
            borderBottomWidth: "4px",
            borderLeftWidth: "4px"
        },
        "&::after": {
            borderBottomWidth: "4px",
            borderLeftWidth: "4px"
        },
        "&:hover": {
            color: "#ffe593"
        }
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    review: {
        display: "flex",
        flexDirection: "column"
    }
}));


const RestaurantCard = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    let yelpData = <div><h1>Loading...</h1></div>;



    if (props.data.data && props.data.data.data) {
        yelpData = (
            <>
                <CardContent>
                    <Typography variant="body2" component="h4">
                        Price: {props.data.data.data.price}
                    </Typography>
                    <Typography variant="body2" component="h4">
                        Review Count: {props.data.data.data.review_count}
                    </Typography>
                    <Typography variant="body2" component="h4">
                        Average Rating: {props.data.data.data.rating}
                    </Typography>
                </CardContent>

                <CardActions>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="h5">Recent Reviews:</Typography>
                        {props.data.data.data.reviews.map((review, idx) => (
                            <div key={idx} className={classes.review}>
                                <Typography>
                                    stars: {review.rating}
                                </Typography>
                                <Typography>
                                    date created: {dateConverter(review.time_created)}
                                </Typography>
                                <Typography paragraph>
                                    {review.text}
                                </Typography>
                            </div>
                        ))}
                    </CardContent>
                </Collapse>
            </>
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
                {yelpData}

            </Card>
        </div>
    )
}

export default RestaurantCard;