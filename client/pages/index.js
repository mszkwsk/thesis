import fetch from 'isomorphic-unfetch'

import '../css/app.css'
import {Layout} from '../components/Layout'

const Index = (props) =>
  <Layout/>


Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:3001/users')

  const data = await res.json()

  return {
    users: data
  }
}

export default Index