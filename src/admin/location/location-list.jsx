import { Datagrid, List, TextField, TextInput, SelectInput } from 'react-admin';

const locationFilters = [
    <TextInput source="name" label="Search" alwaysOn />,
    <SelectInput source="status" label="Status" choices={[
        { id:"Active", name:"Active"},
        { id:"Disabled", name:"Disabled"}
    ]} alwaysOn />
];

export const LocationList = () => (
    <List filters={locationFilters}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="address" />
            <TextField source="coordinates" />
            <TextField source="status" />
        </Datagrid>
    </List>
);
