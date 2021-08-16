
import Link from 'next/link'

const content = {
  title: 'dianacare',
  heroText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  imageSrc: '/images/dianacare-hero2.png',
  readMoreSrc: '/tietoja-meista'
}

export default function Hero() {
  return (
    <div className="hero">
      <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 lg:ml-8 md:ml-8 sm:ml-8 ml-0">
        <div className="flex justify-center md:justify-end -mt-16">
          <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="/images/elderly.jpg" />
        </div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">Meistä</h2>
          <p className="mt-2 text-gray-600">{content.heroText}</p>
        </div>
        <div className="flex justify-end mt-4">
          <Link
            href={content.readMoreSrc}
          >
            <a
              className="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400">
              Lue lisää</a>
          </Link>
        </div>
      </div>
    </div>
  )

}