import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Footer from "../components/Footer";
import useBlogCalls from "../hooks/useBlogCalls";

const MyBlogs = () => {
  const { id } = useSelector((state) => state.auth);
  const { myblog: data } = useSelector((state) => state.blog);

  const { getMyBlog, likeBlog } = useBlogCalls();

  const navigate = useNavigate();

  useEffect(() => {
    getMyBlog(id);
  }, [getMyBlog, id]);

  const truncateContent = (content, maxWords) => {
    if (!content) {
      return null;
    }

    const words = content.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    } else {
      return content;
    }
  };

  return (
    <div style={{ paddingTop: "70px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {data.length ? (
        data.map((item) => (
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
              marginBottom: "20px", // Kartlar arasında boşluk ekledik
            }}
            key={item._id}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Published Date: {item?.updatedAt}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Content: {truncateContent(item?.content, 1)}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              alt="error"
              height="140"
              image={item?.image}
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
              <div
                style={{
                  display: " flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Button
                  onClick={() => navigate(`/BlogDetails/${item?._id}`)}
                  variant="contained"
                  style={{
                    width: "100%",
                    backgroundColor: "purple",
                    borderRadius: "5px",
                  }}
                >
                  Read More
                </Button>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CommentIcon onClick={() => {}} />
                {item?.comments?.length}
                <VisibilityIcon onClick={() => {}} />
                {item?.countOfVisitors}
              </div>
            </CardActions>
          </Card>
        ))
      ) : (
        <Grid style={{ width: "300px" }}>
          <Button
            onClick={() => navigate("/newblog")}
            variant="contained"
            style={{
              width: "100%",
              backgroundColor: "purple",
              borderRadius: "7px",
            }}
          >
            ADD BLOG
          </Button>
        </Grid>
      )}
      <Footer />
    </div>
  );
};

export default MyBlogs;
