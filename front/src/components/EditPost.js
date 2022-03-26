import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const URL = "http://localhost:8081/posts/";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(URL + id, { title, content });
    navigate("/");
  };

  useEffect(() => {
    getBlogById();
  }, []);

  const getBlogById = async () => {
    const res = await axios.get(URL + id);
    setTitle(res.data.title);
    setContent(res.data.content);
  };

  return (
    <>
      <h3>Edit POST</h3>
      <Form onSubmit={update}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            type="text"
          />
          <label className="form-label">Content</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
            type="textarea"
          />
        </div>
        <Button type="submit" className="btn btn-primary">
          Modify
        </Button>
      </Form>
    </>
  );
};

export default EditPost;
