import {FC} from 'react';
import {AppBar, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import {MenuOutlined} from '@mui/icons-material';
import {useStyles} from "./styles";
import FlexBetween from "../flex-between";
import {ITopBarProps} from "../../common/types/top-bar";
import ThemeSwitcherComponent from '../theme-switcher';
import SearchComponent from '../search';

const TopBarComponent: FC<ITopBarProps> = (props: ITopBarProps): JSX.Element => {
    const {isOpen, setIsOpen, isNonMobile} = props
    const classes = useStyles()
    return (
        <AppBar className={classes.root} position='static'>
                <Toolbar className={classes.toolbar}>
                <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item>
                        <FlexBetween>
                            <IconButton sx={{mr: 3}}>
                                <MenuOutlined onClick={() => setIsOpen(!isOpen)}/>
                            </IconButton>
                            <Typography variant='h3'>
                                Welcome, {sessionStorage.getItem('name')}
                            </Typography>
                        </FlexBetween>
                    </Grid>
                        {isNonMobile && (
                            <Grid item sm={3} lg={9} display='flex' justifyContent='flex-end' alignItems='center'>
                                <ThemeSwitcherComponent/>
                                <SearchComponent/>
                            </Grid>
                        )}
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default TopBarComponent;