import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PostsDisplay from "./PostsDisplay";
import { Link, Route, Routes } from "react-router-dom";

const Content = () => {
  return (
    <>
      <Container
        fluid
        style={{ height: "91%" }}
        className="bg-dark d-inline-block  "
      >
        <Row className="bg-dark text-secondary h-100 ">
          <Col
            md="2"
            className="d-md-flex justify-content-center align-items-center flex-column border-top border-white d-none order-md-3 gap-2"
          >
            <h1 className="fs-2 ">Hello Name</h1>
            <h2>Points: 100</h2>
            <Link className="btn btn-dark fs-3" href="">
              Posts
            </Link>
            <Link className="btn btn-dark fs-3" href="">
              Logout
            </Link>
          </Col>
          <Routes>
            <Route path="/leagueoflegends" element={<PostsDisplay />} />
            <Route path="/metin2" element={<PostsDisplay />} />
            <Route path="/counterstrike" element={<PostsDisplay />} />
            <Route path="/dota2" element={<PostsDisplay />} />
          </Routes>
        </Row>
      </Container>
    </>
  );
};

export default Content;
