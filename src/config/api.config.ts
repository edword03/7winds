export const entityId = process.env.REACT_APP_ENTITY_ID

export const getApiEndpoint = `/v1/outlay-rows/entity`
export const createEntityEndpoint = `${getApiEndpoint}/create`
export const getTreeRowEndpoint = () => `${getApiEndpoint}/${entityId}/row/list`
export const createRowEndpoint = () => `${getApiEndpoint}/${entityId}/row/create`
export const updateRowEndpoint = (rowId: number) => `${getApiEndpoint}/${entityId}/row/${rowId}/update`
export const deleteRowEndpoint = (rowId: number) => `${getApiEndpoint}/${entityId}/row/${rowId}/delete`