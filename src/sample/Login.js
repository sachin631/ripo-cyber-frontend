import React from 'react';
import { Form } from 'antd';
import { Link } from 'react-router-dom';
import { RouteKeys } from 'routes/RouteKeys';
import { getPlatform } from 'utils/Constant';
import { endpoints } from 'utils/Endpoints';
import { loginData } from '../../redux/features/commonSlice';
import CustomInput from 'components/CustomInput';
import PasswordInput from 'components/PasswordInput';
import CustomButton from 'components/CustomButton';
import useCustomMutation from 'hook/useCustomMutation';
import useAppNavigate from 'hook/useAppNavigate';
import useAppDispatch from 'hook/useAppDispatch';
import Toast from 'utils/Toast';

const Login = () => {
    const navigate = useAppNavigate();
    const dispatch = useAppDispatch();

    const { mutate: loginMutate, isPending } = useCustomMutation({
        mutationKey: ['login'],
        onSuccessCallback: (res) => {
            dispatch(loginData(res?.data));
            Toast('s', res?.message)
            navigate(RouteKeys.protected.dashboard);
        }
    });

    const handleLogin = (formval) => {
        loginMutate({
            myObj: {
                os_type: getPlatform(),
                email: formval?.email?.toLowerCase(),
                password: formval?.password
            },
            url: endpoints.auth.login,
        });
    };

    return (
        <>
            <div className='text-center'>
                <h1 className='text-20px sm:text-28px font-bold'>Welcome Admin</h1>
                <h2 className='sm:text-18px'>Please login to continue</h2>
                <div className='mt-4 sm:px-10'>
                    <Form onFinish={handleLogin} layout='vertical'>
                        <Form.Item name='email' label={<dt className='text-14px font-semibold'>Email</dt>}>
                            <CustomInput type='email' required />
                        </Form.Item>
                        <Form.Item name='password' label={<dt className='text-14px font-semibold'>Password</dt>} extra={
                            <Link to={RouteKeys.auth.forgot}><dt className='text-14px text-carmine font-semibold text-end mt-1'>Forgot Password?</dt></Link>
                        }>
                            <PasswordInput />
                        </Form.Item>
                        <Form.Item>
                            <CustomButton loading={isPending} className='md:mt-5' htmlType='submit'>Login</CustomButton>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Login;
