import Layout from '@/components/layout';
import { useMediaQuery } from 'react-responsive'
import isMobile from '@/utils/isMobile';

export async function getStaticProps() {
  const data = {
    title: 'CV | Donovan Palmer',
    pdf: '/files/DonovanPalmersResume2021.pdf'
  }

  return {
    props: {
      data
    }
  }
}

export default function CV({ ...props }) {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  return (
    <Layout>
      <main className="container">
        <div className="flex flex-col sections">
          <div className="section">
            <h1 className="section__heading">My Resume</h1>
            <div className="w-full mx-auto embed__resume">
              {isMobile ? (
                <a className="section__link" role="button" href={props.data.pdf}>Click Here to Open PDF for Easier Mobile Viewing
                </a>
              ) : (
                <embed type="application/pdf" src={props.data.pdf} width="1200px" height="1200px" />
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout >
  );
}
