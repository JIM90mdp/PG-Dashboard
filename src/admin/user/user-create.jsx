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

const validateUserCreation = (values) => {
  const errors = {};
  if (!values.userName) {
      errors.userName = 'The User Name is required';
  }
  if (!values.password) {
    errors.password = 'The password is required'
  }
   return errors
};

export const UserCreate = () => (
  <Create>
    <SimpleForm sx={{ maxWidth: 500 }} validate={validateUserCreation}>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={2} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="userName" validate={required()} fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <SelectInput
            source="role"
            label="Role"
            optionValue="name"
            defaultValue={"User"}
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
  </Create>
);
