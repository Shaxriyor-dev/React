import React from 'react'
import fre from '/src/assets/i.png'
import frm from '/src/assets/ee.png'
import frs from '/src/assets/ss.png'

function Fulls() {
  return (
    <div className='names'>
      <div>
        <p className="serpa">
          Надёжность
        </p>
        <p className="herol">
          Благодаря надёжному строительству выигрывают все - муниципальные органы выполняют свои обязанности перед гражданами, инвесторы получают сертификаты своих проектов, а генеральные подрядчики получают повышенную репутацию.
        </p>
      </div>
      <div className="verom">
        <div className="aier">
          <div className="dr">
            <img src={fre} alt="aa" />
          </div>
          <p className="juw">
            Сниженное загрязнение
          </p>
          <div className="awer">
            При оптимизации логистики требуется меньше поездок, что приводит к снижению выбросов CO2. Выбрасываемый CO2 контролируется, что позволяет ставить цели и вносить ощутимые улучшения.
          </div>
        </div>
        <div className="aier">
          <div className="dr">
            <img src={frm} alt="aa" />
          </div>
          <p className="juw">
          Улучшенное управление отходами
          </p>
          <p className="awer">
          Упрощается сортировка отходов, автоматизируется утилизация отходов, а поврежденные материалы при необходимости используются повторно, что снижает затраты и стимулирует переработку и повторное использование.
          </p>
        </div>
        <div className="aier">
          <div className="dr">
            <img src={frs} alt="aa" />
          </div>
          <p className="juw">
          Улучшенное влияние на общество
          </p>
          <div className="awer">
          Уменьшаются проблемы с дорожным движением и шумовое загрязнение, что улучшает жизнь местного сообщества. Улучшенное обращение с материалами и хранение означает, что рабочие также лучше защищены.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fulls