import { useEffect, useState } from 'react';
import { Card } from '../../components/Card'
import './styles.css'
import {api} from "../../lib/axio"

export function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    api.get("/posts")
      .then((res) => {
        setPosts(res.data)
      })
      .catch((err) => console.log(err, "erro na requisição"))
    }, [])
    
    const handleDeletePost = (id) => {
      api.delete(`/posts/${id}`)
      setPosts(posts.filter(post => post.id !== id))
      console.log("exluido com sucesso!")
    }
    
  return (
    <div className="feedContainer">
      {
        posts.length <= 0 ? (<p>Nenhum post publicado</p>)
        :(
          posts.map((post) => (
            <Card 
            key={post.id} 
            post={post} 
            onDeletePost={handleDeletePost}
            />
          ))
        )
      }
    </div>
  );
}
