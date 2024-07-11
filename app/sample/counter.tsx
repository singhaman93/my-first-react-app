'use client'
import { useState } from "react";
import ActionButton from "./action-button";

export default function Counter({ initialCount }: { initialCount: number }) {
    const [count, setCount] = useState(initialCount);
    function increment() { setCount(count + 1); }
    function decrement() { setCount(count - 1); }
    return (
        <div>
            <h3>Count: {count}</h3>
            <ActionButton text='-1' onAction={decrement} />
            <ActionButton text='+1' onAction={increment} />
        </div>
    );
}