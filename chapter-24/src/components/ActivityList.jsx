import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useData from "../hooks/useData";

const ActivityList = ({ activity, setShowModal, setSelectedActivity }) => {
  const { id, title } = activity;
  const navigate = useNavigate();
  const { deleteData } = useData();

  const handleNavigate = (id) => {
    navigate(`/activity/${id}`);
  };

  const handleEdit = (activity) => {
    setSelectedActivity(activity);
    setShowModal(true);
  };

  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span>{title}</span>
        <div>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => handleNavigate(id)}
          >
            Details
          </button>
          <button
            className="btn btn-warning btn-sm mx-1"
            onClick={() => handleEdit(activity)}
          >
            Update
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => deleteData("/activities", id)}
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  );
};

ActivityList.propTypes = {
  activity: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  setShowModal: PropTypes.func.isRequired,
  setSelectedActivity: PropTypes.func.isRequired,
};

export default ActivityList;
