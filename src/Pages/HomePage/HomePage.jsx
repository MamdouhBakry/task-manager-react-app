import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import Task from "../../components/Task/Task";
import { isUserLoggedIn } from "../../redux/actions/userAction";
import "./HomePage.scss";
import Modal from "../../components/Modal/Modal";
import { getTasks } from "../../redux/actions/taskAction";
import EditModal from "../../components/EditModal/EditModal";
function HomePage() {
  let auth = useSelector((state) => state.user);
  let tasks = useSelector((state) => state.tasks.tasks);
  const { todo, inProgress, underReview, rework, completed } = tasks;
  console.log("tasks", tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (auth.authenticate) {
      dispatch(getTasks());
    }
  }, [auth.authenticate]);
  return (
    <>
      <Navbar />
      <div className=" task-container">
        <Modal type="add" />
        <div className="row text-center">
          <div className="col card py-3">
            <h4 className="text-center bg-primary text-light p-3">ToDo</h4>
            {todo &&
              todo.map((task) => (
                <>
                  <Task key={task._id} task={task} />
                </>
              ))}
          </div>
          <div className="col card py-3">
            <h4 className="text-center bg-secondary text-light p-3">
              InProgress
            </h4>
            {inProgress &&
              inProgress.map((task) => (
                <>
                  <Task key={task._id} task={task} />
                </>
              ))}
          </div>
          <div className="col card py-3">
            <h4 className="text-center bg-warning text-light p-3">
              Under Review
            </h4>
            {underReview &&
              underReview.map((task) => (
                <>
                  <Task key={task._id} task={task} />
                </>
              ))}
          </div>
          <div className="col card py-3">
            <h4 className="text-center bg-danger text-light p-3">Rework</h4>
            {rework &&
              rework.map((task) => (
                <>
                  <Task key={task._id} task={task} />
                </>
              ))}
          </div>
          <div className="col card py-3">
            <h4 className="text-center bg-success text-light p-3">Completed</h4>
            {completed &&
              completed.map((task) => (
                <>
                  <Task key={task._id} task={task} />
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
