import React from "react";
import { flexRender, Table as TableState } from "@tanstack/react-table";

interface Props<T> {
  tableInstance: TableState<T>;
}

function Table<T>({ tableInstance }: Props<T>) {
  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-800 uppercase bg-gray-100">
        {tableInstance.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="py-3 px-6">
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {tableInstance.getRowModel().rows.map((row) => (
          <tr key={row.id} className="border-b bg-gray-50 border-gray-200">
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className="py-4 px-6 text-gray-800 whitespace-nowrap"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
