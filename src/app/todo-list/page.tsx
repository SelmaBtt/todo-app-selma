"use client";
import Button from './add-task-button/AddButton'
import Input from './input/Input'
import TodoList from './list/TodoList';
import styles from './Todo.module.css'

import { useState } from 'react'

export default function Todo() {

    // States for adding and deleting tasks passed through different comps for readability 
    const [inputValue, setInputValue] = useState('');
    const [listArr, setListArr] = useState([] as string[]);

    return (
        <div className={styles.container}>
            <div className={styles.addTaskContainer}>
                {/* Input field for users to write down a task */}
                <Input inputValue={inputValue} setInputValue={setInputValue} />
                {/* Button handles adding the tasks to an array (listArr) */}
                <Button 
                    inputValue={inputValue} setInputValue={setInputValue}
                    listArr={listArr} setListArr={setListArr}
                />
            </div>
            {/* Comp that displays all your tasks (display listArr) */}
            <TodoList listItems={listArr} setListItems={setListArr} />
        </div>
    )
}