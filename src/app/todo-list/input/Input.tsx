import styles from './Input.module.css';

interface InputProps {
    setInputValue: (value: string) => void;
}

export default function Input({ setInputValue }: InputProps) {
    return (
        <input 
            type="text" 
            placeholder='Enter task'
            onChange={(e) => setInputValue(e.target.value)} 
        />
    );
}
