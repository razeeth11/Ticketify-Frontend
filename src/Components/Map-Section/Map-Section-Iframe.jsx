import { Grid } from "@mui/material";

export const MapSectionIframe = () => {
  return (
    <Grid sx={{height:{xs:"250px",md:"400px"}}}>
        <iframe
          width="100%"
          height={"100%"}
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps handsets</a>
        </iframe>
    </Grid>
  );
};
