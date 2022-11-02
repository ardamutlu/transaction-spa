import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Form from "./Form";
import Result from "./Result";

const TransactionTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Tab.Group selectedIndex={selectedIndex}>
      <Tab.List className="hidden">
        <Tab></Tab>
        <Tab></Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <Form setSelectedIndex={setSelectedIndex} />
        </Tab.Panel>
        <Tab.Panel>
          <Result setSelectedIndex={setSelectedIndex} status="success" />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TransactionTab;
