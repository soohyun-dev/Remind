import { Link } from "react-router-dom";
import { Layout } from "./Home.styled";

function Home() {
  return (
    <Layout>
      <div>
        <h1>Remind 입니다.</h1>
        <Link to="/Login">
          <button>로그인</button>
        </Link>
      </div>
    </Layout>
  );
}

export default Home;
