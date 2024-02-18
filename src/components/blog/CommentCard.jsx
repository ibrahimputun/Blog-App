import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function CommentCard({ comment }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2">{comment.text}</Typography>
        {/* Gerekirse diğer comment bilgilerini ekleyebilirsiniz */}
      </CardContent>
    </Card>
  );
}
