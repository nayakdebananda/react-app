import React, { useState } from 'react';

function App() {
    var [count, setCount] = useState(function () {
        return 0;
    });

    function increase() {

        setCount(function (prevCount) {
            return prevCount + 1;
        });
    }
    function decrease() {
        setCount(count - 1);
    }
    return <div>
        <button onClick={increase}>+</button>
        <h1>{count}</h1>
        <button onClick={decrease}>-</button>
    </div>;
}

export default App;
