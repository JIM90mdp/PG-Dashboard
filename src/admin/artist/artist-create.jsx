import { Create, SimpleForm, TextInput, SelectInput, required, ReferenceInput } from 'react-admin';
import { Box } from '@mui/material';

const validateUserCreation = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = 'The Name is required';
    }
     return errors
  };

export const ArtistCreate = () => (
    <Create>
        <SimpleForm sx={{ maxWidth: 500 }} validate={validateUserCreation}>
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={2} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput source="name"
                        validate={required()}
                        fullWidth
                    />
                </Box>
                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <SelectInput source="status"
                        label="Status"
                        optionValue="name"
                        defaultValue={"Active"}
                        // emptyText="Select an option"
                        // emptyValue="Select an option"
                        choices={[
                            { id: "Active", name: "Active" },
                            { id: "Disabled", name: "Disabled" }
                        ]}
                        validate={required()}
                        fullWidth
                    />
                </Box>
            </Box>
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <ReferenceInput source="groupId" reference="artists" />
                </Box>
            </Box>
        </SimpleForm>
    </Create>
);
