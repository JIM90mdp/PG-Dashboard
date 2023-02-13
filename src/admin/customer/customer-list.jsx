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
  SimpleList,
} from "react-admin";
import { useMediaQuery } from "@mui/material";

export const CustomerList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const customerFilters = [
    <TextInput source="name" label="Buscar" alwaysOn />,
    <SelectInput
      source="status"
      label="Estado"
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
          secondaryText={(customer) => customer.status}
          tertiaryText={(customer) => customer.email}
        />
      ) : (
        <Datagrid rowClick="edit" bulkActionButtons={false}>
          <TextField source="name" label="Nombre"/>
          <ReferenceField source="userId" label="Usuario" reference="users">
            <TextField source="userName" />
          </ReferenceField>
          <TextField source="address" label="Dirección" />
          <TextField source="city" label="Ciudad" />
          <TextField source="state" label="Provincia" />
          <NumberField source="zip" label="Código Postal" />
          <EmailField source="email" label="Email" />
          <TextField source="telephone" label="Teléfono" />
          <TextField source="document" label="Documento" />
          <DateField source="birthDate" label="Fecha de nacimiento" />
          <TextField source="status" label="Estado" />
        </Datagrid>
      )}
    </List>
  );
};
