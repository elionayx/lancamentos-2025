import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1f80e0" }}>
      <Toolbar sx={{ padding: "1rem 2rem" }}>
        <Typography variant="h6" sx={{ flexGrow: 1, fontSize: "1.5rem" }}>
          Lançamentos 2025
        </Typography>
        <Button color="inherit" component={Link} to="/" sx={{ fontSize: "1.1rem" }}>
          Início
        </Button>
        <Button color="inherit" component={Link} to="/filmes" sx={{ fontSize: "1.1rem" }}>
          Filmes
        </Button>
        <Button color="inherit" component={Link} to="/series" sx={{ fontSize: "1.1rem" }}>
          Séries
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Navigation;
