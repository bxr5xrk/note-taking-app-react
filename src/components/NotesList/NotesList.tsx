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
                    <NoteItem
                        key={i.slug}
                        title={i.title}
                        slug={i.slug}
                        content={i.content}
                        creationDate={i.creationDate}
                        category={i.category}
                        parsedDates={i.parsedDates}
                    />
                ))}
        </section>
    );
};

export default NotesList;
