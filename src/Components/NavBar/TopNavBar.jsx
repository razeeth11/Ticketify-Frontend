import {
  Avatar,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { flexColumn, flexRow, flexRowSpaceBetween } from "../../commonStyles";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
import NightlightTwoToneIcon from "@mui/icons-material/NightlightTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";

export const navItems = ["home", "packages", "company", "contact"];
const authButtonStyles = {
  background: "#eb662b",
  color: "#FFFFFF",
  textTransform: "capitalize",
  borderRadius: "50px",
  padding: "5px 25px",
  width: "min-content",
};
export const TopNavBar = ({ mode, setMode }) => {
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
        backgroundColor: "background.primary",
        color: "text.primary",
        p: { xs: "15px 20px" },
        cursor: "pointer",
        borderBottom: "1px solid grey",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <Grid item xs={12} md={6} sx={{ ...flexRowSpaceBetween }}>
        <Typography
          sx={{
            fontSize: {
              xs: "24px",
              md: "28px",
              fontWeight: 600,
              letterSpacing: "3px",
            },
          }}
        >
          Ticketify
        </Typography>
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
            <IconButton
              sx={{ color: "text.primary" }}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light" ? (
                <NightlightTwoToneIcon />
              ) : (
                <LightModeTwoToneIcon />
              )}
            </IconButton>
            <Button sx={authButtonStyles}>Login</Button>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
