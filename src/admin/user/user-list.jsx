import { Datagrid, List, TextField, TextInput, SelectInput } from 'react-admin';

const userFilters = [
    <TextInput source="userName" label="Search" alwaysOn />,
    <SelectInput source="status" label="Status" choices={[
        { id:"Active", name:"Active"},
        { id:"Disabled", name:"Disabled"},
    ]} alwaysOn />,
    <SelectInput source="role" label="Role" choices={[
        { id:"Admin", name:"Admin"},
        { id:"User", name:"User"},
    ]} alwaysOn />
];

export const UserList = () => (
    <List filters={userFilters} sort={{ field: 'userName', order: 'ASC' }}>
        <Datagrid rowClick="edit" bulkActionButtons={false}>
            <TextField source="userName" />
            <TextField source="role" />
            <TextField source="status" />
        </Datagrid>
    </List>
);
