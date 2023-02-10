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
  FunctionField,
  SimpleList,
} from "react-admin";
import { useMediaQuery } from "@mui/material";

export const CustomerList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const customerFilters = [
    <TextInput source="name" label="Search" alwaysOn />,
    <SelectInput
      source="status"
      label="Status"
      choices={[
        { id: "Active", name: "Active" },
        { id: "Disabled", name: "Disabled" },
      ]}
      alwaysOn
    />,
  ];
  return (
    <List filters={customerFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(customer) => customer.name}
          secondaryText={(customer) => customer.telephone}
          tertiaryText={(customer) => customer.email}
        />
      ) : (
        <Datagrid rowClick="edit" bulkActionButtons={false}>
          <TextField source="name" />
          <ReferenceField source="userId" reference="users">
            <TextField source="id" />
          </ReferenceField>
          <TextField source="address" lebel="Direcciòn" />
          <TextField source="city" lebel="Ciudad" />
          <TextField source="state" lebel="Provincia" />
          <NumberField source="zip" lebel="Código Postal" />
          <EmailField source="email" lebel="Email" />
          <NumberField source="telephone" lebel="Teléfono" />
          <NumberField source="document" lebel="Documento" />
          <DateField source="birthDate" lebel="Fecha de nacimiento" />
          <TextField source="status" lebel="Estado" />
        </Datagrid>
      )}
    </List>
  );
};
