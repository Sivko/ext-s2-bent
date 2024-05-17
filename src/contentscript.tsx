import React, { FC, ReactElement, useEffect, useState } from 'react';
import { render } from 'react-dom';

interface IProps { }

const Content: FC<IProps> = () => {

  const [item, setItem] = useState({});

  useEffect(() => {
    (async () => {
      const response = await chrome.runtime.sendMessage("getOrder");
      setItem(response);
    })();
  }, []);

  return (
    <>
      <pre>
        {JSON.stringify(item, null, 2)}
      </pre>
    </>
  )
}

const elements = document.querySelectorAll("iframe:last-child")
const element = [...elements][elements.length - 1]
console.log(elements, "elements")
console.log(element, "element")
render(<Content />, element);
