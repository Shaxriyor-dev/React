import kilp from '../assets/hp.png'

import React from 'react'

function Nav() {
  return (
    <div className='icon-l'>
        <div>
            <p className="p-js">
            Мы заботимся о доставке на стройплощадку и о людях, которые на них рассчитывают
            </p>
            <p className="semi">
            Мы знаем всё о гордости от сияющего нового здания. Нам также известно всё о разочаровании от попыток завершить проект в срок и в рамках бюджета.
            </p>
            <p className="eron">
            Мы здесь, чтобы помочь.
            </p>
        </div>
        <div>
            <img src={kilp} alt="" />
        </div>
    </div>
  )
}

export default Nav
