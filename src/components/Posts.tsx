import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import axios from "axios";
import Comments from "./Comments";
import { IUseParams, IPosts } from "../interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      fontSize: 16,
      color: "black",
      fontWeight: "bolder",
      textTransform: "uppercase",
    },
  })
);

const Posts: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<IUseParams>();
  const [post, setPost] = useState<IPosts[]>([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    axios(url)
      .then((res) => res.data)
      .then((posts) =>
        posts.filter((it: { userId: number }) => it.userId === +id)
      )
      .then((data) => setPost(data));
  }, [id]);

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
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default Posts;
