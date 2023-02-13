import {
  Show,
  SimpleShowLayout,
  TextField,
  ReferenceField,
} from "react-admin";
import StarRatingField from "./star-rating-field";

export const ReviewShow = () => (
  <Show>
    <SimpleShowLayout>
      <ReferenceField source="productId" reference="products">
        <TextField source="name" fullWidth label="Product" />
      </ReferenceField>
      <ReferenceField source="userId" reference="users">
        <TextField source="userName" fullWidth label="User" />
      </ReferenceField>
      <TextField
        source="message"
        label="Message"
        fullWidth
      />
      <StarRatingField source="stars" />
      <TextField source="status" label="Status" fullWidth />
    </SimpleShowLayout>
  </Show>
);
