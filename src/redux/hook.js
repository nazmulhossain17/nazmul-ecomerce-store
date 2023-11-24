import { useDispatch, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selectorFunction) =>
  useSelector(selectorFunction);
