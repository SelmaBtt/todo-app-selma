import ErrMesage from '../error_messages/ErrMessage';
import styles from './AddButton.module.css'
import { useState } from 'react';

interface Props {
    inputValue: string;
    setInputValue: (value: string) => void;
    listArr: string[];
    setListArr: (value: string[]) => void;
}

export default function Button({ inputValue, setInputValue, listArr, setListArr }: Props) {

    const [isValueFilled, setIsValueFilled] = useState(false)

    const addTaskHandler = () => {
        if (inputValue.length > 0){
            setListArr([...listArr, inputValue]);
        } else {
            setIsValueFilled(true)
            setTimeout(() => {
                setIsValueFilled(false)
            }, 3000)
        }
        setInputValue('');
    }

    return (
        <>
            <button onClick={() => addTaskHandler()}>
                Add
            </button>
            {isValueFilled && <ErrMesage text='Must write down a task to add' />}
        </>
    )
}