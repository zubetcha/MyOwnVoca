// // ************* Action type ************* //

// const LOAD = "voca/LOAD";
// const CREATE = "voca/CREATE";


// // ************* Initial Data ************* //

// const initialState = {
//     list: [{
//         word: "안녕하세요",
//         hiragana: "적눈",
//         meaning: "쥬벧땨",
//         example: "윏닌닳",
//         translate: "짤뷰타뜨륂희땨",
//     },
//     {
//         word: "",
//         hiragana: "",
//         meaning: "",
//         example: "",
//         translate: "",
//     },
//     {
//         word: "",
//         hiragana: "",
//         meaning: "",
//         example: "",
//         translate: "",
//     }],
// };

// // ************* Action Creator Function ************* //

// export const loadVoca = (voca_list) => {
//     return { type: LOAD, voca_list };
// };

// export const createVoca = (voca) => {
//     return { type: CREATE, voca };
// };

// // ************* Reducer ************* //

// export default function reducer(state = initialState, action = {}) {
//     switch (action.type) {
//         case "voca/LOAD": {
//             return {list: action.voca_list};
//         }

//         case "voca/CREATE": {
//             const new_voca_list = [...state.list, action.voca];
//             return {list: new_voca_list};
//         }
//     }
// };