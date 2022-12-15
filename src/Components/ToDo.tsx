import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";
import styled from "styled-components";

const Btns = styled.div`
  display: flex;
  button {
    position: relative;
    width: 30px;
    background-color: transparent;
    border: none;
    img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      width: 20px;
      height: 20px;
    }
  }
`;

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
      const newToDo = { text, id, category: name as any };
      console.log(oldToDo, newToDo);
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  const deleteToDo = () => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id == id);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      <Btns>
        {category !== Categories.To_Do && (
          <button name={Categories.To_Do} onClick={onClick}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3031/3031267.png"
              alt="to_do"
            />
          </button>
        )}
        {category !== Categories.DOING && (
          <button name={Categories.DOING} onClick={onClick}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/545/545682.png"
              alt="doing"
            />
          </button>
        )}
        {category !== Categories.DONE && (
          <button name={Categories.DONE} onClick={onClick}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/32/32282.png"
              alt="done"
            />
          </button>
        )}
        <button onClick={deleteToDo}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"
            alt="delete"
          />
        </button>
      </Btns>
    </li>
  );
}

export default ToDo;
