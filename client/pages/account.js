import fetch from 'isomorphic-unfetch'

import '../scss/app.scss'
import {Layout} from '../components/Layout'
import User from "../components/User"

const Account = ({user}) =>
  <Layout>
    <User user={user}/>
  </Layout>

Account.getInitialProps = async function() {
  const res = await fetch(
      `http://localhost:3001/user/getById?id=14b9e5f8-8edd-44c5-a96e-f6c9805966fb`)
  const user = await res.json()

  return {user}
}

export default Account