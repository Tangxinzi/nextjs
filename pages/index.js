import Link from 'next/link';
import MainLayout from '../components/MainLayout';

const ListItem = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <MainLayout>
    <ul>
      <ListItem id="hello" title='hello' />
      <ListItem id="learn" title='learn next.js' />
    </ul>
  </MainLayout>
)

export default Index
