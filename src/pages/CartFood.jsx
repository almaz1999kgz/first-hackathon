import {
  Box,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect } from "react";

import { Link } from "react-router-dom";

const CartFood = () => {
  return (
    <div>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Category</TableCell>
            <TableCell align="center">Count</TableCell>
            <TableCell>SubPrice</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <img alt="" width={30} />
            </TableCell>
            <TableCell>{}</TableCell>
            <TableCell>{}</TableCell>
            <TableCell>{}</TableCell>
            <TableCell align="center">
              <input type="number" min={1} max={100} />
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Typography variant="h5">TotalPrice: </Typography>
        <Button variant="outlined" component={Link} to="/">
          Buy
        </Button>
      </Box>
    </div>
  );
};

export default CartFood;
