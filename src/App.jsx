import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes.jsx";
import { UserContextProvider } from "./Context/UserContext.jsx";
function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={routes}></RouterProvider>
    </UserContextProvider>
  );
}

export default App;
