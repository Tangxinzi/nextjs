import MainLayout from '../components/MainLayout';
import { withRouter } from 'next/router';

const Post = withRouter((props) => (
  <MainLayout>
    <p>{props.router.query.title}</p>
  </MainLayout>
))

export default Post
