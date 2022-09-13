import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteNote, setArchive } from "../../store/slices/notesSlice";
import { useAppDispatch } from "../../store/store";
import { INote } from "../../types";
import st from "./NoteItem.module.scss";

interface NoteItemProps
    extends Pick<
        INote,
        | "title"
        | "slug"
        | "content"
        | "creationDate"
        | "category"
        | "parsedDates"
    > {
    type: "active" | "archive";
}

const NoteItem: FC<NoteItemProps> = ({
    type,
    title,
    slug,
    content,
    creationDate,
    category,
    parsedDates,
}) => {
    const navigate = useNavigate();
    const [showOptions, setshowOptions] = useState(false);
    const dispatch = useAppDispatch();

    return (
        <div className={st.root}>
            <h3 onClick={() => (type === "active" ? navigate(slug) : null)}>
                {title}
            </h3>
            {showOptions && (
                <div className={st.options}>
                    <span onClick={() => dispatch(deleteNote(slug))}>del</span>
                    <span onClick={() => dispatch(setArchive(slug))}>
                        {type === "active" ? "arch" : "un Arch"}
                    </span>
                </div>
            )}
            <span onClick={() => setshowOptions(!showOptions)}>...</span>
            <p className={st.content}>{content}</p>
            <div className={st.stats}>
                <p>{category}</p>
                <p>{creationDate}</p>
            </div>
            <div className={st.dates}>
                {parsedDates.map((i) => (
                    <span key={i}>{i}</span>
                ))}
            </div>
        </div>
    );
};

export default NoteItem;
