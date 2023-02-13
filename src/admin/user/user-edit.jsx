import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  required,
} from "react-admin";
import { Box } from "@mui/material";
import { CustomToolbar } from "../custom-toolbar";

export const UserEdit = () => (
  <Edit>
    <SimpleForm sx={{ maxWidth: 500 }} toolbar={<CustomToolbar />}>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={2} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="userName" label="Nombre" validate={required()} fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <SelectInput
            source="role"
            label="Rol"
            optionValue="name"
            defaultValue={"User"}
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
            defaultValue={"Active"}
            // emptyText="Select an option"
            // emptyValue="Select an option"
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
  </Edit>
);
