import React from "react"

import Image from "next/image"
import { Country } from "../types/Country"

type Data = {
  data: Country
}

const CountryCard = ({ data }: Data) => {
  return (
    <div className="card bg-light_Mode_Elements dark:bg-dark_Mode_Elements h-[415px] w-[20.5rem] lg:h-[340px] lg:w-[265px] rounded-lg mx-auto lg:mx-0 overflow-hidden shadow-xl shadow-light_Mode_Text/5">
      {/* image */}
      <div className="h-[12.5rem] w-full lg:h-40 relative object-cover object-center">
        <Image
          src={data.flags.png}
          alt={`the ${data.name} flag`}
          layout="fill"
        />
      </div>
      {/* text */}
      <div className="w-full h-[13.5rem] lg:h-44 p-7 lg:p-6 ">
        <p className="text-2xl lg:text-xl font-extrabold mb-6 lg:mb-5">
          {data.name.common}
        </p>
        <div className="space-y-1">
          <p className=" text-base font-semibold capitalize">
            population:{" "}
            <span className="font-light">
              {data.population.toLocaleString()}
            </span>
          </p>
          <p className="text-base font-semibold capitalize">
            Region: <span className="font-light">{data.region}</span>
          </p>
          <p className=" text-base font-semibold capitalize">
            population<span className="font-light">{data.capital}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CountryCard
