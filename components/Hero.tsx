
import Link from 'next/link'
const content = {
  title: 'dianacare',
  heroText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.',
  imageSrc: '/images/dianacare-hero.png',
  readMoreSrc: '/ourvalues'
}

export default function Hero() {
  return <div className="bg-gray-200 ">
    <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
      <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
        <div className="max-w-lg">
          <h1 className="text-xl tracking-wide text-white text-gray-800 lg:text-3xl lg:text-4xl">{content.title} </h1>
          <p className="mt-4 text-gray-300 text-gray-600">{content.heroText} </p>
          <div className="mt-6">
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
      <div className="flex items-center justify-center w-full mt-2 lg:h-full lg:w-1/2">
        <img className="object-cover w-full max-w-2xl rounded-md lg:h-1/2"
          src={content.imageSrc}
          alt="hero" />
      </div>
    </div>
  </div>
}