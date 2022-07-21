import { useState } from 'react'
import './App.css'
import { useTranslation } from 'react-i18next';

function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation();

  return (
    <div className="App">
    <div className='photo'>
      <img className="image" src="./img/me.jpeg" alt="perfil"></img>
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
      <img className="picture" src="./img/redes.png" alt="redes"></img>
    </div>
  </div>
  )
}

export default App
