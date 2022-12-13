import React from "react";
import styled from "styled-components";
import Categories from "./Categories";
import CreateToDo from "./CreateToDo";

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
  return (
    <>
      <Container>
        <h1>ToDoList</h1>
        <hr />
        <ToDoWrap>
          <Categories />
          <CreateToDo />
        </ToDoWrap>
      </Container>
    </>
  );
}

export default ToDoList;
