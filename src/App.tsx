import React, {useState} from 'react';
import './App.css';

import Counter from "./Counter";
import SetValueForCounter from "./SetValueForCounter";

function App() {

    const [maxCount, setMaxCount] = useState<number>(10)
    const [minCount, setMinCount] = useState<number>(5)
    const [showCounter, setShowCounter] = useState<boolean>(false)

    let changeCountInitState = (timeMaxCount: number, timeMinCount: number) => {
        setMaxCount(timeMaxCount)
        setMinCount(timeMinCount)
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
