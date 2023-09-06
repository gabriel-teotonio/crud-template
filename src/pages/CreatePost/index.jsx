import { useNavigate } from "react-router-dom";
import { Form } from "../../components/Form";
import "./styles.css";
import { api } from "../../lib/axio";

export function CreatePost() {
  const navigate = useNavigate()

  const handleCreatePost = (data) => {
    api.post("/posts", data)
    navigate("/")
  }

  return (
    <div>
      <Form onAction={handleCreatePost} title={"Criar Post"} textButton={"Criar"}/>
    </div>
  );
}
