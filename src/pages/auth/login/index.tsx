import {TextField, Typography} from "@mui/material";
import {IPropsLogin} from "../../../common/types/auth";
import {FC} from "react";
import {Link} from "react-router-dom";
import {useStyles} from "./style";
import AppLoadingButton from "../../../components/loading-button";

const LoginPage: FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const classes = useStyles()
    const {register, errors, loading} = props
    return (
        <>
            <Typography variant="h2" textAlign='center' fontSize={32}>Авторизация</Typography>
            <Typography variant="body1" marginBottom={3} textAlign='center'>Введите ваш логин и пароль</Typography>
            <TextField
                error={!!errors.email}
                type="email"
                fullWidth={true}
                margin="normal"
                label="Email"
                variant="outlined"
                placeholder="Введите ваш email"
                helperText={errors.email ? `${errors.email.message}` : ''}
                {...register('email')}
            />
            <TextField
                error={!!errors.password}
                type="password"
                fullWidth={true}
                margin="normal"
                label="Password"
                variant="outlined"
                placeholder="Введите ваш пароль"
                helperText={errors.password ? `${errors.password.message}` : ''}
                {...register('password')}
            />
            <AppLoadingButton loading={loading} type="submit" variant="contained">Войти</AppLoadingButton>
            <Typography variant="body1">У вас нет аккаунта?<Link to='/register' className={classes.incitingText}>Регистрация</Link></Typography>
        </>
    );
};

export default LoginPage;