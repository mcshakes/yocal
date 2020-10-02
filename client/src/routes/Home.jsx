import React, { useState } from "react";
import AddModal from "../components/AddModal";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Home = () => {
    const classes = useStyles();

    // const [addFormStatus, changeAddForm] = useState(false);

    // const handleRestaurantForm = () => {
    //     changeAddForm(true);
    // }

    return (
        <div>
            <div className="header">
                HOME!
            </div>
            <AddModal />
            <div className="list">
                WHERE LIST WILL bE!
            </div>

        </div>
    )
}

export default Home; 