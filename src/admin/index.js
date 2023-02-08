// import { ListGuesser, EditGuesser } from 'react-admin' ;
import { Admin, Resource } from 'react-admin';

import { CategoryList } from './category/category-list';
import { CategoryEdit } from './category/category-edit';
import { CategoryCreate } from './category/category-create';

import { LocationList } from './location/location-list';
import { LocationEdit } from './location/location-edit';
import { LocationCreate } from './location/location-create';

import { ArtistList } from './artist/artist-list';
import { ArtistEdit } from './artist/artist-edit';
import { ArtistCreate } from './artist/artist-create';

import { ProductList } from './product/product-list';
import { ProductCreate } from './product/product-create';
import { ProductEdit } from './product/product-edit';

import { UserList } from './user/user-list';
import { UserCreate } from './user/user-create';
import { UserEdit } from './user/user-edit';

import { CustomerList } from './customer/customer-list';
import { CustomerCreate } from './customer/customer-create';
import { CustomerEdit } from './customer/customer-edit';

import { Dashboard } from './dashboard/dashboard';
import { dataProvider } from './data-provider';
import { authProvider } from './auth-provider';




// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}>
        <Resource
            name="categories"
            list={CategoryList}
            edit={CategoryEdit}
            create={CategoryCreate}
            recordRepresentation="name"
        />
        <Resource
            name="locations"
            list={LocationList}
            edit={LocationEdit}
            create={LocationCreate}
            recordRepresentation="name"
        />
        <Resource
            name="artists"
            list={ArtistList}
            edit={ArtistEdit}
            create={ArtistCreate}
            recordRepresentation="name"
        />
        <Resource
            name="products"
            list={ProductList}
            edit={ProductEdit}
            create={ProductCreate}
            recordRepresentation="name"
        />
        <Resource
            name="users"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            recordRepresentation="userName"
        />
        <Resource
            name="customers"
            list={CustomerList}
            edit={CustomerEdit}
            create={CustomerCreate}
            recordRepresentation="name"
        />
    </Admin>
);

export default App;
