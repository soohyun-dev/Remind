import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserEmail } from "@/feature/userSlice";
import { Layout } from "./Home.styled";

function Home() {
  const user = useSelector(selectUserEmail);

  console.log(user);
  return (
    <Layout>
      <div>
        <h1>Remind 입니다.</h1>
        <div>{user === null ? "" : <p>{user} 님</p>}</div>
        <Link to="/Login">
          <button>로그인</button>
        </Link>
      </div>
    </Layout>
  );
}

export default Home;
