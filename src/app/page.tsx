"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Calculator() {
  const [display, setDisplay] = useState("0")
  const [operation, setOperation] = useState("")
  const [prevValue, setPrevValue] = useState<number | null>(null)

  const handleNumberClick = (num: string) => {
    setDisplay((prev) => (prev === "0" ? num : prev + num))
  }

  const handleOperationClick = (op: string) => {
    setOperation(op)
    setPrevValue(Number.parseFloat(display))
    setDisplay("0")
  }

  const handleEquals = () => {
    const current = Number.parseFloat(display)
    let result = 0
    switch (operation) {
      case "+":
        result = (prevValue || 0) + current
        break
      case "-":
        result = (prevValue || 0) - current
        break
      case "*":
        result = (prevValue || 1) * current
        break
      case "/":
        result = (prevValue || 0) / current
        break
      default:
        return
    }
    setDisplay(result.toString())
    setOperation("")
    setPrevValue(null)
  }

  const handleClear = () => {
    setDisplay("0")
    setOperation("")
    setPrevValue(null)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs">
        <div className="bg-gray-200 p-4 rounded mb-4 text-right text-2xl font-bold h-20 flex items-end justify-end">
          <div>{display}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/"].map((btn) => (
            <Button
              key={btn}
              onClick={() => (isNaN(Number.parseInt(btn)) ? handleOperationClick(btn) : handleNumberClick(btn))}
              className={`text-xl p-4 ${isNaN(Number.parseInt(btn)) ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-300 hover:bg-gray-400"}`}
            >
              {btn}
            </Button>
          ))}
          {["4", "5", "6", "*"].map((btn) => (
            <Button
              key={btn}
              onClick={() => (isNaN(Number.parseInt(btn)) ? handleOperationClick(btn) : handleNumberClick(btn))}
              className={`text-xl p-4 ${isNaN(Number.parseInt(btn)) ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-300 hover:bg-gray-400"}`}
            >
              {btn}
            </Button>
          ))}
          {["1", "2", "3", "-"].map((btn) => (
            <Button
              key={btn}
              onClick={() => (isNaN(Number.parseInt(btn)) ? handleOperationClick(btn) : handleNumberClick(btn))}
              className={`text-xl p-4 ${isNaN(Number.parseInt(btn)) ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-300 hover:bg-gray-400"}`}
            >
              {btn}
            </Button>
          ))}
          <Button onClick={() => handleNumberClick("0")} className="text-xl p-4 bg-gray-300 hover:bg-gray-400">
            0
          </Button>
          <Button onClick={() => handleNumberClick(".")} className="text-xl p-4 bg-gray-300 hover:bg-gray-400">
            .
          </Button>
          <Button onClick={handleEquals} className="text-xl p-4 bg-green-500 hover:bg-green-600">
            =
          </Button>
          <Button onClick={() => handleOperationClick("+")} className="text-xl p-4 bg-orange-500 hover:bg-orange-600">
            +
          </Button>
          <Button onClick={handleClear} className="text-xl p-4 bg-red-500 hover:bg-red-600 col-span-4">
            C
          </Button>
        </div>
      </div>
    </div>
  )
}

