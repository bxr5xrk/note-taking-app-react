import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { INote } from "../../types";
import st from "./NoteItem.module.scss";

const NoteItem: FC<INote> = ({
    title,
    slug,
    content,
    creationDate,
    category,
    parsedDates,
}) => {
    const navigate = useNavigate();

    return (
        <div className={st.root}>
            <h3 onClick={() => navigate(slug)}>{title}</h3>
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
