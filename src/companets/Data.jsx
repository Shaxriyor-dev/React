import React from 'react'
import frame from '/src/assets/Frame.png'
import sew from '/src/assets/Sev.png'
import vector from '/src/assets/vector.png'
import fromwork from '/src/assets/Formwork.png'
import icon from '/src/assets/icons.svg'
import icons from '/src/assets/kuo.png'
import fos from '/src/assets/fos.png'
import fra from '/src/assets/Fra.png'
import mp from '/src/assets/MEP.png'

function Data() {
    return (
        <div>
            <p className="person">
                Доставка стала проще
            </p>
            <p className="childer">
                Мы позаботимся обо всех ваших различных поставках и их многочисленных специализированных требованиях к разгрузке.
            </p>
            <div className="gartop">
                <div className="futter">
                    <div className="hreo-kont">
                        <div>
                            <img src={frame} alt="" />
                        </div>
                        <div>
                            <p className="ionca">
                                Бетон
                            </p>
                            <p className="frp">
                                Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.
                            </p>
                        </div>
                    </div>
                    <div className="hreo-kont">
                        <div>
                            <img src={sew} alt="" />
                        </div>
                        <div>
                            <p className="ionca">
                                Утилизация отходов
                            </p>
                            <p className="frp">
                                Отходы контролируются и сортируются, а заполненность контейнеров отслеживается в цифровом виде.
                            </p>
                        </div>
                    </div>
                    <div className="hreo-kont">
                        <div>
                            <img src={fromwork} alt="" />
                        </div>
                        <div>
                            <p className="ionca">
                                Опалубка
                            </p>
                            <p className="frp">
                                Вся опалубка отслеживается от прибытия до отправления, а ее состояние контролируется, что сводит к минимуму потери и повреждения.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="futter">
                    <div className="hreo-kont">
                        <div>
                            <img src={vector} alt="" />
                        </div>
                        <div>
                            <p className="ionca">
                                Сборные панели
                            </p>
                            <p className="frp">
                                Сборные панели прибывают по очереди, их хранение на месте отслеживается, а их установка планируется и контролируется.
                            </p>
                        </div>
                    </div>
                    <div className="hreo-kont">
                        <div>
                            <img src={icon} alt="" />
                        </div>
                        <div>
                            <p className="ionca">
                                Фасады
                            </p>
                            <p className="frp">
                                Элементы фасада поступают последовательно, их сборка контролируется, а перемещение отслеживается.
                            </p>
                        </div>
                    </div>
                    <div className="hreo-kont">
                        <div>
                            <img src={icons} alt="" />
                        </div>
                        <div>
                            <p className="ionca">
                                Отделка
                            </p>
                            <p className="frp">
                                Материалы поступают точно в срок, маркируются и детально отслеживаются для установки.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="futter">
                    <div className="hreo-kont">
                        <div>
                            <img src={fos} alt="" />
                        </div>
                        <div>
                            <p className="ionca">
                                Строительные леса
                            </p>
                            <p className="frp">
                                Строительные леса отслеживаются от получения до хранения, использования и возврата, поэтому всегда ясно, что на месте и где.
                            </p>
                        </div>
                    </div>
                    <div className="hreo-kont">
                        <div>
                            <img src={fra} alt="" />
                        </div>
                        <div>
                            <p className="ionca">
                                Оборудование
                            </p>
                            <p className="frp">
                                Оборудование и операторы гарантированно доступны в случае необходимости, а их рабочее состояние отслеживается.
                            </p>
                        </div>
                    </div>
                    <div className="hreo-kont">
                        <div>
                            <img src={mp} alt="" />
                        </div>
                        <div>
                            <p className="ionca">
                                Электрика и сантехника
                            </p>
                            <p className="frp">
                                Доставка осуществляется в точной последовательности для сложной установки, что сокращает или устраняет необходимость в хранении.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data