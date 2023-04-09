import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {tokens} from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return (
        {
            iconBlock: {
                paddingRight: '37px',
                display: 'flex'
            },
            themIcon: {
                marginRight: '45px !important'
            }
        }
    )
})