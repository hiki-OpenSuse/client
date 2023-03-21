import {TextField, Button, Typography} from "@mui/material";
import {IPropsLogin} from "../../../common/types/auth";
import {FC} from "react";
import {Link} from "react-router-dom";
const LoginPage: FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const {setPassword, setEmail} = props
    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Авторизация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите ваш логин и пароль</Typography>
            <TextField fullWidth={true} margin="normal" label="Email" variant="outlined" placeholder="Введите ваш email" onChange={(e) => setEmail(e.target.value)}/>
            <TextField type="password" fullWidth={true} margin="normal" label="Password" variant="outlined" placeholder="Введите ваш пароль" onChange={(e) => setPassword(e.target.value)}/>
            <Button type="submit" sx={{fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">Войти</Button>
            <Typography sx={{fontFamily: 'Poppins'}} variant="body1">У вас нет аккаунта?<Link to='/register' className="incitingText">Регистрация</Link></Typography>
        </>
    );
};

export default LoginPage;