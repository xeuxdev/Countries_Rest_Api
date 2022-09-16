import { motion } from "framer-motion"
import { NextPage, GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import ArrowLeft from "../icons/ArrowLeft"
import { Country } from "../types/Country"

interface Props extends Country {
  nativeName: string
  subregion: string
  topLevelDomain: string[]
  languages: {
    name: string
  }[]
  currencies: { code: string; name: string; symbol: string }[]
  borders: string[]
}

const countrydetails: NextPage<{ country: Props }> = ({ country }) => {
  return (
    <>
      <Head>
        <title>{`${country.name.toUpperCase()} Page`}</title>
        <meta
          name="description"
          content={`${country.name} aka ${country.nativeName}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container px-5 md:px-7 lg:px-6 xl:px-14 font-nunito min-h-screen">
        <Link href={"/"}>
          <button className="flex items-center justify-center gap-2 bg-light_Mode_Elements dark:bg-dark_Mode_Elements w-[7.375rem] h-12 rounded-md shadow-lg shadow-light_Mode_Text/50 mb-16 lg:mb-20 hover:scale-105 duration-200">
            <span className="block w-5 h-5">
              <ArrowLeft />
            </span>
            Back
          </button>
        </Link>
        <section className="flex lg:items-center justify-between flex-col lg:flex-row gap-20 lg:gap-[136px]">
          {/* image */}
          <div className="h-[15rem] w-full md:w-[559px] md:h-[404px] object-cover object-center relative shadow-xl">
            <Image
              src={country.flags.png}
              alt={country.name + "flag"}
              layout="fill"
              priority={true}
              quality={100}
            />
          </div>
          {/* texts */}
          <div className="">
            <p className="text-2xl lg:text-xl font-extrabold mb-6 lg:mb-5">
              {country.name}
            </p>
            <div className="text flex items-start justify-start gap-14 lg:gap-28 flex-col md:flex-row lg:min-w-[580px] text-light_Mode_Text dark:text-dark_Mode_Text mb-20 lg:mb-16">
              <div className="">
                <div className="space-y-1">
                  <p className="text-base font-semibold capitalize">
                    native name:{" "}
                    <span className="font-light">{country.nativeName}</span>
                  </p>
                  <p className=" text-base font-semibold capitalize">
                    population:{" "}
                    <span className="font-light">
                      {country.population.toLocaleString()}
                    </span>
                  </p>
                  <p className="text-base font-semibold capitalize">
                    Region: <span className="font-light">{country.region}</span>
                  </p>
                  <p className="text-base font-semibold capitalize">
                    sub Region:{" "}
                    <span className="font-light">{country.subregion}</span>
                  </p>
                  <p className=" text-base font-semibold capitalize">
                    capital:{" "}
                    <span className="font-light">{country.capital}</span>
                  </p>
                </div>
              </div>
              <div>
                <div className="space-y-1">
                  <li className="text-base font-semibold capitalize list-none">
                    top level domains:
                    <>
                      {country.topLevelDomain?.map((domain) => (
                        <span key={domain} className="font-light pl-2">
                          {domain}
                        </span>
                      ))}
                    </>
                  </li>

                  <li className="text-base font-semibold capitalize list-none">
                    currencies:
                    <>
                      {country.currencies.map((currency) => (
                        <span key={currency.code} className="font-light pl-2">
                          {currency.name}
                          <q className="pl-2 font-bold">{currency.symbol}</q>
                        </span>
                      ))}
                    </>
                  </li>
                  <li className="text-base font-semibold capitalize list-none">
                    languages:
                    <>
                      {country.languages.map((language, i) => (
                        <span key={language.name} className="font-light pl-2">
                          {language.name}
                          {country.languages.length > 1 &&
                            i + 1 < country.languages.length &&
                            ","}
                        </span>
                      ))}
                    </>
                  </li>
                </div>
              </div>
            </div>
            {/* 53 193 borders */}
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-20 lg:mb-16">
              <p className="text-base font-semibold capitalize mr-2">
                Border Countries:{" "}
              </p>
              <ul className="flex flex-wrap gap-3 items-center">
                {country.borders.length > 1 &&
                  country.borders?.map((border, index) => (
                    <motion.li
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      key={index}
                      className=" bg-light_Mode_Elements dark:bg-dark_Mode_Elements h-10 w-20 grid place-items-center shadow-xl rounded-md shadow-light_Mode_Text/25 duration-200"
                    >
                      <Link href={`/${border}`}>
                        <a className="cursor-pointer text-light_Mode_Text  dark:text-dark_Mode_Text font-medium">
                          {border}
                        </a>
                      </Link>
                    </motion.li>
                  ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default countrydetails

const BASE_URL = "https://restcountries.com/v2/"

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${BASE_URL}all?fields=alpha3Code`)
  const countries = await res.json()

  const paths = countries.map((country: { alpha3Code: string }) => ({
    params: { id: country.alpha3Code },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) throw new Error("route id param is not defined")
  //@ts-ignore
  const res = await fetch(
    `${BASE_URL}alpha/${params.id}?fields=alpha3Code,name,flags,nativeName,topLevelDomain,subregion,currencies,languages,population,region,capital,borders`
  )
  const country = await res.json()

  return {
    props: {
      country,
    },
  }
}
