import React from "react";
import { useSelector } from "react-redux";
import NotesList from "../../components/NotesList/NotesList";
import { selectNotes } from "../../store/slices/notesSlice";

const ArchivePage = () => {
    const { archiveNotes } = useSelector(selectNotes);

    return (
        <section>
            {
                <NotesList
                    notes={archiveNotes}
                    type="archive"
                    title="Archive notes"
                />
            }
        </section>
    );
};

export default ArchivePage;
