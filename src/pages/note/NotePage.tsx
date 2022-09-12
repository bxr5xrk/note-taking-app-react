import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { selectNotes } from "../../store/slices/notesSlice";
import { INote } from "../../types";

const NotePage = () => {
    const { slugParams } = useParams();
    const { activeNotes } = useSelector(selectNotes);
    const [note, setNote] = useState<INote | null>(null);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        if (activeNotes) {
            const findItem = activeNotes.find((i) => i.slug === slugParams);
            if (findItem) {
                setNote(findItem);
            } else {
                setShowError(true);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slugParams]);

    return (
        <main>
            <Link to="/notes">back</Link>
            {note && (
                <>
                    <h1>{note.title}</h1>
                </>
            )}
            {showError && (
                <h3>
                    no matches found for {slugParams}. Check that the slug
                    params are correct
                </h3>
            )}
        </main>
    );
};

export default NotePage;
