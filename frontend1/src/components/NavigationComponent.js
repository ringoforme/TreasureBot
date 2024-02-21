// NavigationComponent.jsx
import React from "react";

import { Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
  Popover,
  RadioGroup,
  Tab,
  Transition,
} from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavigationComponent = ({ navigation }) => {
  return (
    <Popover.Group className="hidden lg:block lg:flex-1 lg:self-stretch">
      <div className="flex h-full space-x-8">
        {navigation.categories.map((category) => (
          <Popover key={category.name} className="flex">
            {({ open }) => (
              <>
                <div className="relative flex">
                  <Popover.Button
                    className={classNames(
                      open
                        ? "text-indigo-600"
                        : "text-gray-700 hover:text-gray-800",
                      "relative z-10 flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out"
                    )}
                  >
                    {category.name}
                    <span
                      className={classNames(
                        open ? "bg-indigo-600" : "",
                        "absolute inset-x-0 bottom-0 h-0.5 transition-colors duration-200 ease-out sm:mt-5 sm:translate-y-px sm:transform"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Panel className="absolute inset-x-0 top-full z-10">
                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                    <div
                      className="absolute inset-0 top-1/2 bg-white shadow"
                      aria-hidden="true"
                    />

                    <div className="relative bg-white">
                      <div className="mx-auto max-w-7xl px-8">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                          <div className="grid grid-cols-2 grid-rows-1 gap-8 text-sm">
                            {category.featured.map((item, itemIdx) => (
                              <div
                                key={item.name}
                                className={classNames(
                                  itemIdx === 0 ? "aspect-w-2 col-span-2" : "",
                                  "group aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md bg-gray-100"
                                )}
                              >
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center group-hover:opacity-75"
                                />
                                <div className="flex flex-col justify-end">
                                  <div className="bg-white bg-opacity-60 p-4 text-sm">
                                    <a
                                      href={item.href}
                                      className="font-medium text-gray-900"
                                    >
                                      <span
                                        className="absolute inset-0"
                                        aria-hidden="true"
                                      />
                                      {item.name}
                                    </a>
                                    <p
                                      aria-hidden="true"
                                      className="mt-0.5 text-gray-700 sm:mt-1"
                                    >
                                      Shop now
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="grid grid-cols-3 gap-x-8 gap-y-10 text-sm text-gray-500">
                            {category.sections.map((column, columnIdx) => (
                              <div key={columnIdx} className="space-y-10">
                                {column.map((section) => (
                                  <div key={section.name}>
                                    <p
                                      id={`${category.id}-${section.id}-heading`}
                                      className="font-medium text-gray-900"
                                    >
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${category.id}-${section.id}-heading`}
                                      className="mt-4 space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a
                                            href={item.href}
                                            className="hover:text-gray-800"
                                          >
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        ))}
        {/* ... 其他导航相关的代码 ... */}
      </div>
    </Popover.Group>
  );
};

export default NavigationComponent;
