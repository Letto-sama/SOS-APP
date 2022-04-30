import userImage from '../../img/user.png'

import '../../styles/OurTeam.css'

function OurTeam() {
    return (
        <div className='OurTeam_container'>
            <div className='OurTeam_text'>
                <h1>Nuestro Equipo</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            </div>
            <div className='OurTeam_cards'>
                <div className='card_container'>
                    <div className='card_image'>
                        <img src={userImage} alt="userImage" />
                    </div>
                    <div className='card_text'>
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor</p>
                    </div>
                </div>
                <div className='card_container'>
                    <div className='card_image'>
                        <img src={userImage} alt="userImage" />
                    </div>
                    <div className='card_text'>
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor</p>
                    </div>
                </div>
                <div className='card_container'>
                    <div className='card_image'>
                        <img src={userImage} alt="userImage" />
                    </div>
                    <div className='card_text'>
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam