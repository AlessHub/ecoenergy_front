// import React from "react";
// import { useForm } from "react-hook-form";
// import { TextField, Button, Grid } from "@material-ui/core";
// import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   formPost: {
//     padding: theme.spacing(3),
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.1)",
//   },
//   formControl: {
//     marginBottom: theme.spacing(3),
//   },
//   input: {
//     display: "none",
//   },
// }));

// function PostForm() {
//   const classes = useStyles();
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const customSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className={classes.formPost}>
//       <h2>Post a Subject on Forum</h2>
//       <form onSubmit={handleSubmit(customSubmit)} encType="multipart/form-data">
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <TextField
//               className={classes.formControl}
//               variant="outlined"
//               label="Title"
//               fullWidth
//               {...register("title", {
//                 required: true,
//                 maxLength: 200,
//               })}
//               error={errors.title}
//               helperText={
//                 errors.title?.type === "required" ? "The field cannot be empty" :
//                 errors.title?.type === "maxLength" ? "Maximum characters are eight" :
//                 ""
//               }
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               className={classes.formControl}
//               variant="outlined"
//               label="Description"
//               fullWidth
//               multiline
//               rows={4}
//               {...register("description", {
//                 required: true,
//                 minLength: 5,
//                 maxLength: 1000,
//               })}
//               error={errors.description}
//               helperText={
//                 errors.description?.type === "required" ? "The field cannot be empty" :
//                 errors.description?.type === "minLength" ? "The minimum characters must be 5" :
//                 errors.description?.type === "maxLength" ? "The maximum characters should be 200" :
//                 ""
//               }
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               className={classes.formControl}
//               variant="outlined"
//               label="Author"
//               fullWidth
//               {...register("author", {
//                 required: true,
//                 maxLength: 200,
//               })}
//               error={errors.author}
//               helperText={
//                 errors.author?.type === "required" ? "The field cannot be empty" :
//                 errors.author?.type === "maxLength" ? "Maximum characters are eight" :
//                 ""
//               }
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <input
//               accept="image/*"
//               className={classes.input}
//               id="contained-button-file"
//               type="file"
//               {...register("image", {
//                 required: true,
//               })}
//             />
//             <label htmlFor="contained-button-file">
//               <Button
//                 variant="contained"
//                 color="default"
//                 startIcon={<CloudUploadIcon />}
//                 component="span"
//               >
//                 Upload Image
//               </Button>
//             </label>
//             {errors.image?.type === "required" && (
//               <small className="fail">The field cannot be empty</small>
//             )}
//           </Grid>

//           <Grid item xs={12}>
//             <Button
