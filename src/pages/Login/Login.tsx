import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { fireStore } from "@/firebase";
import { Layout } from "@/styles/style";

export default function Login() {
  const useMember = async () => {
    const memberInfo = collection(fireStore, `user/`);
    const memberData = await getDocs(memberInfo);
    const members = memberData.docs.map((docTarget: any) => ({
      ...docTarget.data(),
      id: docTarget.id,
    }));

    console.log(members);
  };

  useMember();

  return (
    <Layout>
      <div>
        <h1>로그인 페이지입니다.</h1>
        <Link to="/SignUp">
          <button>회원가입</button>
        </Link>
      </div>
    </Layout>
  );
}
