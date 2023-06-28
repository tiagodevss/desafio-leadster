'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/Button'
import { useState } from 'react'
import VideoCard from '@/components/VideoCard'

import Logo from '../../public/images/logo.png'
import Tumbnail from '../../public/images/thumbnail.png'

export default function Home() {
  const [activeMenu, setActiveMenu] = useState<string>("Agências");

  return (
    <>
      <header className={styles.header}>
        <Image src={Logo} alt="Logo" width={170} />
      </header>
      <main>
        <div className={styles.main}>
          <span style={{ border: '2px solid #2c83fb', color: "#2c83fb", padding: "5px 20px 5px 20px", borderRadius: "30px 30px 30px 0px", fontFamily: "PlusJakartaSans-Bold", fontSize: 13 }}>
            WEBINARS EXCLUSIVOS
          </span>
          <h1 style={{ fontSize: 42, lineHeight: 1.2 }}>
            Menos Conversinha, <br />
            <span className={styles.blueGradient} style={{ fontSize: 75, fontFamily: "PlusJakartaSans-Bold" }}>Mais Conversão</span>
          </h1>
          <hr style={{ width: 565, color: '#C8D4DD', marginTop: 15, marginBottom: 15, opacity: .4 }} />
          <h2 style={{ fontSize: 15.3 }}>
            Conheça as estratégias que <span style={{ fontFamily: "PlusJakartaSans-ExtraBold" }}>mudaram o jogo</span> e como aplicá-las no seu negócio
          </h2>
        </div>
        <div style={{ padding: "0px 7vw 0px 7vw" }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <div className='flex-row col-10'>
              <div className='flex-row col-7 wrap'>
                <Button text="Agências" onClick={() => setActiveMenu("Agências")} isActive={activeMenu === "Agências"} />
                <Button text="Chatbot" onClick={() => setActiveMenu("Chatbot")} isActive={activeMenu === "Chatbot"} />
                <Button text="Marketing Digital" onClick={() => setActiveMenu("Marketing Digital")} isActive={activeMenu === "Marketing Digital"} />
                <Button text="Geração de Leads" onClick={() => setActiveMenu("Geração de Leads")} isActive={activeMenu === "Geração de Leads"} />
                <Button text="Mídia Paga" onClick={() => setActiveMenu("Mídia Paga")} isActive={activeMenu === "Mídia Paga"} />
              </div>
              <div className='flex-row col-3 wrap align-center justify-center'>
                <span style={{ verticalAlign: "center" }}>Ordenar por</span>
                <select className={styles.select}>
                  <option value="Data de Publicação" label='Data de Publicação' />
                </select>
              </div>
            </div>
          </div>
          <hr style={{ width: "100%", color: '#C8D4DD', marginBottom: 15, opacity: .4 }} />
          <div className='flex-row col-10 wrap'>
            <VideoCard title='Como aumentar sua Geração de Leads feat. Traktor' tumbnail={Tumbnail} />
            <VideoCard title='Como aumentar sua Geração de Leads feat. Traktor' tumbnail={Tumbnail} />
            <VideoCard title='Como aumentar sua Geração de Leads feat. Traktor' tumbnail={Tumbnail} />
          </div>
        </div>
      </main>
    </>
  )
}
