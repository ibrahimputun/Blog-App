import React from "react";
import { Card, CardContent, Typography, CardMedia, CardActions, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { btnStyle } from "../styles/globalStyles";
import { useSelector } from "react-redux";


export default function BlogCard({ blog, page, onDelete, onLike, onReadMoreClick }) {
  const { id } = useSelector((state) => state.auth);
  const { currentPage } = useSelector((state) => state.blog);

  const handleLike = () => {
    onLike(blog._id, currentPage);
  };

  const fav = blog.likes.includes(id);

  const handleDelete = () => {
    onDelete(blog._id, page);
  };
  const truncateContent = (content, maxWords) => {
    const words = content.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    } else {
      return content;
    }
  };
  

  return (
    <Card
      sx={{
        maxWidth: 400,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "350px",
        height: "450px",
        p: 2,
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {blog.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Published Date : {blog.updatedAt}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Content : {truncateContent(blog.content, 1)}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt="error"
        height="140"
        image={blog.image}
        sx={{ objectFit: "contain" }}
      />

      <CardActions
        sx={{
          width: "100%",
          justifyContent: "space-between",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "6px" }}>
          <Button
            onClick={() => onReadMoreClick(blog._id)}
            variant="contained"
            style={{
              width: "100%",
              backgroundColor: "purple",
              borderRadius: "4px",
            }}
          >
            Read More
          </Button>
          {blog.userId === id && (
            <Button
              onClick={handleDelete}
              variant="contained"
              style={{
                width: "100%",
                backgroundColor: "red",
                margin: "5px",
                borderRadius: "7px",
              }}
            >
              DELETE
            </Button>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <FavoriteIcon sx={btnStyle} onClick={handleLike} style={fav ? { color: "red" } : { color: "black" }} />
          {blog.likes.length}
          <CommentIcon sx={btnStyle} onClick={() => {}} />
          {blog.comments.length}
          <VisibilityIcon sx={btnStyle} onClick={() => {}} />
          {blog.countOfVisitors}
        </div>
      </CardActions>
    </Card>
  );
}
