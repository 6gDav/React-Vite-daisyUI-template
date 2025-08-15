import './App.css'
import viteLogo from './assets/vite-svgrepo-com.svg'
import reactLogo from './assets/react-svgrepo-com.svg'
import tailwindLogo from './assets/tailwind-svgrepo-com.svg'
import daisyUI from './assets/daisy-icon.svg'

function App() {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-2xl font-bold">Pre-made React + Vite + daisyUI Project Template</h1>
          <p className="py-6 text-l">
            The project contains the basic Vite + React template, which you can download via the CLI with this command: npm create vite@latest.
            Moreover, there is also a setup for Tailwind CSS and daisyUI.
          </p>
          <div className="flex items-center justify-center ">
            <img src={viteLogo} alt="Vite" className='w-50 h-50' />
            <img src={reactLogo} alt="Vite" className='w-50 h-50' />
          </div>
          <div className="flex items-center justify-center ">
            <img src={tailwindLogo} alt="Vite" className='w-50 h-50' />
            <img src={daisyUI} alt="Vite" className='w-50 h-50' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
