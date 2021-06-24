

const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = ( state = initialState , action ) => {

    if( action?.type === 'add') {
        return [ ...state, action.payload ];
    }

    return state;
}

let todos = todoReducer();

//Esto no se hace, ya que modifica/muta el objeto, y eso no se debe hacer.
//todos.push('');

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const addTodoAction = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer( todos, addTodoAction );


console.log(todos);
