import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";

const muiTextFieldStyle =  {
    width:"100%",
    // Container (Root) Styles
    "& .MuiInputBase-root": {
      borderRadius: "0px",
      padding: "5px",
    },

    // Input Text Styles
    "& .MuiInputBase-input": {
      fontSize: "14px",
      padding: "10px",
      textTransform:"capitalize"
    },

    // Helper Text Styles
    "& .MuiFormHelperText-root": {
      color: "#d32f2f", // Default helper text color (e.g., for errors)
      fontSize: "12px", // Helper text font size
      marginLeft: "5px", // Align with input
    },
  }

  const muiFormButton = {
    background:"#eb662b",
    width:"100%",
    borderRadius:0,
    padding:"10px",
    mt:2,
    textTransform:"capitalize"
  }

export const PackageQueryForm = () => {
  return (
    <Stack>
      <Stack sx={{ gap: "20px",mb:3 }}>
        <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
          You can send your enquiry via the form below.
        </Typography>
        <Typography>Tour Details : skdbkdfsdkhfsdkhfbdskh *</Typography>
      </Stack>
      <form>
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ m: "10px 0" }}>
              <TextField
                variant="outlined"
                placeholder="Name *"
                autoComplete="off"
                sx={muiTextFieldStyle}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ m: "10px 0" }}>
              <TextField
                variant="outlined"
                placeholder="Email *"
                autoComplete="off"
                sx={muiTextFieldStyle}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid xs={12} md={6}>
                <Box sx={{ m: "10px 0" }}>
                  <TextField
                    variant="outlined"
                    placeholder="Your Country *"
                    autoComplete="off"
                    sx={muiTextFieldStyle}
                  />
                </Box>
              </Grid>
              <Grid xs={12} md={6}>
                <Box sx={{ m: "10px 0" }}>
                  <TextField
                    variant="outlined"
                    placeholder="Contact Number *"
                    autoComplete="off"
                    sx={muiTextFieldStyle}
                  />
                </Box>
              </Grid>
              <Grid xs={12} md={6}>
                <Box sx={{ m: "10px 0" }}>
                  <TextField
                    variant="outlined"
                    placeholder="No of Adults *"
                    autoComplete="off"
                    sx={muiTextFieldStyle}
                  />
                </Box>
              </Grid>
              <Grid xs={12} md={6}>
                <Box sx={{ m: "10px 0" }}>
                  <TextField
                    variant="outlined"
                    placeholder="No of Children *"
                    autoComplete="off"
                    sx={muiTextFieldStyle}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ m: "10px 0" }}>
              <TextField
                variant="outlined"
                placeholder="Enquiry Subject *"
                autoComplete="off"
                sx={muiTextFieldStyle}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ m: "10px 0" }}>
              <TextField
                variant="outlined"
                placeholder="Your Message *"
                autoComplete="off"
                sx={muiTextFieldStyle}
              />
            </Box>
          </Grid>
          <Button variant="contained" sx={muiFormButton}>
            Send Query
          </Button>
        </Grid>
      </form>
    </Stack>
  );
};
