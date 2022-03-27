import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import ShowPost from "./components/ShowPost";
import Post from "./components/Post";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowPost />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/show/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
