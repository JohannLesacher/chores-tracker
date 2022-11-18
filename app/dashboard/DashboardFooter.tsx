"use client"

import styled from 'styled-components'

const Footer = styled.footer({
    backgroundColor: "red",
    display: "flex",
    marginTop: "3rem"
})

export default function DashboardFooter() {
    return (
        <Footer>
            <div className="container">
                <div className="logo">
                    <img src="http://fakeimg.pl/100x100/" alt="Chores Tracker"/>
                </div>
                <div className="menu"></div>
                <div className="mentions-legales"></div>
            </div>
        </Footer>
    )
}