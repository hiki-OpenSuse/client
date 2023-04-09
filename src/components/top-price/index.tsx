import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { useStyles } from './style';

const TopPriceComponent = (props: any) => {
  const { assets } = props
  const classes = useStyles()

    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell align="center">Цена ($)</TableCell>
            <TableCell align="center">Изменения (%)</TableCell>
            <TableCell align="center">Изменения ($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((element: any) => (
            <TableRow
              key={element.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {element.name}
              </TableCell>
              <TableCell align="center" className={
                element.price_change_24h > 0 ? classes.priceUp : classes.priceDown
                }>{element.current_price}</TableCell>
              <TableCell align="center" className={
                element.price_change_24h > 0 ? classes.priceUp : classes.priceDown
                }>{element.market_cap_change_percentage_24h.toFixed(2)}</TableCell>
              <TableCell align="center" className={
                element.price_change_24h > 0 ? classes.priceUp : classes.priceDown
                }>{element.price_change_24h.toFixed(3)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default TopPriceComponent