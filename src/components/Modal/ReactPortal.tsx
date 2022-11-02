import React, { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { createWrapperAndAppendToBody } from "./createWrapperAndAppendToBody";

type Props = {
  children: React.ReactNode;
  wrapperId: string;
};

const ReactPortal: React.FC<Props> = ({ children, wrapperId }) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }

    setWrapperElement(element);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};

export default ReactPortal;
