import { useContext } from "react";
import { StateContext } from "../context/StateContext";
import { default as PropTypes } from "prop-types";
/**
 * @typedef {Object} StateContextReturnType
 * @property {boolean} loaded
 */

/**
 * @returns {StateContextReturnType}
 */

const useStateContext = () => useContext(StateContext);
export default useStateContext;
