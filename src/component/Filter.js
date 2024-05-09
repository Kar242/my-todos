import Button from '@mui/material/Button';

export const Filter = ({ handleFilterChange }) => {
    return (
        <div>
            <Button variant="contained" onClick={() => handleFilterChange('all')}>
                All
            </Button>
            <Button variant="contained" onClick={() => handleFilterChange('active')}>
                Active
            </Button>
            <Button variant="contained" onClick={() => handleFilterChange('completed')}>
                Completed
            </Button>
        </div>
    );
};