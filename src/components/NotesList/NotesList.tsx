import React, { FC } from "react";
import { INote } from "../../types";
import NoteItem from "../NoteItem/NoteItem";

interface NotesListProps {
    notes: INote[] | null;
    type: "active" | "archive";
    title: string;
}

const NotesList: FC<NotesListProps> = ({ notes, type, title }) => {
    if (!notes?.length) {
        return <h2>No notes</h2>;
    }

    return (
        <section className="flex flex-col items-center gap-4">
            <h1>{title}</h1>
            <div className="grid w-full grid-cols-3 gap-5">
                {notes &&
                    notes.map((i) => (
                        <NoteItem
                            type={type}
                            key={i.slug}
                            title={i.title}
                            slug={i.slug}
                            content={i.content}
                            creationDate={i.creationDate}
                            category={i.category}
                            parsedDates={i.parsedDates}
                        />
                    ))}
            </div>
        </section>
    );
};

export default NotesList;
