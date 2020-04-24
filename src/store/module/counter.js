import { createAction, handleActions } from "redux-actions";
import uuid from "react-uuid";
import { produce } from "immer";

// counter 모듈 작성 [DUCKS PATTERN]
// action
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";
const CHANGECOLOR = "counter/CHANGECOLOR";
const ADDCOLORLIST = "counter/ADDCOLORLIST";
const CHANGEOPACITY = "counter/CHANGEOPACITY";
const REMOVECOLORLIST = "counter/REMOVECOLORLIST";
// action creator

export const increseNumber = createAction(INCREMENT);
export const decreseNumber = createAction(DECREMENT);
export const changeColor = createAction(CHANGECOLOR);
export const addColorList = createAction(ADDCOLORLIST);
export const changeOpacity = createAction(CHANGEOPACITY, (colors) => ({
  key: colors.key,
  opacity: colors.opacity,
}));
export const removeColorList = createAction(REMOVECOLORLIST);
// reducer
const defaultState = {
  number: 0,
  color: "#bfcd7e",
  colorList: [],
};
/** handleActions 사용해서 reducer작성해보기 */
// 코드량이 줄어든다
export default handleActions(
  {
    [INCREMENT]: (state, action) => ({
      ...state,
      number: state.number + 1,
    }),
    [DECREMENT]: (state, action) => ({
      ...state,
      number: state.number - 1,
    }),
    [CHANGECOLOR]: (state, action) => ({
      ...state,
      color: action.payload,
    }),
    [ADDCOLORLIST]: (state, action) => ({
      ...state,
      colorList: state.colorList.concat({
        colorCode: action.payload,
        key: uuid(),
        opacity: 1,
      }),
    }),
    [CHANGEOPACITY]: (state, action) => {
      const findIndex = state.colorList.findIndex(
        (item) => item.key === action.payload.key
      );
      const newState = produce(state.colorList, (draftState) => {
        let beforeOpacity = state.colorList[findIndex].opacity;
        draftState[findIndex].opacity = (beforeOpacity - 0.1).toFixed(1);
      });
      return {
        ...state,
        colorList: newState,
      };
    },
    [REMOVECOLORLIST]: (state, action) => ({
      ...state,
      colorList: state.colorList.filter(
        (colors) => colors.key !== action.payload
      ),
    }),
  },
  defaultState
);
// state

/** 수업 내용 */
// export const increseNumber = () => ({
//   type: INCREMENT,
// });
// export const decreseNumber = () => ({
//   type: DECREMENT,
// });
// export const changeColor = (color) => ({
//   type: CHANGECOLOR,
//   payload: color,
// });
// reducer는 setState와 달리 shallow copy를 미리 해주지 않기 때문에 관리해야하는 값이 두개 이상이면 꼭! shallow copy를 미리 해주고 변화시켜야 한다
// export const countReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, number: state.number + action.payload };
//     case DECREMENT:
//       return { ...state, number: state.number - 1 };
//     case CHANGECOLOR:
//       return {
//         ...state,
//         color: action.payload,
//       };
//     default:
//       return state;
//   }
// };
