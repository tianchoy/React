import React, { useEffect } from "react";
import useStore from "../Store/Store";

const Counts = () => {
    const state = useStore();
    const [count, setCount] = React.useState(state.count);

    // Subscribe to store changes and update local state
    useEffect(() => {
        const unsubscribe = useStore.subscribe((newState) => {
            setCount(newState.count);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return (
        <>
            <h1>this is {count}</h1>
            <button onClick={state.increment}>increment</button>
            <button onClick={state.decrement}>decrement</button>
        </>
    );
};

export default Counts;