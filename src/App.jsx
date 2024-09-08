import vector from '../public/Vector.png'
import './App.css'
import imp from '../public/imgs.png'
import Imgs from '../public/Rectangle.png'
import Hero from '/src/companets/Hero'
import Nav from '/src/companets/Nav'
import Tak from './companets/Tak'
import Data from './companets/Data'
import Full from './companets/Full'
import Fulls from './companets/Fulls'


function App() {
  return (
    <>
      <header>
          <nav>
             <div className='full'>
                <img src={vector} alt="Vector icon" />
                <p className="lik">
                  СтройКонтроль
                </p>
             </div>
              <ul>
                <li>
                  <a href="#">Главная</a>
                </li>
                <li>
                  <a href="#">О нас</a>
                </li>
                <li>
                  <a href="#">Продукция</a>
                </li>
                <li>
                  <a href="#">Процесс</a>
                </li>
                <li>
                  <a href="#">Надёжность</a>
                </li>
                <li>
                  <a href="#">Клиенты</a>
                </li>
                <li>
                  <a href="#">Связаться с нами</a>
                </li>
                <a href="#" className='btn'>Заказать демо</a>
              </ul>
          </nav>
      </header>
      <main>
        <p className="ps">
        Умная доставка материалов для сложных строительных площадок
        </p>
        <div className="name">
            <div>
              <a className='btn1' href="#">Заказать демо</a>
            </div>
            <div>
               <a style={{background: 'none' , color: 'black' , border: ' solid 1px '}} className='btn1' href="#">Подробнее</a>
            </div>
        </div>
        <div className="full-ims">
           <img src={Imgs} alt="" />
        </div>
        <div className="hero">
          <img src={imp} alt="" />
        </div>
      </main>
      <section>
        <Hero/>
      </section>
      <div className="container">
        <Nav/>
      </div>
      <div className="main">
         <Tak/>
      </div>
      <div className="section">
         <Data/>
      </div>
        <div className="full-form">
           <Full/>
        </div>
        <div className="sahifa">
                <Fulls/>
        </div>
    </>
  )
}

export default App
