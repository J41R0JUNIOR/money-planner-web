import {
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout.tsx";
import PrivateLayout from "./layouts/PrivateLayout";
import { auth } from "./services/auth";
import SignInPage from "./pages/publics/signIn/signin";
import HomePage from "./pages/privates/home/home";
import NotFoundPage from "./pages/publics/notFound/notFound";
import SignUpPage from "./pages/publics/signUp/signup";
import ConfirmCodePage from "./pages/publics/confirmCode/confirm-code";
import { EventPage } from "./pages/privates/entries/event.tsx";

async function privateLoader() {
  const isLogged = await auth.isAuthenticated();
  if (!isLogged) return redirect("/");
  return null;
}

async function publicLoader() {
  const isLogged = await auth.isAuthenticated();
  if (isLogged) return redirect("/home");
  return null;
}

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    loader: publicLoader,
    children: [
      { index: true, element: <SignInPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "confirm-code", element: <ConfirmCodePage /> },
    ],
  },

  {
    element: <PrivateLayout />,
    loader: privateLoader,
    children: [
      { path: "home", element: <HomePage /> },
      { path: "event", element: <EventPage /> },
    ],
  },

  { path: "*", element: <NotFoundPage /> },
]);