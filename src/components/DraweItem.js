import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
const DrawerItem = ({ icon, text, open }) => {
  return (
    <Link
      to={`/${text.toLowerCase()}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <ListItem disablePadding sx={{ display: "block" }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default DrawerItem;
