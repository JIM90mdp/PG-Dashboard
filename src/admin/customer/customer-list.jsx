import {
    Datagrid,
    List,
    TextField,
    TextInput,
    SelectInput,
    ReferenceField,
    DateField,
    NumberField,
    EmailField,
    FunctionField
} from 'react-admin';

const customerFilters = [
    <TextInput source="name" label="Search" alwaysOn />,
    <SelectInput source="status" label="Status" choices={[
        { id: "Active", name: "Active" },
        { id: "Disabled", name: "Disabled" }
    ]} alwaysOn />
];

export const CustomerList = () => (
    <List filters={customerFilters}>
        <Datagrid rowClick="edit" bulkActionButtons={false}>
            <TextField source="name" />
            <ReferenceField source="userId" reference="users">
                <TextField source="id" />
            </ ReferenceField>
            <TextField source="address" />
            <TextField source="city" />
            <TextField source="state" />
            <NumberField  source="zip" />
            <EmailField source="email" />
            <NumberField  source="telephone" />
            <NumberField  source="document" />
            <DateField  source="birthDate" />
            <TextField source="status" />
        </Datagrid>
    </List>
);
