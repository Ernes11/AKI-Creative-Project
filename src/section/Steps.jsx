import React from "react";
import "../sass/steps.scss";
import { FormattedMessage } from 'react-intl';

function Steps() {
  return (
    <div className="steps">
      <div className="container">
        <h1 className="steps-title"><FormattedMessage id="Steps"/></h1>
        <div className="steps-main">
        <div className="steps-images">
            <img src="../../images/9.png" alt="" />
          </div>
          <div className="steps-row">
            <div className="steps-img"></div>
            <a href="https://forms.gle/tmSP19PLXCeFdWcJ8"  target="_blank" className="first-steps-row-text">
              <img src="../../images/stepsarrow.png" alt="" />
              <FormattedMessage id="Step1"/>
            </a>

            <button disabled className="steps-row-text" style={{paddingRight: '10px'}}>
              <img src="../../images/stepsarrow.png" alt="" />
              <FormattedMessage id="Step2"/>
            </button>

            <button disabled className="steps-row-text" style={{paddingRight: '10px'}}>
              <img src="../../images/stepsarrow.png" alt="" />
              <FormattedMessage id="Step3"/>
            </button>

            <button disabled className="steps-row-text">
              <img src="../../images/stepsarrow.png" alt="" />
              <FormattedMessage id="Step4"/>
            </button>

            <button disabled className="steps-row-text">
              <img src="../../images/stepsarrow.png" alt="" />
              <FormattedMessage id="Step5"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
