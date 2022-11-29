import Content from "./Components/Content";
import NavBar from "./Components/NavBar";
import Container from "react-bootstrap/esm/Container";



function App() {
  return (
    <Container fluid className="vh-100 bg-dark" style={{ padding: 0 }}>
      <NavBar />
      <Content />
    </Container>
  );
}

export default App;
