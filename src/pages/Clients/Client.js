import { Avatar, Grid, Typography, Box, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { getClientById } from "../../firebase/client";
import { useParams } from "react-router-dom";
import firebase, { firestore } from "../../firebase/config";

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
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Client Info
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", padding: "5rem" }}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <Avatar
            sx={{ width: 100, height: 100 }}
            src={`https://picsum.photos/id/10/2500/1667`}
          />
          <Typography variant="h4" sx={{ fontWeight: "bold", marginY: "1rem" }}>
            {client ? `${client.firstName} ${client.lastName}`: "Loading..."}
          </Typography>
          <Typography>Email: {client ? `${client.email}`: "Loading..."}</Typography>
          <Typography>Role: {client ? `${client.role}`: "Loading..."}</Typography>
        </Paper>
      </Box>
    </Grid>
  );
};

export default Client;
