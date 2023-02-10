import { Datagrid, List, TextField, TextInput, SelectInput } from 'react-admin';

const userFilters = [
    <TextInput source="userName" label="Buscar" alwaysOn />,
    <SelectInput source="status" label="Estado" choices={[
        { id:"Active", name:"Active"},
        { id:"Disabled", name:"Disabled"},
    ]} alwaysOn />,
    <SelectInput source="role" label="Rol" choices={[
        { id:"Admin", name:"Admin"},
        { id:"User", name:"User"},
    ]} alwaysOn />
];

export const UserList = () => (
    <List filters={userFilters} sort={{ field: 'userName', order: 'ASC' }}>
        <Datagrid rowClick="edit" label="Editar" bulkActionButtons={false}>
            <TextField source="userName" label="Nombre"/>
            <TextField source="role" label="Rol"/>
            <TextField source="status" label="Estado"/>
        </Datagrid>
    </List>
);
