import * as React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import { useRecordContext } from 'react-admin';

import { TableCellRight } from './TableCellRight';

export const OrderTotals = () => {
    const record = useRecordContext();

    return (
        <Table sx={{ minWidth: '35em' }}>
            <TableBody>
                <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>
                        Total
                    </TableCell>
                    <TableCellRight sx={{ fontWeight: 'bold' }}>
                        {record?.totalAmount.toLocaleString(undefined, {
                            style: 'currency',
                            currency: 'ARS',
                        })}
                    </TableCellRight>
                </TableRow>
            </TableBody>
        </Table>
    );
};
