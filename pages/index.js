import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostData } from '../lib/posts';


export async function getStaticProps() {
  const allPostsData = getSortedPostData()
  return {
    props: {
      allPostsData,
    }
  }
}

export default function Home({ allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Welcome to my personal blog/portfolio!</h1>
        <p>My name is <strong>Anderson Dutra de Oliveira</strong>, and I'm a highly experienced Data Engineer and Software Developer with over 12 years of industry expertise. I've worked with a wide range of technologies, including SQL, NoSQL, Spark, DataStage, Data Warehouse, Node.js, Python, Next.Js, and various cloud platforms, which has given me a deep understanding of the modern data ecosystem and the skills to deliver complex data-driven solutions.</p>
        <p>Throughout my career, I've developed and implemented innovative software applications, databases, and ETL pipelines that have helped organizations extract valuable insights from their data. My passion for solving complex problems and automating repetitive tasks has driven me to continuously explore new technologies and frameworks, always staying on the cutting-edge of the industry.</p>
        <p>I hold several certifications in Cloud Computing and Big Data, which demonstrate my commitment to continuous learning and development. In my spare time, I enjoy sharing my knowledge and experiences with others by writing technical articles and speaking at industry events.</p>
        <p>On this blog/portfolio, you'll find a collection of my projects, case studies, and tutorials on various data engineering and software development topics. I hope you find my content useful and informative, and I look forward to connecting with you!</p>
        <p>You can contact me on <a href='https://twitter.com/AndisuDutra'>Twitter</a></p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}