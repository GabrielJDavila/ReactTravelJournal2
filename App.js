import React from "react"
import Nav from "./Nav"
import Entry from "/Entry"
import data from "./data.js"

export default function App() {
    const entries = data.map(item => {
        return  (
            <Entry
                {...item}
            />
        )
    })
    return (
        <div className="app-container">
            <Nav />
            {entries}
        </div>
    )
}