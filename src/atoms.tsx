import { atom } from "recoil";

export interface IToDo {
  id: number;
  text: string;
  //category의 선택지를 3가지로 제한
  category: "To_Do" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
