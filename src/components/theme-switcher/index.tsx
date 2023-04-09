import {useContext} from 'react';
import {LightMode, DarkMode, NotificationsNone} from '@mui/icons-material';
import {Grid, IconButton, useTheme} from "@mui/material";
import {ColorModeContext} from "../../theme";
import { useStyles } from './style';

const ThemeSwitcherComponent = () => {
    const theme = useTheme()
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()

    return (
        <Grid className={classes.iconBlock}>
            <IconButton className={classes.themIcon} onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (<DarkMode/>) : (<LightMode/>)}
            </IconButton>
            <IconButton>
                <NotificationsNone/>
            </IconButton>
        </Grid>
    );
}

export default ThemeSwitcherComponent