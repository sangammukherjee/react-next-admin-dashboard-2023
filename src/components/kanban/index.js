"use client";

import { useDraggable, useDroppable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

function KanbanItem({ item, index, parent }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item.title,
    data: {
      title: item.title,
      index,
      parent,
    },
  });

  const setStyle = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      {...listeners}
      {...attributes}
      ref={setNodeRef}
      style={{ transform: setStyle.transform }}
      className="rounded-[30px] p-3 cursor-pointer flex justify-center items-center shadow-shadow-100 dark:shadow-none font-bold bg-[#ffc46b] dark:text-[#000000] text-white"
    >
      <h1>{item.title}</h1>
    </div>
  );
}

export default function KanbanCard({ title, tasks }) {
  const { setNodeRef } = useDroppable({
    id: title,
  });

  return (
    <div className="flex flex-[3] rounded-[20px] dark:!bg-navy-800 bg-white p-5 flex-col min-h-[30rem]">
      <h1 className="font-bold">{title}</h1>
      <div ref={setNodeRef} className="flex-1 flex gap-5 flex-col mt-4">
        {tasks && tasks.length > 0
          ? tasks.map((task, index) => (
              <KanbanItem index={index} item={task} parent={title} />
            ))
          : null}
      </div>
    </div>
  );
}
