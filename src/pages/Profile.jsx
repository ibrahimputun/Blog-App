import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

const ProfilePage = () => {

  const { user } = useSelector((state) => state.auth);

  // Veri yapılarını kontrol etmek için kullanılacak yardımcı fonksiyon
  const isValidString = (value) => typeof value === 'string' && value.trim() !== '';

  return (
    <Box mt={5}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: "center" }}>
            <Avatar
              alt="User Avatar"
              src={user.avatar} // Kullanıcının avatarının URL'sini veya dosya yolunu girin
              sx={{ width: 100, height: 100, margin: "auto" }}
            />
            <Typography variant="h5" mt={2}>
              {isValidString(user.name) ? user.name : 'Invalid Name'}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" mt={1}>
              {isValidString(user.email) ? user.email : 'Invalid Email'}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" mt={1}>
              {isValidString(user.age) ? `Age: ${user.age}` : 'Invalid Age'}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" mt={1}>
              {isValidString(user.gender) ? `Gender: ${user.gender}` : 'Invalid Gender'}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" mt={1}>
              {isValidString(user.city) ? `City: ${user.city}` : 'Invalid City'}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" mt={1}>
              {isValidString(user.phone) ? `Phone: ${user.phone}` : 'Invalid Phone'}
            </Typography>
           
            <Box mt={2}>
              <Button variant="outlined" onClick={() => { /* Kullanıcı profilini düzenleme işlevi */ }}>
                Edit Profile
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
