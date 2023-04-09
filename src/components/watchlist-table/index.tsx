import { FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Delete } from '@mui/icons-material';
import { useStyles } from './style';
import { IconButton } from '@mui/material';

 const WatchlistTableComponente = (props: any): JSX.Element => {
  const { data, handleClick } = props
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.root} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Имя</TableCell>
            <TableCell align="center">Цена</TableCell>
            <TableCell align="center">Рейтинг</TableCell>
            <TableCell align="center">Общее предложение</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((element: any) => (
            <TableRow
              key={element.name}
              className={classes.row}
            >
              <TableCell component="th" scope="row" className={classes.columnDelete}>
                  <IconButton onClick={() => handleClick(element.id)}>
                    <Delete/>
                  </IconButton>
                {element.name}
              </TableCell>
              <TableCell align="center">{element.current_price}</TableCell>
              <TableCell align="center">{element.market_cap_rank}</TableCell>
              <TableCell align="center">{element.total_supply}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default WatchlistTableComponente