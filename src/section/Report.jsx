import React, { useEffect } from "react";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import "../sass/report.scss";
import  axios  from 'axios';


function Report({value}) {
  const [reports,setReports] = useState([])
  const [show, setShow] = useState(false);
  function getReports() { axios.get('https://creative.kg/api/reports/')
    .then(res =>{
      setReports(res.data.results)
    })}
  useEffect(() => {
    getReports();
  }, []);
  return (
    <div className="report">
      <div className="container">
        <button onClick={() => setShow(!show)}><FormattedMessage id="Reports"/></button>
        {show ? (
         <ul>
           {reports.map (report => (
             <li>
               <a target="_blank" href={report.report_text}>{value === 'RU-RU' ? report.name : (value === 'en-US' ? report.name_en : report.name_kg)}</a>
             </li>
           ))}
          </ul> 
        ) : null}
      </div>
    </div>
  );
}

export default Report;
