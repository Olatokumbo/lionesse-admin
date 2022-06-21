import {
    Grid,
    Typography,
    TextField,
    Box,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    Button,
  } from "@mui/material";
  import { useState } from "react";
  import { clientCreate } from "../../firebase/client";
  import { useNavigate } from "react-router-dom";
  
  const CreateClient = () => {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("");
    const [callCenter, setCallCenter] = useState("");
    const [clientClass, setClientClass] = useState("");
    const [memberId, setMemberId] = useState("");
    const [phone, setPhone] = useState("");

  
    const submit = async () => {
      try {
        await clientCreate(firstName, lastName, email, age, sex, callCenter, clientClass, memberId, phone);
        return navigate("/clients");
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <Grid>
        <Typography fontWeight="bold" fontSize={25}>
          Create Client
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "40rem",
          }}
        >
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            // sx={{ marginX: 3 }}
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // sx={{ marginX: 3 }}
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Age"
            variant="outlined"
            margin="normal"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Sex"
            variant="outlined"
            margin="normal"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Call Center"
            variant="outlined"
            margin="normal"
            value={callCenter}
            onChange={(e) => setCallCenter(e.target.value)}
            size="small"
          />

        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Client Class</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={clientClass}
            label="Client Class"
            onChange={(e) => setClientClass(e.target.value)}
        >
            <MenuItem value={"A"}>A</MenuItem>
            <MenuItem value={"B"}>B</MenuItem>
            <MenuItem value={"C"}>C</MenuItem>
            <MenuItem value={"D"}>D</MenuItem>
            <MenuItem value={"E"}>E</MenuItem>
        </Select>
        </FormControl>
          
          <TextField
            id="outlined-basic"
            label="Member Id"
            variant="outlined"
            margin="normal"
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}
            // sx={{ marginX: 3 }}
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            size="small"
          />

          
          <Button
            sx={{ marginY: "1rem", width: "fit-content" }}
            variant="contained"
            onClick={submit}
          >
            Submit
          </Button>
        </Box>
      </Grid>
    );
  };
  
  export default CreateClient;
  