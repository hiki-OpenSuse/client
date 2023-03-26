import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {tokens} from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return (
        {
            root: {
                background: `${colors.primary.DEFAULT} !important`,
                borderBottom: `1px solid ${colors.borderColor}`,
                boxShadow: 'none !important'
            },
            toolbar: {
                padding: '25px 45px',
                justifyContent: 'space-between'
            },
            iconBlock: {
                paddingRight: '37px',
                borderRight: `1px solid ${colors.borderColor}`
            },
            themIcon: {
                marginRight: '45px !important'
            },
            searchBlock: {
                display: 'flex',
                maxHeight: '45px',
                borderRadius: '8px',
                marginLeft: '28px',
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