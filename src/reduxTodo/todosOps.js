import { createAsyncThunk } from "@reduxjs/toolkit";
import { todosApi } from "helpers/api";


export const fetchTodos = createAsyncThunk(
    "todos/fetchTodos",
    async (_, {rejectWithValue}) => {
        try {
            const { data } = await todosApi.get("/todos")
            return data
       } catch (error) {
        return rejectWithValue(error.message)
       }
    }
)

export const addTodo = createAsyncThunk(
    "todos/addTodo",
    async (newTodo,{rejectWithValue}) => {
        try {
            const { data } = await todosApi.post("/todos",newTodo)
            return data
       } catch (error) {
        return rejectWithValue(error.message)
       }
    }
)

export const deleteTodo = createAsyncThunk(
    "todos/deleteTodo",
    async (id,{rejectWithValue}) => {
        try {
            const { data } = await todosApi.delete(`/todos/${id}`)
            return data
       } catch (error) {
        return rejectWithValue(error.message)
       }
    }
)
