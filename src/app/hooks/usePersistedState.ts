import { useState, useEffect } from 'react';

const usePersistedState = <T>(value: any, key: string): [T, React.Dispatch<React.SetStateAction<T>>] => {
    let currentValue;
    try {
        currentValue = JSON.parse(window.localStorage.getItem(key) as string) ?? value;

    }
    catch (err) {
        currentValue = value;
    }

    const [val, setVal] = useState<T>(currentValue);

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(val));
    }, [val, key])


    return [val, setVal];
}

export default usePersistedState;