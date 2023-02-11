// import * as React from 'react';
import { useCallback } from 'react';
import {
    DateField,
    Edit,
    Form,
    required,
    Labeled,
    ReferenceField,
    SelectInput,
    TextField,
    Toolbar,
    useRecordContext,
    SaveButton,
    useRedirect,
    useNotify,
    useUpdate,
    useEditContext
} from 'react-admin';
import { Card, CardContent, Box, Grid, Typography } from '@mui/material';

import { OrderTotals } from './order-totals';
import { OrderDetail } from './order-detail';

export const OrderEdit = () => {
    return (
        <Edit component="div">
            <OrderForm />
        </Edit>
    );
}

const CustomerDetails = () => {
    const record = useRecordContext();
    return (
        <div>
            <Typography>
                {record?.name}
            </Typography>
            <Typography>
                {record?.email}
            </Typography>
        </div>
    );
};

const CustomerAddress = () => {
    const record = useRecordContext();
    return (
        <div>
            {/* <Typography>
                {record?.name}
            </Typography> */}
            <Typography>{record?.address}</Typography>
            <Typography>
                {record?.city}, {record?.state} {record?.zip}
            </Typography>
        </div>
    );
};

const ToolbarOnlySave = ({ status }) => {
    if (!status || ['Completed', 'Canceled'].some(s => s === status)) {
        return <></>;
    }

    return (
        <Toolbar>
            <SaveButton label="Save" />
        </Toolbar>
    )
};

const StatusSelectInput = ({ status }) => {
    if (!status) {
        return <></>;
    }

    if (['Completed', 'Canceled'].some(s => s === status)) {
        return (
            <Labeled source="status" label="Status">
                <TextField source="status" />
            </Labeled>
        );
    }

    return (
        <SelectInput
            source="status"
            choices={[
                {
                    id: 'Created',
                    name: 'Created',
                },
                {
                    id: 'Processing',
                    name: 'Processing',
                },
                {
                    id: 'Completed',
                    name: 'Completed',
                },
                {
                    id: 'Canceled',
                    name: 'Canceled',
                },
            ]}
            validate={required()}
        />
    );
};

const Spacer = () => <Box m={1}>&nbsp;</Box>;

const OrderForm = () => {
    const redirect = useRedirect();
    const notify = useNotify();
    const [update] = useUpdate();
    const { record } = useEditContext();

    const save = useCallback(
        async values => {
            try {
                console.log('New data: ');
                console.table(values);
                await update(
                    'orders',
                    {
                        id: values.id,
                        data: values
                    },
                    { returnPromise: true }
                );

                notify('ra.notification.updated', {
                    type: 'info',
                    messageArgs: { smart_count: 1 },
                });
                redirect('list', 'orders');
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
        <Form onSubmit={save}>
            <Box maxWidth="50em">
                <Card>
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={6}>
                                <Typography variant="h6" gutterBottom>
                                    Order
                                </Typography>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Labeled source="orderDate" label="Order Date">
                                            <DateField source="orderDate" />
                                        </Labeled>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Labeled source="id" label="Order Number">
                                            <TextField source="id" />
                                        </Labeled>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <StatusSelectInput status={record?.status} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Typography variant="h6" gutterBottom>
                                    Customer
                                </Typography>
                                <ReferenceField
                                    source="CustomerId"
                                    reference="customers"
                                    link={false}
                                >
                                    <CustomerDetails />
                                </ReferenceField>
                                <Spacer />

                                <Typography variant="h6" gutterBottom>
                                    Address
                                </Typography>
                                <ReferenceField
                                    source="CustomerId"
                                    reference="customers"
                                    link={false}
                                >
                                    <CustomerAddress />
                                </ReferenceField>
                            </Grid>
                        </Grid>
                        <Spacer />

                        <Typography variant="h6" gutterBottom>
                            Items
                        </Typography>
                        <div>
                            <OrderDetail />
                        </div>
                        <Spacer />

                        <Typography variant="h6" gutterBottom>
                            Totals
                        </Typography>
                        <div>
                            <OrderTotals />
                        </div>
                    </CardContent>
                    <ToolbarOnlySave status={record?.status} />
                </Card>
            </Box>
        </Form>
    );
};
