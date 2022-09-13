import React from "react";
import { useSelector } from "react-redux";
import NoteItem from "../../components/NoteItem/NoteItem";
import { selectNotes } from "../../store/slices/notesSlice";

const ArchivePage = () => {
    const { archiveNotes } = useSelector(selectNotes);

    return (
        <section>
            {archiveNotes &&
                archiveNotes.map((i) => (
                    <NoteItem
                        type="archive"
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

export default ArchivePage;
