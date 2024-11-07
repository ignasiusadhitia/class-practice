import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import useData from "../hooks/useData";
import useForm from "../hooks/useForm";

const ActivityForm = ({ showModal, setShowModal, selectedActivity = null }) => {
  const { createData, updateData } = useData();

  const initialValues = selectedActivity || {
    title: "",
    description: "",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Activity title is required";
    }

    if (!values.description) {
      errors.description = "Activity description is required";
    }

    return errors;
  };

  useEffect(() => {
    resetForm();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedActivity]);

  const onSubmit = (values) => {
    if (selectedActivity) {
      updateData("/activities", selectedActivity.id, values);
    } else {
      createData("/activities", values);
    }

    handleClose();
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
    isSubmitting,
  } = useForm(initialValues, validate, onSubmit);

  const handleClose = () => {
    setShowModal(false);
    resetForm();
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{selectedActivity ? "Edit" : "Add"} Activity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className={`form-control ${errors.title ? "is-invalid" : ""}`}
              id="title"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            {errors.title && (
              <span className="invalid-feedback">{errors.title}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className={`form-control ${
                errors.description ? "is-invalid" : ""
              }`}
              id="description"
              name="description"
              rows="3"
              value={values.description}
              onChange={handleChange}
            ></textarea>
            {errors.description && (
              <span className="invalid-feedback">{errors.description}</span>
            )}
          </div>
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting || Object.keys(errors).length > 0}
          >
            {isSubmitting
              ? "Submitting..."
              : selectedActivity
              ? "Update"
              : "Add"}
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

ActivityForm.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  selectedActivity: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default ActivityForm;
