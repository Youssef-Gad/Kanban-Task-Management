function ColumnHeader({ column }) {
  return (
    <div className="flex items-center gap-1">
      <div
        className={`h-3 w-3 rounded-full ${column.id === 0 ? "bg-[#49C4E5]" : column.id === 1 ? "bg-[#8471F2]" : "bg-[#67E2AE]"}`}
      ></div>
      <p className="text-sm font-bold uppercase tracking-widest text-medium-grey">
        {column.name} ({column.tasks.length})
      </p>
    </div>
  );
}

export default ColumnHeader;
