import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useData from "../hooks/useData";
import useTimer from "../hooks/useTimer";
import { Spinner } from "react-bootstrap";
import ErrorMessage from "../components/ErrorMessage";

const ActivityDetail = () => {
  const [activity, setActivity] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();
  const { time, startTimer, stopTimer, resetTimer } = useTimer();
  // const { isLoading, data, isError } = useFetch(`/activities/${id}`);
  const { data, isLoading, isError, fetchData } = useData();

  const handleNavigate = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchData(`/activities/${id}`);
  }, [fetchData, id]);

  useEffect(() => {
    if (data) {
      setActivity(data);
    }
  }, [data]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  if (!activity) {
    return <div>No activity found</div>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-primary">{activity.title}</h2>
      <p className="text-muted">{activity.description}</p>
      <div className="card border-primary my-4">
        <div className="card-body">
          <p className="card-text">Time Spent: {time} seconds</p>
          <div className="btn-group">
            <button className="btn btn-outline-success" onClick={startTimer}>
              <i className="bi bi-play-fill"></i> Start
            </button>
            <button className="btn btn-outline-warning" onClick={stopTimer}>
              <i className="bi bi-pause-fill"></i> Stop
            </button>
            <button className="btn btn-outline-danger" onClick={resetTimer}>
              <i className="bi bi-arrow-counterclockwise"></i> Reset
            </button>
          </div>
        </div>
      </div>
      <button className="btn btn-secondary mt-3" onClick={handleNavigate}>
        <i className="bi bi-arrow-left"></i> Back to List
      </button>
    </div>
  );
};

export default ActivityDetail;
