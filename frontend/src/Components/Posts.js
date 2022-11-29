import Card from "react-bootstrap/Card";

const Post = (props) => {
    console.log(props)
  return (
    <>
      <Card style={{ width: "100%" , height: "10rem" }}>
        <Card.Body>
          <Card.Title>{props.props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
           {props.props.type}
          </Card.Subtitle>
          <Card.Text>
           {props.props.text}
          </Card.Text>
          <Card.Link href="#">View Post</Card.Link>
          
        </Card.Body>
      </Card>
    </>
  );
};

export default Post;
