import Content from "./Components/Content";
import NavBar from "./Components/NavBar";
import Container from "react-bootstrap/esm/Container";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="vh-100 bg-dark" style={{ padding: 0 }}>
        <NavBar />
        <Content />
      </Container>
    </BrowserRouter>
  );
}

export default App;
