import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';
import { ListItems } from './ListItems';
import { Filter } from './Filter';

export const TodoList = () => {
    const [item, setItem] = useState('');
    const [newItem, setNewItem] = useState([]);
    const [filter, setFilter] = useState('all');

    
    useEffect(() => {
        const savedItems = localStorage.getItem('todoItems');
        if (savedItems) {
            setNewItem(JSON.parse(savedItems));
        }
    }, []);

    
    useEffect(() => {
        localStorage.setItem('todoItems', JSON.stringify(newItem));
    }, [newItem]);

    const itemEvent = (e) => {
        setItem(e.target.value);
    };

    const listOfItems = () => {
        setNewItem((prev) => [...prev, { text: item, completed: false }]);
        setItem('');
    };

    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    return (
        <div>
            <h1>TODO LIST</h1>

            <input type="text" placeholder="Add an item" onChange={itemEvent} value={item} />
            <Button onClick={listOfItems}>
                <AddIcon />
            </Button>

            <Filter handleFilterChange={handleFilterChange} />

            <ol>
                {newItem
                    .filter((todo) => {
                        if (filter === 'completed') return todo.completed;
                        if (filter === 'active') return !todo.completed;
                        return true;
                    })
                    .map((todo, index) => (
                        <ListItems key={index} todo={todo} setNewItem={setNewItem} />
                    ))}
            </ol>
        </div>
    );
};
