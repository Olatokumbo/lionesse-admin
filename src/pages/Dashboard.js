import { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import HeaderCard from "../components/HeaderCard";
import { totalUsers } from "../firebase/user";
import { totalClients } from "../firebase/client";
const Dashboard = () => {
  const [users, setUsers] = useState(0);
  const [clients, setClients] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const total1 = await totalUsers();
      const total2 = await totalClients();
      setUsers(total1);
      setClients(total2);
    };
    getData();
  }, []);
  return (
    <Grid container component="main" spacing={6}>
      <HeaderCard title="Total Users" number={users} />
      <HeaderCard title="Total Clients" number={clients} />
    </Grid>
  );
};

export default Dashboard;
