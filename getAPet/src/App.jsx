import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import QuienesSomos from './components/QuienesSomos.jsx'
import Conocelos from './components/Conocelos.jsx'
import Requisitos from './components/Requisitos.jsx'
import Adopta from './components/Adopta.jsx'
import Footer from './components/Footer.jsx'

export function App (){
    {/* Se agrega un useLocation para para un scroll automático */}
    const location = useLocation();

        useEffect(() => {
            const hash = location.hash;
            if (hash) {
            const target = document.querySelector(hash);
            if (target) {
                setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth' });
                }, 300); // espera a que cargue el DOM
            }
            }
        }, [location]);
    {/*Se importan todas los componentes que serán la página de incio*/}
    return (
        <>
        <Header />
        <main style={{ paddingTop: '100px' }}>
            <section className='div_inicio'><QuienesSomos /></section>
            <section className='div_conocelos'><Conocelos /></section>
            <section className='div_requisitos'><Requisitos /></section>
            <section className='div_adopta'><Adopta /></section>
            <section className='div_footer'><Footer /></section>
        </main>
    </>
    )
}