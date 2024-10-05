import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home/Home.jsx";
import Dashboard from "./routes/dashboard/Dashboard.jsx";
import Chat from "./routes/chat/Chat.jsx";
import RootLayout from "./layout/rootLayout/RootLayout.jsx";
import DashboardLayout from "./layout/dashboardLayout/Dashboard.jsx";
import SignUp from "./routes/signUp/SignUpPage.jsx";
import SignIn from "./routes/signIn/SignInPage.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-in/*",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <Chat />,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
