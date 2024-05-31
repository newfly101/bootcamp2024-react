import React from 'react';

import Card from '../UI/Card';
import classes from './Home.module.css';
import NewsList from "../NewsList";

const Home = () => {
    return (
        <Card className={classes.home}>
            <NewsList />
        </Card>
    );
};

export default Home;