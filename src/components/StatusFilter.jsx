import React from "react";

const StatusFilter = ({ statusFilter, setStatusFilter, products }) => {
  const uniqueStatus = [...new Set(products.map((p) => p.product_status))];

  return (
    <select
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
      className="bg-neutral-secondary-medium border border-default-medium text-body rounded-base px-3 py-2 focus:ring-brand focus:border-brand shadow-xs text-sm"
    >
      <option value="">All Status</option>
      {uniqueStatus.map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </select>
  );
};

export default StatusFilter;
