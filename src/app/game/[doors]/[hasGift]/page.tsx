"use client"; // This is a client component 👈🏽

import { createDoors, updateDoors } from "../../../../functions/doors"
import Door from "../../../../components/Door"
import styles from "../../../../styles/Game.module.css"
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'


const game = () => {
    const [valid, setValid] = useState(false)
    const [doors, setDoors] = useState([])
    const pathname = usePathname()

    useEffect(() => {
        const pathPieces = pathname.split('/')
        const doorsCount = Number(pathPieces[2])
        const hasGift = Number(pathPieces[3])
        const amtDoorsValid = doorsCount >= 3 && doorsCount <= 100
        const hasGiftValid = hasGift >= 1 && hasGift <= doorsCount

        setValid(amtDoorsValid && hasGiftValid)
    }, [doors])


    useEffect(() => {
        const pathPieces = pathname.split('/')
        const doorsCount = Number(pathPieces[2])
        const hasGift = Number(pathPieces[3])
        setDoors(createDoors(doorsCount, hasGift))
    }, [pathname])

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
                {valid ? renderDoors() :
                    <h1>Valores inválidos!</h1>
                }
            </div>
            <div className={styles.buttons}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}

export default game