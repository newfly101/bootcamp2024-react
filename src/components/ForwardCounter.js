import Card from './UI/Card';
import useCounter from "../hooks/useCounter";

const ForwardCounter = () => {
    const counter = useCounter(true);

    return <Card>{counter}</Card>
};

export default ForwardCounter;