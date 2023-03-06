import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useForm} from "react-hook-form";
import jwt_decode from "jwt-decode";
import { postForum } from "../services/user-service";


function PostForum() {

  const navigate = useNavigate();

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    
  
    const handleSubmitBook = async (formData) => {
      const token = localStorage.getItem("token");
        const headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          };
        const response = await axios.post('http://127.0.0.1:8000/api/forums' ,formData,{ headers })
       
        
        console.log("response form ",response.data);
     };
  
    const customSubmit = (response) => {

      const token = localStorage.getItem("token");
      const decodedToken = jwt_decode(token);
      const user_id = decodedToken.sub;
    
      // console.log("data antes de ser transformada",data)
      const formData = new FormData();
      formData.append('title', response.title);
      formData.append('description', response.description);
      formData.append('autor', response.autor);
      formData.append('image', response.image[0], response.image[0].name);
      // formData.append('user_id', data.user_id);
      formData.append('user_id', user_id);
      
      // console.log('data',data)
      handleSubmitBook(formData);
      
      console.log("dataForm",formData);
      swal("Submitted form!", "Successful validation", "success");
      // navigate('/forum')
    };
  
    return (
      <>
        <div className="form-book" id="form">
          <div className="container-formbook">
            <form onSubmit={handleSubmit(customSubmit)} className="form-react" encType="multipart/form-data">
              <h2>Post a Subject on Forum</h2>
              <div className="form-control">
                <label>Title</label>
                <input
                  className="place"
                  placeholder="Enter name"
                  type="text"
                  {...register("title", {
                    required: true,
                    maxLength: 200,
                  })}
                />
                {errors.title?.type === "required" && (
                  <small className="fail">The field cannot be empty</small>
                )}
                {errors.title?.type === "maxLength" && (
                  <small className="fail">Maximum characters are eight</small>
                )}
              </div>
  
              <div className="form-control">
                <label>Description</label>
                <input
                  className="place message"
                  placeholder="Enter your message"
                  type="text"
                  {...register("description", {
                    required: true,
                    minLength: 5,
                    maxLength: 1000,
                  })}
                />
                {errors.description?.type === "required" && (
                  <small className="fail">The field cannot be empty</small>
                )}
                {errors.description?.type === "minLength" && (
                  <small className="fail">The minimum characters must be 5</small>
                )}
                {errors.description?.type === "maxLength" && (
                  <small className="fail">
                    The maximum characters should be 200
                  </small>
                )}
              </div>
  
              <div className="form-control">
                <label>Autor</label>
                <input
                  className="autor"
                  placeholder="Enter name"
                  type="text"
                  {...register("autor", {
                    required: true,
                    maxLength: 200,
                  })}
                />
                {errors.autor?.type === "required" && (
                  <small className="fail">The field cannot be empty</small>
                )}
                {errors.autor?.type === "maxLength" && (
                  <small className="fail">Maximum characters are eight</small>
                )}
              </div>


              
  
             
  
              <div className="form-control">
                <label>Image</label>
                <input
                  className="place"
                  placeholder="Enter price"
                  type="file"
                  {...register("image", {
                    required: true,
                  })}
                />
                {errors.image?.type === "required" && (
                  <small className="fail">The field cannot be empty</small>
                )}
               
              </div>
  
              <div className="form">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}

export default PostForum
