import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export const ListItems = ({ todo, setNewItem }) => {
    const { text, completed } = todo;

    const toggleCompleted = () => {
        setNewItem((prev) =>
            prev.map((item) => {
                if (item.text === text) {
                    return { ...item, completed: !completed };
                }
                return item;
            })
        );
    };

    return (
        <div>
            <FormControlLabel
                control={<Checkbox checked={completed} onChange={toggleCompleted} />}
                label= {<span style={{textDecoration: completed ?'line-through' : 'none'}}>{text}</span>}
            />
            
        </div>
    );
};