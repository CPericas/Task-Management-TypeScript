import React, { useState } from "react";
import { Button, Container, Row, Col, Table, Form, Modal, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import { useTaskContext } from "../context/TaskContext"; 

const TaskDashboard: React.FC = () => {
    const { tasks, addTask, editTask, deleteTask, toggleTaskCompletion } = useTaskContext();

    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newStartDate, setNewStartDate] = useState("");
    const [newEndDate, setNewEndDate] = useState("");
    const [isUrgent, setIsUrgent] = useState(false);
    const [editTaskId, setEditTaskId] = useState<number | null>(null);
    const [editTitle, setEditTitle] = useState("");
    const [editDescription, setEditDescription] = useState("");
    const [editStartDate, setEditStartDate] = useState("");
    const [editEndDate, setEditEndDate] = useState("");
    const [editIsUrgent, setEditIsUrgent] = useState(false);

    const handleAddTask = () => {
        if (!newTitle.trim() || !newDescription.trim() || !newStartDate) return;

        addTask(newTitle, newDescription, newStartDate, newEndDate, isUrgent);
        setNewTitle("");
        setNewDescription("");
        setNewStartDate("");
        setNewEndDate("");
        setIsUrgent(false);
        setShowModal(false);
    };

    const handleEditClick = (id: number, title: string, description: string, startDate: string, endDate: string | null, urgent: boolean) => {
        setEditTaskId(id);
        setEditTitle(title);
        setEditDescription(description);
        setEditStartDate(startDate);
        setEditEndDate(endDate || "");
        setEditIsUrgent(urgent);
        setShowEditModal(true);
    };

    const handleEditTask = () => {
        if (editTaskId !== null) {
            editTask(editTaskId, editTitle, editDescription, editStartDate, editEndDate, editIsUrgent);
            setShowEditModal(false);
        }
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

            <Container className="py-4">
                <Row className="justify-content-center">
                    <Col md={10}>
                        <h2 className="text-center mb-4">Task Dashboard</h2>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Urgent</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task) => (
                                    <tr key={task.id}>
                                        <td>{task.id}</td>
                                        <td>{task.title}</td>
                                        <td>{task.description}</td>
                                        <td>{task.startDate}</td>
                                        <td>{task.endDate || "N/A"}</td>
                                        <td>{task.urgent ? "Yes" : "No"}</td>
                                        <td>{task.completed ? "Completed" : "Pending"}</td>
                                        <td>
                                            <Button variant="success" size="sm" onClick={() => handleEditClick(task.id, task.title, task.description, task.startDate, task.endDate ?? null, task.urgent)}>Edit</Button>{' '}
                                            <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>Delete</Button>{' '}
                                            <Button variant="primary" size="sm" onClick={() => toggleTaskCompletion(task.id)}>
                                                {task.completed ? "Undo" : "Complete"}
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <div className="text-center">
                            <Button variant="primary" onClick={() => setShowModal(true)}>Create New Task</Button>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Modal for creating a new task */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Task Title</Form.Label>
                            <Form.Control type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="date" value={newStartDate} onChange={(e) => setNewStartDate(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>End Date</Form.Label>
                            <Form.Control type="date" value={newEndDate} onChange={(e) => setNewEndDate(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Check type="checkbox" label="Mark as Urgent" checked={isUrgent} onChange={(e) => setIsUrgent(e.target.checked)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button variant="primary" onClick={handleAddTask}>Add Task</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Task Title</Form.Label>
                            <Form.Control type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="date" value={editStartDate} onChange={(e) => setEditStartDate(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>End Date</Form.Label>
                            <Form.Control type="date" value={editEndDate} onChange={(e) => setEditEndDate(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Check type="checkbox" label="Mark as Urgent" checked={editIsUrgent} onChange={(e) => setEditIsUrgent(e.target.checked)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>Cancel</Button>
                    <Button variant="primary" onClick={handleEditTask}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default TaskDashboard;
