import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { Form, Button, Container, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const UpdateWorkout = () => {
  const { id } = useParams();
  const { workouts, dispatch } = useWorkoutsContext();
  const [workout, setWorkout] = useState({ title: "", load: "", reps: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch(
        `https://fitflow-server.onrender.com/api/workouts/${id}`
      );
      const json = await response.json();

      if (response.ok) {
        setWorkout(json);
      } else {
        setError(json.error);
      }
    };

    fetchWorkout();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://fitflow-server.onrender.com/api/workouts/${id}`,
      {
        method: "PATCH",
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
      dispatch({ type: "UPDATE_WORKOUT", payload: json });
      navigate("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout((prevWorkout) => ({
      ...prevWorkout,
      [name]: value,
    }));
  };

  return (
    <Container>
      <h3 className="mt-4">Update Workout</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle" className="mt-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter workout title"
            value={workout.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formLoad" className="mt-3">
          <Form.Label>Load (kg)</Form.Label>
          <Form.Control
            type="number"
            name="load"
            placeholder="Enter load"
            value={workout.load}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formReps" className="mt-3">
          <Form.Label>Reps</Form.Label>
          <Form.Control
            type="number"
            name="reps"
            placeholder="Enter reps"
            value={workout.reps}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Update Workout
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateWorkout;
