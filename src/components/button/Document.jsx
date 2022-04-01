import React from "react";
import { useState } from "react";
import "../../sass/document.scss";

function Document() {
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(true);

  return (
    <div className="document">
      <div className="container">
        <button onClick={() => setShow(!show)}>УСТАВ</button>
        {show ? (
          <li>
            <a href="https://media-exp1.licdn.com/dms/document/C4E1FAQFQ9ItYx9rnpQ/feedshare-document-pdf-analyzed/0/1646181887861?e=1646467200&v=beta&t=ZEI32qsBZau8FcVbSyevBCnJaTQTYSQcYd9HzytatZA">
              Нажмите сюда{" "}
            </a>
          </li>
        ) : null}

        <div className="document-2">
          <button onClick={() => setOpen(!open)}>УЧЕТНАЯ ПОЛИТИКА</button>
          {open ? (
            <li>
              <a href="https://media-exp1.licdn.com/dms/document/C4E1FAQFQ9ItYx9rnpQ/feedshare-document-pdf-analyzed/0/1646181887861?e=1646467200&v=beta&t=ZEI32qsBZau8FcVbSyevBCnJaTQTYSQcYd9HzytatZA">
                Нажмите сюда{" "}
              </a>
            </li>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Document;
