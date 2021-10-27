import React from 'react';
import useCounter from "../../hooks/useCounter";
import CounterButtons from "./CounterButtons";

const CountContainer = () => {

    const{num, change} = useCounter()

    return (
        <div>
            <h1>{num}</h1>
            <CounterButtons></CounterButtons>
        </div>
    );
};

export default CountContainer;