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

  h1 {
    color: #d4a373;
    font-size: 30px;
    text-align: center;
    font-weight: 700;
  }
`;

const ToDoWrap = styled.div`
  select {
    width: 100%;
    height: 40px;
    padding: 0 20px;
    border: 0;
    border-radius: 20px;
    background: #fefae0;
    -webkit-appearance: none; /* 크롬 화살표 없애기 */
    -moz-appearance: none; /* 파이어폭스 화살표 없애기 */
    appearance: none; /* 화살표 없애기 */
  }
  form {
    position: relative;
    width: 100%;
    margin-top: 20px;
    input {
      width: 100%;
      height: 40px;
      border: 0;
      padding: 0 20px;
      border-radius: 20px;
      background: #fefae0;
    }
  }
  button {
    position: absolute;
    top: 10px;
    right: 30px;
    width: 20px;
    height: 20px;
    align-content: center;
    border: transparent;
    background-color: transparent;
  }
`;

const LiContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  background-color: #e9edc9;
  padding: 40px 30px;
  border-radius: 20px;
  li {
    display: flex;
    justify-content: space-between;
    list-style: none;
    color: rgb(255, 255, 255);
    margin-bottom: 15px;
    padding: 15px 0px;
    border-bottom: 3px dotted #66554e;

    span {
      color: #66554e;
      font-size: 20px;
    }
  }
`;

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
        <LiContainer>
          {toDos?.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </LiContainer>
      </Container>
    </>
  );
}

export default ToDoList;
