import { Toolbar, SaveButton } from 'react-admin';

// Custom toolbar without <DeleteButton>
export const CustomToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />
    </Toolbar>
);
