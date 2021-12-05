import Link from 'next/link'
import Layout from '../components/Layout'

interface IProps {
  data: ITask
}

interface ITask {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

const AboutPage = ({data}: IProps) => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>Server Side Rendering</h1>
    <p>{data.title}</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
  const data:ITask = await res.json()

  // Pass data to the page via props
  const props: IProps =   { data } 
  return { props };
}

export default AboutPage
