import { Box, Button, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/config";
import { Link } from "react-router-dom";
import { userDelete } from "../firebase/user"; 

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First name", width: 100 },
  { field: "lastName", headerName: "Last name", width: 100 },
  {
    field: "email",
    headerName: "Email",
    type: "number",
    width: 160,
  },
  {
    field: "password",
    headerName: "Password",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    sortable: false,
    width: 150,
  },
  {
    field: "role",
    headerName: "Role",
    sortable: false,
    width: 160,
  },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <div>
          <Link to="/view-user" style={{ textDecoration: "none" }}>
            <Button color="primary">View</Button>
          </Link>
          <Button
            color="error"
            onClick={async () => await userDelete(params.row.id)}
          >
            Delete
          </Button>
        </div>
      );
    },
  },
];

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const unsub = firestore.collection("users").onSnapshot((querySnapshot) => {
      var data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setUsers(data);
    });
    return unsub;
  }, []);

  return (
    <Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Typography fontWeight="bold" fontSize={25}>
          Users
        </Typography>
        <Link to="/create-user" style={{ textDecoration: "none" }}>
          <Button>New User</Button>
        </Link>
      </Box>
      <div style={{ height: "70vh", width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={50}
          rowsPerPageOptions={[50, 100]}
          checkboxSelection
        />
      </div>
    </Grid>
  );
};

export default Users;
