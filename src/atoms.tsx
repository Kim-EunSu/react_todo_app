import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "toDoLocal",
  storage: localStorage,
});

export const isDarkAtom = atom({
  key: "isLight",
  default: true,
});

// 이와같이 하면 타입을 변경할 수 있음 => 실제값 변경가능
// => 이렇게 쓰면 enum은 string타입으로 변함
export enum Categories {
  "To_Do" = "To_Do",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  id: number;
  text: string;
  //category의 선택지를 3가지로 제한
  category: Categories;
}

// 보고있는 category에 toDo를 등록할 수 있게
export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.To_Do,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// selector이용
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    // 카테고리에 따라 하나의 배열만을 반환
    return toDos.filter((toDo) => toDo.category === category);
  },
});
