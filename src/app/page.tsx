"use client"

import { useState } from "react";
import Card from "../components/Card";
import InputNumber from "../components/InputNumber";
import styles from "../styles/Forms.module.css"
import Link from "next/link";

export default function Forms() {
  const [amtDoors, setAmtDoors] = useState(3)
  const [doorGift, setDoorGift] = useState(1)

  return (
    <main className={styles.forms}>
      <div>
        <Card bgColor={"#c0392c"}>
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <InputNumber
            text="Quantidade portas"
            value={amtDoors}
            onChange={newAmt => setAmtDoors(newAmt)}
          />
        </Card>
      </div>
      <div>
        <Card >
          <InputNumber
            text="Porta com presente"
            value={doorGift}
            onChange={newDoorGift => setDoorGift(newDoorGift)}
          />
        </Card>
        <Card bgColor={"#28a085"}>
          <Link href={`/game/${amtDoors}/${doorGift}`} className={styles.link}>
            <h2 >Iniciar</h2>
          </Link>
        </Card>
      </div>
    </main>
  );
}
