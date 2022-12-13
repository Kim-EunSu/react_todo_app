import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  // atom값을 수정
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    // 1.target의 경로확인 찾기
    // fuction의 첫번째 인자는 toDo이고 toDo의 id와 props에 오는 id가 같은지 비교
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      // 2. 새로운 to do를 만들어서 원래의 todo를 업데이트 ⇒ 즉 새로운 category로 새로운 todo를 만들어야함
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: "name" };
      console.log(oldToDo, newToDo);
      return oldToDos;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "To_Do" && (
        <button name="To_Do" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
