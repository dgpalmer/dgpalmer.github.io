import Interests from '@/markdown/interests.mdx';
import Skills from '@/markdown/skills.mdx';
import Current from '@/markdown/current.mdx';
import Previous from '@/markdown/previous.mdx';
import Past from '@/markdown/past.mdx';
import Repos from '@/markdown/repos.mdx';
import Heading from '../components/heading';
import Layout from '../components/layout';

export async function getStaticProps() {
  const data = {
    title: 'Donovan Palmer',
    description: 'father, husband, developer',
  }

  return {
    props: {
      data
    }
  }
}

export default function Home({ ...props }) {
  return (
    <Layout>
      <main className="container">
        <div className="flex flex-col sections">
          <Heading />
          <Interests />
          <Skills />
          <Current />
          <Previous />
          <Past />
          <Repos />
        </div>
      </main>
    </Layout>
  );
}
