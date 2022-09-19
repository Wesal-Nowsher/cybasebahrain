


import React, {useState, useEffect} from "react"
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
        <footer className="border-top footer text-muted">
            <div className="container">
                © 2022 - Cybasebahrain.com - <NavLink to="/Home/Privacy"> Privacy</NavLink>
            </div>
        </footer>  
    </>
  )
}



