import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

export default function CommentForm({ onSubmit }) {
  const [commentText, setCommentText] = useState("");

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(commentText);
    setCommentText(""); // Yorum gönderildikten sonra temizleme
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Enter your comment here"
        variant="outlined"
        fullWidth
        value={commentText}
        onChange={handleCommentChange}
      />
      <Button type="submit" variant="contained" style={{ marginTop: "8px" }}>
     Comment
      </Button>
    </form>
  );
}
