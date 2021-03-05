// import { Button, Container } from 'react-bootstrap';
import Layout from '../components/Layout'
import Player from '../components/Player'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
export default function Home() {
  const [windowPlayer, setWindowPlayer] = useState(false)
  const url = "5880564d25a999a32780ae95c8982c1b"
  useEffect(() => {
    if(typeof window !== 'undefined') {
      setWindowPlayer(true)
    }
  })
  return (
    <Layout title="home">
      {windowPlayer ? <Player  id="player" file={`https://videodelivery.net/${url}/manifest/video.mpd or https://videodelivery.net/${url}/manifest/video.m3u8`} title="PRA QUE ISSO?"/> : null}
      <h3  className="text-white text-center">Convenção das Bruxas</h3>
      <div id="player"></div>
    </Layout>
  )
}
