"use client";

import Card from "@/components/card";
import CommonModal from "@/components/modal";
import { GlobalContext } from "@/context";
import { useContext } from "react";

export default function Reports() {
  const { allReportsData } = useContext(GlobalContext);

  const columns = ["name", "visitors", "sales", "revenue", "task"];

  return (
    <div className="mt-5">
      <Card addtionalStyles={"w-full h-full px-6"}>
        <header className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Report Analytics
          </div>
          <CommonModal />
        </header>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      {columns.map((col) => (
                        <th scope="col" className="px-6 py-4">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {allReportsData && allReportsData.length
                      ? allReportsData.map((dataItem) => (
                          <tr className="border-b font-medium dark:border-neutral-500">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {dataItem.name}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {dataItem.visitors}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {dataItem.sales}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {dataItem.revenue}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {dataItem.task}
                            </td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
