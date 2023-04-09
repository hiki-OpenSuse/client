import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {tokens} from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return (
        {
            searchBlock: {
                display: 'flex',
                maxHeight: '45px',
                borderRadius: '8px',
                backgroundColor: `${colors.primary[600]}`,
                border: `${theme.palette.mode === 'light' ? `1px  solid ${colors.borderColor}` : 'none'}`
            },
            searchIcon: {
                '&:hover': {
                    'backgroundColor': 'transparent !important'
                }
            },
            searchInput: {
                padding: '12px 18px'
            }
        }
    )
})