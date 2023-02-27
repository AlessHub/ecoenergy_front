import React from "react";
import NavLoggedIn from "../components/layout/navigation/Navbar/NavLoggedIn";
import NewFilePost from "../components/layout/navigation/NewPost/NewPost";
import Footer from "../components/layout/navigation/Footer";


const NewPostView = () => {
    return (
        <>
        <NavLoggedIn/>
        <NewFilePost/>
        <Footer/>
        </>
    )
}
export default NewPostView