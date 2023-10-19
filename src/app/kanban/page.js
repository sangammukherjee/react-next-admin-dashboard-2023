"use client";

import KanbanCard from "@/components/kanban";
import { GlobalContext } from "@/context";
import { DndContext, rectIntersection } from "@dnd-kit/core";
import { useContext } from "react";

export default function Kanban() {
  const {
    unassignedItems,
    setUnassignedItems,
    todoItems,
    setTodoItems,
    inprogressItems,
    setInprogressItems,
    doneItems,
    setDoneItems,
  } = useContext(GlobalContext);

  return (
    <DndContext
      collisionDetection={rectIntersection}
      onDragEnd={(e) => {
        const container = e.over?.id;
        const title = e.active.data.current?.title ?? "";
        const index = e.active.data.current?.index ?? 0;
        const parent = e.active.data.current?.parent ?? "ToDo";
        console.log(e.active.data.current, container);

        if (container === "ToDo") {
          setTodoItems([...todoItems, { title }]);
          localStorage.setItem('todoItems', JSON.stringify([...todoItems, { title }]))
        } else if (container === "Done") {
          setDoneItems([...doneItems, { title }]);
          localStorage.setItem('doneItems', JSON.stringify([...doneItems, { title }]))
        } else if (container === "Unassigned") {
          setUnassignedItems([...unassignedItems, { title }]);
          localStorage.setItem('unassignedItems', JSON.stringify([...unassignedItems, { title }]))
        } else {
          setInprogressItems([...inprogressItems, { title }]);
          localStorage.setItem('inprogressItems', JSON.stringify([...inprogressItems, { title }]))
        }

        if (parent === "ToDo") {
          setTodoItems([
            ...todoItems.slice(0, index),
            ...todoItems.slice(index + 1),
          ]);
          localStorage.setItem('todoItems', JSON.stringify([
            ...todoItems.slice(0, index),
            ...todoItems.slice(index + 1),
          ]))
        } else if (parent === "Done") {
          setDoneItems([
            ...doneItems.slice(0, index),
            ...doneItems.slice(index + 1),
          ]);
          localStorage.setItem('doneItems', JSON.stringify([
            ...doneItems.slice(0, index),
            ...doneItems.slice(index + 1),
          ]))
        } else if (parent === "Unassigned") {
          setUnassignedItems([
            ...unassignedItems.slice(0, index),
            ...unassignedItems.slice(index + 1),
          ]);
          localStorage.setItem('unassignedItems', JSON.stringify([
            ...unassignedItems.slice(0, index),
            ...unassignedItems.slice(index + 1),
          ]))
        } else {
          setInprogressItems([
            ...inprogressItems.slice(0, index),
            ...inprogressItems.slice(index + 1),
          ]);
          localStorage.setItem('inprogressItems', JSON.stringify([
            ...inprogressItems.slice(0, index),
            ...inprogressItems.slice(index + 1),
          ]))
        }
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <KanbanCard title={"Unassigned"} tasks={unassignedItems} />
        <KanbanCard title={"ToDo"} tasks={todoItems} />
        <KanbanCard title={"In Progress"} tasks={inprogressItems} />
        <KanbanCard title={"Done"} tasks={doneItems} />
      </div>
    </DndContext>
  );
}
