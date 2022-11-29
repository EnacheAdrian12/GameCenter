import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Post from "./Posts";
import { useState } from "react";


const Content = () => {

    const postSchema = [
      { type: "Selling", name: "Adrian", text: "I am here to sell ...." },
      {
        type: "Selling",
        name: "Adrian2",
        text: "I am here to sell ....",
      },
      {
        type: "Selling",
        name: "Adrian3",
        text: "I am here to sell ....",
      },
      {
        type: "Selling",
        name: "Adrian4",
        text: "I am here to sell ....",
      },
     
    ];
    const [post , setPost] = useState(postSchema)

  return (
    <>
      <Container
        fluid
        style={{ height: "91%" }}
        className="bg-dark d-inline-block "
      >
        <Row className="bg-dark text-secondary h-100">
          <Col
            md="3"
            className="d-flex justify-content-center align-items-center flex-column border border-white"
          >
            <a className="btn btn-dark" href="">
              Account
            </a>
            <h1>Points</h1>
            <a className="btn btn-dark" href="">
              Posts
            </a>
            <a className="btn btn-dark" href="">
              Logout
            </a>
          </Col>
          <Col
            md="7"
            className="p-5 d-flex flex-column-reverse border border-white"
          >
            {" "}
            {post.map((element) => {
              return <Post props={element} />;
            })}
          </Col>
          <Col
            md="2"
            className="d-flex flex-column border border-white gap-5 justify-content-center  align-items-start"
          >
            <a href="" className="btn btn-dark fs-3">
              Selling
            </a>
            <a href="" className="btn btn-dark fs-3">
              {" "}
              Buying
            </a>
            <a href="" className="btn btn-dark fs-3">
              Trade
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Content;
