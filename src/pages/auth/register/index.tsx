import React, {FC} from 'react';
import {TextField, Typography} from "@mui/material";
import {IPropsRegister} from "../../../common/types/auth";
import {Link} from "react-router-dom";
import {useStyles} from "./style";
import AppLoadingButton from "../../../components/loading-button";

const RegisterPage: FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    const classes = useStyles()
    const {register, errors, loading} = props
    return (
        <>
            <Typography variant="h2" textAlign='center' fontSize={32}>Регистрация</Typography>
            <Typography variant="body1" marginBottom={3} textAlign='center'>Введите данные для регистрации</Typography>
            <TextField fullWidth={true}
                       error={!!errors.firstName}
                       margin="normal"
                       label="Имя"
                       variant="outlined"
                       placeholder="Введите ваш имя"
                       helperText={errors.firstName ? `${errors.firstName.message}` : ''}
                       {...register('firstName')}
            />
            <TextField fullWidth={true}
                       error={!!errors.userName}
                       margin="normal"
                       label="UserName"
                       variant="outlined"
                       placeholder="Введите ваш UserName"
                       helperText={errors.userName ? `${errors.userName.message}` : ''}
                       {...register('userName')}
            />
            <TextField fullWidth={true}
                       error={!!errors.email}
                       margin="normal"
                       label="Email"
                       variant="outlined"
                       placeholder="Введите ваш email"
                       helperText={errors.email ? `${errors.email.message}` : ''}
                       {...register('email')}
            />
            <TextField type="password"
                       error={!!errors.password}
                       fullWidth={true}
                       margin="normal"
                       label="Password"
                       variant="outlined"
                       placeholder="Введите ваш пароль"
                       helperText={errors.password ? `${errors.password.message}` : ''}
                       {...register('password')}
            />
            <TextField type="password"
                       error={!!errors.confirmPassword}
                       fullWidth={true}
                       margin="normal"
                       label="Password"
                       variant="outlined"
                       placeholder="Повторите ваш пароль"
                       helperText={errors.confirmPassword ? `${errors.confirmPassword.message}` : ''}
                       {...register('confirmPassword')}
            />
            <AppLoadingButton loading={loading} type="submit" variant="contained">регистрация</AppLoadingButton>
            <Typography variant="body1">У вас нет аккаунта?<Link to='/login' className={classes.incitingText}>Авторизация</Link></Typography>
        </>
    );
};

export default RegisterPage;