import React from "react";
import {NavLink} from 'react-router-dom';
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginTop: '50px',
    borderTop: '1px solid gray'
  },
  tableHeadCell: {
    fontWeight: 'bold'
  }
});

export const Links = ({links}) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHeadCell}>
          <TableRow>
            <TableCell className={classes.tableHeadCell}>№</TableCell>
            <TableCell className={classes.tableHeadCell} align="left">Origin link</TableCell>
            <TableCell className={classes.tableHeadCell} align="left">Cutted link</TableCell>
            <TableCell className={classes.tableHeadCell} align="left">Open link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {links.map(({from, to, _id}, index) => (
            <TableRow key={_id}>
              <TableCell component="th" scope="row">{index + 1}</TableCell>
              <TableCell align="left">{from}</TableCell>
              <TableCell align="left">{to}</TableCell>
              <TableCell align="left">
                <NavLink to={`/detail/${_id}`}>
                  Open
                </NavLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}