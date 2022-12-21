import React from 'react'
import {  useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import '../App.css'

export default function PostDetails() {
    let { postId } = useParams();
    let posts = useSelector((state)=>state.setPosts.posts)
    
    const postDetails = posts.filter(post=>post.id==postId)
    console.log('postDetails',postDetails[0])
    postDetails[0].commentsList.map(comnt=>{

      console.log('comnt',comnt.body)
    })
  return (
    <div className="App">
       <h1>Post Details Page</h1>
       <div className='Card'>
           <img src='https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg' alt=''  height='400px' width='100%' />
           <h2 className='title'><span className='font-color-title'>Title: </span> {postDetails[0].title}</h2>
           <h5 className='author'><span className='font-color-author'>Author: </span>{postDetails[0].author}</h5>
           <h5 className='description'><span className='font-color-title'>Description: </span>{postDetails[0].body}</h5>

           <div style={{border:'2px solid green',padding:'10px'}}>
                <h3>Comments:</h3>
                <ul>
                    {
                      postDetails[0].commentsList.map(comnt=>{
                         return (
                           <div>
                              <li key={comnt.id}>{comnt.body}</li>
                           </div>
                         )
                      })
                    }
                </ul>
           </div>

           
       </div>

       
    </div>
  )
}
