import Card from './UI/Card';
import useCounter from "../hooks/useCounter";


const BackwardCounter = () => {
    const counter = useCounter(false);

    return <Card>{counter}</Card>
};

export default BackwardCounter;