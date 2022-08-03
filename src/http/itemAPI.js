import { $authHost, $host } from "./index";

// types
export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const deleteType = async (id) => {
    const {data} = await $authHost.delete(`api/type/${id}`)
    return data
}

export const updateType = async (id, name) => {
    const {data} = await $authHost({method:'PUT', url:`api/type/${id}`, data: name})
    return data
}

//items
export const createItem = async (item) => {
    const {data} = await $authHost.post('api/item', item)
    return data
}

export const fetchItems = async (typeId, page, limit=5) => {
    const {data} = await $host.get('api/item', {params: {
        typeId, page, limit
    }})
    return data
}

export const fetchItemsAdmin = async () => {
    const {data} = await $authHost.get('api/item')
    return data
}

export const fetchOneItem = async (id) => {
    const {data} = await $host.get('api/item/' + id)
    return data
}

export const deleteItem = async (id) => {
    const {data} = await $authHost.delete(`api/item/${id}`)
    return data
}

export const updateItem = async (id, body) => {
    const {data} = await $authHost({method:'PUT', url:`api/item/${id}`, data: body})
    return data
}

//basket
export const addToBasket = async (item) => {
    const {data} = await $authHost.post('api/basket', item)
    return data
}

export const fetchBasketItems = async () => {
    const {data} = await $authHost.get('api/basket/')
    return data
}

export const deleteBasketItem = async (id) => {
    const {data} = await $authHost.delete(`api/basket/${id}`)
    return data
}

// rating
export const setRating = async (body) => {
    const {data} = await $authHost.post('api/rating', body);
    return data;
}

export const checkRating = async (body) => {
    const {data} = await $authHost.post('api/rating/check', body);
    return data;
}