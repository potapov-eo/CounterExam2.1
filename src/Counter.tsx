import React, {useState} from 'react';
import './App.css';
import {ButtonComponent} from "./ButtonComponent";
import {Display} from "./Display";

type CounterPropsType = {
    minCount: number
    maxCount: number
    changeShowCountInit: (x: boolean) => void

}

function Counter(props: CounterPropsType) {
    let [count, setCount] = useState<number>(props.minCount)
    let disInt = (count === props.maxCount)
    let disReset = (count === props.minCount)
    let changeCount = () => {
        if (count < props.maxCount) {
            setCount(count + 1)
        }

    }
    if (count < props.minCount) {
        setCount(props.minCount)
    }
    let resetCount = () => setCount(props.minCount)
    let changeShowCountInit = () => props.changeShowCountInit(false)


    return (
        <div>
            <div className="App">

                <div className="Counter">
                    <div className="Display">
                        <Display count={count} maxCount={props.maxCount}/>

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
                            dis={false}
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
