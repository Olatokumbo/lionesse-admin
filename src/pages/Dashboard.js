import { Grid, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Grid
      container
      component="main"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography>Main Dashboard Page</Typography>
    </Grid>
  );
};

export default Dashboard;
