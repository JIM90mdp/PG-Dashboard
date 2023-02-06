import {
    Datagrid,
    List,
    TextField,
    TextInput,
    SelectInput,
    ReferenceField,
    DateField,
    NumberField,
    FunctionField
} from 'react-admin';

const productFilters = [
    <TextInput source="name" label="Search" alwaysOn />,
    <SelectInput source="status" label="Status" choices={[
        { id: "Active", name: "Active" },
        { id: "Disabled", name: "Disabled" }
    ]} alwaysOn />
];

export const ProductList = () => (
    <List filters={productFilters} sort={{ field: 'startDate', order: 'DESC' }}>
        <Datagrid rowClick="edit" bulkActionButtons={false}>
            <TextField source="name" />
            <ReferenceField source="locationId" reference="locations">
                <TextField source="name" />
            </ ReferenceField>
            <ReferenceField source="artistId" reference="artists">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="startDate" locales="es-AR" />
            <DateField source="endDate" locales="es-AR" />
            <FunctionField source="startTime" label="Time" render={record => {
                if (!record.startTime) {
                    return '';
                }

                const timeTokens = record.startTime.split(':');
                return `${timeTokens[0]}:${timeTokens[1]}`;
            }} />
            <NumberField source="stock" />
            <NumberField source="price" />
            <TextField source="status" />
        </Datagrid>
    </List>
);
