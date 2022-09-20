import React, { FC } from "react";
import { categories } from "../../config";

interface SelectProps {
    category: string;
    isEditable: boolean;
    setCategory: (i: string) => void;
}

const Select: FC<SelectProps> = ({ category, isEditable, setCategory }) => {
    return (
        <div className="flex gap-2.5 font-semibold">
            {isEditable && <p>Select Category:</p>}
            <select
                value={category}
                disabled={!isEditable}
                onChange={(e) => setCategory(e.target.value)}
                className="cursor-pointer text-primary underline"
            >
                {categories.map((i) => (
                    <option key={i} value={i}>
                        {i}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
