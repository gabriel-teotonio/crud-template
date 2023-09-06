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
    
    
  return (
    <div className="feedContainer">
      {
        posts.length <= 0 ? (<p>Nenhum post publicado</p>)
        :(
          posts.map((post) => (
            <Card key={post.id} post={post}/>
          ))
        )
      }
    </div>
  );
}
