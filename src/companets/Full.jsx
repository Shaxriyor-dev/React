import Fromd from '../assets/fueom.png'

import React from 'react'

function Full() {
    return (
        <div className='fulll'>
            <div className="guest">
                <p className="hero-sel">
                    Как с нами работать
                </p>
                <p className="forms">
                    Начать работу со СтройКонтроль легко, достаточно заказать демо-версию.
                </p>
                <img src={Fromd} alt="" className="img-s" />
            </div>
            <div>
                <div className="froms">
                    <div className="bilo">
                        1
                    </div>
                    <div>
                        <p className="seo">
                            Заказать демо
                        </p>
                        <p className="hrom">
                            Вы увидите презентацию, в которой подробно объясняется, как работает СтройКонтроль для решения задач строительной логистики в таких сложных проектах, как ваш.
                        </p>
                    </div>
                </div>
                <div className="froms">
                    <div className="bilo">
                        2
                    </div>
                    <div>
                        <p className="seo">
                            Согласование сделки
                        </p>
                        <p className="hrom">
                            Мы обсудим ваш строительный проект и предложим реализацию СтройКонтроль, которая идеально соответствует вашим потребностям и будет иметь для вас ценность.
                        </p>
                    </div>
                </div>
                <div className="froms">
                    <div className="bilo">
                        3
                    </div>
                    <div>
                        <p className="seo">
                            Подготовка
                        </p>
                        <p className="hrom">
                            Мы полностью обучаем вашу команду тому, как использовать систему, с помощью онлайн-видеоуроков и обеспечиваем постоянную всестороннюю поддержку.
                        </p>
                    </div>
                </div>
                <div className="froms">
                    <div className="bilo">
                        4
                    </div>
                    <div>
                        <p className="seo">
                            Внедрение и интеграция
                        </p>
                        <p className="hrom">
                            Мы настраиваем программное обеспечение так, чтобы оно точно моделировало вашу площадку, а затем помогаем вам интегрировать его с программным обеспечением Business Intelligence для получения новых мощных аналитических данных.
                        </p>
                    </div>
                </div>
                <div className="grop">
                    <div>
                        <a href="#" className="btn4">Заказать демо</a>
                    </div>
                    <div>
                        <a href="#" style={{background: 'none' , color: 'black' , border: 'solid 1px'}} className="btn4">Подробнее</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Full