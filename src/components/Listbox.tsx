import React, { Fragment, useState } from "react";
import map from "lodash/map";
import classNames from "classnames";
import { Listbox as HListbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

type Option = { name: string; value: string };

type Props = {
  options: Option[];
  item?: Option;
  prefix?: string;
  placeholder?: string;
  block?: boolean;
  onChange?: (value: Option) => void;
};

const Listbox: React.FC<Props> = ({
  options,
  item,
  prefix,
  placeholder,
  block,
  onChange,
}) => {
  const [selected, setSelected] = useState(item);

  const onSelect = (option: Option) => {
    setSelected(option);
    onChange && onChange(option);
  };

  return (
    <HListbox value={selected} onChange={onSelect}>
      <div className="relative">
        <HListbox.Button
          className={classNames(
            "relative cursor-default shadow-sm border border-gray-200 rounded-lg bg-white py-3 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm",
            { "w-full": block }
          )}
        >
          <span className="block truncate">
            {selected?.name && prefix}
            {selected?.name}
            {!selected?.name && placeholder}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </HListbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <HListbox.Options
            className={classNames(
              "absolute mt-1 max-h-60 overflow-auto border border-gray-200 rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
              { "w-full": block }
            )}
          >
            {map(options, (person, personIdx) => (
              <HListbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-indigo-100 text-indigo-900" : "text-indigo-900"
                  }`
                }
                value={person}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {person.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </HListbox.Option>
            ))}
          </HListbox.Options>
        </Transition>
      </div>
    </HListbox>
  );
};

export default Listbox;
