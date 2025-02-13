import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getApiQuery } from '../redux/action/action';
import Toast from 'utils/Toast';

const useCustomMutation = ({ mutationKey, invalidateQueryIds, onSuccessCallback, onErrorCallback }) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: [mutationKey],
        mutationFn: getApiQuery,
        gcTime: 0,
        retry: 3,
        retryDelay: 60 * 1000, // Retry every 60 seconds
        onError: (error) => {
            Toast('e', error);
            console.log(error);
            onErrorCallback?.(error); // Use optional chaining to simplify the callback
        },
        onSuccess: (data) => {
            const { status, data: responseData } = data || {};

            if (status === 401) {
                console.log('Logged Out');
                return;
            }

            if ([400, 404, 417, 500].includes(status)) {
                onErrorCallback?.(data);
                Toast('e', responseData?.message);
                return;
            }

            if (status === 200) {
                if (invalidateQueryIds) {
                    queryClient.invalidateQueries([invalidateQueryIds]);
                }
                onSuccessCallback?.(responseData);
            }
        },
        select: (data) => data?.data // Directly select the nested data if it exists
    });
};

export default useCustomMutation;
