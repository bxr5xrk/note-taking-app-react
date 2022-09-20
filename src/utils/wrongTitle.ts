export const wrongTitle = (
    ref:
        | React.RefObject<HTMLInputElement>
        | React.RefObject<HTMLTextAreaElement>
) => {
    if (ref.current) {
        ref.current.classList.add("placeholder:text-red-500");
        ref.current.classList.add("text-red-500");

        setTimeout(() => {
            if (ref.current) {
                ref.current.classList.remove("placeholder:text-red-500");
                ref.current.classList.remove("text-red-500");
            }
        }, 1000);
    }
};
