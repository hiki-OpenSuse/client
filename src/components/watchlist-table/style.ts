import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        minWidth: 650
    },
    row: {
        '&:last-child td, &:last-child th': { 
            border: 0
        } 
    },
    columnDelete: {
        display: 'flex !important',
        alignItems: 'center',
        columnGap: '10px !important'
    }
})