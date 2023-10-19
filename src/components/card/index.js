"use client";

export default function Card({ children, addtionalStyles }) {
  return (
    <div
      className={`!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-100 dark:shadow-none dark:!bg-navy-800 dark:text-white ${addtionalStyles}`}
    >
      {children}
    </div>
  );
}
