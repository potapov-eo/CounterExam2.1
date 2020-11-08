import React, {useState} from 'react';
import './App.css';
import {ButtonComponent} from "./ButtonComponent";
import {Display} from "./Display";

type CounterPropsType = {
    minCount: number
    maxCount: number
    disButtons: boolean
    activeCounter: boolean
    errorSetCount: boolean
    changeShowCountInit:(x:boolean)=>void

}

function Counter(props: CounterPropsType) {
    let [count, setCount] = useState<number>(props.minCount)
    let disInt = (count === props.maxCount)  || !props.activeCounter
    let disReset = (count === props.minCount) || !props.activeCounter
    let changeCount = () => {
        if (count < props.maxCount) {
            setCount(count + 1)
        }

    }
    if (count < props.minCount) {
        setCount(props.minCount)
    }
    let resetCount = () => setCount(props.minCount)
    let  changeShowCountInit=()=>props.changeShowCountInit(false)


    return (
        <div>
            <div className="App">

                <div className="Counter">
                    <div className="Display">
                        {props.errorSetCount ?
                            <div className="error">Incorrect value</div>
                            : props.activeCounter ? <Display
                                    count={count} maxCount={props.maxCount}/>
                                : <div className="display2">Enter values and pres SET</div>}
                    </div>
                    <div className="displayButton">
                        <ButtonComponent
                            dis={disInt}
                            id={1}
                            count={count}
                            title={"INT"}
                            changeCount={changeCount}

                        />
                        <ButtonComponent
                            id={2}
                            count={count}
                            title={"RESET"}
                            changeCount={resetCount}
                            dis={disReset}

                        />

                        <ButtonComponent
                            dis={true}
                            id={3}
                            title={"SET"}
                            changeCount={changeShowCountInit}

                        />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Counter;
