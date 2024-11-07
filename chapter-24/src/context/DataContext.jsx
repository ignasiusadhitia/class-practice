import axios from "axios";
import PropTypes from "prop-types";
import React, { createContext, useCallback, useMemo, useState } from "react";
import Swal from "sweetalert2";

const baseURL = "http://localhost:3000";

// Context to store global data and CRUD functions
const DataContext = createContext();

// Provider for DataContext
const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  // Fetch Data Function
  const fetchData = useCallback(async (url) => {
    setIsLoading(true);
    try {
      const response = await axios.get(baseURL + url);
      setData(response.data);
      setIsError(null);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Create Data Function
  const createData = useCallback(async (url, newData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(baseURL + url, newData);
      setData((prevData) => [...prevData, response.data]);
      setIsError(null);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Activity created successfully!",
      });
    } catch (error) {
      setIsError(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to create activity. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Update Data Function
  const updateData = useCallback(async (url, id, updateData) => {
    setIsLoading(true);
    try {
      const response = await axios.put(`${baseURL + url}/${id}`, updateData);
      setData((prevData) =>
        prevData.map((item) => (item.id === id ? response.data : item))
      );
      setIsError(null);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Activity updated successfully!",
      });
    } catch (error) {
      setIsError(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update activity. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Delete Data Function
  const deleteData = useCallback(async (url, id) => {
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this activity?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });
    if (confirmResult.isConfirmed) {
      setIsLoading(true);
      try {
        await axios.delete(`${baseURL + url}/${id}`);
        setData((prevData) => prevData.filter((item) => item.id !== id));
        setIsError(null);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Activity deleted successfully.",
        });
      } catch (error) {
        setIsError(error);

        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to delete activity. Please try again.",
        });
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  // Values that will be passed to the context
  const value = useMemo(
    () => ({
      data,
      isLoading,
      isError,
      fetchData,
      createData,
      updateData,
      deleteData,
    }),
    [data, isLoading, isError, fetchData, createData, updateData, deleteData]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DataContext, DataProvider };
