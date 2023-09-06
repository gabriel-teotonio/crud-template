import { useParams } from "react-router-dom";
import "./styles.css";
import { api } from "../../lib/axio";
import { useEffect, useState } from "react";

export function OnePost() {
  const [post, setPost] = useState({})
  const { id } = useParams()

  const getDataPost =  async () => {
    try {
      const response = await api.get(`/posts/${id}`) 
      setPost(response.data)
    } catch (error) {
      console.log('erro na requisição', error)  
    }
  }

  useEffect(() => {
    getDataPost()
  },[]) 

  return (
    <article className="onePostContainer">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </article>
  );
}
