import { Typography, Box, Grid, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { deepPurple, green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import React from "react";
const usestyle = makeStyles({
  headingColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: green[400],
    color: "white",
  },
});

const EditData = () => {
  const classes = usestyle();

  const navigate = useNavigate();

  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        justifyContent="center"
        spacing={4}
        center
      >
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
            <Typography variant="h4">Edit Form</Typography>
          </Box>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="id"
                  name="id"
                  fullWidth
                  autoFocus
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="Name"
                  label="Name"
                  name="empname"
                  id="empname"
                  fullWidth
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="Email"
                  label="Email"
                  name="empemail"
                  id="empemail"
                  fullWidth
                  autoFocus
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                variant="contained"
                type="button"
                fullWidth
                color="primary"
              >
                Save
              </Button>
            </Box>
            <Box m={3} textAlign="center">
              <Button variant="contained" onClick={() => navigate("/")}>
                Back To Home
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default EditData;
