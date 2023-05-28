import { useContext } from "react";
import { RastreioContext } from "../contexts/RastreioContext";

export function useRastreio() {
  const context = useContext(RastreioContext);
  return context;
}
