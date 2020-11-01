import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { IUser } from '../interfaces'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  text: {
    fontSize: 16,
  },
  head: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

const Users: React.FC = () => {
  const classes = useStyles()
  const [user, setUser] = useState<IUser[]>([])

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users`
    axios(url)
      .then((res) => res.data)
      .then((data) => setUser(data))
  }, [])

  return (
    <div>
      <Typography className={classes.head} paragraph>
        Users List
      </Typography>
      <Grid container spacing={4}>
        {user.map((users) => {
          return (
            <Grid item sm={3}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography className={classes.text} gutterBottom>
                    Name: {users.name}
                  </Typography>
                  <Typography className={classes.text}>Email: {users.email}</Typography>
                  <Button variant="outlined" color="primary" size="medium">
                    <Link to={`details/${users.id}`}>Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Users
