import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';

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

import { dataProvider } from './data-provider';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="categories" list={CategoryList} edit={CategoryEdit} create={CategoryCreate} />
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
        />
    </Admin>
);

export default App;
