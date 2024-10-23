import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11)
    const handleAdd = () => {
        const newPlayers = team + 1
        return (
            setTeam(newPlayers)
        )
}
const handleRemove = () => {
    const newPlayers = team - 1
    return (
        setTeam(newPlayers)
        )
    }

const teamStyle = {
    border: '2px solid tomato',
    borderRadius: '12px',
    padding: '12px'
}
return (
    <div style={teamStyle}>
        <h3>Players : {team}</h3>
        <button onClick={handleAdd}>Add playes</button>
        <button onClick={handleRemove}>Remove Players</button>
    </div>
)
}