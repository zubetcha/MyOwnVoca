// ************* import ************* //

import { db } from '../../firebase';
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';


// ************* Action type ************* //

const LOAD = "voca/LOAD";
const CREATE = "voca/CREATE";
const CHECK = "voca/CHECK";
const UPDATE = "voca/UPDATE"
const DELETE = "voca/DELETE";


// ************* Initial Data ************* //

const initialState = {
    is_loaded: false,
    list: [],
};


// ************* Action Creator Function ************* //

export const loadVoca = (voca_list) => {
    return { type: LOAD, voca_list };
};

export const createVoca = (voca_data) => {
    return { type: CREATE, voca_data };
};

export const checkVoca = (voca_index, voca_checked) => {
    return { type: CHECK, voca_index, voca_checked};
}

export const updateVoca = (voca, voca_index) => {
    return { type: UPDATE, voca, voca_index }
};

export const deleteVoca = (voca_index) => {
    return { type: DELETE, voca_index };
};


// ************* Middlewares ************* //

export const loadVocaFB = (voca_li) => {
    return async function (dispatch) {
        const voca_data = await getDocs(collection(db, 'voca'));
        const _voca_list = []
        voca_data.forEach((voca) => {
            _voca_list.push({id: voca.id, ...voca.data()});
        })
        const voca_list = _voca_list.sort((a, b) => b.date - a.date);
        
        dispatch(loadVoca(voca_list));
    }
}

export const createVocaFB = (voca) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, 'voca'), voca);

        const voca_data= {id: docRef.id, ...voca};
        dispatch(createVoca(voca_data));
    }
}

export const checkVocaFB = (voca_id) => {
    return async function (dispatch, getState) {
        const docRef = doc(db, 'voca', voca_id)
        
        const pre_voca_list = getState().voca.list;
        const voca_index = pre_voca_list.findIndex((vc) => {
            return vc.id === voca_id;
        });
        const pre_checked = pre_voca_list[voca_index].checked;

        pre_checked == false ? await updateDoc(docRef, {checked: true})
        : await updateDoc(docRef, {checked: false});

        const voca_list = getState().voca.list;
        const voca_checked = voca_list[voca_index].checked;

        dispatch(checkVoca(voca_index, voca_checked));
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
        dispatch(updateVoca(voca, voca_index));
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
            return { list: action.voca_list, is_loaded: true, };
        }

        case "voca/CREATE": {
            const new_voca_list = [...state.list, action.voca_data];
            return { ...state, list: new_voca_list };
        }

        case "voca/CHECK": {
            const new_voca_list = state.list.map((x, i) => {
                if (parseInt(action.voca_index) === i && action.voca_checked == false) {
                    return {...x, checked: true};
                } else if (parseInt(action.voca_index) === i && action.voca_checked == true) {
                    return {...x, checked: false};
                } else {
                    return x;
                }
            })
            return { ...state, list: new_voca_list };
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
            return { ...state, list: new_voca_list };
        }

        case "voca/DELETE": {
            const new_voca_list = state.list.filter((_, i) => {
                return parseInt(action.voca_index) !== i;
            });
            return { ...state, list: new_voca_list };
        }

        default: {
            return state;
        }
    }
};