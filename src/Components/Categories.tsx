import { useRecoilState } from "recoil";
import { Categories, categoryState } from "../atoms";
import styled from "styled-components";

function CateGories() {
  // 현재의 값과 값을 수정하는 함수를 가져오는 훅 사용
  const [category, setCategory] = useRecoilState(categoryState);

  // select의 변경을 감지
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    // input이 변할때 setCategory호출
    setCategory(event.currentTarget.value as any);
  };

  return (
    <>
      {/* value값에 category */}
      <select value={category} onInput={onInput}>
        <option value={Categories.To_Do}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
    </>
  );
}

export default CateGories;
