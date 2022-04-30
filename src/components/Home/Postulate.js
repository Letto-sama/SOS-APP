import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../../styles/Postulate.css'


import addImageMedium from '../../img/add_image_medium.png'
import u_logo from '../../img/team_logos/u_logo.png'
import al_logo from '../../img/team_logos/al_logo.png'
import cantolao_logo from '../../img/team_logos/cantolao_logo.png'
import boys_logo from '../../img/team_logos/boys_logo.png'

const Postulate = () => {
    return (
        <div className='postulate_container' >
            <div className='postulate_text'>
                <div>
                    <h1 className='text-white'>Lorem ipsum,</h1>
                    <h1>dolor sit amet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className='postulate_text_buttons'>
                    <Stack direction="row" spacing={10}>
                        <Button variant="contained">Postula</Button>
                        <Button variant="outlined" >Postula</Button>
                    </Stack>
                </div>
                <h2>EQUIPOS DE PRIMERA DIVISIÓN DONDE PODRÁS MOSTRAR TUS HABILIDADES</h2>
                <div className='postulate_logos'>
                    <div>
                        <img src={u_logo} alt='u_logo' />
                    </div>
                    <div>
                        <img src={al_logo} alt='al_logo' />
                    </div>
                    <div>
                        <img src={cantolao_logo} alt='cantolao_logo' />
                    </div>
                    <div>
                        <img src={boys_logo} alt='boys_logo' />
                    </div>
                </div>
            </div>
            <div >
                <img src={addImageMedium} alt='addImageMedium' />
            </div>
        </div>
    )
}

export default Postulate