import { useForm } from "react-hook-form";
import "./styles.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useParams } from "react-router-dom";
import { api } from "../../lib/axio";
import { useEffect } from "react";

const postSchema = yup.object({
  title: yup.string().required("preecha o campo título"),
  description: yup.string().required("preencha o campo descrição"),
  content: yup.string().required("preencha o campo conteudo"),
})

export function Form({ title, textButton, onAction }) {
  const { id } = useParams()
  const { register, handleSubmit, reset, formState:{errors} } = useForm({
    resolver: yupResolver(postSchema)
  })

  const getDataUpdate = async () => {
    try {
      const response = await api.get(`/posts/${id}`)
      reset(response.data)
    } catch (error) {
      console.log("erro na requisição", error)
    }
  }

  useEffect(() => {
    if(!!id) getDataUpdate()
  },[])

  return (
    <form onSubmit={handleSubmit(onAction)}>
      <h2>{title}</h2>
      <div className="field">
        <input placeholder="Título" {...register("title")}/>
        <span>{errors.title?.message}</span>
      </div>

      <div className="field">
        <input placeholder="Descrição" {...register("description")}/>
        <span>{errors.description?.message}</span>
      </div>

      <div className="field">
        <textarea placeholder="Conteúdo" {...register("content")}/>
        <span>{errors.content?.message}</span>
      </div>

      <button type="submit">{textButton}</button>
    </form>
  );
}
