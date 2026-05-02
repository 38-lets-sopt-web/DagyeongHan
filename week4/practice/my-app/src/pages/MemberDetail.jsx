// UserDetail.jsx

import { useParams, Link } from "react-router";

const MemberDetail = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "2rem" }}>
      <Link to="/">← 목록으로</Link>
      <h1>{id}</h1>
      <p>상세정보 ...</p>
    </div>
  );
};

export default MemberDetail;
