import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, fireStore } from "@/firebase";
import { Layout } from "@/styles/style";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [user, setUser] = useState({});

  const useMember = async () => {
    const memberInfo = collection(fireStore, `user/`);
    const memberData = await getDocs(memberInfo);
    const members = memberData.docs.map((docTarget: any) => ({
      ...docTarget.data(),
      id: docTarget.id,
    }));

    console.log(members);
  };

  const login = async () => {
    try {
      const curUserInfo = await signInWithEmailAndPassword(
        firebaseAuth,
        userEmail,
        userPassword
      );
      console.log(curUserInfo);
      setUser(curUserInfo.user);
      console.log(curUserInfo.user);
    } catch (err) {
      //   setIsAppropriate(false);
      // console.log(err.code);
      /*
      입력한 아이디가 없을 경우 : auth/user-not-found.
      비밀번호가 잘못된 경우 : auth/wrong-password.
      */
    }
  };

  useMember();

  return (
    <Layout>
      <div>
        <h1>로그인 페이지입니다.</h1>
        <div>
          <input
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="이메일"
          />
        </div>
        <div>
          <input
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="비밀번호"
          />
        </div>
        <div>
          <button onClick={() => login()}>로그인</button>
        </div>
        <Link to="/SignUp">
          <button>회원가입</button>
        </Link>
      </div>
    </Layout>
  );
}
