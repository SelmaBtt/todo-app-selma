import styles from './Input.module.css';

interface InputProps {
    inputValue: string;
    setInputValue: (value: string) => void;
}

export default function Input({ inputValue, setInputValue }: InputProps) {
    return (
        <input 
            className={styles.input}
            type="text" 
            placeholder='Enter task'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} 
        />
    );
}
