import styles from './TodoList.module.css';

interface Props {
    listItems: string[];
    setListItems: (items: string[]) => void;
}

export default function TodoList({ listItems, setListItems }: Props) {

    const delHandler = (task: string) => {
        // Filter through the array to find matching array element to then delete said matching element
        const updatedList = listItems.filter(item => item !== task);
        setListItems(updatedList)
    }

    return (
        <div>
            {listItems && listItems.length > 0 ? (
                <ul className={styles.ulContianer}>
                    {listItems.map((task, idx) => (
                        <li key={idx} className={styles.listItem}>
                            {task}
                            <button className={styles.btn} onClick={() => delHandler(task)}>Done</button>
                        </li>
                    ))}
                </ul>
            ) : (
                // If no task har been added, user will se a response
                <p>No tasks to do currently</p>
            )}
        </div>
    );
}
