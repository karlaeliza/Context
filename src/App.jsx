import { useState } from 'react'
import './App.css'
import { useTranslation } from 'react-i18next';
import Nav from './components/navbar';

function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation();

  return (
    <div className="App">
      < Nav/>
    <div className='photo'>
      <img className="image" src="./karla.jpeg" alt="perfil"></img>
    </div>
    <div className='name'>
      <h1>{t("name")}</h1>
    </div>
    <div className='information'>
      <p>{t("information1")}</p>
      <p>{t("information2")}</p>
    </div>
    <div className='button'>
      <div className="btn-group">
        <button onClick={() => setCount((count) => count + 1)}>{t("button1")} </button>
      </div>
      <div>
        <p>{t("button2")} {count}</p>
      </div>
    </div>
    <div className='tecnologies'>
      <p>{t("tecnologies")}</p>
     
    </div>
  </div>
  )
}

export default App
