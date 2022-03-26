import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
const URL = "http://localhost:8081/posts/";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const send = async (e) => {
    e.preventDefault();
    await axios.post(URL, { title, content });
    navigate("/");
  };

  return (
    <>
      <h3>CreatePost</h3>
      <Form onSubmit={send}>
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
            type="text"
          />
        </div>
        <Button type="submit" className="btn btn-primary">
          Create
        </Button>
      </Form>
    </>
  );
};

export default CreatePost;
