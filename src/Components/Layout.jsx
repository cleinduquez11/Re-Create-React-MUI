import { Grid, Box, GlobalStyles } from "@mui/material";
import "./App.css";
import ButtonAppBar from "./NavBar";
import Feed from "./Feed";

const Layout = () => {
  return (
    <>
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#EDEEEB" },
        }}
      />
      <ButtonAppBar />

      <Grid container justifyContent="center" textAlign="center" gap={1}>
        <Grid sm={1}>
          <Box
            mt={2}
            display={{ xs: "none", sm: "block" }}
            width="auto"
            height={300}
          ></Box>
        </Grid>

        <Grid xs={10} sm={7}>
          <Box height={500} width="auto" mt={6}>
            <Feed />
          </Box>
        </Grid>
        <Grid sm={2}>
          <Box
            display={{ xs: "none", sm: "block" }}
            height={300}
            width="auto"
            mt={2}
          ></Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
