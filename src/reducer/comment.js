//định nghĩa tên action sẽ lấy bằng reducer
const LOAD = "comment/LOAD";

//object khởi tạo
const initialState = {
  comments: null
};

//định nghĩa reducer khi mà dispath được callback
export default function reducer(state = initialState, action = {}) {
  //tùy action sẽ cập nhật state
  switch (action.type) {
    case LOAD:
      return {
        comments: action.comments
      };

    default:
      //mặc định khi khởi tạo sẽ vào đây - obj của initialState được return
      return state;
  }
}

export function load() {
  const comments = "hello";
  //return loại action & state được cập nhật
  return { type: LOAD, comments };
}