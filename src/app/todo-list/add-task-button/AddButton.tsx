import ErrMesage from '../../error_message/ErrMessage';
import styles from './AddButton.module.css'
import { useState } from 'react';

interface Props {
    inputValue: string;
    setInputValue: (value: string) => void;
    listArr: string[];
    setListArr: (value: string[]) => void;
}

export default function Button({ inputValue, setInputValue, listArr, setListArr }: Props) {

    // State to display error message
    const [isValueFilled, setIsValueFilled] = useState(false)

    const addTaskHandler = () => {
        // If state for handling weither the input value is empty
        if (inputValue.length > 0){
            setListArr([inputValue, ...listArr]);
            setInputValue('');
        } else {
            setIsValueFilled(true)
            setTimeout(() => {
                setIsValueFilled(false)
            }, 2500)
        }
    }

    return (
        <>
            <button className={styles.btn} onClick={() => addTaskHandler()}>
                Add
            </button>
            {/* Error message displayed if user tries to add in an empty task */}
            {isValueFilled && <ErrMesage text='Must write down a task to add' />}
        </>
    )
}