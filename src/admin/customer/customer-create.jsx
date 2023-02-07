import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  required,
  ReferenceInput,
  DateInput,
  TimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ImageInput,
  ImageField,
} from "react-admin";
import { Box } from "@mui/material";

const productDefaultValues = () => ({
  startDate: new Date(),
  endDate: new Date(),
  stock: 0,
  price: 0,
  status: "Active",
});

export const CustomerCreate = () => (
  <Create>
    <SimpleForm defaultValues={productDefaultValues}>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={2} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="name" validate={required()} fullWidth />
        </Box>
        {/* <Box flex={2} ml={{ xs: 0, sm: "0.5em" }}>
          <ReferenceInput source="userId" reference="user">
            <SelectInput validate={required()} fullWidth />
          </ReferenceInput>
        </Box> */}
        <Box flex={2} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="address" validate={required()} fullWidth />
        </Box>
        <Box flex={2} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="city" validate={required()} fullWidth />
        </Box>
        <Box flex={2} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="state" validate={required()} fullWidth />
        </Box>
        <Box flex={2} mr={{ xs: 0, sm: "0.5em" }}>
          <NumberInput source="zip" validate={required()} fullWidth />
        </Box>
        <Box flex={2} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="email" validate={required()} fullWidth />
        </Box>
        <Box flex={2} mr={{ xs: 0, sm: "0.5em" }}>
          <NumberInput source="telephone" validate={required()} fullWidth />
        </Box>
        <Box flex={2} mr={{ xs: 0, sm: "0.5em" }}>
          <NumberInput source="document" validate={required()} fullWidth />
        </Box>
        <Box flex={2} mr={{ xs: 0, sm: "0.5em" }}>
          <DateInput source="birthDate" validate={required()} fullWidth />
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
