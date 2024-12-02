import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';

function MovieItem(props) {
  const handleDelete = (e) => {
      e.preventDefault();
      axios.delete('http://localhost:4000/api/movie/' + props.myMovie._id)
          .then(() => {
              props.Reload(); // Refresh the movie list after deletion
          })
          .catch((error) => {
              console.error("Error deleting movie:", error);
          });
  };

  return (
    <div>
      <Card>
        <Card.Header>{props.myMovie.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.myMovie.poster} alt={props.myMovie.title} />
            <footer>{props.myMovie.year}</footer>
          </blockquote>
        </Card.Body>
        <Link className="btn btn-primary" to={"/edit/"+props.myMovie._id}>Edit</Link>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Card>
    </div>
  );
}

export default MovieItem;