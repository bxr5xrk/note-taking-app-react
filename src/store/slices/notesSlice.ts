import { INote } from "./../../types/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface notesProps {
    activeNotes: INote[] | null;
    archiveNotes: INote[] | null;
}

const initialState: notesProps = {
    activeNotes: null,
    archiveNotes: null,
};

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        setActive(state, action: PayloadAction<INote[]>) {
            state.activeNotes = [...action.payload];
        },
        setArchive(state, action: PayloadAction<INote[]>) {
            state.archiveNotes = [...action.payload];
        },
    },
});

export const { setArchive, setActive } = notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes;

export default notesSlice.reducer;
