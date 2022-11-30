import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import Post from "./Posts";
import { useState } from "react";

const PostsDisplay = () => {
  const postSchema = [
    { type: "Selling", name: "Adrian", text: "I am here to sell ...." },
  ];
  const [post, setPost] = useState(postSchema);
  const [path, setPath] = useState(window.location.pathname);

  const changePath = (type) => {
    setPath(`${path}/${type}`);
    window.location.replace(`${path}/${type}`);
  };
  return (
    <>
      <Col
        md="8"
        sm="12"
        className="p-5 d-md-flex flex-column border-top border-start border-end border-white bg-dark  order-3"
      >
        {" "}
        {post.map((element) => {
          return <Post props={element} />;
        })}
        <Button variant="secondary" size="lg" style={{ width: "200px" }}>
          Add post
        </Button>
      </Col>

      <Col
        md="2"
        sm="12"
        className="d-md-flex flex-column border-top border-white gap-5 justify-content-center  align-items-start bg-dark order-md-3 order-1"
      >
        <Link
          to={`${path}`}
          className="btn btn-dark fs-3"
          onClick={() => {
            changePath("sell");
          }}
        >
          Selling
        </Link>
        <Link
          to={`${path}`}
          className="btn btn-dark fs-3"
          onClick={() => {
            changePath("buy");
          }}
        >
          {" "}
          Buying
        </Link>
        <Link
          to={`${path}`}
          className="btn btn-dark fs-3"
          onClick={() => {
            changePath("trade");
          }}
        >
          Trade
        </Link>
      </Col>
    </>
  );
};

export default PostsDisplay;
