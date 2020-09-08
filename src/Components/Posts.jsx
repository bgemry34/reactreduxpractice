import React, { useEffect, useCallback } from 'react'
import {useSelector, shallowEqual, useDispatch} from 'react-redux'
import {fetchPosts} from '../redux/actions/postActions'

const Posts = (prps) =>{
    const dispatch = useDispatch();

    const {posts} = useSelector(state=>({
        posts: state.posts.items,
    }), shallowEqual);

    const initPosts = useCallback(()=>dispatch(fetchPosts()),[dispatch])

    useEffect(()=>{
        initPosts();
        console.log('test')
    },[initPosts])

    const postItems = posts.map(post=>(
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ))

    return (
        <div>
            <h1>Posts</h1>
            {postItems}
        </div>
    )
}

export default Posts
