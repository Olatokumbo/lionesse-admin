import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { firestore } from "../../firebase/config";
import { ClientColumns } from "../../utils/table-columns";
import { clientDelete } from "../../firebase/client";

const columns = [
  ...ClientColumns,
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <div>
          <Link
            to={`/client/${params.row.id}`}
            style={{ textDecoration: "none" }}
          >
            <Button color="primary">View</Button>
          </Link>
          <Button
            color="error"
            onClick={async () => await clientDelete(params.row.id)}
          >
            Delete
          </Button>
        </div>
      );
    },
  },
];

const Clients = () => {
  const [clients, setUsers] = useState([]);
  useEffect(() => {
    const unsub = firestore
      .collection("clients")
      .onSnapshot((querySnapshot) => {
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
          Clients
        </Typography>
        <Link to="/create-client" style={{ textDecoration: "none" }}>
          <Button>New Clients</Button>
        </Link>
      </Box>
      <div style={{ height: "70vh", width: "100%" }}>
        <DataGrid
          rows={clients}
          columns={columns}
          pageSize={50}
          rowsPerPageOptions={[50, 100]}
          checkboxSelection
        />
      </div>
    </Grid>
  );
};

export default Clients;
