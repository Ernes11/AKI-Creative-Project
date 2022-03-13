import React from "react";
import "../sass/task.scss";

function Task() {
  return (
    <div className="task">
      <div class="container">
        <h1 className="task-title">Цели на 2022 год</h1>
        <div className="task-text">
          <p className="task-desc">
          АКИ работает и узнаваема в стране и Центральной Азии
          </p>
          <p className="task-desc">
          Закон “О Парке Креативных Индустрий” принят
          </p>
          <p className="task-desc">
          100+ членов
          </p>
        </div>
      </div>
    </div>
  );
}

export default Task;
