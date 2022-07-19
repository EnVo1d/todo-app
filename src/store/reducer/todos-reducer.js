const ADD_TASK = 'ADD-TASK';
const EDIT_TASK = 'EDIT-TASK';
const DELETE_TASK = 'DELETE-TASK';
const CHANGE_STATUS = 'CHANGE-STATUS';
const SET_STATUSES = 'SET-STATUSES';
const FILTER_TASKS = 'FILTER-TASKS';
const CLEAR_COMPLETED = 'CLEAR-COMPLETED';

const initialState = {
    todos: [],
    counter: 0,
    filterType: 'all',
    filtered: []
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            state.todos.push({
                id: state.todos.length > 0 ? state.todos[state.todos.length - 1].id + 1 : 0,
                title: action.title,
                status: false
            });
            state.counter += 1;
            return state;
        case EDIT_TASK:
            state.todos.find(x => x.id === action.index).title = action.title;
            break;
        case DELETE_TASK:
            let i = state.todos.findIndex(item => item.id === action.index);
            if (state.todos[i].status !== true)
                state.counter -= 1;
            state.todos.splice(i, 1);
            break;
        case CHANGE_STATUS:
            state.todos[action.index].status = action.value;
            if (action.value === true)
                state.counter -= 1;
            else state.counter += 1;
            break;
        case SET_STATUSES:
            let j = 0;
            for (; j < state.todos.length; j++) {
                state.todos[j].status = action.value;
            }
            if (action.value === true)
                state.counter -= j;
            else state.counter += j;
            break;
        case CLEAR_COMPLETED:
            const newTodos = [...state.todos].filter(item => item.status === false);
            state.todos = newTodos;
            state.counter = newTodos.length;
            break;
        case FILTER_TASKS:
            state.filterType = action.value;
            break;
        default: break;
    }
    if (state.filterType === 'all')
        state.filtered = state.todos;
    else
        state.filtered = state.todos.filter(item => item.status === state.filterType);
    return state;
}

export const addTaskActionCreator = (value) => {
    return {
        type: ADD_TASK,
        title: value
    }
}

export const filterTaskActionCreator = (value) => {
    return {
        type: FILTER_TASKS,
        value: value
    }
}

export const clearCompletedActionCreator = () => {
    return {
        type: CLEAR_COMPLETED
    }
}

export const setStatusesActionCreator = (value) => {
    return {
        type: SET_STATUSES,
        value: value
    }
}

export const changeStatusAcitonCreator = (index, value) => {
    return {
        type: CHANGE_STATUS,
        index: index,
        value: value,
    };
};

export const editTaskActionCreator = (index, title) => {
    return {
        type: EDIT_TASK,
        index: index,
        title: title,
    };
};

export const deleteTaskActionCreator = (index) => {
    return {
        type: DELETE_TASK,
        index: index,
    };
};

export default todosReducer;