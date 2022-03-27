import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const URL = "http://localhost:8081/posts/";

function Post() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getPostById();
  }, []);

  const getPostById = async () => {
    const res = await axios.get(URL + id);
    setTitle(res.data.title);
    setContent(res.data.content);
  };

  return (
    <>
      <h2>{title}</h2>
      <p>{content}</p>
      <Link Link to="/" className="btn btn-outline-success">
        Ir a tabla
      </Link>
    </>
  );
}

export default Post;
