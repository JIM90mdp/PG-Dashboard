import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  required,
  ReferenceInput,
  DateInput,
  NumberInput,
} from "react-admin";
import { Box } from "@mui/material";
import { CustomToolbar } from "../custom-toolbar";

export const CustomerEdit = () => (
  <Edit>
    <SimpleForm toolbar={<CustomToolbar />}>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={2} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="name" label="Nombre" validate={required()} fullWidth />
        </Box>
        <Box flex={2} ml={{ xs: 0, sm: "0.5em" }}>
          <ReferenceInput source="userId" label="Usuario" reference="users">
            <SelectInput validate={required()} fullWidth />
          </ReferenceInput>
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <SelectInput
            source="status"
            label="Estado"
            optionValue="name"
            defaultValue={"Active"}
            choices={[
              { id: "Active", name: "Active" },
              { id: "Disabled", name: "Disabled" },
            ]}
            validate={required()}
            fullWidth
          />
        </Box>
      </Box>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <TextInput
            source="address"
            label="Dirección"
            validate={required()}
            fullWidth
          />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <TextInput
            source="city"
            label="Ciudad"
            validate={required()}
            fullWidth
          />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <TextInput
            source="state"
            label="Provincia"
            validate={required()}
            fullWidth
          />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <NumberInput
            source="zip"
            label="Código postal"
            validate={required()}
            fullWidth
          />
        </Box>
      </Box>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="email" label="Email" validate={required()} fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="telephone" label="Teléfono" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <NumberInput source="document" label="Documento" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <DateInput source="birthDate" label="Fecha de nacimiento" fullWidth />
        </Box>
      </Box>
    </SimpleForm>
  </Edit>
);
