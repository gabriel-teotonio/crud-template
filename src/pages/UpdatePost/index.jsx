import { useEffect } from "react";
import { Form } from "../../components/Form";
import { api } from "../../lib/axio";
import { useNavigate, useParams } from "react-router-dom";

export function UpdatePost() {
    const { id } = useParams()
    const navigate = useNavigate()

    const handleUpdatePost = (data) => {
        api.put(`/posts/${id}`, data)
        navigate("/")
    }

    return (
        <div>
            <Form 
                onAction={handleUpdatePost} 
                title={"Atualizar Post"} 
                textButton={"Editar"}
            />
        </div>
    )
}