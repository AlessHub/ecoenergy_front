import React,{useState,useEffect} from 'react'
import PostComment from './PostComment';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getAllComment } from '../../../services/user-service';

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
  
  const StyledCardMedia = styled(CardMedia)({
    width: 75,
  });

function Comments({id}) {

    const [comments, setComments] = useState([]);  

  useEffect(() => {
    const getComments = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };

        const { data } = await getAllComment({ headers });
        setComments(data);
      } catch (error) {
        console.error(error);
      }
    };
    getComments();
  }, []);



  return (

   <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3, marginTop: "2rem", minHeight:'50vh' }}>
    <Typography sx={{fontSize:'1.2rem', fontWeight:'900'}}>COMMENTS</Typography>
      {comments.map((comment) => (
        
          <StyledCard
            key={comment.id}
            sx={{
              display: "flex",
              gap: "1rem",
              textAlign: "justify",
              height: "12rem",
            }}
          >
           
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                paddingLeft: "1rem",
              }}
            >
              <Typography variant="h6">{comment.content}</Typography>
              

              <Typography>@{comment.autor}</Typography>

              <Typography variant="caption">
                {(() => {
                  const created = new Date(comment.created_at);
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
        
      ))}

      <PostComment id={id}/>
    </Box>
  )
}

export default Comments
