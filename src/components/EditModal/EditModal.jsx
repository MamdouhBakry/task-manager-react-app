import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { useDispatch } from "react-redux";
import { addTask, updateTaskById } from "../../redux/actions/taskAction";
import { Button, Modal } from "react-bootstrap";
function EditModal(props) {
  console.log("props", props);
  const [title, setTitle] = useState(props.task.title);
  const [description, setDescription] = useState(props.task.description);
  const [periority, setPeriority] = useState(props.task.periority);
  const [status, setStatus] = useState(props.task.status);
  const [startDate, onChange] = useState(props.task.startDate);
  const [endDate, onChange2] = useState(props.task.endDate);
  const dispatch = useDispatch();
  const editTask = (id) => {
    const task = {
      title,
      description,
      periority,
      status,
      startDate,
      endDate,
    };
    dispatch(updateTaskById(task, id));
    props.setShow(false);
    setTitle("");
    setDescription("");
    setPeriority("");
    setStatus("");
  };
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-2 title">
            <label htmlFor="title">Title</label>
            <input
              className="form-control"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-2 description">
            <label htmlFor="desc">Description</label>
            <textarea
              className="form-control"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-2 periority">
            <label htmlFor="periority">Periority</label>
            <select
              className="form-select"
              onChange={(e) => setPeriority(e.target.value)}
              value={periority}
              required
            >
              <option value="high">High</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
            </select>
          </div>
          <div className="mb-2 status">
            <label htmlFor="status">Status</label>
            <select
              className="form-select"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
              required
            >
              <option value="todo">ToDo</option>
              <option value="inProgress">InProgress</option>
              <option value="underReview">Under Review</option>
              <option value="rework">Rework</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="mb-2 start-date">
            <span>Start Date :</span>
            <DateTimePicker
              className="w-100 datepick"
              onChange={onChange}
              value={startDate}
              required
            />
          </div>
          <div className="mb-2 start-date">
            <span>End Date :</span>
            <DateTimePicker
              className="w-100 datepick"
              onChange={onChange2}
              value={endDate}
              required
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => editTask(props.task._id)}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
