"use client"; // This is a client component 👈🏽

import { createDoors, updateDoors } from "../../functions/doors"
import Door from "../../components/Door"
import styles from "../../styles/Game.module.css"
import { useState } from "react";

const game = () => {
    const [doors, setDoors] = useState(createDoors(3, 2))

    const renderDoors = () => {
        return doors.map(door => {
            return <Door
                key={door.number}
                value={door}
                onChange={newDoor => setDoors(updateDoors(doors, newDoor))}
            />
        })
    }
    return (
        <div id={styles.game}>
            <div className={styles.doors}>
                {renderDoors()}
            </div>
            <div className={styles.buttons}>
                
            </div>
        </div>
    )
}

export default game