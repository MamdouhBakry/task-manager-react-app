import React, { useState } from "react";
import EditModal from "../EditModal/EditModal";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteProductById } from "../../redux/actions/taskAction";
function Task(props) {
  //   For Edit Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // For Delete Modal
  const [showConfirm, setShowConFirm] = useState(false);

  const handleClose2 = () => setShowConFirm(false);
  const handleShow2 = () => setShowConFirm(true);
  const dispatch = useDispatch();

  //   Delete Task Function

  const deleteTaskByID = (id) => {
    dispatch(deleteProductById(id));
    setShowConFirm(false);
  };

  return (
    <>
      <div className="task-container bg-light mt-3 py-3 card">
        <div className="title">
          Title : <span>{props.task.title}</span>
        </div>
        <div className="description">
          Description : <span>{props.task.description}</span>
        </div>
        <div className="periority">Periority : {props.task.periority}</div>
        <div className="status">Status : {props.task.status}</div>
        <div className="start-date">
          Start Date : {props.task.startDate.slice(0, 10)}
        </div>
        <div className="end-date">
          End Date : {props.task.endDate.slice(0, 10)}
        </div>
        <div className="update-delete d-flex justify-content-between px-2 pt-2">
          <Button variant="outline-danger" onClick={handleShow2}>
            Delete Task
          </Button>
          <Button variant="outline-success" onClick={handleShow}>
            Edit Task
          </Button>
        </div>
        {/* Edit Task Modal */}
        <EditModal
          task={props.task}
          show={show}
          handleClose={handleClose}
          setShow={setShow}
        />

        {/* Delete Task Confirm Modal */}
        <Modal show={showConfirm} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are You Want To Delete this Task?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => deleteTaskByID(props.task._id)}
            >
              Confirm Delete Task
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Task;
