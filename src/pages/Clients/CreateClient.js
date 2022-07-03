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
  Switch,
  FormControlLabel,
  Rating,
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
  const [sex, setSex] = useState("MALE");
  const [callCenter, setCallCenter] = useState(true);
  const [clientClass, setClientClass] = useState("A");
  const [ratings, setRatings] = useState(3);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const submit = async () => {
    try {
      await clientCreate(
        firstName,
        lastName,
        email,
        age,
        sex,
        callCenter,
        clientClass,
        ratings,
        phone,
        address
      );
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
          type="number"
          onChange={(e) => setAge(e.target.value)}
          size="small"
        />
        <FormControl margin="normal">
          {/* <InputLabel id="demo-simple-select-disabled-label">Comapny Role</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            title="Sex"
            margin="normal"
            label="Gender"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            size="small"
          >
            <MenuItem value={"MALE"}>Male</MenuItem>
            <MenuItem value={"FEMALE"}>Female</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          control={
            <Switch
              defaultChecked
              value={callCenter}
              onChange={(e) => setCallCenter(e.target.value)}
            />
          }
          label="Call Center"
        />

        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          margin="normal"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          size="small"
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">Client Class</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={clientClass}
            label="Client Class"
            size="small"
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
          label="Phone"
          variant="outlined"
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          size="small"
        />

        <Rating
          name="simple-controlled"
          value={ratings}
          onChange={(_event, newValue) => {
            setRatings(newValue);
          }}
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
