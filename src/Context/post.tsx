import { createContext, useContext, useState } from "react";


export const CartContext = createContext({});

interface itemProps{
    id:any,
    title: string,
    description: string
}


export function CartProvider({children}:any){
    const [post, setPost] = useState<itemProps[]>([
        {id:1, title:'Trabalho', description:'Fazer proxima semana' }
    ])

    function AddPost(id:number, title:string, description: string){
        const copyPost = [...post]
        copyPost.push({id:id, title:title, description:description})
        setPost(copyPost)
    }

    function RemovePost(id:any){
        let xxx = post.filter(e=>e.id!=id)
        setPost(xxx)
    }

    return(
        <CartContext.Provider value={{post, AddPost, RemovePost}}>
            {children}
        </CartContext.Provider>
    )

}