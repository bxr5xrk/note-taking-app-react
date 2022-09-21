import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../store/store";

interface DecoratorProps {
    children: ReactNode;
}

const Decorator: FC<DecoratorProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <Router>{children}</Router>
        </Provider>
    );
};

export default Decorator;
