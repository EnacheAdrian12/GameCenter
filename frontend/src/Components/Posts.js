import Card from "react-bootstrap/Card";


const Post = (props) => {
   
  return (
    <>
      <Card
        style={{ width: "100%", height: "10rem" }}
        className="mb-2 bg-secondary text-dark"
      >
        <Card.Body>
          <Card.Title className="text-dark">{props.props.name}</Card.Title>
          <Card.Subtitle className="mb-2  text-dark">
            {props.props.type}
          </Card.Subtitle>
          <Card.Text>{props.props.text}</Card.Text>
          <Card.Link href="#" className="btn btn-dark fs-6">
            View Post
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Post;
