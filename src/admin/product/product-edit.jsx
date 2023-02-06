import {
    Edit,
    SimpleForm,
    TextInput,
    SelectInput,
    required,
    ReferenceInput,
    DateInput,
    NumberInput,
    // useRecordContext,
    ReferenceArrayInput,
    SelectArrayInput,
    ImageInput,
    ImageField
} from 'react-admin';
import { Box } from '@mui/material';
import { CustomToolbar } from '../custom-toolbar';

// Custom title example
// const ProductTitle = () => {
//     const record = useRecordContext();
//     console.log('record to edit: ', record);
//     return <span>Product {record ? `"${record.name}"` : ''}</span>;
// };

export const ProductEdit = () => (
    // <Edit title={<ProductTitle />}>  // Custom title example
    <Edit>
        <SimpleForm toolbar={<CustomToolbar />}>
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
                    <TextInput source="startTime" validate={required()} fullWidth />
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
                <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                    <TextInput source="description" fullWidth multiline />
                </Box>
            </Box>
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <ReferenceArrayInput reference="categories" source="categories">
                    <SelectArrayInput optionText="name" fullWidth />
                </ReferenceArrayInput>
            </Box>
            <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                <ImageInput source="photos" label="Photos" multiple>
                    <ImageField source="src" title="title" />
                </ImageInput>
            </Box>
        </SimpleForm>
    </Edit>
);
