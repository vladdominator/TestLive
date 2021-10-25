import { createContext } from "react";
export interface IModalContext {
  setModal(modal: boolean): void;
}
export const ContextModal = createContext<IModalContext | null>(null);
