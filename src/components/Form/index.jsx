import { useForm } from "react-hook-form";
import "./styles.css";
import { api } from "../../lib/axio";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom";

const postSchema = yup.object({
  title: yup.string().required("preecha o campo título"),
  description: yup.string().required("preencha o campo descrição"),
  content: yup.string().required("preencha o campo conteudo"),
})

export function Form({ title, textButton }) {
  const navigate = useNavigate()
  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(postSchema)
  })

  const handleCreatePost = (data) => {
    api.post("/posts", data)
    navigate("/")
    console.log("criado com sucesso!")
  }

  return (
    <form onSubmit={handleSubmit(handleCreatePost)}>
      <h2>{title}</h2>
      <div className="field">
        <input placeholder="Título" {...register("title")}/>
        {errors.title?.message}
      </div>

      <div className="field">
        <input placeholder="Descrição" {...register("description")}/>
        {errors.description?.message}
      </div>

      <div className="field">
        <textarea placeholder="Conteúdo" {...register("content")}/>
        {errors.content?.message}
      </div>

      <button type="submit">{textButton}</button>
    </form>
  );
}
