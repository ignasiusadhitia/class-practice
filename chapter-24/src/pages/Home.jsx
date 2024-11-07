import React, { useEffect, useState } from "react";
import ActivityForm from "../components/ActivityForm";
import ActivityList from "../components/ActivityList";
import useData from "../hooks/useData";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

const Home = () => {
  const [showModal, setShowModal] = useState(false); // State untuk mengontrol modal
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const { data, isLoading, isError, fetchData } = useData();

  useEffect(() => {
    fetchData("/activities");
  }, [fetchData]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setActivities(data);
    } else {
      setActivities([]);
    }
  }, [data]);

  const handleAddActivityClick = () => {
    setSelectedActivity(null);
    setShowModal(true);
  };

  if (isLoading) {
    <Spinner />;
  }

  if (isError) {
    <ErrorMessage />;
  }

  return (
    <div>
      <h1 className="my-4">Daily Activity Manager</h1>
      <button className="btn btn-primary mb-3" onClick={handleAddActivityClick}>
        Add Activity
      </button>

      {Array.isArray(activities) && activities.length > 0 ? (
        activities?.map((activity) => (
          <ActivityList
            key={activity.id}
            activity={activity}
            setShowModal={setShowModal}
            setSelectedActivity={setSelectedActivity}
          />
        ))
      ) : (
        <p>No activities found.</p>
      )}

      <ActivityForm
        showModal={showModal}
        setShowModal={setShowModal}
        selectedActivity={selectedActivity}
      />
    </div>
  );
};

export default Home;
