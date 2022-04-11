import React, { useEffect } from "react";
import { useState } from "react";
import "../../sass/document.scss";
import { FormattedMessage } from 'react-intl';
import axios from "axios";

function Document() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [Charter, setCharter] = useState([])
  const [Policy, setPolicy] = useState([])
  function getCharter() { axios.get('https://creative.kg/api/documents/')
      .then(res =>{
        setCharter (res.data.results)
      })}
      function getPolicy() { axios.get('https://creative.kg/api/documentspol/')
      .then(res =>{
        setPolicy (res.data.results)
      })}
    useEffect(() => {
      getCharter();
      getPolicy()
    }, []);

  return (
    <div className="document">
      <div className="container">
        <button onClick={() => setShow(!show)} className="doc_btn">
        <FormattedMessage id="Charter"/>
            </button>
            {show ? (
         <ul>
           {Charter.map (chart => (
             <li key={chart.id}>
               <a target="_blank" href={chart.rule_doc}>{chart.rule_doc}</a>
             </li>
           ))}
          </ul> 
        ) : null}

        <div className="document-2">
        <button onClick={() => setOpen(!open)} className="doc_btn">
        <FormattedMessage id="Policy"/>
            </button>
            {open ? (
         <ul>
           {Policy.map (Pol => (
             <li key={Pol.id}>
               <a target="_blank" href={Pol.politic_doc}>{Pol.politic_doc}</a>
             </li>
           ))}
          </ul> 
        ) : null}
          
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
