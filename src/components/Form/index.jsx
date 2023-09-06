import { useForm } from "react-hook-form";
import "./styles.css";
import { api } from "../../lib/axio";

export function Form({ title, textButton }) {

  const { register, handleSubmit } = useForm()

  const handleCreatePost = (data) => {
    api.post("/posts", data)
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleCreatePost)}>
      <h2>{title}</h2>
      <div className="field">
        <input placeholder="Título" {...register("title")}/>
      </div>

      <div className="field">
        <input placeholder="Descrição" {...register("description")}/>
      </div>

      <div className="field">
        <textarea placeholder="Conteúdo" {...register("content")}/>
      </div>

      <button type="submit">{textButton}</button>
    </form>
  );
}
