import React from 'react';

type DisplayType = {
    count: number
    maxCount: number

}

export function Display(props: DisplayType) {
    const error = props.count === props.maxCount ? "error" : "display"

    return <div className={error}>{props.count}</div>

}

