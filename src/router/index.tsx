import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ArchivePage from "../pages/archive/ArchivePage";
import NewNotePage from "../pages/newNote/NewNotePage";
import NotePage from "../pages/note/NotePage";
import NotesPage from "../pages/notes/NotesPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "notes", element: <NotesPage /> },
            { path: "/notes/:slugParams", element: <NotePage /> },
            { path: "archive", element: <ArchivePage /> },
            { path: "new", element: <NewNotePage /> },
        ],
    },
]);

export default router;
