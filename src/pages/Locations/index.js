import { Box, Button, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase/config";
import { Link } from "react-router-dom";
import { locationDelete } from "../../firebase/location";
import { LocationColumns } from "../../utils/table-columns";

const columns = [
  ...LocationColumns,
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <Button
          color="error"
          onClick={async () => await locationDelete(params.row.id)}
        >
          Delete
        </Button>
      );
    },
  },
];

const Users = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const unsub = firestore
      .collection("locations")
      .onSnapshot((querySnapshot) => {
        var data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setLocations(data);
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
          Locations
        </Typography>
        <Link to="/create-location" style={{ textDecoration: "none" }}>
          <Button>New Location</Button>
        </Link>
      </Box>
      <div style={{ height: "70vh", width: "100%" }}>
        <DataGrid
          rows={locations}
          columns={columns}
          pageSize={50}
          rowsPerPageOptions={[50, 100]}
          //   checkboxSelection
        />
      </div>
    </Grid>
  );
};

export default Users;
