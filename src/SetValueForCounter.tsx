import React, {useState} from 'react';
import './App.css';
import {ButtonComponent} from "./ButtonComponent";
import {Input} from "./Input";

type SetValueForCounterPropsType = {
    minCount: number
    maxCount: number
    changeCountInitState: (timeMaxCount: number, timeMinCount: number) => void

}

function SetValueForCounter(props: SetValueForCounterPropsType) {
    const [timeMinValue, setTimeMinValue] = useState<number>(props.minCount)
    const [timeMaxValue, setTimeMaxValue] = useState<number>(props.maxCount)
    const [errorInput, setErrorInput] = useState<boolean>(true)
    const [disSet, setDisSet] = useState<boolean>(false)
    let changTimeMinValue = (newCount: number) => {
        if ((newCount < 0) || (newCount >= timeMaxValue)) {
            setErrorInput(false)
            setDisSet(true)
        } else {
            setErrorInput(true)
            setDisSet(false)
        }
        setTimeMinValue(newCount)
    }
    let changTimeMaxValue = (newCount: number) => {
        setTimeMaxValue(newCount)
        if (newCount <= timeMinValue) {
            setErrorInput(false)
            setDisSet(true)
        } else {
            setErrorInput(true)
            setDisSet(false)
        }
    }
    const changeCountInit = () => {
        props.changeCountInitState(timeMaxValue, timeMinValue)
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
                        dis={disSet}
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
