import { prepopulatedData } from "./../../.data";
import { INote } from "./../../types/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const getActiveFromLS = () => {
    const data = localStorage.getItem("active");
    return data ? JSON.parse(data) : prepopulatedData;
};

interface notesProps {
    activeNotes: INote[] | null;
    archiveNotes: INote[] | null;
}

const initialState: notesProps = {
    activeNotes: getActiveFromLS(),
    archiveNotes: null,
};

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        setActive(state, action: PayloadAction<INote>) {
            if (state.activeNotes) {
                state.activeNotes = [...state.activeNotes, action.payload];
            }
        },
        editNote(state, action: PayloadAction<INote>) {
            if (state.activeNotes) {
                const index = state.activeNotes.indexOf(action.payload);
                state.activeNotes.splice(index, 1, action.payload);
            }
            localStorage.setItem("active", "");
            localStorage.setItem("active", JSON.stringify(state.activeNotes));
        },
        setArchive(state, action: PayloadAction<INote[]>) {
            state.archiveNotes = [...action.payload];
        },
    },
});

export const { setArchive, setActive, editNote } = notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes;

export default notesSlice.reducer;
