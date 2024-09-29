import styles from './TodoList.module.css';

interface Props {
    listItems: string[];
    setListItems: (items: string[]) => void;
}

export default function TodoList({ listItems, setListItems }: Props) {

    const delHandler = (task: string) => {
        const updatedList = listItems.filter(item => item !== task);
        setListItems(updatedList)
    }

    return (
        <div>
            {listItems && listItems.length > 0 ? (
                <ul>
                    {listItems.map((task, idx) => (
                        <li key={idx}>
                            {task}
                            <button onClick={() => delHandler(task)}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tasks to do currently</p>
            )}
        </div>
    );
}
