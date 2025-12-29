import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        addToCollection(state, action) {
            const alreadyExist = state.items.find(item => item.id == action.payload.id)
            console.log(alreadyExist);

            if (!alreadyExist) {
                state.items.push(action.payload);
                localStorage.setItem('collection', JSON.stringify(state.items))
            }
        },
        removeCollection(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        clearCollection(state) {
            state.items = []
            localStorage.removeItem('collection')
        },
        addedToast(state, action) {
            toast.success('Add to Collection...!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "dark",
                transition: Zoom,
            });
        },
        removeToast() {
            toast.error('Remove to Collection...!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "dark",
                transition: Zoom,
            });
        }
    }
})

export const { addToCollection, removeCollection, clearCollection, addedToast,removeToast } = collectionSlice.actions;

export default collectionSlice.reducer;