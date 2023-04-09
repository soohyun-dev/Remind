import { collection, getDocs } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { firebaseAuth, fireStore } from "@/firebase";
import { Layout } from "@/styles/style";
import { userSlice } from "@/feature/userSlice";

interface UserInfo {
  nickname?: string;
  docId?: string;
}

export default function Login() {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [user, setUser] = useState({});
  const userInfo = ["", ""];
  const navigate = useNavigate();

  const getMember = async () => {
    const memberInfo = collection(fireStore, `docId/`);
    const memberData = await getDocs(memberInfo);
    const members = memberData.docs.map((docTarget: any) => ({
      ...docTarget.data(),
    }));

    for (let i = 0; i < members.length; i += 1) {
      if (members[i].user === userEmail) {
        dispatch(
          userSlice.actions.login({
            user: userEmail,
            email: userEmail,
            nickname: members[i].nickname,
            docId: members[i].docId,
          })
        );
      }
    }

    return ["", ""];
  };

  const login = async () => {
    try {
      const curUserInfo = await signInWithEmailAndPassword(
        firebaseAuth,
        userEmail,
        userPassword
      );
      getMember();
      setUser(curUserInfo.user);
      alert("환영합니다!!😁");
      navigate("/Main");
    } catch (err) {
      alert("이메일 혹은 비밀번호를 올바르게 입력해주세요.");
      //   setIsAppropriate(false);
      // console.log(err.code);
      /*
      입력한 아이디가 없을 경우 : auth/user-not-found.
      비밀번호가 잘못된 경우 : auth/wrong-password.
      */
    }
  };

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
