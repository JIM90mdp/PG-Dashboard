import { Datagrid, List, TextField, TextInput } from "react-admin";

const reviewFilters = [
  <TextInput source="productId" label="Search" alwaysOn />
]

export const ReviewList = () => (
  <List filters={reviewFilters} sort={{ field: "status", order: "ASC" }}>
    <Datagrid rowClick="edit" label="Editar" bulkActionButtons={false}>
      <TextField source="productId" label="Product" />
      <TextField source="userId" label="User" />
      <TextField source="message" label="Review" />
      <TextField source="stars" label="Stars" />
      <TextField source="status" label="Status" />
    </Datagrid>
  </List>
);
