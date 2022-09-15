import React, { FC, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "../../components/Select/Select";
import { categories } from "../../config";
import { selectNotes, setActive } from "../../store/slices/notesSlice";
import { useAppDispatch } from "../../store/store";
import { createNoteObj } from "../../utils/createNoteObj";
import st from "./NewNotePage.module.scss";

const NewNotePage: FC = () => {
    const { activeNotes } = useSelector(selectNotes);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState(categories[0]);
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [validate, setValidate] = useState(false);
    const titleRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!content) {
            setValidate(true);

            setTimeout(() => {
                setValidate(false);
            }, 1000);
        } else {
            const note = createNoteObj(
                activeNotes,
                title,
                content,
                category,
                Date.now()
            );
            if (note) {
                dispatch(setActive(note));
                navigate("/notes");
            } else {
                if (titleRef.current) {
                    titleRef.current.style.color = "red";

                    setTimeout(() => {
                        if (titleRef.current) {
                            titleRef.current.style.color = "black";
                            titleRef.current.select();
                        }
                    }, 1000);
                }
            }
        }
    };

    return (
        <form className={st.root} onSubmit={(e) => handleSubmit(e)}>
            <input
                ref={titleRef}
                className={validate ? st.notValid : ""}
                type="text"
                autoFocus
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={30}
                minLength={2}
            />

            <Select
                category={category}
                isEditable={true}
                setCategory={setCategory}
            />

            <textarea
                className={validate ? st.notValid : ""}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter content"
            ></textarea>

            <button className="btn" type="submit">
                submit
            </button>
        </form>
    );
};

export default NewNotePage;
