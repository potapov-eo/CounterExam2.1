import React, {useState} from 'react';
import './App.css';
import {ButtonComponent} from "./ButtonComponent";
import {Input} from "./Input";

type SetValueForCounterPropsType = {
    minCount: number
    maxCount: number
    changeCountInitState: (timeMaxCount: number, timeMinCount: number) => void
    changActiveCounter: (x: boolean) => void
    changErrorSetCount: (x: boolean) => void
}

function SetValueForCounter(props: SetValueForCounterPropsType) {
    const [timeMinValue, setTimeMinValue] = useState<number>(props.minCount)
    const [timeMaxValue, setTimeMaxValue] = useState<number>(props.maxCount)
    const [disSet, setDisSet] = useState<boolean>(true)
    const [errorInput, setErrorInput] = useState<boolean>(true)
    let changTimeMinValue = (newCount: number) => {
        props.changActiveCounter(false)
        if ((newCount < 0) || (newCount >= timeMaxValue)) {
            props.changErrorSetCount(true)
            setDisSet(false)
            setErrorInput(false)
        } else {
            props.changErrorSetCount(false)
            setDisSet(true)
            setErrorInput(true)
        }
        setTimeMinValue(newCount)
    }
    let changTimeMaxValue = (newCount: number) => {
        props.changActiveCounter(false)
        setTimeMaxValue(newCount)
        if (newCount <= timeMinValue) {
            props.changErrorSetCount(true)
            setDisSet(false)
            setErrorInput(false)
        } else {
            props.changErrorSetCount(false)
            setDisSet(true)
            setErrorInput(true)
        }
    }
    const changeCountInit = () => {
        props.changeCountInitState(timeMaxValue, timeMinValue)
        setDisSet(false)
    }
    return (
        <div className="App">
            <div className="Counter">
                <div className="display2">
                    <div className="input-field">
                        <span>min value</span>
                        <span>
                                <Input errorInput={errorInput}
                                       changTimeMinValue={changTimeMinValue}
                                       value={timeMinValue}/>
                            </span>
                    </div>
                    <div>
                        <span>max value</span>
                        <span>
                                <Input errorInput={errorInput}
                                       changTimeMinValue={changTimeMaxValue}
                                       value={timeMaxValue}/>
                            </span>
                    </div>

                </div>
                <div className="displayButton">
                    <ButtonComponent
                        dis={true}
                        id={3}
                        title={"SET"}
                        changeCount={changeCountInit}

                    />

                </div>
            </div>

        </div>
    );
}

export default SetValueForCounter;
