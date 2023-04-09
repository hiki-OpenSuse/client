import { Theme } from '@mui/material';
import { tokens } from '../../theme';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode);

    return {
        root: {
            paddingTop: 45,
            alignItems: 'center'
        },
        item: {
            display: 'flex',
            justifyContent: 'center'
        },
        itemWrapper: {
            width: 450,
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: `${theme.palette.mode === 'light' ? colors.primary.DEFAULT : colors.primary[600]}`,
            border: `1px solid ${colors.borderColor}`,
            borderRadius: 12,
            rowGap: '20px'
        },
        assetInfo: {
            fontSize: 20
        },
        assetNameInfo: {
            fontSize: 20,
            fontWeight: 600,
            marginRight: 2
        },
        buttonBlock: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '6rem',
            columnGap: '8rem'
        },
        button: {
            width: 300,
            padding: '20px 3px'
        }
    };
})