import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [
            {
                id: '0',
                title: 'todo 1',
                completed: true,
            },
            {
                id: '1',
                title: 'todo 2',
                completed: true,
            },
            {
                id: '2',
                title: 'todo 3',
                completed: true,
            },
            {
                id: '3',
                title: 'Sabah erkenden kalkıp kahvaltı yapılacak, işe gidilecek.',
                completed: false,
            },
        ],
    },
    reducers: {
        addTodo: (state, action) => {//Yeni todo eklemek için 
            state.items.push(action.payload);
        },
        toggle: (state, action) => {// todo'nun completed'ını değiştirmek için
            const { id } = action.payload;
            const item = state.items.find((item) => item.id === id);
            item.completed = !item.completed;
        },
        destroy: (state, action) => {
            const id = action.payload;
            const filtered = state.items.filter((item) => item.id !== id);
            state.items = filtered;
        }
    },
});

export const { addTodo, toggle, destroy } = todosSlice.actions;
export default todosSlice.reducer;