import { useEffect, useState } from "react";
import axios from 'axios';
import { Card } from "../Card/Card";
import './AllPosts.css'


export const AllPosts = (props) => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    const [usersId, setUsersId] = useState([]);
    const [usersPosts, setUsersPosts] = useState([]);

    const [loading, setLoading] = useState(true);
    

    const getUserData = async () => {
        await axios.get('https://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                    setUsers(response.data);
                    setLoading(false);
                })
                .catch(function (error) {
                    console.log(error);
                })
    }


    const getPostsData =  async () => {
        await axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(function (response) {
                    setPosts(response.data);
                    setLoading(false);
                })
                .catch(function (error) {
                    console.log(error);
                })
    }


    useEffect(() => {
        getUserData();
        getPostsData();

        setUsersId(users?.map(user => user.id));
        
        let list = []
        for (const i in usersId) {
            let userPosts = posts?.filter(post => post.userId === usersId[i]);
            let userName = users?.filter(user => user.id === usersId[i]).map(user => user.name);

            for (const j in userPosts){
                console.log(userPosts[j].title);
                list.push([userName[0], userPosts[j].title, userPosts[j].body]);
            }
        }
        setUsersPosts(list);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000)
      
        return () => {
            clearTimeout(timer)
        }
    }, []);

    
    if (loading){
        return (<></>)
    }
    
    return (
        <div className="card-all">
            {usersPosts.map(post => (
                <Card authorName={post[0]} title={post[1]} body={post[2]} />
            ))}
        </div>
    )
}
