import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ArrowDown from "../icons/ArrowDown"
import Search from "../icons/Search"
import ClickAwayListener from "react-click-away-listener"
import CountryCard from "../components/CountryCard"
import { Country } from "../types/Country"

const Home: NextPage<{ countries: Country[] }> = ({ countries }) => {
  const region: string[] = ["africa", "america", "asia", "europe", "oceania"]
  const [showFilterOption, setShowFilterOption] = useState(false)

  const closeFilterMenu = () => setShowFilterOption(false)

  return (
    <>
      <Head>
        <title>Know Your Country</title>
        <meta name="description" content="Know Your Country" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-5 md:px-7 lg:px-6 xl:px-14 font-nunito">
        <section className="flex md:items-start flex-col space-y-10 md:space-y-0 md:flex-row md:justify-between mb-10">
          {/* input */}
          <div className="input h-16 w-full md:w-[480px] shadow-md cursor-pointer relative">
            <input
              type="text"
              className="w-full h-full bg-light_Mode_Elements dark:bg-dark_Mode_Elements cursor-pointer pr-10 pl-20 outline-none text-sm text-light_Mode_Text dark:text-dark_Mode_Text"
              placeholder="Search for a country..."
            />
            <span className="block absolute top-1/2 -translate-y-1/2 left-10 h-7 w-7">
              <Search />
            </span>
          </div>
          {/* filter */}
          <ClickAwayListener onClickAway={closeFilterMenu}>
            <div className="w-[15.625rem] lg:w-[12.5rem] space-y-2 cursor-pointer relative z-20">
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.9 }}
                className="bg-light_Mode_Elements dark:bg-dark_Mode_Elements w-full h-16 flex items-center justify-between px-7 shadow-md rounded-md"
                onClick={() => setShowFilterOption(!showFilterOption)}
              >
                <p className="text-xs font-semibold select-none">
                  Filter by Region
                </p>
                <ArrowDown />
              </motion.div>

              {showFilterOption && (
                <AnimatePresence
                  initial={false}
                  mode={"wait"}
                  onExitComplete={() => null}
                >
                  <motion.div
                    className="w-full absolute top-[4.5rem] px-7 py-5 bg-light_Mode_Elements dark:bg-dark_Mode_Elements flex flex-col shadow-md rounded-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { delay: 0.5 } }}
                  >
                    {region.map((reg) => (
                      <li key={reg} className="list-none capitalize ">
                        <RegionLink name={reg} />
                      </li>
                    ))}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </ClickAwayListener>
        </section>

        <section className="country-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 md:gap-14 lg:gap-16 xl:gap-[4.6875rem] place-items-center lg:place-items-start">
          {countries.map((country) => (
            <div key={country.alpha3Code + country.name}>
              <CountryCard data={country} />
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

export default Home

type Link = {
  name: string
}

const RegionLink = ({ name }: Link) => {
  return (
    <Link href={`/${name}`}>
      <a className="block capitalise text-light_Mode_Text dark:text-dark_Mode_Text text-lg font-light dark:hover:text-dark_Mode_Text/50 hover:text-light_Mode_Text/50 duration-300">
        {name}
      </a>
    </Link>
  )
}
const BASE_URL = "https://restcountries.com/v2/all"

export const getStaticProps = async () => {
  const res = await fetch(
    `${BASE_URL}?fields=alpha3Code,name,flags,population,region,capital`
  )
  const data = await res.json()

  return {
    props: {
      countries: data,
    },
  }
}
