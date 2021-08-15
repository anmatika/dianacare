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
  const { data } = props

  return (
    <>

      <article className="prose">
        <h1>{data.title[0].text}</h1>

      </article>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const res = await client.getSingle('home', {})

  return {
    props: {
      data: res.data
    },
  }
}