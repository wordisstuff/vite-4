import { createSlice } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, fetchTodos } from "./todosOps";



export const todosSlice = createSlice({
    name: 'todos',
    initialState:{items:[],loading:false,error:null},
    reducers: {},
    extraReducers: (builder) => {
    builder
    .addCase(fetchTodos.fulfilled, (state,{payload}) => {
        state.items = payload
    })
    .addCase(addTodo.fulfilled, (state,{payload}) => {
        state.items.push(payload)
    })
    .addCase(deleteTodo.fulfilled, (state,{payload}) => {
        const todoIndex = state.items.findIndex(({id})=>id === payload.id )
        state.items.splice(todoIndex,1)
    })
    .addMatcher((action)=> action.type.endsWith('pending'),handlePending)
    .addMatcher((action)=> action.type.endsWith('fulfilled'),handleFulfilled)
    .addMatcher((action)=> action.type.endsWith('rejected'),handleRejected)
    },
})

const handlePending = (state) => {
          state.loading = true;
          state.error = null;
}
      const handleRejected = (state, {payload}) => {
            state.loading = false;
             state.error = payload;
      }
        
      const handleFulfilled = state =>  {state.loading = false};
      

export const todosReducer = todosSlice.reducer

export const selectTodos = (state) => state.todos.items
export const selectLoading = (state)=> state.todos.loading
export const selectError = (state)=> state.todos.error
