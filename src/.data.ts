import { INote } from "./types/index";
export const prepopulatedData: INote[] = [
    {
        title: "one title",
        content: "one content one content 12.12.2022",
        slug: "one-title",
        category: "Idea",
        creationDate: "12/09/2022",
        parsedDates: ["12.12.2022"],
    },
    {
        title: "two title",
        content: "two content two content",
        slug: "two-title",
        category: "Random Thought",
        creationDate: "11/09/2022",
        parsedDates: [],
    },
];
