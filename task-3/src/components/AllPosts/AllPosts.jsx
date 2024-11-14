import { useEffect, useState } from "react";
import axios from 'axios';
import { Card } from "../Card/Card";


export const AllPosts = (props) => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    let usersId;
    let usersPosts = [];
    

    const getUserData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                    setUsers(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
    }


    const getPostsData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(function (response) {
                    setPosts(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
    }


    useEffect(() => {
        getUserData();
        getPostsData();

        usersId = users?.map(user => user.id)

        for (const i in usersId) {
            let userPosts = posts?.filter(post => post.userId === usersId[i]);
            let userName = users?.filter(user => user.id === usersId[i]).map(user => user.name);
            usersPosts.push((userName[0], userPosts));
        }
    }, []);


    return (
        <div className="card">
            <div className="card-container">
                {usersPosts.map((usrName, usrPosts) => {
                    console.log(usrName);
                    return usrPosts.map(post => (
                        <Card authorName={usrName} title={post.title} body={post.body} />
                    ))
                })}
            </div>
        </div>
    )
}
