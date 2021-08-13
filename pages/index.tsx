import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Prismic from "prismic-javascript"
import { client, api } from "../prismic-configuration"
import { RichText } from "prismic-reactjs";
import DefaultLayout from '../layouts/index'
import { linkResolver } from '../helpers';

console.log('client', client)


function Home(props: any) {
  console.log('props', props)
  return (
    <article className="prose">
      <h1>Garlic bread with cheese: What the science tells us</h1>
      <p>
        For years parents have espoused the health benefits of eating garlic bread with cheese to their
        children, with the food earning such an iconic status in our culture that kids will often dress
        up as warm, cheesy loaf for Halloween.
      </p>
      <p>
        But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
        springing up around the country.
      </p>
    </article>
  )
}

export default Home

export async function getStaticProps() {
  // query() is empty on purpose!
  // https://prismic.io/docs/rest-api/query-the-api/query-all-documents
  const res = await client.query('')

  const tabs = res.results.map((p) => {
    console.log('p', p)
    return p.data
  })

  return {
    props: {
      tabs,
    },
  }
}