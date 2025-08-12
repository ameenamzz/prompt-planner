import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import AddTask from "./components/AddTask";
import AiComponent from "./components/AiComponent";
import Header from "./components/Header";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Body />
        </>
      ),
    },
    {
      path: "/prompt-planner/aitask",
      element: (
        <>
          <Header />
          <AiComponent />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
