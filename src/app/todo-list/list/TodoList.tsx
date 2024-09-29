import styles from './TodoList.module.css';

interface Props {
    listItems: string[];
}

export default function TodoList({ listItems }: Props) {
    return (
        <div>
            {listItems && listItems.length > 0 ? (
                <ul>
                    {listItems.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>No tasks to do currently</p>
            )}
        </div>
    );
}
