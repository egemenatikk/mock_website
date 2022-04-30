import React,{useState} from "react";
import axios from "axios";
import './App.css';
import UserList from "./UserList";
import UserProfile from "./UserProfile";
import PostList from "./PostList";
import CommentList from "./CommentList";
import TagList from "./TagList";

function App() {

  const userId = "60d0fe4f5311236168a109d1";
  const postId = "60d21b6467d0d8992e610ce0";
  const tagWord = "cat";

  const [userList, setUserList] = useState(null);
  const linkUserList = "https://dummyapi.io/data/v1/user";

  const [userProfile, setUserProfile] = useState(null);
  const linkUserProfile = "https://dummyapi.io/data/v1/user/"+userId;

  const [postList, setPostList] = useState(null);
  const linkPostList = "https://dummyapi.io/data/v1/post";

  const [userPostList, setUserPostList] = useState(null);
  const linkUserPost= "https://dummyapi.io/data/v1/user/"+userId+"/post";

  const [commentsList, setCommentsList] = useState(null);
  const linkCommentList = "https://dummyapi.io/data/v1/post/"+postId+"/comment";

  const [tagList, setTagList] = useState(null);
  const linkTagList= "https://dummyapi.io/data/v1/tag";

  const [postByTagList, setPostByTagList] = useState(null);
  const linkPostByTag = "https://dummyapi.io/data/v1/tag/"+tagWord+"/post";


  const fetchUserListData = async () => {
    const responseUserList = await axios.get(linkUserList, {
      headers: {
        //write your app-id here, you can get it via signing up to dummyapi website
        "app-id": "",
      },
    });

    setUserList(responseUserList.data.data);
    setUserProfile(null);
    setPostList(null);
    setUserPostList(null);
    setCommentsList(null);
    setTagList(null);
    setPostByTagList(null);
  };

  const fetchUserProfileData = async () => {
    const responseUserProfile = await axios.get(linkUserProfile, {
      headers: {
         //write your app-id here, you can get it via signing up to dummyapi website
        "app-id": "",
      },
    });

    setUserProfile(responseUserProfile.data)
    setUserList(null);
    setPostList(null);
    setUserPostList(null);
    setCommentsList(null);
    setTagList(null);
    setPostByTagList(null);
  }

  const fetchPostListData = async () => {
    const responsePostList = await axios.get(linkPostList, {
      headers: {
         //write your app-id here, you can get it via signing up to dummyapi website
        "app-id": "",
      },
    });

    setPostList(responsePostList.data.data);
    setUserList(null);
    setUserProfile(null);
    setUserPostList(null);
    setCommentsList(null);
    setTagList(null);
    setPostByTagList(null);
  }

  const fetchUserPostData = async () => {
    const responseUserPost = await axios.get(linkUserPost, {
      headers: {
         //write your app-id here, you can get it via signing up to dummyapi website
        "app-id": "",
      },
    });

    setUserPostList(responseUserPost.data.data)
    setUserProfile(null);
    setUserList(null);
    setPostList(null);
    setCommentsList(null);
    setTagList(null);
    setPostByTagList(null);
  }

  const fetchCommentData = async () => {
    const responseCommentList = await axios.get(linkCommentList, {
      headers: {
         //write your app-id here, you can get it via signing up to dummyapi website
        "app-id": "",
      },
    });

    setCommentsList(responseCommentList.data.data);
    setUserProfile(null);
    setUserList(null);
    setPostList(null);
    setUserPostList(null);
    setTagList(null);
    setPostByTagList(null);

  }
  
  const fetchTagList = async () => {
    const responseTagList = await axios.get(linkTagList, {
      headers: {
         //write your app-id here, you can get it via signing up to dummyapi website
        "app-id": "",
      },
    });

    setTagList(responseTagList.data.data);
    setUserList(null);
    setUserProfile(null);
    setPostList(null);
    setUserPostList(null);
    setCommentsList(null);
    setPostByTagList(null);
  }

  const fetchPostByTagData = async () => {
    const responsePostByTagData = await axios.get(linkPostByTag, {
      headers: {
         //write your app-id here, you can get it via signing up to dummyapi website
        "app-id": "",
      },
    });
    setPostByTagList(responsePostByTagData.data.data)
    setUserList(null);
    setUserProfile(null);
    setPostList(null);
    setUserPostList(null);
    setCommentsList(null);
    setTagList(null);

  }

  const [emptyString, setEmptyString] = useState("");

  if(emptyString===""){
    fetchUserListData();
    setEmptyString("notemptyanymore");
  }

  return <div className="outerDiv">
    <div className="buttonsDiv">
      <button className="Appbutton" onClick={fetchUserListData}>Users List</button>
      <button className="Appbutton" onClick={fetchUserProfileData}>Full User Profile</button>
      <button className="Appbutton" onClick={fetchPostListData}>Posts List</button>
      <button className="Appbutton" onClick={fetchUserPostData}>User Posts</button>
      <button className="Appbutton" onClick={fetchCommentData}>Comments List</button>
      <button className="Appbutton" onClick={fetchTagList}>Tag List</button>
      <button className="Appbutton" onClick={fetchPostByTagData}>Post by Tag</button>
    </div>
    
    <UserList userListProp={userList}></UserList>
    <UserProfile userProfileProp={userProfile}></UserProfile>
    <PostList postListProp={postList}></PostList>
    <PostList postListProp={userPostList}></PostList>
    <CommentList commentListProp={commentsList}></CommentList>
    <TagList tagListProp={tagList}></TagList>
    <PostList postListProp={postByTagList}></PostList>
    
  </div>

}

export default App;
