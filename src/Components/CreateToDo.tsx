import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  // atom의 value는 가져올 필요가 없고 수정만 할 수 있으면 됨!
  const setToDos = useSetRecoilState(toDoState);

  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    // 원하는건 oldToDos의 요소들이 들어있는 배열
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category: "To_Do" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(handleValid)}
    >
      <input
        {...register("toDo", { required: "글 작성을 해주세요" })}
        placeholder="글 작성하기"
      ></input>
      <button>add</button>
    </form>
  );
}

export default CreateToDo;
