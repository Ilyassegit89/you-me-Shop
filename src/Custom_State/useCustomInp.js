import React, { useEffect, useState } from "react";

function getSavedValue(key, initialValue){
    const savedValue = JSON.parse(localStorage.getItem(key));
    if(savedValue) return savedValue;
    if(initialValue instanceof Function) return initialValue();
    return initialValue; 
}
export default function useCustomInp(key, initialValue){
    const[inputVal, setInputVal] = useState(() => {
        return getSavedValue(key, initialValue)
    });

    useEffect(() =>{
        localStorage.setItem(key, JSON.stringify(inputVal))
    }, [inputVal])

    return [inputVal, setInputVal]
}