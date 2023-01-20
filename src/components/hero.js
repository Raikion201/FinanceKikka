import React, {useEffect}  from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Navigation from './navigation'
import Button from '../utilities/button'
const Hero = ({ image, title, description, btnUrl, btnLabel }) => {
const descriptionParsed = JSON.parse(description)
  //   // raw description is data{ content : [
  //     {...,  content : [
  //      {
  //      ...
  //        value : "   "
  //       }
  //        ]
  //     }
  //   ]
  // }
  const finalDescription = descriptionParsed.content[0].content[0].value
  return (
    <div className="bg-gray-700">
      <Navigation />
      <div className="px-6 md:px-0 md:pl-8 py-16 text-center md:text-left  md:py-0 md:pt-16 lg:pt-40 lg:leading-loose md:grid md:grid-cols-2">
        <div className="md:ml-8">
          <div className="font-black text-5xl md:text-4xl lg:text-6xl text-white leading-normal ">
            {title}
          </div>
          <div className="mt-8 text-base md:text-lg text-gray-300">
            {finalDescription}
          </div>
          <div className="mt-8">
            <Button url={btnUrl} label={btnLabel} />
          </div>
        </div>
        <div className="relative hidden md:block lg:col-span-1">
          {image && (
            <GatsbyImage
              className="z-10 w-full h-full"
              alt="vector"
              image={image}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
