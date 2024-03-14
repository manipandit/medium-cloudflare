import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignupPage } from "./pages/SignupPage";
import { SigninPage } from "./pages/SigninPage";
import { Blogs } from "./pages/Blogs";
import { Blog } from "./pages/Blog";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />

          <Route path="/blogs" element={<PrivateRoute />}>
            <Route path="/blogs" element={<Blogs />} />
          </Route>
          {/* <Route path="/blog/:id" element={<Blog />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
