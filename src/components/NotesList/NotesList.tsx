import React from "react";
import { useSelector } from "react-redux";
import { selectNotes } from "../../store/slices/notesSlice";
import NoteItem from "../NoteItem/NoteItem";

const NotesList = () => {
    const { activeNotes } = useSelector(selectNotes);

    return (
        <section>
            {activeNotes &&
                activeNotes.map((i) => (
                    <NoteItem title={i.title} slug={i.slug} />
                ))}
        </section>
    );
};

export default NotesList;
