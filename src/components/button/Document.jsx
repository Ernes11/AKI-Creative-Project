import React from "react";
import { useState } from "react";
import "../../sass/document.scss";
import { FormattedMessage } from 'react-intl';

function Document() {
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(true);

  return (
    <div className="document">
      <div className="container">
        <button className="doc_btn"><a href="https://media-exp1.licdn.com/dms/document/C4E1FAQFQ9ItYx9rnpQ/feedshare-document-pdf-analyzed/0/1646181887861?e=1646467200&v=beta&t=ZEI32qsBZau8FcVbSyevBCnJaTQTYSQcYd9HzytatZA">
              <FormattedMessage id="Charter"/>
            </a></button>

        <div className="document-2">
          <button className="doc_btn"><a href="https://media-exp1.licdn.com/dms/document/C4E1FAQFQ9ItYx9rnpQ/feedshare-document-pdf-analyzed/0/1646181887861?e=1646467200&v=beta&t=ZEI32qsBZau8FcVbSyevBCnJaTQTYSQcYd9HzytatZA">
                <FormattedMessage id="Policy"/>
              </a></button>
          
        </div>
      </div>
    </div>
  );
}

export default Document;
