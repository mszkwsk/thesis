import '../css/app.css'
import {Layout} from '../components/Layout'

const Projects = (props) =>
  <Layout>
    <p>Tu beda projekty</p>
  </Layout>

// Projects.getInitialProps = async function() {
//   const res = await fetch('http://localhost:3001/tasks')

//   const data = await res.json()

//   return {
//     tasks: data
//   }
// }
export default Projects