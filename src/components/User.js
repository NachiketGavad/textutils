import React from 'react'

export default function User(props) {
  return (
    <div>
      <div className={`card bg-${props.mode} text-${
        props.mode === "dark" ? "light" : "dark"
      } border-${
        props.mode === "dark" ? "light" : "dark"
      }`}>
        <div className="card-body">
            <h5 className="card-title">{props.id}</h5>
            <p className="card-text">{props.name}</p>
            <p className="card-text">{props.email}</p>
        </div>
        </div>
    </div>
  )
}
