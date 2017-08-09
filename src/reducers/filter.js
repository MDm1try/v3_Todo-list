const initialState = [{currentFilter: 'SHOW_ALL', allTasks: false}];

export default function filter(state = initialState, action) {
    switch(action.type){
        case 'TOGGLE_COMPLETED_ALL_FILTER':
            return state.map((elements) => {
                return Object.assign({}, elements, { allTasks: !elements.allTasks })
            })

        case 'CHANGE_FILTER':
            return state.map((elements) => {
                return Object.assign({}, elements, { currentFilter: action.payload })
            })

        default:
            return state;
    }
}