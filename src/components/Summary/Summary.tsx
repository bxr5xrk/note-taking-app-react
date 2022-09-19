import React from "react";
import { useSelector } from "react-redux";
import { selectNotes } from "../../store/slices/notesSlice";
import { calculateCategoriesCount } from "../../utils/calculateCategoriesCount";
import st from "../NotesList/NotesList.module.scss";
import st_ from "../NoteItem/NoteItem.module.scss";

const Summary = () => {
    const { activeNotes, archiveNotes } = useSelector(selectNotes);

    const items = archiveNotes
        ? calculateCategoriesCount(activeNotes, archiveNotes)
        : calculateCategoriesCount(activeNotes);

    return (
        <section className={st.root}>
            <h1 className="text-left border p-2 rounded-3xl border-green-700">
                Summary
            </h1>
            <div className={st.list}>
                {items.map((i) => (
                    <div key={i.category} className={st_.root}>
                        <h1>{i.category}</h1>

                        <div className="flex flex-col items-start">
                            <h3>Total: {i.count.total}</h3>
                            <h3>Active: {i.count.active}</h3>
                            <h3>Archive: {i.count.archive}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Summary;
