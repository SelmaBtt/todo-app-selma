import styles from './ErrMesage.module.css'

interface textProp {
    text: string;
}

export default function ErrMesage({ text }: textProp) {
    return (
        <div>
            {text}
        </div>
    )
}