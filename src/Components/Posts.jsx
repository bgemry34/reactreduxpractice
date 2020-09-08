import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../redux/actions/postActions'

const Posts = (props) =>{
    const {fetchPosts, posts} = props;



    useEffect(()=>{
        fetchPosts();
    },[fetchPosts])

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

const mapStateToProps = state => ({
    posts: state.posts.items,
})

export default connect(mapStateToProps, {fetchPosts})(Posts)
