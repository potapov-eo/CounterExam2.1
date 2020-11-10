import React, {useState} from 'react';
import './App.css';

import Counter from "./Counter";
import SetValueForCounter from "./SetValueForCounter";

function App() {
    let min = Number(localStorage.getItem("minCount")) ?
        Number(localStorage.getItem("minCount"))
        : 5
    let max = Number(localStorage.getItem("maxCount")) ?
        Number(localStorage.getItem("maxCount"))
        : 10

    const [maxCount, setMaxCount] = useState<number>(max)
    const [minCount, setMinCount] = useState<number>(min)
    const [showCounter, setShowCounter] = useState<boolean>(false)

    let changeCountInitState = (timeMaxCount: number, timeMinCount: number) => {
        setMaxCount(timeMaxCount)
        localStorage.setItem("maxCount", timeMaxCount.toString())
        setMinCount(timeMinCount)
        localStorage.setItem("minCount", timeMinCount.toString())
        setShowCounter(true)
    }
    let changeShowCountInit = (x: boolean) => {
        setShowCounter(x)
    }
    return (
        <div>
            <div>
                current minValue = {minCount}
            </div>
            <div>
                current maxValue = {maxCount}
            </div>
            {showCounter ? <Counter minCount={minCount}
                                    maxCount={maxCount}
                                    changeShowCountInit={changeShowCountInit}/>

                : <SetValueForCounter minCount={minCount}
                                      maxCount={maxCount}
                                      changeCountInitState={changeCountInitState}

                />}
        </div>
    )
}
export default App;
