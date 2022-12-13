import React from "react";
import styled from "styled-components";
import Categories from "./Categories";
import CreateToDo from "./CreateToDo";
import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import ToDo from "./ToDo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  margin: auto;
  padding: 50px;
  row-gap: 10px;
  border: 3px solid black;
  h1 {
    font-size: 30px;
    text-align: center;
    font-weight: 700;
    border: 3px solid black;
  }
`;

const ToDoWrap = styled.div``;

function ToDoList() {
  // toDos의 값을 수정할 필요가 없고 값만 가져오면됨
  const toDos = useRecoilValue(toDoState);

  console.log(toDos);

  return (
    <>
      <Container>
        <h1>ToDoList</h1>
        <hr />
        <ToDoWrap>
          <Categories />
          <CreateToDo />
        </ToDoWrap>
        <ul>
          {toDos.map((toDo) => (
            // ToDo컴포넌트는 prop들이 필요함
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </ul>
      </Container>
    </>
  );
}

export default ToDoList;
