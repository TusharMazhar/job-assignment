import React from 'react'
import {  useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import '../App.css'

const PostDetails = ()=> {
    let { postId } = useParams();
    let posts = useSelector((state)=>state.setPosts.posts)
    const postDetails = posts.filter(post=>post.id==postId)

  return (
    <div className="App">
       <h1>Post Details Page</h1>
       <div className='Card'>
           <h2 className='title'><span className='font-color-title'>Title: </span> {postDetails[0].title}</h2>
           <h5 className='author'><span className='font-color-author'>Author: </span>{postDetails[0].author}</h5>
           <h5 className='description'><span className='font-color-title'>Description: </span>{postDetails[0].body}</h5>

           <div style={{border:'2px solid green',padding:'10px'}}>
                <h3>Comments:</h3>
                <ul>
                    {
                      postDetails[0].commentsList.map((comnt,index)=>{
                         return (
                            <li key={index.toString()}>{comnt.body}</li>
                         )
                      })
                    }
                </ul>
           </div>
       </div>
    </div>
  )
}

export default PostDetails
