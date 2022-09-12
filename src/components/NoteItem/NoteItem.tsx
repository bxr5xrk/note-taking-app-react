import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

interface NoteItemProps {
    title: string;
    slug: string;
}

const NoteItem: FC<NoteItemProps> = ({ title, slug }) => {
    const navigate = useNavigate();

    return (
        <div>
            <h3 onClick={() => navigate(slug)}>{title}</h3>
        </div>
    );
};

export default NoteItem;
