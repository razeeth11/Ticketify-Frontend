import {
  Avatar,
  Box,
  Button,
  Drawer,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { flexColumn, flexRow, flexRowSpaceBetween } from "../../commonStyles";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const navItems = ["home", "packages", "company", "contact"];
const authButtonStyles = {
  background: "#eb662b",
  color: "#FFFFFF",
  textTransform: "capitalize",
  borderRadius: "50px",
  padding: "5px 20px",
  width: "min-content",
};
export const TopNavBar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const matchesmd = useMediaQuery(theme.breakpoints.down("md"));
  const [menuOpen, setMenuOpen] = useState(false);

  const menuOpenFunc = () => {
    setMenuOpen(true);
  };

  return (
    <Grid
      container
      sx={{
        ...flexRowSpaceBetween,
        background: "#FFFFFF",
        color: "#05073c",
        p: { xs: "15px 20px" },
        cursor: "pointer",
        boxShadow: "0.5px 0.5px 10px lightgrey",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <Grid item xs={12} md={6} sx={{ ...flexRowSpaceBetween }}>
        {matchesmd && (
          <Box sx={{ ...flexRow, justifyContent: "end" }}>
            <MenuRoundedIcon onClick={menuOpenFunc} />
            <SlideMenu
              navItems={navItems}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
          </Box>
        )}
        <Typography
          onClick={() => navigate("/")}
          sx={{
            fontSize: {
              xs: "24px",
              md: "28px",
            },
            fontWeight: 600,
            letterSpacing: "3px",
          }}
        >
          Tourify.com
        </Typography>

        {matchesmd && (
          <Box sx={{ ...flexRow }}>
            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
            <Button sx={authButtonStyles}>Login</Button>
          </Box>
        )}
      </Grid>
      <Grid item xs={0} md={6}>
        {!matchesmd && (
          <Box sx={{ ...flexRow, justifyContent: "end", gap: "30px" }}>
            {navItems.map((item, index) => (
              <Link
                key={index}
                sx={{
                  textDecoration: "none",
                  textTransform: "capitalize",
                  color: "text.primary",
                }}
              >
                {item}
              </Link>
            ))}
            <Button sx={authButtonStyles}>Login</Button>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

const SlideMenu = ({ navItems, menuOpen, setMenuOpen }) => {
  return (
    <Drawer open={menuOpen} onClose={() => setMenuOpen(false)}>
      <Box
        sx={{
          width: 250,
          backgroundColor: "background.primary",
          height: "100%",
          p: "20px",
        }}
      >
        <Box sx={{ ...flexRowSpaceBetween }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Button sx={authButtonStyles}>Login</Button>
        </Box>
        <Box sx={{ ...flexColumn, justifyContent: "end", gap: "30px", mt: 5 }}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              sx={{
                fontSize: "18px",
                textDecoration: "none",
                textTransform: "capitalize",
                color: "text.primary",
                cursor: "pointer",
              }}
            >
              {item}
            </Link>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};
