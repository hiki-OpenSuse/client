import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode);
    return {
        root: {
            flexGrow: 1,
            padding: '32px',
        },
        areaChart: {
            marginBottom: 32,
        },
        topCardItem: {
            backgroundColor: `${theme.palette.mode === 'light' ? colors.primary.DEFAULT : colors.primary[600]}`,
            padding: '20px 16px',
            minHeight: 185,
            border: `1px solid ${colors.borderColor}`,
            borderRadius: 12,
        },
        assetName: {
            fontSize: 25,
            fontWeight: 600,
            lineHeight: '30px',
            textTransform: 'capitalize',
        },
        itemDetails: {
            display: 'flex',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            paddingBottom: '35px',
        },
        cardPrice: {
            marginBottom: '8px',
            fontSize: 32,
            fontWeight: 700,
            lineHeight: '48px',
        },
        priceTrend: {
            width: '110px',
            padding: '4px 8px',
            display: 'flex',
            borderRadius: '4px',
            gap: '5px',
            justifyContent: 'center'
        },
        cardCapitalize: {
            color: `${colors.secondary.DEFAULT}`,
            fontWeight: 400,
            fontSize: 18,
            lineHeight: '21px',
        },
        LineChartBlock: {
            backgroundColor: `${theme.palette.mode === 'light' ? colors.primary.DEFAULT : colors.primary[600]}`,
            padding: '20px 16px',
            marginBottom: 32,
            minHeight: 270,
            border: `1px solid ${colors.borderColor}`,
            borderRadius: 12,
        },
        TopPriceRoot: {
            backgroundColor: `${theme.palette.mode === 'light' ? colors.primary.DEFAULT : colors.primary[600]}`,
            padding: '20px 16px',
            border: `1px solid ${colors.borderColor}`,
            borderRadius: 12,
            '& .MuiPaper-root': {
                backgroundColor: 'transparent !important',
                boxShadow: 'none !important',
                backgroundImage: 'none !important'
            }
        }
    };
});