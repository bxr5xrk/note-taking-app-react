import { FC } from "react";
import { INote } from "../../types";

interface NoteInfoProps
    extends Pick<
        INote,
        "content" | "creationDate" | "category" | "parsedDates"
    > {}

const NoteInfo: FC<NoteInfoProps> = ({
    content,
    creationDate,
    category,
    parsedDates,
}) => {
    return (
        <>
            <p className="overflow-x-hidden overflow-ellipsis whitespace-nowrap text-left">
                {content}
            </p>
            <div className="flex justify-between">
                <p className="text-primary underline">{category}</p>
                <p>{creationDate}</p>
            </div>
            <div className="flex gap-4 overflow-x-scroll pb-1">
                {parsedDates.map((i) => (
                    <span
                        className="duration-3000 cursor-pointer rounded-[20px] border border-primary bg-light_primary px-2.5 py-1 text-primary transition-all hover:bg-primary hover:text-white"
                        key={i}
                    >
                        {i}
                    </span>
                ))}
            </div>
        </>
    );
};

export default NoteInfo;
