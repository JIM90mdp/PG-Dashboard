import { useCallback } from 'react';
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
    ReferenceArrayInput,
    SelectArrayInput,
    ImageInput,
    ImageField,
    useRedirect,
    useNotify,
    useUpdate
} from 'react-admin';
import { Box } from '@mui/material';
import { CustomToolbar } from '../custom-toolbar';
import { formatTime, parseTime } from './utils';
import { handlePhotoUploads } from "../handle-photo-uploads";

export const ProductEdit = () => {
    const redirect = useRedirect();
    const notify = useNotify();

    const [update] = useUpdate();
    const save = useCallback(
        async values => {
            try {
                // Handle of photo uploads to product forms
                values.photos = await handlePhotoUploads(values.photos);

                console.log('New data: ');
                console.table(values);
                await update(
                    'products',
                    { data: values },
                    { returnPromise: true }
                );
                // console.log('newProduct: ', newProduct);

                notify('ra.notification.updated', {
                    type: 'info',
                    messageArgs: { smart_count: 1 },
                });
                redirect('list', 'products');
            } catch (error) {
                console.table(error);
                if (error.body && error.body.errors) {
                    return error.body.errors;
                }

                if (error.body && error.body.validationError) {
                    notify(error.body.validationError, {
                        type: 'error'
                    });
                    return '';
                } else {
                    notify('Ooops! Error validating data', {
                        type: 'error'
                    });
                    return '';
                }
            }
        },
        [update, notify, redirect]
    );

    return (
        <Edit>
            <SimpleForm toolbar={<CustomToolbar />} onSubmit={save}>
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
    )
};
