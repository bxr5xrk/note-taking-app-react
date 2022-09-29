import { FC, RefObject } from "react";

interface InputProps {
    titleRef: RefObject<HTMLInputElement>;
    title: string;
    setTitle: (i: string) => void;
    isEditable: boolean;
}

const Input: FC<InputProps> = ({ setTitle, title, titleRef, isEditable }) => {
    return (
        <div className="relative mt-3">
            {!isEditable && (
                <span
                    className={`absolute left-0 -top-6  ${
                        title.length === 40 ? " text-primary" : "text-gray-500"
                    }`}
                >
                    {title.length} / 40
                </span>
            )}
            <input
                ref={titleRef}
                type="text"
                autoFocus
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={40}
                minLength={2}
                className="text-4xl font-semibold"
            />
        </div>
    );
};

export default Input;
