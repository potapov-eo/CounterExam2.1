import React from 'react';

type ButtonComponentType = {
    id: number
    count?: number
    title: string
    changeCount: () => void
    dis: boolean

}

export function ButtonComponent(props: ButtonComponentType) {

    let classButton = props.dis ? "buttonDisabled" : "button"

    return <button className={classButton} disabled={props.dis} onClick={props.changeCount}>{props.title}</button>
}
