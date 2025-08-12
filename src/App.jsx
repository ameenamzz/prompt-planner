import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import AiComponent from "./components/AiComponent";
import Header from "./components/Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function App() {
  const appRouter = createBrowserRouter(
    [
      {
        element: <Layout />,
        children: [
          { path: "/", element: <Body /> },
          { path: "/aitask", element: <AiComponent /> },
        ],
      },
    ],
    { basename: "/prompt-planner" } // ✅ MUST be enabled for GitHub Pages subpath
  );

  return <RouterProvider router={appRouter} />;
}

export default App;
