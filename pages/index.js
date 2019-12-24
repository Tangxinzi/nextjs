import Link from 'next/link';
import MainLayout from '../components/MainLayout';

const ListItem = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <MainLayout>
    <ul>
      <ListItem title='hello ninghao.net' />
      <ListItem title='learn next.js from ninghao' />
    </ul>
  </MainLayout>
)

export default Index
