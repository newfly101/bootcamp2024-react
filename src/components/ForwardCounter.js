import { useState, useEffect } from 'react';
import Card from './UI/Card';
import useCounter from "../hooks/useCounter";


const ForwardCounter = () => {
    const counter = useCounter(true);
    // console.log(counter);

    return <Card>{counter}</Card>
};

export default ForwardCounter;