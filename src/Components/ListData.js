import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Tooltip,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deepPurple, green } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { listUsers } from "../Redux/Actions/userActions";
const useStyle = makeStyles({
  headingColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: green[400],
    color: "white",
  },
  stuListColor: {
    backgroundColor: "#FF7F50",
    color: "white",
  },
  tableHeadCell: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
});

const ListData = () => {
  const users = useSelector((state) => state.allusers.users);
  const dispatch = useDispatch();

  const clasess = useStyle();

  //Fetch All Data From API

  const fetchUsers = async () => {
    const response = await axios
      .get("http://localhost:5000/users")
      .catch((error) => {
        console.log(error);
      });

    dispatch(listUsers(response.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <>
      <Box textAlign="center" p={2} className={clasess.stuListColor}>
        <Typography
          variant="h4"
          style={{ fontFamily: "Encode Sans sans-serif" }}
        >
          Employees List
        </Typography>
      </Box>
      <TableContainer component={Paper} mt={-1}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#FF7F50" }} fullWidth>
              <TableCell
                align="center"
                className={clasess.tableHeadCell}
                style={{ color: "white" }}
              >
                No
              </TableCell>
              <TableCell
                align="center"
                className={clasess.tableHeadCell}
                style={{ color: "white" }}
              >
                Name
              </TableCell>
              <TableCell
                align="center"
                className={clasess.tableHeadCell}
                style={{ color: "white" }}
              >
                Email
              </TableCell>
              <TableCell
                align="center"
                className={clasess.tableHeadCell}
                style={{ color: "white" }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((users) => {
              const { id, name, email } = users;
              return (
                <>
                  <TableRow>
                    <TableCell align="center">{id}</TableCell>
                    <TableCell align="center">{name}</TableCell>
                    <TableCell align="center">{email}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit">
                        <IconButton>
                          <Link to="/edit">
                            <EditIcon color="primary"></EditIcon>
                          </Link>
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton>
                          <DeleteIcon color="secondary"></DeleteIcon>
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListData;
