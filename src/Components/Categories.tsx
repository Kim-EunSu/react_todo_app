import { useState } from "react";
import { useForm } from "react-hook-form";

function Categories() {
  const [toDo, setToDo] = useState("");

  const { register, watch, handleSubmit, formState } = useForm();
  console.log(watch());

  // 모든 validation이 다 마쳤을때 호출되는 함수
  //   onValid함수의 인자로 data를 받음
  const onValid = (data: any) => {
    console.log(data);
  };

  console.log(formState.errors);

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("write", { required: "글 작성을 해주세요" })}
        placeholder="글 작성하기"
      ></input>
      <input
        {...register("email", { required: true })}
        placeholder="이메일 작성하기"
      ></input>
      <button>add</button>
    </form>
  );
}

export default Categories;
