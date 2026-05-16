import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const DEFAULT_USER_ID = 15;

const getUserProfile = async () => {

  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/users/${DEFAULT_USER_ID}`,
  );
  return response.data.data; 
};

function App() {

  const { data, isPending } = useQuery({
    queryKey: ["user", DEFAULT_USER_ID],
    queryFn: getUserProfile,
  });

  if (isPending) return <div>로딩 중...</div>;

  return (
    <div>
      <h1>유저 프로필</h1>
      <p>id: {data.loginId}</p>
      <p>name: {data.name}</p>
      <p>email: {data.email}</p>
      <p>age: {data.age}</p>
      <p>part: {data.part}</p>
    </div>
  );
}

export default App;
