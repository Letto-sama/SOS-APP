import '../../styles/HowItWorks.css'

import addVideo from '../../img/add_video.png'

const HowItWorks = () => {
    return (
        <div className='HIW_container'>
            <div>
                <img src={addVideo} alt='addVideo' />
            </div>
            <div className="HIW_text">
                <h1>¿Cómo funciona?</h1>
                <p>Mira el siguiente video donde te explicaremos como postular y que requisitos necesitas</p>
            </div>
        </div>
    )
}

export default HowItWorks