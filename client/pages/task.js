import fetch from 'isomorphic-unfetch'

import '../css/app.css'
import {Layout} from '../components/Layout'

const Task = ({task}) =>
  <Layout />


Task.getInitialProps = async function(context) {
  const {taskId} = context.query
  const res = await fetch(`http://localhost:3001/tasks/getById?taskId=${taskId}`)

  const data = await res.json()
  console.log(data)
  return {
    task: data
  }
}

export default Task