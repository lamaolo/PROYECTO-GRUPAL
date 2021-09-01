import React from "react";
import styles from "./DeveloperView.module.css";

// components
import Tasks from "../../components/Tasks/Task";

export default function DeveloperView() {
  return (
    <div className={styles.DeveloperView}>
      <div className={styles.DeveloperView_Header}>
        <h1>Project Name</h1>
      </div>
      <div className={styles.DeveloperView_Body}>
        {/* Componente de TODOS del usuario en este proyecto */}
        <Tasks />

        {/* Componente de TODOS que necesitan ayuda en este proyecto */}
        <Tasks />
      </div>
    </div>
  );
}
