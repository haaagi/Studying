import React, { Component } from 'react';

const Button = () => {
    return (
        <div>
            <button onClick={onDecrement}>PREV</button>
            <button onClick={onIncrement}>NEXT</button>
        </div>
    );
}