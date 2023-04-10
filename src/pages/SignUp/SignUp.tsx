import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { firebaseAuth, fireStore } from "@/firebase";
import {
  SignUpButton,
  SignUpInput,
  SignUpSection,
  SignUpTitleBox,
  SignUpTitleParagraph,
} from "./SignUp.styled";
import { userSlice } from "@/feature/userSlice";
import { Layout } from "@/styles/style";
import Navbar from "@/components/Navbar";

export default function SignUp() {
  const newUserInfo = collection(fireStore, "users");
  const userDocIdInfo = collection(fireStore, "docId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const register = async () => {
    try {
      const createdUser = await createUserWithEmailAndPassword(
        firebaseAuth,
        registerEmail,
        registerPassword
      );

      const user = {
        user: registerEmail,
        nickname,
        signUpDate: new Date(),
      };
      let docId = "";

      // user 데이터 저장
      await addDoc(newUserInfo, user).then((doc) => {
        docId = doc.id;
      });

      const newData = {
        user: registerEmail,
        nickname,
        docId,
      };

      // docId 관리 저장
      await addDoc(userDocIdInfo, newData);

      dispatch(
        userSlice.actions.login({
          email: registerEmail,
          nickname,
          docId,
        })
      );

      alert("회원가입이 완료되었습니다!!");
      navigate("/Main");
    } catch (err) {
      /**
       * 회원가입 거부 조건
       *
       * 1. 비밀번호 6자리 미만
       * 2. 올바른 이메일 주소 형식
       * 3. 중복된 이메일
       */
      switch (err) {
        case "auth/weak-password":
          alert("비밀번호는 6자리 이상이어야 합니다");
          break;
        case "auth/invalid-email":
          alert("잘못된 이메일 주소입니다");
          break;
        case "auth/email-already-in-use":
          alert("이미 가입되어 있는 계정입니다");
          break;
        default:
      }
    }
  };

  /**
   * 회원가입 절차 1차 확인
   *
   * 1. 정보가 모두 입력이 되었는지
   * 2. 비밀번호와 비밀번호 확인 값이 서로 같은지
   */
  const isAllowProcess = () => {
    if (
      registerEmail.length === 0 ||
      nickname.length === 0 ||
      registerPassword.length === 0
    ) {
      alert("정보를 모두 입력해주세요.");
    } else if (registerPassword !== checkPassword) {
      alert("비밀번호가 서로 일치하지 않습니다.");
    } else {
      register();
    }
  };

  return (
    <Layout>
      <Navbar />
      <SignUpSection>
        <SignUpTitleBox>
          <SignUpTitleParagraph>회원가입</SignUpTitleParagraph>
        </SignUpTitleBox>
        <div>
          <SignUpInput
            onChange={(e) => setRegisterEmail(e.target.value)}
            placeholder="@을 포함한 올바른 이메일 형식"
          />
        </div>
        <div>
          <SignUpInput
            onChange={(e) => setNickname(e.target.value)}
            placeholder="10자리 이내의 닉네임"
          />
        </div>
        <div>
          <SignUpInput
            onChange={(e) => setRegisterPassword(e.target.value)}
            placeholder="6자리 이상의 비밀번호"
          />
        </div>
        <div>
          <SignUpInput
            onChange={(e) => setCheckPassword(e.target.value)}
            placeholder="비밀번호 확인"
          />
        </div>
        <div>
          <SignUpButton onClick={() => isAllowProcess()}>
            회원가입완료
          </SignUpButton>
        </div>
      </SignUpSection>
    </Layout>
  );
}
