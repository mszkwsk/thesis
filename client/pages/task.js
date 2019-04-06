import fetch from 'isomorphic-unfetch'

import '../scss/app.scss'
import {Layout} from '../components/Layout'
import {default as SingleTask} from '../components/task/Task'

const Task = ({task, author, assignedTo}) =>
  <Layout>
    <SingleTask
      task={task}
      author={author}
      assignedTo={assignedTo}
    />
  </Layout>


Task.getInitialProps = async function(context) {
  const {taskId} = context.query
  const resTask = await fetch(
      `http://localhost:3001/tasks/getById?taskId=${taskId}`)
  const dataTask = await resTask.json()

  const resUser = await fetch(
      `http://localhost:3001/user/getByName?name=${dataTask.author}`)
  const author = await resUser.json()

  let assignedTo
  if(dataTask.assignedTo) {
    const assignedToRes = await fetch(
        `http://localhost:3001/user/getByName?name=${dataTask.assignedTo}`)
    assignedTo = await assignedToRes.json()
  }

  return {
    task: dataTask,
    author,
    assignedTo
  }
}

export default Task