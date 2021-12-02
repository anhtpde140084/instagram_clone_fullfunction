import React, { Component } from 'react'
import Post from '../Post/Post'

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            postArray:[],
            progressBar: "",
         }
    }

    componentDidMount(){
        this.getPost();
    }

    getPost=()=>{ //API
        // const thisContext=this;
        let data=[
            {
                "postId":"123456",
                "userName":"anindya",
                "postImageURL":"https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "timeStamp":"12345",
                "likes":"1234"
            },
            {
                "postId":"123456",
                "userName":"anindya",
                "postImageURL":"https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "timeStamp":"12345",
                "likes":"1234"
            },
            {
                "postId":"123456",
                "userName":"anindya",
                "postImageURL":"https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "timeStamp":"12345",
                "likes":"1234"
            }
        ];
        this.setState({postArray: data})
    }
    render() {
        return (
            <div>
                {
                    this.state.postArray.map((item,index)=>(
                        <Post id={item.postId} userName={item.userName} postImage={item.postPath} likes={item.likeCount} />
                    ))
                }
                        
            </div>
        )
    }
}
