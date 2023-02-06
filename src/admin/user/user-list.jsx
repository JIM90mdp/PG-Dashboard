import { Datagrid, List, TextField, TextInput, SelectInput } from 'react-admin';

const userFilters = [
    <TextInput source="userName" label="Search" alwaysOn />,
    <SelectInput source="status" label="Status" choices={[
        { id:"Active", name:"Active"},
        { id:"Disabled", name:"Disabled"},
        { role:"User", name:"User"},
        { role:"Admin", name:"Admin"},
    ]} alwaysOn />
];

export const UserList = () => (
    <List filters={userFilters}>
        <Datagrid rowClick="edit" bulkActionButtons={false}>
            <TextField source="userName" />
            <TextField source="role" />
            <TextField source="password" />
            <TextField source="status" />
        </Datagrid>
    </List>
);