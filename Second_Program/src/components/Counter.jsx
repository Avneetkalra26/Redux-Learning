import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increaseCounter, decreaseCounter, incrementOdd, addAmount, incrementAsync } from "../features/countSlice";
import img from '../assets/image.png';

export default function Counter() {
    const [inputValue, setInputValue] = useState(0); // Initialize input value state

    const count = useSelector((state) => state.count.countValue);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increaseCounter());
    };

    const handleDecrement = () => {
        dispatch(decreaseCounter());
    };

    const handleOddIncrement = () => {
        dispatch(incrementOdd(parseInt(inputValue)));
    };

    const handleAddAmount = () => {
        dispatch(addAmount(parseInt(inputValue))); // Dispatch addAmount action with parsed integer value
    };

    const handleAddAsync = () => {
        dispatch(incrementAsync(parseInt(inputValue))); // Dispatch incrementAsync action with parsed integer value
    };

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='mb-12'>
                <img src={img} alt="" className='w-36 h-36 animate-spin'/>
            </div>
            <div className='space-x-10 mb-4'>
                <button type="button" onClick={handleDecrement} className='px-4 py-1 bg-gray-200 font-bold text-xl text-purple-600 rounded-sm'>-</button>
                <span className='font-semibold text-3xl'>{count}</span>
                <button type="button" onClick={handleIncrement} className='px-4 py-1 bg-gray-200 font-bold text-xl text-purple-600 rounded-sm'>+</button>
            </div>
            <div className='space-x-10 mt-4'>
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className='text-center w-20 px-2 py-1.5 outline-none border-2 border-gray-400 font-bold text-xl text-purple-600 rounded-sm'
                />
                <button type="button" onClick={handleAddAmount} className='px-4 py-2 bg-gray-200 font-bold text-xl text-purple-600 rounded-sm'>Add Amount</button>

                <button type="button" onClick={handleAddAsync} className='px-4 py-2 bg-gray-200 font-bold text-xl text-purple-600 rounded-sm'>Add Async</button>
                <button type="button" onClick={handleOddIncrement} className='px-4 py-2 bg-gray-200 font-bold text-xl text-purple-600 rounded-sm'>Add If Odd</button>
            </div>
        </div>
    );
}
