import React from 'react'
import kil from '../assets/kilo.png'

function Hero() {
    return (
        <div className='hero-conte'>
            <div className="eron">
                <p className="p-d">
                    Строительство - это хаос
                </p>
                <p className="fui">
                    Хаос может быть удивительной творческой силой, воздвигающая новые здания из пыли.
                    Хаос вызывает несчастные случаи, задержки и потери. Он вводит проекты в стресс и разочарование.
                    Это означает, что вы действительно не контролируете ситуацию.
                </p>
                 <div className="nav-lo">
                    <img src={kil} alt="" />
                 </div>
            </div>
        </div>
    )
}

export default Hero
