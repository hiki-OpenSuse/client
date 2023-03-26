import React, {FC, useContext} from 'react';
import {AppBar, Box, Grid, IconButton, InputBase, Toolbar, Typography, useTheme} from "@mui/material";
import {useAppSelector} from "../../utils/hook";
import {LightMode, DarkMode, Search, NotificationsNone, MenuOutlined} from '@mui/icons-material';
import {ColorModeContext} from "../../theme";
import {useStyles} from "./styles";
import FlexBetween from "../flex-between";
import {ITopBarProps} from "../../common/types/top-bar";

const TopBarComponent: FC<ITopBarProps> = (props: ITopBarProps): JSX.Element => {
    const {isOpen, setIsOpen} = props
    const user = useAppSelector((state) => state.auth.user)
    const {isLogged} = useAppSelector((state) => state.auth)
    const theme = useTheme()
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()
    return (
        <AppBar className={classes.root} position='static'>
            <Toolbar className={classes.toolbar}>
                <FlexBetween>
                    <IconButton sx={{mr: 3}}>
                        <MenuOutlined onClick={() => setIsOpen(!isOpen)}/>
                    </IconButton>
                    <Typography variant='h3'>
                        Welcome, {isLogged === true ? 'Vlad' : ''}
                    </Typography>
                </FlexBetween>
                <Box display='flex' alignItems='center'>
                    <Grid className={classes.iconBlock}>
                        <IconButton className={classes.themIcon} onClick={colorMode.toggleColorMode}>
                            {theme.palette.mode === 'dark' ? (<DarkMode/>) : (<LightMode/>)}
                        </IconButton>
                        <IconButton>
                            <NotificationsNone/>
                        </IconButton>
                    </Grid>
                    <Grid className={classes.searchBlock}>
                        <IconButton className={classes.searchIcon}>
                            <Search/>
                        </IconButton>
                        <InputBase className={classes.searchInput} placeholder='Поиск'/>
                    </Grid>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default TopBarComponent;