import { Route, Routes } from "react-router-dom";
import { Feed } from "./pages/Feed";
import { CreatePost } from "./pages/CreatePost";
import { UpdatePost } from "./pages/UpdatePost";
import { OnePost } from "./pages/OnePost";


export const Router = () => {
   return (
      <Routes>
         <Route path="/" element={<Feed />} />
         <Route path="/createPost" element={<CreatePost />} />
         <Route path="/updatePost" element={<UpdatePost />} />
         <Route path="/post/1" element={<OnePost />} />
      </Routes>  
   )
}