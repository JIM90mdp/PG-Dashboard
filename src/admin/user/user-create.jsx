import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  required,
  ReferenceInput,
  getValuesFromRecords,
} from "react-admin";
import { Box } from "@mui/material";


export const UserCreate = () => (
  <Create>
    <SimpleForm sx={{ maxWidth: 500 }}>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={2} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="userName" label="Nombre" validate={required()} fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <SelectInput
            source="role"
            label="Rol"
            optionValue="name"
            // defaultValue={"User"}
            choices={[
              { role: "User", name: "User" },
              { role: "Admin", name: "Admin" },
            ]}
            validate={required()}
            fullWidth
          />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <SelectInput
            source="status"
            label="Estado"
            optionValue="name"
            // defaultValue={"Active"}
            choices={[
              { id: "Active", name: "Active" },
              { id: "Disabled", name: "Disabled" },
            ]}
            validate={required()}
            fullWidth
          />
        </Box>
      </Box>
    </SimpleForm>
  </Create>
);
