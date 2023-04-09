import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserEmail } from "@/feature/userSlice";
import { Layout } from "@/styles/style";

function Home() {
  const user = useSelector(selectUserEmail);
  return (
    <Layout>
      <div>
        <h1>Remind 입니다.</h1>
        {user === null ? (
          <Link to="/Login">
            <button>로그인</button>
          </Link>
        ) : (
          <Link to="Main">
            <button>메인으로</button>
          </Link>
        )}
      </div>
    </Layout>
  );
}

export default Home;
