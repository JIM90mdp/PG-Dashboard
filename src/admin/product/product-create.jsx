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
} from 'react-admin';
import { Box } from '@mui/material';
import { formatTime, parseTime } from './utils';

const productDefaultValues = () => ({ startDate: new Date(), endDate: new Date(), stock: 0, price: 0, status: 'Active' });

export const ProductCreate = () => (
    <Create>
        <SimpleForm defaultValues={productDefaultValues}>
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={2} mr={{ xs: 0, sm: '0.5em' }}>
                    <TextInput source="name"
                        validate={required()}
                        fullWidth
                    />
                </Box>
                <Box flex={2} ml={{ xs: 0, sm: '0.5em' }}>
                    <ReferenceInput source="locationId" reference="locations">
                        <SelectInput validate={required()} fullWidth />
                    </ReferenceInput>
                </Box>
                <Box flex={2} ml={{ xs: 0, sm: '0.5em' }}>
                    <ReferenceInput source="artistId" reference="artists">
                        <SelectInput validate={required()} fullWidth />
                    </ReferenceInput>
                </Box>
                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <SelectInput source="status"
                        label="Status"
                        optionValue="name"
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
                    <DateInput source="startDate" validate={required()} fullWidth />
                </Box>
                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <DateInput source="endDate" validate={required()} fullWidth />
                </Box>
                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <TimeInput
                        source="startTime"
                        parse={parseTime}
                        format={formatTime}
                        validate={required()}
                        fullWidth
                    />
                </Box>
            </Box>
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <NumberInput source="stock" fullWidth />
                </Box>
                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <NumberInput source="price" fullWidth />
                </Box>
            </Box>
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <TextInput source="description" fullWidth multiline />
            </Box>
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <ReferenceArrayInput reference="categories" source="categories">
                    <SelectArrayInput optionText="name" fullWidth />
                </ReferenceArrayInput>
            </Box>
        </SimpleForm>
    </Create>
);
