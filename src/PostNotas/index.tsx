import { useContext } from "react"
import { CartContext } from "../Context/post"
import { Post } from "./style"


interface itemProps{
    id:any,
    title:string,
    description:string
}



export function PostNotas(){
    const  {post, RemovePost}:any= useContext(CartContext)

    return(
        <Post>
            {post.map((posts:itemProps)=>(
                <div className="post">
                    <span className="title">{posts.title}</span>
                    <div className="descri">
                        <span >{posts.description}</span>
                    </div>
                    <button className="button-remove" onClick={e=>RemovePost(posts.id)}>x</button>
                </div>
                ))}
        </Post>
    )
}