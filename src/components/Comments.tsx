import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { IComments, PropsId } from '../interfaces'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
    },
    text: {
      fontSize: 14,
    },
    head: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  })
)

const Comments: React.FC<PropsId> = (props) => {
  const classes = useStyles()
  const [comment, setComment] = useState<IComments[]>([])
  const { id } = props

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments`
    axios(url)
      .then((res) => res.data)
      .then((comments) => comments.filter((it: { postId: number }) => it.postId === +id))
      .then((data) => setComment(data))
  })

  return (
    <div>
      <Typography className={classes.head} variant="h1">
        Comments
      </Typography>
      <Grid container spacing={3}>
        {comment.map((comments) => {
          return (
            <Grid item sm={6}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography className={classes.text}>Name: {comments.name}</Typography>
                  <Typography className={classes.text}>Email:{comments.email}</Typography>
                  <Typography className={classes.text}>Comment: {comments.body}</Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Comments
