import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Comments from './Comments'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

const useStyles = makeStyles({
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bolder',
    textTransform: 'uppercase',
  },
})

const Posts = () => {
  const classes = useStyles()
  const { id } = useParams()
  const [post, setPost] = useState([])

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts`
    axios(url)
      .then((res) => res.data)
      .then((posts) => posts.filter((it) => it.userId === +id))
      .then((data) => setPost(data))
  }, [id])

  return (
    <div>
      {post.map((item) => {
        return (
          <Card>
            <CardContent>
              <Typography className={classes.text} component="p" gutterBottom>
                Post: {item.title}
              </Typography>
              <Typography variant="body2" component="p">
                Body: {item.body}
              </Typography>
              <hr />
              <Comments id={item.id} />
              <hr />
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

export default Posts
