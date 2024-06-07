import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <Container>
      <Row className="mt-4">
        <Col md={8}>
          <h2>Workouts</h2>
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails workout={workout} key={workout._id} />
            ))}
        </Col>
        <Col md={4}>
          <WorkoutForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
