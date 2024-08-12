import DoorModel from "../model/door";

export function createDoors(amt: number, selected: number): DoorModel[] {
    return Array.from({ length: amt }, (_, i) => {
        const number = i + 1
        const hasGift = number === selected
        return new DoorModel(number, hasGift)
    })
}

export function updateDoors(doors: DoorModel[], doorModified: DoorModel): DoorModel[] {
    return doors.map(door => {
        const sameAsModified = door.number === doorModified.number

        if (sameAsModified) {
            return doorModified
        } else {
            return doorModified.open ? door : door.deselect()
        }
    })
}