import {
    Datagrid,
    List,
    ReferenceField,
    TextField,
    ReferenceInput,
    AutocompleteInput,
    FunctionField,
    NumberInput
} from "react-admin";
import StarRatingField from "./star-rating-field";

const reviewFilters = [
    <ReferenceInput source="productId" reference="products" alwaysOn>
        <AutocompleteInput filterToQuery={searchText => ({ name: searchText })} />
    </ReferenceInput>,
    <ReferenceInput source="userId" reference="users" alwaysOn>
        <AutocompleteInput filterToQuery={searchText => ({ userName: searchText })} />
    </ReferenceInput>,
    <NumberInput source="stars" label="Stars since" min={1} max={5} alwaysOn />
];

export const ReviewList = () => (
    <List filters={reviewFilters} sort={{ field: "status", order: "ASC" }}>
        <Datagrid rowClick="show" bulkActionButtons={false}>
            <StarRatingField size="small" />
            <FunctionField source="message" label="Review" render={record => {
                if (record.message && record.message.length <= 20) {
                    return record.message;
                }
                if (record.message) {
                    return record.message.slice(0, 30) + '...';
                }
                return '';
            }} />
            <ReferenceField source="productId" reference="products">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="userId" reference="users">
                <TextField source="userName" />
            </ReferenceField>
            <TextField source="status" label="Status" />
        </Datagrid>
    </List>
);
