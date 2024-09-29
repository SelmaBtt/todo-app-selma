import styles from './ErrMesage.module.css'

interface textProp {
    text: string;
}

// Error message component which can be used throughout the entire application
export default function ErrMesage({ text }: textProp) {
    return (
        <div className={styles.divContainer}>
            {text}
        </div>
    )
}