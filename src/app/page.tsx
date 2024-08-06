"use client"; // This is a client component 👈🏽

import { useState } from "react";
import DoorModel from "../model/door";
import Door from "../components/Door";

export default function Home() {
  const [d1, setD1] = useState(new DoorModel(1));
  return (
    <main>
      <div style={{ display: "flex" }}>
        <Door value={d1} />
      </div>
    </main>
  );
}
