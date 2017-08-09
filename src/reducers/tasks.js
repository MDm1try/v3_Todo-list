/*const initialState = [{id: Date.now(),
                       text: "first",
                       completed: false,
                       labelDbClick: false}];*/

export default function tasks(state = {} ,action) {

    switch(action.type) {

    case 'ADD_TASK': 
        return [
            ...state,
            action.payload
        ];

    case 'DELETE_TASK':
        return [
            ...state.filter(elements => {
                 return elements.id !== action.payload.id;
                })
        ];

    case 'DELETE_All_TASKS':
        return [
            ...state.filter(elements => {
                 return elements.completed ? false : true;
                })
        ];
    
    case 'CHECKED_TASK':
        return state.map((elements) => {
            if (elements.id === action.payload.id) {
                return Object.assign({}, elements, { completed: !elements.completed })
            }
            return elements;
        })
    
    case 'LABEL_DB_CLICK_TASK':
        return state.map((elements) => {
            if(elements.id === action.payload.id){
                return Object.assign({}, elements, { labelDbClick: true })
            }
            return elements;
        })
    
    case 'INPUT_TEXT_BLUR_TASK':
        return state.map((elements) => {
            if(elements.id === action.payload.id){
                return Object.assign({}, elements, { labelDbClick: false })
            }
            return elements;
        })
    
    case 'SAVE_INPUT_TEXT_CHANGE_TASK':
        return state.map((elements) => {
            if(elements.id === action.currentId){
                return Object.assign({}, elements, { text: action.payload})
            }
            return elements;
        })
    
    case 'TOGGLE_ALL_INPUT_CHECKED_TASK':
        return state.map((elements) => {
            if(action.payload){
                return Object.assign({}, elements, { completed: false})
            }else{
                return Object.assign({}, elements, { completed: true})
            }
        })
    case 'CHANGE_TASK':
        return state.map((elements) => {
            if(elements.id === action.currentId){
                return Object.assign({}, elements, { labelDbClick: action.payload })
            }
            return elements;
        })
    default:
        return state;
    }
}