import { useRecoilValue } from "recoil";
import { nameAtom } from "../nameAtom";

function useNameofTheUser() {
	const name = useRecoilValue(nameAtom);
	return name;
}

export default useNameofTheUser;
