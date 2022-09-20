import React from "react";
import { useSelector } from "react-redux";
import NotesList from "../../components/NotesList/NotesList";
import Summary from "../../components/Summary/Summary";
import { selectNotes } from "../../store/slices/notesSlice";

const NotesPage = () => {
    const { activeNotes } = useSelector(selectNotes);

    return (
        <main className="flex flex-col justify-between gap-5">
            <NotesList notes={activeNotes} type="active" title="Notes" />

            <Summary />
        </main>
    );
};

export default NotesPage;
