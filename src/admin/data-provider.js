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
        const response = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data)
        });

        console.log('json returned by httpClient: ', response);
        return { data: response.json };

    },
    create: async (resource, params) => {
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
