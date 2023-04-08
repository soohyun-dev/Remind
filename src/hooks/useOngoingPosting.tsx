import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useQuery } from "react-query";
import { fireStore } from "../firebase";

const getOngoingPosting = async (ongoingPostingInfo: any) => {
  const ongoingPostingData = await getDocs(
    query(ongoingPostingInfo, orderBy("registerDate", "desc"))
  );
  const ongoingPosting = ongoingPostingData.docs.map((doc: any) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(ongoingPostingData, ongoingPosting);

  return ongoingPosting;
};

const useOngoingPosting = (docId: string | null) => {
  const ongoingPostingInfo = collection(
    fireStore,
    `users/${docId}/ongoingPosting`
  );

  const ongoingPosting = useQuery(`${docId}/ongoingPosting`, () =>
    getOngoingPosting(ongoingPostingInfo)
  );

  return ongoingPosting.data !== undefined
    ? ongoingPosting
    : { isLoading: true, isError: false, data: [] };
};

export default useOngoingPosting;
