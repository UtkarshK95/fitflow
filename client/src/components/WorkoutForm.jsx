import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch(
      "https://fitflow-server.onrender.com/api/workouts",
      {
        method: "POST",
        body: JSON.stringify(workout),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <Form className="mb-3" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter workout title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formLoad" className="mt-3">
        <Form.Label>Load (kg)</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter load"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formReps" className="mt-3">
        <Form.Label>Reps</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Add Workout
      </Button>
    </Form>
  );
};

export default WorkoutForm;
