import React, { memo } from "react";
import { CSVLink } from "react-csv";
import Button from "../../../components/Button";
import Listbox from "../../../components/Listbox";

type Props = {
  setGlobalFilter?: (value: string) => void;
  data: any;
};

const OPTIONS = [
  { name: "All", value: "" },
  { name: "Created", value: "Created" },
  { name: "Sent", value: "Sent" },
];

const createCsvData = (data) => data.map(({ original }) => original);

const TransactionFilter: React.FC<Props> = ({ data, setGlobalFilter }) => {
  console.log("data:", data);
  return (
    <div className="flex justify-between bg-gray-200 px-6 py-3">
      <Listbox
        options={OPTIONS}
        item={OPTIONS[0]}
        prefix="Status: "
        placeholder="Status"
        onChange={(value) => setGlobalFilter && setGlobalFilter(value.value)}
      />
      <CSVLink data={createCsvData(data)}>
        <Button variant="primary" size="sm" className="ml-2">
          Export as CSV
        </Button>
      </CSVLink>
    </div>
  );
};

export default memo(TransactionFilter);
