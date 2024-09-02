import RootLayout from "./Components/Layout/RootLayout";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import BlogPost from "./Pages/BlogPost";
import EditBlogPost from "./Pages/EditBlogPost";
import LandingPage from "./Pages/LandingPage";
import SinglePost from "./Pages/SinglePost";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/create-post" element={<BlogPost />} />
        <Route path="/single-post/:postId" element={<SinglePost />} />
        <Route path="/edit-post/:postId" element={<EditBlogPost />} />
      </Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
