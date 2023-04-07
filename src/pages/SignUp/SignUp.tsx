import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { firebaseAuth } from "@/firebase";
import { Layout } from "../Home/Home.styled";
import { SignUpSection } from "./SignUp.styled";

export default function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("　");

  // `회원가입` 버튼의 onClick에 할당
  const register = async () => {
    try {
      setErrorMsg("　");
      const createdUser = await createUserWithEmailAndPassword(
        firebaseAuth,
        registerEmail,
        registerPassword
      );
      console.log(createdUser);
      setRegisterEmail("");
      setRegisterPassword("");
    } catch (err) {
      // console.log(err.code);
      switch (err) {
        case "auth/weak-password":
          setErrorMsg("비밀번호는 6자리 이상이어야 합니다");
          break;
        case "auth/invalid-email":
          setErrorMsg("잘못된 이메일 주소입니다");
          break;
        case "auth/email-already-in-use":
          setErrorMsg("이미 가입되어 있는 계정입니다");
          break;
        default:
      }
    }
  };

  return (
    <Layout>
      <SignUpSection>
        <div>회원가입페이지입니다.</div>
        <div>
          <input
            onChange={(e) => setRegisterEmail(e.target.value)}
            placeholder="이메일"
          />
        </div>
        <div>
          <input
            onChange={(e) => setRegisterPassword(e.target.value)}
            placeholder="비밀번호"
          />
        </div>
        <div>
          <button onClick={() => register()}>회원가입</button>
        </div>
      </SignUpSection>
    </Layout>
  );
}