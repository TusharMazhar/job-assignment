import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPosts } from '../actions/index'
import { getApiResponse } from '../apis/apiCall'
import { Link } from "react-router-dom";
import { Spin } from 'antd';
import { v4 as uuid } from 'uuid';


export default function PostList() {
    let posts = useSelector((state)=>state.setPosts.posts)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
          try {
            const posts = await getApiResponse('posts?_page=0&_limit=20')
            const comments = await getApiResponse('comments')
            const users = await getApiResponse('users')
            const postArray = []
            posts.data.map(post => {
               const data = comments.data.filter(data=>data.postId===post.userId)
    
               let userName = ''
    
               users.data.forEach(user=>{
                
                  if(user.id===post.userId){
      
                     userName = user.name
                  }
               })
    
               postArray.push({
                 id: uuid(),
                 title: post.title,
                 commnets: data.length,
                 author: userName,
                 commentsList: data,
                 body:post.body
               })
            })
            dispatch(setPosts(postArray)) 
          } catch (e) {
            console.log(e)
          }
        }
    
        fetchData();
      }, []);

      const removePost = (id)=>{
        const dataset = posts.filter(postId=>postId.id!==id)
        dispatch(setPosts(dataset)) 
     }


  return (
    <div>
        <div style={{textAlign:'center'}}>
        <h1>Post List</h1>
            {
              posts.length===0?<Spin size='large' />: <ul>

              {
                  posts.map(item=> 
                  <div key={item.title} style={{backgroundColor:'#A9A9A9',padding:'10px',margin:'10px'}}>
              
                        <Link to={`/post/${item.id}`}   >
                            <h3>Title:{item.title}</h3> 
                        </Link>
                        <p>Comments: {item.commnets}</p> 
                        <p>Author: {item.author}</p> 
                        <div>
                            <button onClick={()=>removePost(item.id)} style={{backgroundColor:'red,color:white'}}>Delete</button>
                        </div>
                  </div>)
              }
            </ul>
            }
          </div>
    </div>
  )
}
