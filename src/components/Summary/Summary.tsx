import React from "react";
import { useSelector } from "react-redux";
import { selectNotes } from "../../store/slices/notesSlice";
import { calculateCategoriesCount } from "../../utils/calculateCategoriesCount";

const Summary = () => {
    const { activeNotes, archiveNotes } = useSelector(selectNotes);

    const items = archiveNotes
        ? calculateCategoriesCount(activeNotes, archiveNotes)
        : calculateCategoriesCount(activeNotes);

    return (
        <section className="flex flex-col items-center justify-between gap-3">
            <h1>Summary</h1>
            <div className="grid grid-cols-3 gap-5 w-full">
                {items.map((i) => (
                    <div
                        key={i.category}
                        className="flex flex-col gap-4 rounded-2xl border border-primary p-4"
                    >
                        <h3>{i.category}</h3>

                        <div className="flex flex-col items-start font-bold">
                            <p>Total: {i.count.total}</p>
                            <p>Active: {i.count.active}</p>
                            <p>Archive: {i.count.archive}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Summary;
