import { Avatar, Grid, Typography, Box, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { getClientById } from "../../firebase/client";
import { useParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { SalesColumns } from "../../utils/table-columns";
import Rating from '@mui/material/Rating';
const Client = () => {
  const params = useParams();
  const [client, setUser] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await getClientById(params.clientId);
      setUser(data);
    };

    getData();
  }, [params.clientId]);
  return (
    <Grid>
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Client
      </Typography>
      <Grid container component="main" spacing={4}>
        <Grid item md={5} xs={12}>
          <Paper
            sx={{ padding: 5, display: "flex", flexDirection: "row" }}
            elevation={5}
          >
            <Avatar
              sx={{ width: 100, height: 100, marginRight: 5 }}
              src={`https://picsum.photos/id/10/2500/1667`}
            />
            <Grid sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", marginBottom: 1 }}
              >
                {client
                  ? `${client.firstName} ${client.lastName}`
                  : "Loading..."}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{ fontWeight: "600", color: "gray", marginRight: 1 }}
                >
                  Email:
                </Typography>
                <Typography>
                  {client ? `${client.email}` : "Loading..."}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{ fontWeight: "600", color: "gray", marginRight: 1 }}
                >
                  Phone:
                </Typography>
                <Typography>
                  {client ? `${client.phone}` : "Loading..."}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{ fontWeight: "600", color: "gray", marginRight: 1 }}
                >
                  Rating:
                </Typography>
                <Typography>
                  <Rating name="half-rating" value={client ? `${client.ratings}` : "Loading..."} precision={0.5} readOnly />
                </Typography>
              </Box>
            </Grid>
          </Paper>
        </Grid>

        <Grid item md={7} xs={12}>
          <Paper sx={{ height: "11.3rem", padding: 5 }} elevation={5}>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "1rem",
                color: "gray",
              }}
            >
              {/* Total {capitalizeFirst(title)} */}
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "2.5rem",
                fontWeight: "light",
              }}
            >
              {/* {total} */}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box style={{ height: "70vh", width: "100%", paddingTop: 10 }}>
        <Typography fontWeight="bold" fontSize={20}>
          Purchases
        </Typography>
        <DataGrid
          rows={[]}
          columns={SalesColumns}
          pageSize={50}
          rowsPerPageOptions={[50, 100]}
          //   checkboxSelection
        />
      </Box>
    </Grid>
  );
};

export default Client;
