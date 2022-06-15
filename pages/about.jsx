import Head from 'next/head'
import Container from '../components/Layout/Container'
import Layout from '../components/Layout/Layout'
import { BLOG_NAME } from '../lib/constants'
import PageHeading from '../components/PageHeading'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | {BLOG_NAME}</title>
      </Head>
      <Container>
        <PageHeading>Nice to meet you.</PageHeading>
        <section className="max-w-3xl mx-auto py-8 md:py-16 lg:py-24">
          <p>
            My name is Hezekiah Branch and I'm currently pursuing a Master's in Data Science
            at Tufts University. I earned my B.S. in Cognitive and Brain Sciences in 2021
            and was accepted with an early assurance to the Graduate School of Engineering
            during my junior year of undergrad. Over the years, I've held a number of internships,
            fellowships, and research assistantships at a number of places including Tufts School
            of Medicine, IBM Research, Google Research, Harvard, MIT, and Prudential. Most recently,
            I graduated with honors from the Correlation One DS4A Fellows program and earned the 
            Presidential Award for Civic Life from my alma mater, the university's highest award 
            conferred to only a handful of students. I also cofounded my school's first org for Black
            students in CS, was president of the Black Student Union, an Africana Peer Leader, served on 
            the board of a college, and was part of the university's DEI Taskforce in Psychology. As a member, 
            I worked to bring back Black Psychology to the major and earn fee waivers for BIPOC PhD applicants.

            As a graduate student, I'm part of the CS Student Council and work as a researcher at MIT.
          </p>
          <br />
          <p>
            Okay, on to the more interesting content! I love anime (Yu Yu Hakusho, Hunter x Hunter, JoJo's, etc.) and
            have a collection of my favorite graphic novels. Some of my favorites include the Scarlet Witch collection
            and the Future State: the Next Batman series. I also love to cook dishes like baked mac and cheese, honey
            cornbread, brown stew chicken, rice and peas, collard greens, in addition to traditional Trini dishes. My 
            favorite foods are doubles with pepper sauce and curry goat with roti. Oxtail's also up there for me but 
            it's hard to get good oxtail outside of NYC unless you're on the island.

            I'm also a massive lover of graph theory and network science! You'll see a lot more coming soon.

            Hope you enjoy!

            - Hezekiah
          </p>
        </section>
      </Container>
    </Layout>
  )
}
