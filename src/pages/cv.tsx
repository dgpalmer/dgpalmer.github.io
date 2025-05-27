import Layout from '../components/layout';

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
  return (
    <Layout>
      <main className="container">
        <div className="flex flex-col sections">
          <div className="section">
            <h1 className="section__heading">My Resume</h1>
            <div className="w-full mx-auto embed__resume">
              <embed type="application/pdf" src={props.data.pdf} width="1200px" height="1200px" />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
