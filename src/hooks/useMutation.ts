import { forgotPasswordClient, new_passwordClient, user_login, verifyOtp } from "@/api/apiClient";
// import { queryClient } from "@/tanstack/Store";
import { storeDataInTanstack } from "@/tanstack/tanstackStorage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


export const userLoginMutation = () => {
    const router = useRouter();

    const mutation: any = useMutation({
        mutationFn: async (data) => {
            const response = user_login(data);
            return response;
        },
        onSuccess: async (res: any) => {
            console.log(res, 'resres');
            localStorage.setItem('token', res?.data.token);
            toast.success(res?.message);
            router.push('/pages/unprotected');
        },
        onError: (err: any) => {
            toast.error(err?.response?.data?.message);
        }
    });
    return mutation;
}

export const forgotPasswordMutation = () => {
    const router = useRouter();

    const mutation: any = useMutation({
        mutationFn: async (data) => {
            const response = forgotPasswordClient(data);
            return response;
        },
        onSuccess: async (res: any, data: any) => {
            console.log('onsuccess')
            storeDataInTanstack('email', data?.email);

            toast.success(res?.message);
            setTimeout(() => {
                router.push('/verification');

            }, 1000)

        },

        onError: (err: any) => {
            toast.error(err?.response?.data?.message);
        }
    });
    return mutation;
}

export const verifyUserOtp = () => {
    const router = useRouter();
    const mutation = useMutation({
        mutationFn: async (data) => {
            const response = await verifyOtp(data);
            return response;
        },
        onSuccess: async (res: any) => {
            toast.success(res?.message);
            setTimeout(() => {
                router.push('/newPassword');
            }, 1000)
        },
        onError: (err: any) => {
            toast.error(err?.response?.data?.message);
        }
    });
    return mutation;
}


export const useNewPassword = () => {
    const router = useRouter();
    const mutation = useMutation({
        mutationFn: async (data) => {
            const response = await new_passwordClient(data);
            return response;
        },
        onSuccess: async (res: any) => {
            toast.success(res?.message);

        },
        onError: (err: any) => {
            toast.error(err?.response?.data?.message);
        }
    });
    return mutation;
}