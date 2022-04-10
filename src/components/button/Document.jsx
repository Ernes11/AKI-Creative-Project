import React, { useEffect } from "react";
import { useState } from "react";
import "../../sass/document.scss";
import { FormattedMessage } from 'react-intl';
import axios from "axios";

function Document() {
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(true);
  const [Charter, setCharter] = useState([])
  const [Policy, setPolicy] = useState([])
  function getCharter() { axios.get('https://creative.kg/api/reports/')
      .then(res =>{
        setCharter (res.data.results)
      })}
    useEffect(() => {
      getCharter();
    }, []);

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



// import React, { useEffect } from "react";
// import { useState } from "react";
// import { FormattedMessage } from "react-intl";
// import "../sass/report.scss";
// import  axios  from 'axios';


// function Report() {
//   const [reports,setReports] = useState([])
//   const [show, setShow] = useState(false);
//   function getReports() { axios.get('https://creative.kg/api/reports/')
//     .then(res =>{
//       setReports(res.data.results)
//     })}
//   useEffect(() => {
//     getReports();
//   }, []);
//   return (
//     <div className="report">
//       <div className="container">
//         <button onClick={() => setShow(!show)}><FormattedMessage id="Reports"/></button>
//         {show ? (
//          <ul>
//            {reports.map (report => (
//              <li>
//                <a target="_blank" href={report.report_text}>{report.report_text}</a>
//              </li>
//            ))}
//           </ul> 
//         ) : null}
//       </div>
//     </div>
//   );
// }

// export default Report;
