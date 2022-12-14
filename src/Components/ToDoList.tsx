import styled from "styled-components";
import Categories from "./Categories";
import CreateToDo from "./CreateToDo";
import { useRecoilValue } from "recoil";
import ToDo from "./ToDo";
import { toDoSelector } from "../atoms";

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
  // const [toDo, doing, done] = useRecoilValue(toDoSelector);
  // => 에러가 생기는 이유: toDoSelector가 이차원 배열을 반환하지 않기 때문에

  // selector은 toDo를 담은 일차원 배열을 반환
  const toDos = useRecoilValue(toDoSelector);

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
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </Container>
    </>
  );
}

export default ToDoList;
