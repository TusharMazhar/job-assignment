import React from 'react'
import {  useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'

export default function PostDetails() {
    let { postId } = useParams();
    let posts = useSelector((state)=>state.setPosts.posts)
    
    const postDetails = posts.filter(post=>post.id==postId)
    console.log('postDetails',postDetails[0])
  return (
    <div>post {postDetails[0].title}</div>
  )
}
