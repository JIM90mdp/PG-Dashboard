import * as React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import { useRecordContext } from 'react-admin';

// import { Order, Product } from '../types';
import { TableCellRight } from './TableCellRight';

export const OrderDetail = () => {
    const record = useRecordContext();

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Reference</TableCell>
                    <TableCellRight>Unit Price</TableCellRight>
                    <TableCellRight>Quantity</TableCellRight>
                    <TableCellRight>Total</TableCellRight>
                </TableRow>
            </TableHead>
            <TableBody>
                {record.OrderItems?.map(item => (
                    <TableRow key={item.id}>
                        <TableCell>
                            {item.Product.name}
                        </TableCell>
                        <TableCellRight>
                            {item.unitPrice}
                        </TableCellRight>
                        <TableCellRight>{item.quantity}</TableCellRight>
                        <TableCellRight>{item.totalAmount}
                        </TableCellRight>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
