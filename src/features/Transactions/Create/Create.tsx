import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Result from "./Result";
import Cart from "./Cart";

const CreateTransaction = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Tab.Group selectedIndex={selectedIndex}>
      <Tab.List className="hidden">
        <Tab></Tab>
        <Tab></Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <Cart setSelectedIndex={setSelectedIndex} />
        </Tab.Panel>
        <Tab.Panel>
          <Result setSelectedIndex={setSelectedIndex} status="success" />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default CreateTransaction;
