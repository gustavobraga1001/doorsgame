import Card from "../components/Card";
import styles from "../styles/Forms.module.css"
import Link from "next/link";

export default function Forms() {
  return (
    <main className={styles.forms}>
      <div>
        <Card bgColor={"#c0392c"}>
          <h1>Monty Hall</h1>
        </Card>
        <Card></Card>
      </div>
      <div>
        <Card ></Card>
        <Card bgColor={"#28a085"}>
          <Link href={`/game/10/2`} className={styles.link}>
            <h2 >Iniciar</h2>
          </Link>
        </Card>
      </div>
    </main>
  );
}
