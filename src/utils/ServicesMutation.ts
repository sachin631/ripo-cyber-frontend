import { get_our_services_listing } from "@/api/apiClient"
import { DATA_TYPE } from "@/app.constant"
import { useQuery } from "@tanstack/react-query"

export const UseServicesMutation = async () => {
    const query = useQuery({
        queryKey: ['services_listing'],
        queryFn: async () => {
            const res = await get_our_services_listing(DATA_TYPE.OUR_SERVICES)
        }
    });
    return {
        query
    }
}