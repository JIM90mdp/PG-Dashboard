import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  required,
  ReferenceInput,
} from "react-admin";
import { Box } from "@mui/material";

export const UserCreate = () => (
  <Create>
    <SimpleForm sx={{ maxWidth: 500 }}>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={2} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="userName" validate={required()} fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <SelectInput
            source="role"
            label="Role"
            optionValue="name"
            // emptyText="Select an option"
            // emptyValue="Select an option"
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
            label="Status"
            optionValue="name"
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
      <Box flex={2} mr={{ xs: 0, sm: "0.5em" }}>
        <TextInput source="password" validate={required()} fullWidth />
      </Box>
      {/* <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <ReferenceInput source="groupId" />
                </Box>
            </Box> */}
    </SimpleForm>
  </Create>
);
