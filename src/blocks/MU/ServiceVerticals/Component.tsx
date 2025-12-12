import React from 'react'
import type { ServiceVerticalsBlock as ServiceVerticalsBlockProps } from '@/payload-types'

type Props = ServiceVerticalsBlockProps

export const ServiceVerticals: React.FC<Props> = ({ heading, subheading, services }) => {
  return (
    <div className="w-full h-full px-4 md:px-20 lg:px-40 py-12 lg:py-32 z-10 flex flex-col justify-center gap-12 lg:gap-20">
      <p className="dm-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight w-full lg:max-w-7xl">
        {heading}
      </p>
      <p className="dm-sans text-base md:text-xl lg:text-2xl font-normal tracking-tight w-full lg:max-w-5xl text-shark-300">
        {subheading}
      </p>

      {/* Service Cards */}
      {services?.map((service: any, index: number) => (
        <div
          key={index}
          className={`flex flex-col ${
            service.imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'
          } gap-8 lg:gap-40 w-full`}
        >
          <div className="w-full lg:w-5/8 flex flex-col">
            <p className="instrument-serif text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight text-shark-900">
              {service.number}
            </p>
            <div className="flex items-center">
              <h3
                className="dm-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-shark-300"
                dangerouslySetInnerHTML={{ __html: service.title }}
              />
              {service.iconUrl && (
                <img
                  src={service.iconUrl}
                  alt=""
                  className="w-16 h-auto sm:w-20 -mt-8 sm:-mt-16 ml-4 object-contain"
                />
              )}
            </div>
            <p className="dm-sans text-base md:text-xl lg:text-2xl font-normal tracking-tight w-full lg:max-w-5xl text-shark-300 mt-8 lg:mt-20">
              {service.description}
            </p>
          </div>
          {service.imageUrl && (
            <div className="w-full lg:w-3/8">
              <img src={service.imageUrl} alt="" className="w-full h-auto object-cover rounded-lg" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ServiceVerticals
