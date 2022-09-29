import { FC } from "react";
import { INote } from "../../types";
import NoteInfo from "./NoteInfo";
import NoteTop from "./NoteTop";

interface NoteItemProps
    extends Pick<
        INote,
        | "title"
        | "slug"
        | "content"
        | "creationDate"
        | "category"
        | "parsedDates"
        | "id"
    > {
    type: "active" | "archive";
}

const NoteItem: FC<NoteItemProps> = ({
    id,
    type,
    title,
    slug,
    content,
    creationDate,
    category,
    parsedDates,
}) => {
    return (
        <div className="relative flex  flex-col gap-4 rounded-2xl border border-primary p-4 max-w-[387px]">
            <NoteTop title={title} id={id} slug={slug} type={type} />

            <NoteInfo
                content={content}
                creationDate={creationDate}
                parsedDates={parsedDates}
                category={category}
            />
        </div>
    );
};

export default NoteItem;
