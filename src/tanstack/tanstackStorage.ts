import { queryClient } from "./Store"

export const storeDataInTanstack = (key: string, value: any) => {
    queryClient.setQueryData([key], value);
}

export const getDataFromTanstack = (key: string) => {
    return queryClient.getQueryData([key]);
}

export const removeDataFromTanstack = (key: any) => {
    queryClient.removeQueries({ queryKey: [key] });
}