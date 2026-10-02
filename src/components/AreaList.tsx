import { areas } from "@/content/areas";
import styles from "./AreaList.module.css";

export function AreaList() {
  return (
    <ul className={styles.list}>
      {areas.map((town) => (
        <li key={town}>{town}</li>
      ))}
    </ul>
  );
}
