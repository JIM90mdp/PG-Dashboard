import { Datagrid, List, TextField, TextInput, SelectInput, ReferenceField } from 'react-admin';

const artistFilters = [
    <TextInput source="name" label="Search" alwaysOn />,
    <SelectInput source="status" label="Status" choices={[
        { id: "Active", name: "Active" },
        { id: "Disabled", name: "Disabled" }
    ]} alwaysOn />
];

export const ArtistList = () => (
    <List filters={artistFilters} sort={{ field: 'name', order: 'ASC' }}>
        <Datagrid rowClick="edit" bulkActionButtons={false}>
            <TextField source="name" />
            <ReferenceField source="groupId" reference="artists">
                <TextField source="name" />
            </ ReferenceField>
            <TextField source="status" />
        </Datagrid>
    </List>
);
