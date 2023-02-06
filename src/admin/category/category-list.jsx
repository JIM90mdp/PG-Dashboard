import { Datagrid, List, TextField, TextInput, SelectInput } from 'react-admin';

const categoryFilters = [
    <TextInput source="name" label="Search" alwaysOn />,
    <SelectInput source="status" label="Status" choices={[
        { id:"Active", name:"Active"},
        { id:"Disabled", name:"Disabled"}
    ]} alwaysOn />
];

export const CategoryList = () => (
    <List filters={categoryFilters} sort={{ field: 'name', order: 'ASC' }}>
        <Datagrid rowClick="edit" bulkActionButtons={false}>
            {/* <TextField source="id" /> */}
            <TextField source="name" />
            <TextField source="status" />
        </Datagrid>
    </List>
);
