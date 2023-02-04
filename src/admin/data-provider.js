import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

const apiUrl = 'http://localhost:3001/admin';
const httpClient = fetchUtils.fetchJson;

export const dataProvider = {
    getList: (resource, params) => {
        console.log('params: ', params);
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            page: page - 1,
            size: perPage,
            filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json.rows,
            total: json.count,
        }));
    },
    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
        })),
    getMany: (resource, params) => {
        // console.log('dataProvider.getMany: ', resource, params);
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        console.log('dataProvider.getMany params.ids: ', params.ids);
        // return httpClient(url).then(({ json }) => ({ data: json.rows }));
        return httpClient(url).then(({ json }) => {
            console.log('json.rows: ', json.rows);
            return { data: json.rows };
        });
    },
    update: async (resource, params) => {
        params.data.photos = await handlePhotoUploads(params.data.photos);

        const response = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data)
        });

        console.log('json returned by httpClient: ', response);
        return { data: response.json };

    },
    create: async (resource, params) => {

        params.data.photos = await handlePhotoUploads(params.data.photos);

        const response = await httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data)
        });

        console.log('json returned by httpClient: ', response.json);
        return { data: { ...params.data, id: response.json.id } };

    },
    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),
};

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(file);
    });

const handlePhotoUploads = async photos => {
    if (!photos || photos.length === 0) {
        return [];
    }

    // Freshly dropped photos are File objects and must be converted to base64 strings
    const newPhotos = photos.filter(
        p => p.rawFile instanceof File
    );
    // Former photos
    const formerPhotos = photos.filter(
        p => !(p.rawFile instanceof File)
    );

    for (const photo of newPhotos) {
        photo.base64String = await convertFileToBase64(photo.rawFile);
    }

    return [
        ...newPhotos,
        ...formerPhotos,
    ];
}