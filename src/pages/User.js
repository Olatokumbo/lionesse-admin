import { Avatar, Grid, Typography, Box, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { getUserById } from "../firebase/user";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await getUserById(params.userId);
      setUser(data);
    };

    getData();
  }, [params.userId]);
  return (
    <Grid>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        User Info
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
            {user ? `${user.firstName} ${user.lastName}`: "Loading..."}
          </Typography>
          <Typography>Email: {user ? `${user.email}`: "Loading..."}</Typography>
          <Typography>Role: {user ? `${user.role}`: "Loading..."}</Typography>
        </Paper>
      </Box>
    </Grid>
  );
};

export default User;
