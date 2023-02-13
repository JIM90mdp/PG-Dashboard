import {
    Edit,
    SimpleForm,
    TextInput,
    SelectInput,
    required,
    ReferenceInput,
    NumberInput,
  } from "react-admin";
  import { Box } from "@mui/material";
  
    export const ReviewEdit = () => (
    <Edit>
      <SimpleForm>
        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <Box flex={2} mr={{ xs: 0, sm: "0.5em" }}>
            <ReferenceInput source="productId" reference="products">
              <SelectInput validate={required()} fullWidth label="Product" />
            </ReferenceInput>
          </Box>
          <Box flex={2} ml={{ xs: 0, sm: "0.5em" }}>
            <ReferenceInput source="userId" reference="users">
              <SelectInput validate={required()} fullWidth label="User" />
            </ReferenceInput>
          </Box>
          <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
            <NumberInput
              source="stars"
              label="Stars"
              min={1}
              max={5}
              validate={required()}
              fullWidth
            />
          </Box>
        </Box>
  
        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
            <TextInput
              source="message"
              label="Message"
              validate={required()}
              fullWidth
              resettable
              multiline
            />
          </Box>
        </Box>
  
        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
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
      </SimpleForm>
    </Edit>
  );
  