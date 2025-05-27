import Interests from '@/markdown/interests.mdx';
import Skills from '@/markdown/skills.mdx';
import Current from '@/markdown/current.mdx';
import Past from '@/markdown/past.mdx';
import Repos from '@/markdown/repos.mdx';
import Heading from '../components/sections/heading';
import Layout from '../layout';

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
          <div className="section">
            <Heading />
          </div>
          <div className="section">
            <Interests />
          </div>
          <div className="section">
            <Skills />
          </div>
          <div className="section">
            <Current />
          </div>
          <div className="section">
            <Past />
          </div>
          <div className="section">
            <Repos />
          </div>
        </div>
      </main>
    </Layout>
  );
}
