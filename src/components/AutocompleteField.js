
import {Autocomplete, TextField} from "@mui/material";
import useLists from "../hooks/useLists";

const AutocompleteField = ({ name, ...rest }) => {
  const list = useLists(name);
  return (
    <Autocomplete
      {...rest}
      disablePortal
      id="combo-box-demo"
      options={list}
      // sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          id="outlined-basic"
          label={name.charAt(0).toUpperCase() + name.slice(1)}
          variant="outlined"
          margin="normal"
          size="small"
        />
      )}
    />
  );
};

export default AutocompleteField
