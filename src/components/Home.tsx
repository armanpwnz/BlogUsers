import React from "react";
import Grid from "@material-ui/core/Grid";
import Users from "./Users";

const Home = () => {
  return (
    <div>
      <Grid item xs={11}>
        <Users />
      </Grid>
    </div>
  );
};

export default Home;
