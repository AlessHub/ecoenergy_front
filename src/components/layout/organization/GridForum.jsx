import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Pagination } from "@mui/material";
import { deleteForum, forum } from "../../../services/user-service";
import axios from "axios";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  color: theme.palette.text.primary,
  maxWidth: 1000,
  margin: "auto",
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  padding: theme.spacing(2),
}));

const handleDelete = (id) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  

  deleteForum(id,{headers})
    .then((response) => {
      console.log("Deleted succesfully");
    })
    .catch((error) => {
      console.error(error);
    });
};


const StyledCardMedia = styled(CardMedia)({
  width: 75,
});

export default function MediaCard(props) {
  const [forums, setForums] = useState([]);
  const [page, setPage] = useState(1);

  const baseUrl = import.meta.env.VITE_IMAGES_URL;

  useEffect(() => {
    const getForums = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };

        const { data } = await forum({ headers });
        setForums(data);
      } catch (error) {
        console.error(error);
      }
    };
    getForums();
  }, []);

  const forumList = forums
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
    .slice((page - 1) * 5, page * 5);

  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3, marginTop: "2rem" }}>

  {forumList.map((forum) => (
    <React.Fragment key={forum.id}>
      <Link to={`/${forum.id}`}>
        <StyledCard
          sx={{
            display: "flex",
            gap: "1rem",
            textAlign: "justify",
            height: "12rem",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              borderColor: "main.primary",
              boxShadow: "none",
              color: "main.tertiary",
            },
          }}
        >
          <StyledCardMedia
            component="img"
            image={baseUrl + forum.image}
            alt="image"
            sx={{ width: "10rem", height: "10rem" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingLeft: "1rem",
            }}
          >
            <Typography variant="h6">{forum.title}</Typography>
            <Typography>{forum.description}</Typography>
            <Typography>@{forum.autor}</Typography>
            <Typography variant="caption">
              {(() => {
                const created = new Date(forum.created_at);
                const now = new Date();
                const diffMs = now - created;
                const diffMins = Math.floor(diffMs / (1000 * 60));
                const diffHours = Math.floor(diffMins / 60);
                if (diffMins < 60) {
                  return `${diffMins} min ago`;
                } else {
                  return `${diffHours} h ago`;
                }
              })()}
            </Typography>
          </Box>
        </StyledCard>
      </Link>
      {props.buttons && props.buttons.length > 0 && (
        <Box sx={{ display: "flex", mt: 2, mb:2, gap: 2 }}>
          {props.buttons.map((button) =>
            React.cloneElement(button, {
              onClick: () => handleDelete(forum.id),
            })
          )}
        </Box>
      )}
    </React.Fragment>
  ))}
  <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
    <Pagination
      count={Math.ceil(forums.length / 5)}
      page={page}
      onChange={(event, value) => setPage(value)}
    />
  </Box>
</Box>


  );
}
