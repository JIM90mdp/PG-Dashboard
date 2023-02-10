import {
    Datagrid,
    List,
    TextField,
    // TextInput,
    // SelectInput,
    ReferenceField,
    DateField,
    NumberField,
    // FunctionField,
    SelectInput,
    DateInput,
    ReferenceInput,
    AutocompleteInput
} from 'react-admin';

const orderFilters = [
    <SelectInput source="status" label="Status" choices={[
        { id: "Created", name: "Created" },
        { id: "Processing", name: "Processing" },
        { id: "Canceled", name: "Canceled" },
        { id: "Completed", name: "Completed" },
    ]} alwaysOn />,
    <ReferenceInput source="customerId" reference="customers">
        <AutocompleteInput filterToQuery={searchText => ({ name: searchText })} />
    </ReferenceInput>,
    <DateInput source="date_gte" label="Passed since" />,
    <DateInput source="date_lte" label="Passed before" />
];

export const OrderList = () => (
    <List filters={orderFilters} sort={{ field: 'orderDate', order: 'DESC' }}>
        <Datagrid rowClick="edit" bulkActionButtons={false}>
            <DateField source="orderDate" />
            <DateField source="shippingDate" />
            <ReferenceField source="customerId" reference="customers">
                <TextField source="name" />
            </ReferenceField>
            <NumberField source="totalAmount" />
            <TextField source="status" />
        </Datagrid>
    </List>
);
