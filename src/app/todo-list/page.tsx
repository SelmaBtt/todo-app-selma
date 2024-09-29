"use client";
import Button from './buttons/AddButton'
import Input from './input/Input'
import TodoList from './list/TodoList';
import styles from './todo.module.css'

import { useState } from 'react'

export default function Todo() {

    const [inputValue, setInputValue] = useState('');
    const [listArr, setListArr] = useState([] as string[]);

    return (
        <div>
            <Input setInputValue={setInputValue} />
            <Button 
                inputValue={inputValue} setInputValue={setInputValue}
                listArr={listArr} setListArr={setListArr}
            />
            <TodoList listItems={listArr} />
        </div>
    )
}