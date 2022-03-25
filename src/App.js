import { useRef, useState } from "react"
import "./App.css"
import ModelWrapper from "./components/ModelWrapper"

function App() {
  const [anim, setAnim] = useState(0)
  const animations = [0, 1, 2, 3, 4, 5]
  const btnRef = useRef()

  const btnClick = (e) => {
    e.target
      .closest(".btnContainer")
      .querySelectorAll(".btn")
      .forEach((btn) => {
        btn.classList.remove("active")
      })

    e.target.classList.toggle("active")
    const num = e.target.innerText
    setAnim(num)
  }

  return (
    <div className="App">
      <ModelWrapper anim={anim} />
      <div className="btnContainer">
        <h1 style={{ color: "#d4d4d4" }}>Choose Animation</h1>
        {animations.map((num) => (
          <button className="btn" ref={btnRef} onClick={btnClick}>
            {num}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
