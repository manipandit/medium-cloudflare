import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignupPage } from "./pages/SignupPage";
import { SigninPage } from "./pages/SigninPage";
import { Blogs } from "./pages/Blogs";
import { Blog } from "./pages/Blog";
import PrivateRoute from "./pages/PrivateRoute";
import PublishBlog from "./pages/PublishBlog";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />

          <Route path="/blogs" element={<PrivateRoute />}>
            <Route path="/blogs" element={<Blogs />} />
          </Route>

          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/publish" element={<PublishBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
