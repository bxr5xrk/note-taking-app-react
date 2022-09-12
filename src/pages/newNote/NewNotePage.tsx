import { format } from "date-fns";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categories } from "../../config";
import { selectNotes, setActive } from "../../store/slices/notesSlice";
import { useAppDispatch } from "../../store/store";
import { INote } from "../../types";
import { parseDates } from "../../utils/parseDates";
import st from "./NewNotePage.module.scss";

const NewNotePage = () => {
    const { activeNotes } = useSelector(selectNotes);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState(categories[0]);
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [validate, setValidate] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title || !content) {
            setValidate(true);

            setTimeout(() => {
                setValidate(false);
            }, 1000);
        } else {
            const slug = title.replaceAll(" ", "-").toLowerCase();
            const isExists = activeNotes?.find((i) => i.slug === slug);

            if (!isExists) {
                const creationDate = format(new Date(), "dd.MM.yyyy");
                const parsedDates = parseDates(content);

                const newNote: INote = {
                    title,
                    content,
                    creationDate,
                    category,
                    parsedDates,
                    slug,
                };
                dispatch(setActive(newNote));

                navigate("/notes");
            } else {
                console.log(title + "already exists");
            }
        }
    };

    return (
        <form className={st.root} onSubmit={(e) => handleSubmit(e)}>
            <input
                className={validate ? st.notValid : ""}
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <div className={st.category}>
                <p>Select Category:</p>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {categories.map((i) => (
                        <option key={i} value={i}>
                            {i}
                        </option>
                    ))}
                </select>
            </div>

            <textarea
                className={validate ? st.notValid : ""}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                id="content"
                placeholder="Enter content"
            ></textarea>

            <button className="btn" type="submit">
                submit
            </button>
        </form>
    );
};

export default NewNotePage;
