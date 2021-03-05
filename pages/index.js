// import { Button, Container } from 'react-bootstrap';
import { Stream } from "@cloudflare/stream-react";
export default function Home() {
  const url = "5d5bc37ffcf54c9b82e996823bffbb81"
  return (
    <Layout title="home">
      <h3  className="text-white text-center">Convenção das Bruxas</h3>
      <Stream src={url}/>
    </Layout>
  )
}
