import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {createPost} from '../redux/actions/postActions'

const Postform = props => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        body:'',
        title:''
    })

    const onChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        const {body, title} = form
        e.preventDefault();

        const post = {
            title,body
        }

        //Call Action
        dispatch(createPost(post))
    }

    return (
        <div>
            <h1>Add Form</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="">Title:</label>
                    <input name="title" type="text" onChange={onChange} value={form.title} />
                </div>
                <br/>
                <div>
                    <label htmlFor="">Body:</label>
                    <textarea name="body" onChange={onChange} value={form.body} />
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}



export default Postform
