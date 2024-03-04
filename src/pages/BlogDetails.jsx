import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {  Container,  Grid,  Typography,  Avatar,  Box,  Button,} from "@mui/material";
import { DoneAll } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { btnStyle } from "../styles/globalStyles";
import useBlogCalls from "../hooks/useBlogCalls";
import { useNavigate } from "react-router-dom";
import MyFormModal from "./MyFormModal";

function BlogDetails() {
  const { paramId } = useParams();
  const { deleteBlog, getBlogById, likeBlog } = useBlogCalls();
  const [open, setOpen] = useState(false);

  const { imageUrl, title, content, blogId, userId, updatedAt, likes, comments, countOfVistors } = useSelector((state) => state.blog);
  const { id } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleDelete = () => {
    deleteBlog(blogId);
    navigate("/myblogs");
  };

  useEffect(() => {
    getBlogById(paramId);
  }, [paramId]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleUpdateBlog = () => {
    handleOpen();
  };

  const handleLike = () => {
    likeBlog(blogId);
  };

  const isLiked = likes.includes(id);

  return (
    <div>
      <MyFormModal
        blogDetails={{ imageUrl, title, content, blogId, userId, updatedAt }}
        handleOpen={handleOpen}
        setOpen={setOpen}
        open={open}
      />
      <Container
        component="main"
        maxWidth="md"
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={`${imageUrl}`}
          alt="Logo"
          style={{ maxWidth: "100%", marginRight: 16 }}
        />

        <Grid
          container
          spacing={2}
          mt={2}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Avatar sx={{ width: 60, height: 60, backgroundColor: "purple" }}>
              <DoneAll />
            </Avatar>
          </Grid>
          <Grid item>
            <Typography variant="h5"></Typography>
            <Typography variant="body2">{updatedAt}</Typography>
          </Grid>
        </Grid>

        <Box sx={{ marginY: 4 }}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {content}
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          {userId && userId === id ? (
            <>
              <Button
                onClick={handleUpdateBlog}
                variant="contained"
                sx={{
                  width: "40%",
                  height: "2rem",
                  backgroundColor: "purple",
                  borderRadius: "5px",
                  marginRight: "5px",
                }}
              >
                Update
              </Button>
              <Button
                onClick={handleDelete}
                variant="contained"
                sx={{
                  width: "40%",
                  backgroundColor: "red",
                  height: "2rem",
                  borderRadius: "5px",
                }}
              >
                DELETE
              </Button>
            </>
          ) : null}
        </Grid>

        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "10px" }}>
            <FavoriteIcon
              sx={{ ...btnStyle, marginBottom: "10px" }}
              onClick={handleLike}
              style={isLiked ? { color: "red" } : { color: "black" }}
            />
            <Typography component="div" sx={{ marginBottom: "2px", marginRight: "10px" }}>
              {likes.length}
            </Typography>

            <CommentIcon sx={{ ...btnStyle, marginBottom: "10px", marginRight: "10px" }} onClick={() => {}} />
            <Typography component="div" sx={{ marginBottom: "4px", marginRight: "10px" }}>
              {comments.length}
            </Typography>

            <VisibilityIcon sx={{ ...btnStyle, marginBottom: "10px" }} onClick={() => {}} />
            <Typography component="div">{countOfVistors}</Typography>
          </div>
                </Container>
              </div>
            );
          }

export default BlogDetails;
