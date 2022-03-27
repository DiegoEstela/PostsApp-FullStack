import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { Button } from "react-bootstrap";

const URI = "http://localhost:8081/posts/";

const ShowPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const res = await axios.get(URI);
    setPosts(res.data);
  };

  const deletePost = async (id) => {
    await axios.delete(`${URI}${id}`);
    getPosts();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Link to="/create" className="btn btn-outline-success">
            <BsPlusCircle />
          </Link>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.title}</td>
                  <td>{blog.content}</td>
                  <td>
                    <Link to={`/edit/${blog.id}`} className="btn btn-info">
                      <AiFillEdit />
                    </Link>
                    <Link to={`/show/${blog.id}`} className="btn btn-info">
                      ver
                    </Link>
                    <Button
                      onClick={() => deletePost(blog.id)}
                      className="btn btn-danger"
                    >
                      <AiFillDelete />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowPost;
