import { useState } from 'react'
import './App.css'
import { useTranslation } from 'react-i18next';
import Nav from './components/navbar';

function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation();

  return (
    <div className="App">

      <Nav/>

        <div className='container'>

          <div>
        
            <div className='name'>

              <h1>{t("name")}</h1>

            </div>
          
            <div className='information'>

              <p>{t("information1")}</p>
              <p>{t("information2")}</p>

            </div>
          
            <button className='button' onClick={() => setCount((count) => count + 1)}>
            
              {t("button1")}

            </button>

            <div className='count'>

              <p>{t("button2")} {count}</p>

            </div>

          </div>
        
          <div className='photo'>

            <img className="image" src="./karla.jpeg" alt="perfil" />

          </div>

        </div>

        <div className='tecnologies'>

          <p>{t("tecnologies")}</p>

          <img className='tech' src="./tech.png" alt="perfil" />
      
        </div>
      
  </div>
  )
}

export default App
