// Home.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { Link } from "react-router";

export default function Home () {

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
        console.log('data: ', res.data.data.users);
        setUserList(res.data.data.users);
      } catch (err) {
        console.error('유저 리스트를 불러오는 데 실패했습니다. ', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>홈</h1>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>

        {userList.map((user) => (
          <Link key={user.id} to={`/member/${user.id}`} style={{textDecoration: 'none'}}>
            <UserCard key={user.id} user={user} />
          </Link>
        ))}
      </div>
    </div>
  );
};