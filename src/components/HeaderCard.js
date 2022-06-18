import { Typography, Paper, Grid } from "@mui/material";

const HeaderCard = ({ title, number }) => {
  return (
    <Grid item md={3} xs={12}>
      <Paper sx={{ height: "10rem", padding: 5 }} elevation={5}>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1rem",
            color: "gray",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: "light",
          }}
        >
          {number}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default HeaderCard;
