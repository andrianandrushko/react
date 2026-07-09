import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout.tsx";
import UsersPage from "../Users-Pages/UsersPage.tsx";
import JsonPlaceholderPage from "../Users-Pages/JsonPlaceholderPage.tsx";
import DummyJsonPage from "../Users-Pages/DummyJsonPage.tsx";
import PostsPage from "../Posts-Pages/PostsPage.tsx";
import JsonPlaceholderPostsPage from "../Posts-Pages/JsonPlaceholderPostsPage.tsx";
import DummyJsonPostsPage from "../Posts-Pages/DummyJsonPostsPage.tsx";
import CommentsPage from "../Comments-Pages/CommentsPage.tsx";
import JsonPlaceholderCommentsPage from "../Comments-Pages/JsonPlaceholderCommentsPage.tsx";
import DummyJsonCommentsPage from "../Comments-Pages/DummyJsonCommentsPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "users",
                element: <UsersPage />,
                children: [
                    { path: "JsonPlaceholder", element: <JsonPlaceholderPage /> },
                    { path: "DummyJson", element: <DummyJsonPage /> },
                ],
            },
            {
                path: "posts",
                element: <PostsPage />,
                children: [
                    { path: "JsonPlaceholder", element: <JsonPlaceholderPostsPage /> },
                    { path: "DummyJson", element: <DummyJsonPostsPage /> },
                ],
            },
            {
                path: "comments",
                element: <CommentsPage />,
                children: [
                    { path: "JsonPlaceholder", element: <JsonPlaceholderCommentsPage /> },
                    { path: "DummyJson", element: <DummyJsonCommentsPage /> },
                ],
            },
        ],
    },
]);

