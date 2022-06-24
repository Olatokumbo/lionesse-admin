import {
  Grid,
  Typography,
  TextField,
  Box,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Autocomplete,
} from "@mui/material";

import { useState } from "react";
import { productCreate } from "../../firebase/product";
import { useNavigate } from "react-router-dom";
import AutocompleteField from "../../components/AutocompleteField";
import useLists from "../../hooks/useLists";

const CreateSchedule = () => {
  //   const locations = useLists("locations");
  //   const clients = useLists("clients");

  //   console.log(locations);

  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("LIONESSE");
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(2);

  const submit = async () => {
    try {
      await productCreate(name, brand, minPrice, maxPrice);
      return navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid>
      <Typography fontWeight="bold" fontSize={25}>
        Add New Client Schedule
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "40rem",
        }}
      >
        <AutocompleteField
          name="locations"
          onChange={(e) => console.log(e.target.textContent)}
          getOptionLabel={(option) => option.name}
        />
        <AutocompleteField
          name="clients"
          onChange={(e) => console.log(e.target.textContent)}
          getOptionLabel={(option) => option.firstName + " " + option.lastName}
        />
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Facial" />
          <FormControlLabel control={<Checkbox />} label="RF" />
          <FormControlLabel control={<Checkbox />} label="Cocoon" />
          <FormControlLabel control={<Checkbox />} label="EMS" />
        </FormGroup>
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

export default CreateSchedule;
