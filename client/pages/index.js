import fetch from 'isomorphic-unfetch'

import '../scss/app.scss'
import {Layout} from '../components/Layout'
import MainView from '../components/MainView'

const Index = (props) =>
  <Layout>
    <MainView latestTasks={props.latestTasks} />
  </Layout>


Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:3001/tasks/latest')

  const data = await res.json()

  return {
    latestTasks: data
  }
}

export default Index