import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  required,
  ReferenceInput,
  NumberInput,
  DateInput,
  EmailField,
} from "react-admin";
import { Box } from "@mui/material";

const productDefaultValues = () => ({
  status: "Active",
});

export const CustomerCreate = () => (
  <Create>
    <SimpleForm defaultValues={productDefaultValues}>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={2} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput
            source="name"
            label="Name"
            validate={required()}
            fullWidth
          />
        </Box>
        <Box flex={2} ml={{ xs: 0, sm: "0.5em" }}>
          <ReferenceInput source="userId" reference="users">
            <SelectInput validate={required()} fullWidth label="User" />
          </ReferenceInput>
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <SelectInput
            source="status"
            label="Status"
            optionValue="name"
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
            label="Address"
            validate={required()}
            fullWidth
          />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <TextInput
            source="city"
            label="City"
            validate={required()}
            fullWidth
          />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <TextInput
            source="state"
            label="State"
            validate={required()}
            fullWidth
          />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <TextInput
            source="zip"
            label="Zip"
            validate={required()}
            fullWidth
          />
        </Box>
      </Box>

      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="email" label="Email" type="email" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <NumberInput source="telephone" label="Telephone" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <NumberInput source="document" label="Document" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <DateInput source="birthDate" label="Birth Date" fullWidth />
        </Box>
      </Box>
    </SimpleForm>
  </Create>
);
