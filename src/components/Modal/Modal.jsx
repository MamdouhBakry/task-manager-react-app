import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions/taskAction";
function Modal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [periority, setPeriority] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, onChange] = useState(new Date());
  const [endDate, onChange2] = useState(new Date());
  const dispatch = useDispatch();
  const createTask = () => {
    const task = {
      title,
      description,
      periority,
      status,
      startDate,
      endDate,
    };
    dispatch(addTask(task));
    setTitle("");
    setDescription("");
    setPeriority("");
    setStatus("");
  };
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <div className="add-task mb-3">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Task
        </button>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create Task Modal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="title">
                <label htmlFor="title">Title</label>
                <input
                  className="form-control"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="description">
                <label htmlFor="desc">Description</label>
                <textarea
                  className="form-control"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="periority">
                <label htmlFor="periority">Periority</label>
                <select
                  className="form-select"
                  onChange={(e) => setPeriority(e.target.value)}
                  value={periority}
                  required
                >
                  <option value="low"></option>
                  <option value="high">High</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                </select>
              </div>
              {/* enum: ["todo", "inProgress", "underReview", "rework", "completed"], */}
              <div className="status">
                <label htmlFor="status">Status</label>
                <select
                  className="form-select"
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                  required
                >
                  <option value=""></option>
                  <option value="todo">ToDo</option>
                  <option value="inProgress">InProgress</option>
                  <option value="underReview">Under Review</option>
                  <option value="rework">Under Rework</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="start-date">
                <span>Start Date :</span>
                <DateTimePicker
                  className="form-control datepick"
                  onChange={onChange}
                  value={startDate}
                  required
                />
              </div>
              <div className="start-date">
                <span>End Date :</span>
                <DateTimePicker
                  className="form-control datepick"
                  onChange={onChange2}
                  value={endDate}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={createTask}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
