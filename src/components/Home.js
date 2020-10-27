import React from 'react'
import Users from './Users'
import Grid from '@material-ui/core/Grid'

const Home = () => {
  return (
    <div>
      <Grid item xs={11}>
        <Users />
      </Grid>
    </div>
  )
}

export default Home
