import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Row, Col, Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";

const CreateTaskPage: React.FC = () => {
  const { addTask } = useTaskContext();
  const navigate = useNavigate();

  const [taskName, setTaskName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [isUrgent, setIsUrgent] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!taskName || !startDate || !startTime) {
      alert("Please fill in all required fields.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: taskName,
      description: taskDescription,
      completed: false,
      startDate: `${startDate}T${startTime}`,
      endDate: endDate && endTime ? `${endDate}T${endTime}` : null,
      urgent: isUrgent,
    };

    addTask(newTask.title, newTask.description, newTask.startDate, newTask.endDate, newTask.urgent);

    setTaskName("");
    setTaskDescription("");
    setStartDate("");
    setStartTime("");
    setEndDate("");
    setEndTime("");
    setIsUrgent(false);

    navigate("/dashboard");
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Task Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/creation">Create Task</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container mt-5">
        <h1 className="h3 mb-3">New Task Creation</h1>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="taskName">
                <Form.Label>Task</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the Task"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="taskDescription">
                <Form.Label>Task Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Describe the task"
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="startDateTime">
            <Form.Label>Start Date & Time</Form.Label>
            <div className="input-group">
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
              <span className="input-group-text">at</span>
              <Form.Control
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="endDateTime">
            <Form.Label>End Date & Time</Form.Label>
            <div className="input-group">
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <span className="input-group-text">at</span>
              <Form.Control
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="urgentCheck">
            <Form.Check
              type="checkbox"
              label="Mark as Urgent"
              checked={isUrgent}
              onChange={(e) => setIsUrgent(e.target.checked)}
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="mt-3">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateTaskPage;
