"use client"

import styled from 'styled-components'
import React, {useState} from "react";

export default function HouseholdCreate() {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    const submitData = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
            const body = {name};
            const res = await fetch('/api/household/create', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body),
            });

            if (res.ok) {
                // Handle success
                setSuccess(true)
            } else {
                // Handle error
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section>
            <div className="container">
                {success && (
                    <div className="success">
                        Vous avez créé un nouveau foyer : "{name}"
                    </div>
                )}
                <form onSubmit={submitData}>
                    <div className="field">
                        <label htmlFor="name" id="name">Nom</label>
                        <input type="text" id="name" onChange={(e) => setName(e.target.value)} value={name}/>
                    </div>
                </form>
            </div>
        </section>
    )
}