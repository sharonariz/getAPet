import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import Header from './components/Header.jsx';
import Inicio from './components/Inicio.jsx'
import Conocelos from './components/Conocelos.jsx'
import Requisitos from './components/Requisitos.jsx'
import Adopta from './components/Adopta.jsx'
import Footer from './components/Footer.jsx'

export function App (){
    {/*Aqui se está invocando la lista de usuarios y se esta mandando la funcion a la TwitterFollowCard, para eso es necesario determinar una key que es como el ID en DB*/}
    return (
        <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        <div className='div_inicio'>
            <Inicio />
        </div>
        <div className='div_conocelos'>
            <Conocelos />
        </div>
        <div className='div_requisitos'>
            <Requisitos />
        </div>
        <div className='div_adopta'>
            <Adopta />
        </div>
        <div className='div_footer'>
            <Footer />
        </div>
      </main>
    </>
    
        
    )
}