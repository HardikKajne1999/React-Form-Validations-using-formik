import { useState } from "react";
import CommentForm from "./CommentForm";
export default function ShowComments(){
    let [comments,setComments] = useState([{username:'@sample',remarks:'great',rating:4,email:'hardik@gmail.com'}]);
    function addNewComment(comment){
        setComments(currentData => [...currentData,comment])
    }
    return (
        <>
        <div>
        <h1 className="font-bold text-3xl">All Comments</h1>
        {comments.map((comment,index) => {
            return(
            <div className="p-4 border-black border-2 w-fit rounded-xl" key={index}>
                <h2 className="font-bold ">Remarks: {comment.remarks}</h2>
                <h2 className="font-bold ">Rating: {comment.rating}</h2>
                <h2 className="font-bold ">Username: {comment.username}</h2>
                <h2 className="font-bold ">Email: {comment.email}</h2>
            </div>
            )
        })}
        </div>
        <CommentForm addNewComment={addNewComment}/>
        </>
    )
}