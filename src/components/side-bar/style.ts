import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {tokens} from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return (
        {
            navBlock: {
                width: '100%',
                borderBottom: `1px solid ${colors.borderColor}`,
            },
            brand: {
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '30px 15px',
                cursor: 'pointer'
            },
            brandTitle: {
                color: `${theme.palette.mode === 'dark' ? colors.white.DEFAULT : colors.black.DEFAULT}`
            },
            navList: {
                marginBottom: '55px !important'
            },
            navItem: {
                width: '215px !important',
                '&:hover': {
                    backgroundColor: '#1900D5 !important',
                    borderRadius: '4px',
                    color: '#fff',
                    '& .MuiSvgIcon-root': {
                        color: `${colors.white.DEFAULT} !important`
                    }
                },
            },
            active: {
                backgroundColor: '#1900D5 !important',
                color: '#fff !important',
                borderRadius: '4px !important',
                '& .MuiSvgIcon-root': {
                    color: `${colors.white.DEFAULT} !important`
                }
            }
        }
    )
})