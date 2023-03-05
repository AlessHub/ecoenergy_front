import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Container, Box } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AvatarPlaceholder from "../../../../assets/avatar_template.png";

export default function Item({ item }) {
  const baseUrl = import.meta.env.VITE_IMAGES_URL;
  return (
    <>
      <Container
        sx={{
          p: { xs: 0, sm: 0, md: 0, xl: 0 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              height="200"
              image={baseUrl+item.image}
            />
            <Box
              sx={{
                position: "absolute",
                top:0,
                textAlign:'left',
                width: "100%",
                color: "black",
                padding: "10px",
              }}
            >
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="body2">Subtitle</Typography>
              <Typography variant="body2">Subtitle</Typography>
              <Typography variant="body2">Subtitle</Typography>
              
            </Box>
          </Box>
        </Card>
      </Container>
    </>
  );
}
