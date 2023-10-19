"use client";

import { GlobalContext, initialReportFormData } from "@/context";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { useContext, useState } from "react";
import { FiPlus } from "react-icons/fi";

export default function CommonModal() {
  const [openModal, setOpenModal] = useState(false);
  const {
    allTasks,
    reportFormData,
    allReportsData,
    setAllReportsData,
    setReportFormData,
  } = useContext(GlobalContext);

  const formControls = [
    {
      name: "name",
      type: "text",
      placeholder: "Enter report name",
      component: "input",
      options: [],
    },
    {
      name: "visitors",
      type: "number",
      placeholder: "Enter visitors count",
      component: "input",
      options: [],
    },
    {
      name: "sales",
      type: "number",
      placeholder: "Enter number of sales",
      component: "input",
      options: [],
    },
    {
      name: "revenue",
      type: "number",
      placeholder: "Enter revenue",
      component: "input",
      options: [],
    },
    {
      name: "task",
      type: "",
      placeholder: "Select task",
      component: "select",
      options:
        allTasks && allTasks.length
          ? allTasks.map((item) => ({
              label: item.title,
              value: item.title,
            }))
          : [],
    },
  ];

  function handleAddNewReport() {
    let cpyAllReportsData = [...allReportsData];
    cpyAllReportsData.push({
      id: allReportsData.length + 1,
      ...reportFormData,
    });

    setAllReportsData(cpyAllReportsData);
    setReportFormData(initialReportFormData);
    setOpenModal(false);
    localStorage.setItem("allReportsData", JSON.stringify(cpyAllReportsData));
  }

  console.log(allReportsData);

  return (
    <div>
      <FiPlus
        onClick={() => setOpenModal(true)}
        className="h-6 w-6 cursor-pointer text-gray-400 dark:text-white"
      />
      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <DialogContent className="!h-80 !w-80">
          <div className="flex flex-col gap-5">
            {formControls.map((control) =>
              control.component === "input" ? (
                <div className="flex h-[40px] items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white">
                  <input
                    name={control.name}
                    value={reportFormData[control.name]}
                    onChange={(e) =>
                      setReportFormData({
                        ...reportFormData,
                        [control.name]: e.target.value,
                      })
                    }
                    placeholder={control.placeholder}
                    type={control.type}
                    className="pl-3 block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:!bg-navy-900 dark:text-white dark:placeholder:!!text-white"
                  />
                </div>
              ) : (
                <div className="flex h-[40px] items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white">
                  <select
                    value={reportFormData[control.name]}
                    onChange={(e) =>
                      setReportFormData({
                        ...reportFormData,
                        [control.name]: e.target.value,
                      })
                    }
                    className="pl-3 block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:!bg-navy-900 dark:text-white dark:placeholder:!!text-white"
                    name={control.name}
                    placeholder={control.placeholder}
                  >
                    <option id="" value={""}>
                      Select
                    </option>
                    {control.options && control.options.length
                      ? control.options.map((optionItem) => (
                          <option
                            id={optionItem.value}
                            value={optionItem.value}
                          >
                            {optionItem.label}
                          </option>
                        ))
                      : null}
                  </select>
                </div>
              )
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <button
            onClick={handleAddNewReport}
            className="border rounded-[20px] text-lg px-12 py-3 bg-white text-gray-600 dark:text-white dark:bg-navy-800"
          >
            Add New Report
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
