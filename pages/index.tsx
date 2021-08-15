import Image from 'next/image'
import { client } from "../prismic-configuration"

function Home(props: any) {
  const { data } = props

  return (
    <>
      <div className="flex justify-center p-32 pt-8">
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
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