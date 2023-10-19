"use client";

import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export const initialReportFormData = {
  name: "",
  visitors: 0,
  sales: 0,
  revenue: 0,
  task: "",
};

export default function GlobalState({ children }) {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [allTasks, setAllTasks] = useState([]);
  const [unassignedItems, setUnassignedItems] = useState([]);
  const [todoItems, setTodoItems] = useState([]);
  const [inprogressItems, setInprogressItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [reportFormData, setReportFormData] = useState(initialReportFormData);
  const [allReportsData, setAllReportsData] = useState([]);

  useEffect(() => {
    setAllTasks(JSON.parse(localStorage.getItem("allTasks")) || []);
    setUnassignedItems(
      JSON.parse(localStorage.getItem("unassignedItems")) || []
    );
    setDoneItems(JSON.parse(localStorage.getItem("doneItems")) || []);
    setInprogressItems(
      JSON.parse(localStorage.getItem("inprogressItems")) || []
    );
    setTodoItems(JSON.parse(localStorage.getItem("todoItems")) || []);
    setAllReportsData(JSON.parse(localStorage.getItem("allReportsData")) || []);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        openSidebar,
        setOpenSidebar,
        allTasks,
        setAllTasks,
        newTask,
        setNewTask,
        unassignedItems,
        setUnassignedItems,
        todoItems,
        setTodoItems,
        inprogressItems,
        setInprogressItems,
        doneItems,
        setDoneItems,
        reportFormData,
        setReportFormData,
        allReportsData,
        setAllReportsData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
