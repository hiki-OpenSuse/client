import React, {FC} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsRegister} from "../../../common/types/auth";
import {Link} from "react-router-dom";

const RegisterPage: FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    const {setPassword, setEmail, setRepeatPassword, setFirstName, setUserName} = props
    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Регистрация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите данные для регистрации</Typography>
            <TextField onChange={(e) => setFirstName(e.target.value)} fullWidth={true} margin="normal" label="Имя" variant="outlined" placeholder="Введите ваш имя"/>
            <TextField onChange={(e) => setUserName(e.target.value)} fullWidth={true} margin="normal" label="UserName" variant="outlined" placeholder="Введите ваш UserName"/>
            <TextField onChange={(e) => setEmail(e.target.value)} fullWidth={true} margin="normal" label="Email" variant="outlined" placeholder="Введите ваш email"/>
            <TextField onChange={(e) => setPassword(e.target.value)} type="password" fullWidth={true} margin="normal" label="Password" variant="outlined" placeholder="Введите ваш пароль"/>
            <TextField onChange={(e) => setRepeatPassword(e.target.value)} type="password" fullWidth={true} margin="normal" label="Password" variant="outlined" placeholder="Повторите ваш пароль"/>
            <Button type="submit" sx={{fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">регистрация</Button>
            <Typography sx={{fontFamily: 'Poppins'}} variant="body1">У вас нет аккаунта?<Link to='/login' className="incitingText">Авторизация</Link></Typography>
        </>
    );
};

export default RegisterPage;