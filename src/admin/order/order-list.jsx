import {
    Datagrid,
    List,
    TextField,
    // TextInput,
    // SelectInput,
    ReferenceField,
    DateField,
    NumberField,
    // FunctionField
} from 'react-admin';

export const OrderList = () => (
    <List sort={{ field: 'orderDate', order: 'DESC' }}>
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
