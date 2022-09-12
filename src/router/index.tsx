import { Navigate } from "react-router-dom";
import ArchivePage from "../pages/archive/ArchivePage";
import NewNotePage from "../pages/newNote/NewNotePage";
import NotesPage from "../pages/notes/NotesPage";

export const routes = [
    { path: "/", element: <Navigate to="/notes" replace={true} /> },
    { path: "/notes", element: <NotesPage /> },
    { path: "/archive", element: <ArchivePage /> },
    { path: "/new", element: <NewNotePage /> },
];
