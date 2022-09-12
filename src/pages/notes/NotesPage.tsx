import React from "react";
import { useSelector } from "react-redux";
import { selectNotes } from "../../store/slices/notesSlice";

const NotesPage = () => {
    const { activeNotes } = useSelector(selectNotes);

    console.log(activeNotes);
    return (
        <div>
            <h1>notesPage</h1>
        </div>
    );
};

export default NotesPage;
