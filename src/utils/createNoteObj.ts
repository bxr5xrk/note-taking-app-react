import { format } from "date-fns";
import { INote } from "../types";
import { parseDates } from "./parseDates";

export const createNoteObj = (
    activeNotes: INote[],
    noteTitle: string,
    content: string,
    category: string,
    id: number,
    noteCreationDate?: string
) => {
    if (noteTitle.length < 1 || content.length < 1) {
        return null;
    }

    const prettifyTitle = noteTitle.replaceAll(/[^\w ]/g, "");
    const slug = prettifyTitle.replaceAll(" ", "-").toLowerCase();
    const isExists = activeNotes
        .filter((i) => i.id !== id)
        .find((i) => i.slug === slug);
    const title = prettifyTitle.at(0)?.toUpperCase() + prettifyTitle.slice(1);

    if (isExists) {
        return null;
    } else {
        const creationDate = noteCreationDate
            ? noteCreationDate
            : format(new Date(), "dd.MM.yyyy");
        const parsedDates = parseDates(content);

        return {
            id,
            title,
            content,
            creationDate,
            category,
            parsedDates,
            slug,
        };
    }
};
