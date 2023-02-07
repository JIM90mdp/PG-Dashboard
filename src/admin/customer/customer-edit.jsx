import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  required,
  ReferenceInput,
  DateInput,
  TimeInput,
  NumberInput,
  // useRecordContext,
  ReferenceArrayInput,
  SelectArrayInput,
  ImageInput,
  ImageField,
} from "react-admin";
import { Box } from "@mui/material";
import { CustomToolbar } from "../custom-toolbar";

// Custom title example
// const ProductTitle = () => {
//     const record = useRecordContext();
//     console.log('record to edit: ', record);
//     return <span>Product {record ? `"${record.name}"` : ''}</span>;
// };

export const CustomerEdit = () => (
  // <Edit title={<ProductTitle />}>  // Custom title example
  <Edit>
    <SimpleForm toolbar={<CustomToolbar />}>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={2} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="name" validate={required()} fullWidth />
        </Box>
        {/* <Box flex={2} ml={{ xs: 0, sm: '0.5em' }}>
                    <ReferenceInput source="userId" reference="users">
                        <SelectInput validate={required()} fullWidth />
                    </ReferenceInput>
                </Box> */}
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
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="address" validate={required()} fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="city" validate={required()} fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="state" validate={required()} fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <NumberInput source="zip" validate={required()} fullWidth />
        </Box>
      </Box>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="email" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <NumberInput source="telephone" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <NumberInput source="document" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <DateInput source="birthDate" fullWidth />
        </Box>
      </Box>
    </SimpleForm>
  </Edit>
);
