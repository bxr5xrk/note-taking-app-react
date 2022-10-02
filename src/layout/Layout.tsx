import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

const Layout: FC = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Layout;
