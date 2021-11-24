// ************* import ************* //

import { db } from '../../firebase';
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';


// ************* Action type ************* //

const LOAD = "voca/LOAD";
const CREATE = "voca/CREATE";
const UPDATE = "voca/UPDATE"
const DELETE = "voca/DELETE";


// ************* Initial Data ************* //

const initialState = {
    list: [],
};


// ************* Action Creator Function ************* //

export const loadVoca = (voca_list) => {
    return { type: LOAD, voca_list };
};

export const createVoca = (voca) => {
    return { type: CREATE, voca };
};

export const updateVoca = (voca, voca_index) => {
    return { type: UPDATE, voca, voca_index }
};

export const deleteVoca = (voca_index) => {
    return { type: DELETE, voca_index };
};


// ************* Middlewares ************* //

export const loadVocaFB = (voca_list) => {
    return async function (dispatch) {
        const voca_data = await getDocs(collection(db, 'voca'));

        let voca_list = [];
        voca_data.forEach((voca) => {
            voca_list.push({id: voca.id, ...voca.data()});
        })
        dispatch(loadVoca(voca_list));
    }
}

export const createVocaFB = (voca) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, 'voca'), voca);

        const voca_data = {id: docRef.id, ...voca};
        dispatch(createVoca(voca_data));
    }
}

export const updateVocaFB = (voca, voca_id) => {
    return async function (dispatch, getState) {
        const docRef = doc(db, 'voca', voca_id);
        await updateDoc(docRef, voca);

        const voca_list = getState().voca.list;
        const voca_index = voca_list.findIndex((vc) => {
            return vc.id === voca_id;
        })
        dispatch(updateVoca(voca_index));
    }
}

export const deleteVocaFB = (voca_id) => {
    return async function (dispatch, getState) {
        if (!voca_id) {
            window.alert('아이디가 없습니다!');
            return;
        }
        const docRef = doc(db, 'voca', voca_id);
        await deleteDoc(docRef);

        const voca_list = getState().voca.list;
        const voca_index = voca_list.findIndex((vc) => {
            return vc.id === voca_id;
        })
        dispatch(deleteVoca(voca_index));
    }
}


// ************* Reducer ************* //

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "voca/LOAD": {
            return { list: action.voca_list};
        }

        case "voca/CREATE": {
            const new_voca_list = [...state.list, action.voca];
            return { list: new_voca_list };
        }

        case "voca/UPDATE": {
            const new_voca_list = [];
            state.list.map((x, i) => {
                if (parseInt(action.voca_index) === i) {
                    new_voca_list.push(action.voca);
                } else {
                    new_voca_list.push(x);
                }
            })
            return { list: new_voca_list };
        }

        case "voca/DELETE": {
            const new_voca_list = state.list.filter((_, i) => {
                return parseInt(action.voca_index) !== i;
            });
            return { list: new_voca_list };
        }

        default: {
            return state;
        }
    }
};