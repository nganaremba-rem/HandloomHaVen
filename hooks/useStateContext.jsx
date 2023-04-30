import { useContext } from "react";
import { StateContext } from "../context/StateContext";

const useStateContext = () => useContext(StateContext);
export default useStateContext;
