import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { AppErrors } from '../../common/errors';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, RegisterSchema } from '../../utils/yup';
import { useStyles } from './style';
import { loginUser, registerUser } from '../../store/thunks/auth';

const AuthRootPage: FC = (): JSX.Element => {
    const classes = useStyles();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {
        register,
        formState: {
            errors,
        }, handleSubmit,
    } = useForm({
        resolver: yupResolver(location.pathname === '/login' ? LoginSchema : RegisterSchema),
    });
    const loading = useAppSelector((state) => state.auth.isLoading);
    const handleSubmitForm = async (data: any) => {
        if (location.pathname === '/login') {
            try {
                await dispatch(loginUser(data));
                navigate('/');
            } catch (e) {
                return e;
            }
        } else if (location.pathname === '/register') {
            if (data.password === data.confirmPassword) {
                try {
                    const userData = {
                        firstName: data.firstName,
                        userName: data.userName,
                        email: data.email,
                        password: data.password,
                    };
                    await dispatch(registerUser(userData));
                    navigate('/');
                } catch (e) {
                    return e;
                }

            } else {
                throw new Error(AppErrors.PasswordDoNoMuch);
            }
        }
    };

    return (
        <div className={classes.root}>
            <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
                <Box
                    margin='auto'
                    padding={5}
                    maxWidth={640}
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    borderRadius={5}
                    boxShadow={'-3px -2px 20px 1px #202020'}
                >
                    {location.pathname === '/login' ?
                        <LoginPage register={register} errors={errors}
                                   loading={loading} /> : location.pathname === '/register' ?
                            <RegisterPage register={register} errors={errors} loading={loading} /> : null}
                </Box>
            </form>
        </div>
    );
};

export default AuthRootPage;