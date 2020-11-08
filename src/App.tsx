import React, {useState} from 'react';
import './App.css';

import Counter from "./Counter";
import SetValueForCounter from "./SetValueForCounter";

function App() {

    const [maxCount, setMaxCount] = useState<number>(10)
    const [minCount, setMinCount] = useState<number>(5)

    const [activeCounter, setActiveCounter] = useState<boolean>(true)
    const [disButtons, setDisButtons] = useState<boolean>(false)
    const [errorSetCount, setErrorSetCount] = useState<boolean>(false)
    const [showCounter, setShowCounter] = useState<boolean>(false)


    let changeCountInitState = (timeMaxCount: number, timeMinCount: number) => {
        setMaxCount(timeMaxCount)
        setMinCount(timeMinCount)
        setActiveCounter(true)
        setShowCounter(true)
    }
    let changActiveCounter = (x: boolean) => {
        setActiveCounter(x)
    }
    let changErrorSetCount = (x: boolean) => {
        setErrorSetCount(x)
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
            {showCounter?<Counter minCount={minCount}
                     maxCount={maxCount}
                     disButtons={disButtons}
                     activeCounter={activeCounter}
                     errorSetCount={errorSetCount}
                     changeShowCountInit={changeShowCountInit}/>

            :<SetValueForCounter minCount={minCount}
                                maxCount={maxCount}
                                changeCountInitState={changeCountInitState}
                                changActiveCounter={changActiveCounter}
                                changErrorSetCount={changErrorSetCount}
            />}
        </div>
    )
}

export default App;
