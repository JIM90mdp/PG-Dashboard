import { useCallback } from 'react';
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
    useRedirect,
    useNotify,
    useCreate
} from 'react-admin';
import { Box } from '@mui/material';
import { formatTime, parseTime } from './utils';

const productDefaultValues = () => ({
    startDate: new Date(),
    endDate: new Date(),
    stock: 0,
    price: 0,
    status: 'Active'
});

export const ProductCreate = () => {
    const redirect = useRedirect();
    const notify = useNotify();

    const [create] = useCreate();
    const save = useCallback(
        async values => {
            try {
                const createdProduct = await create(
                    'products',
                    { data: values },
                    { returnPromise: true }
                );
                // console.log('newProduct: ', newProduct);

                notify('ra.notification.created', {
                    type: 'info',
                    messageArgs: { smart_count: 1 },
                });
                redirect('edit', 'products', createdProduct.id);
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
        [create, notify, redirect]
    );

    return (
        <Create>
            <SimpleForm defaultValues={productDefaultValues} onSubmit={save}>
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
                <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                    {/* <TextInput source="errors" label="Errors" fullWidth multiline disabled /> */}
                    {/* <p source="errors" id="errors" name="errors"></p> */}
                    {/* <ErrorPlaceholder /> */}
                </Box>
            </SimpleForm>
        </Create>
    )
};
