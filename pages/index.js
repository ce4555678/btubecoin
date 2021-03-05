// import { Button, Container } from 'react-bootstrap';
import Player from '../components/Player'
import Layout from '../components/Layout'
export default function Home() {
  const url = "5d5bc37ffcf54c9b82e996823bffbb81"
  return (
    <Layout title="home">
      <Player id="player" file="https://videodelivery.net/5d5bc37ffcf54c9b82e996823bffbb81/manifest/video.mpd or https://videodelivery.net/5d5bc37ffcf54c9b82e996823bffbb81/manifest/video.m3u8"/>
      <h3  className="text-white text-center">Convenção das Bruxas</h3>
      <div  id="player"></div>
    </Layout>
  )
}
