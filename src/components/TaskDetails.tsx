import React, { useState } from "react";
import { Button, Card, Accordion, Form } from "react-bootstrap";
import { useTaskContext, Task } from "../context/TaskContext";

const TaskDetails: React.FC = () => {
  const { tasks, editTask, deleteTask, toggleTaskCompletion } = useTaskContext();

  const taskId = 1;
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return <div>Task not found</div>;
  }

  const [taskDetails, setTaskDetails] = useState<Task>(task);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTaskDetails({
      ...taskDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editTask(taskDetails.id, taskDetails.title, taskDetails.description, taskDetails.startDate, taskDetails.endDate, taskDetails.urgent); 
    console.log("Task updated:", taskDetails);
  };

  const handleCompletionToggle = () => {
    toggleTaskCompletion(taskDetails.id);
  };

  const handleDelete = () => {
    deleteTask(taskDetails.id);
  };

  return (
    <div className="container py-4">
      <h1>Task Details</h1>
      
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Task #{task.id}</Accordion.Header>
          <Accordion.Body>
            <Card>
              <img src="path_to_image" alt="Task" className="card-img-top" />
              <Card.Body>
                <Card.Title>{task.title}</Card.Title>
                <Card.Text>{task.description}</Card.Text>
                <div className="d-flex gap-2">
                  <Button variant="success" onClick={handleCompletionToggle}>
                    {task.completed ? "Undo Completion" : "Complete"}
                  </Button>
                  <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </div>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <section className="mt-4">
        <h3>Edit Task</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="taskName">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={taskDetails.title}
              onChange={handleInputChange}
              placeholder="Edit Task Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="taskDescription">
            <Form.Label>Task Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={taskDetails.description}
              onChange={handleInputChange}
              placeholder="Description of task"
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default TaskDetails;
