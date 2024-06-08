import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import "bootstrap/dist/css/bootstrap.min.css";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch(
      `http://localhost:4000/api/workouts/${workout._id}`,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{workout.title}</Card.Title>
        <Card.Text>
          <strong>Load (kg): </strong>
          {workout.load}
          <br />
          <strong>Reps: </strong>
          {workout.reps}
          <br />
          {new Date(workout.createdAt).toLocaleDateString()}
        </Card.Text>
        <Button variant="danger" onClick={handleClick} className="me-2">
          Delete
        </Button>
        <Link to={`/update/${workout._id}`} className="btn btn-primary">
          Update
        </Link>
      </Card.Body>
    </Card>
  );
};

export default WorkoutDetails;
