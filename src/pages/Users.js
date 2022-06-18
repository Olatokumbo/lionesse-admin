import { Box, Button, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "email",
    headerName: "Email",
    type: "number",
    width: 90,
  },
  {
    field: "phone",
    headerName: "Phone",
    sortable: false,
    width: 160,
  },
];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

const Users = () => {
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
        <Button>Create User</Button>
      </Box>
      <div style={{ height: "70vh", width: "100%" }}>
        <DataGrid
          rows={[]}
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
