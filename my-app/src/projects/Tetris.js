import React from "react"
import TetrisDesktop from "../images/tetris-desktop.png"

export default function Tetris() {
  return (
      <div className="project-item">
        <div className="vl" />
        <div>
          <h2>Tetris</h2>
          <a className="link" href="https://github.com/vincentktieu101/Tetris" target="_blank">
            Github
          </a>
          <br />
          <br />
          <img 
            className="project-img"
            src={TetrisDesktop}
            alt="project-img" 
          />
          <br />
          <br />
          <div className="project-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
  )
}