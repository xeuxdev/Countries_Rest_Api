import { NextPage, GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { Country } from "../types/Country"

interface Props extends Country {
  nativeName: Object
  subregion: string
  tld: string[]
  languages: {
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
  }[]
  currencies: { code: string; name: string; symbol: string }[]
  borders: string[]
}

const countrydetails: NextPage<{ country: Props }> = ({ country }) => {
  return (
    <main className="container px-5 md:px-7 lg:px-6 xl:px-0 font-nunito min-h-screen">
      <button className="flex items-center justify-center gap-2 bg-light_Mode_Elements dark:bg-dark_Mode_Elements w-[10.375rem] h-16 rounded-md shadow-lg shadow-light_Mode_Text/50 mb-20 ">
        Back
      </button>
      <section className="flex lg:items-center justify-between flex-col lg:flex-row gap-20 lg:gap-[136px]">
        {/* image */}
        <div className="h-[15rem] w-full md:w-[559px] md:h-[404px] object-cover object-center relative shadow-xl">
          <Image
            src={country.flags.svg}
            alt={country.name.common + "flag"}
            layout="fill"
            priority={true}
          />
        </div>
        {/* texts */}
        <div>
          <p className="text-2xl lg:text-xl font-extrabold mb-6 lg:mb-5">
            {country.name.common}
          </p>
          <div className="text flex items-start justify-start gap-14 lg:gap-28 flex-col lg:flex-row lg:min-w-[580px] text-light_Mode_Text dark:text-dark_Mode_Text">
            <div className="">
              <div className="space-y-1">
                <p className="text-base font-semibold capitalize">
                  native name:{" "}
                  <span className="font-light">
                    {/* {var firstInput = Object.keys(allInvalidFields)[0];
console.log(allInvalidFields[firstInput][0]);} */}
                    {country.nativeName?.toString()}
                  </span>
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
                  capital: <span className="font-light">{country.capital}</span>
                </p>
              </div>
            </div>
            <div>
              <div className="space-y-1">
                <li className="text-base font-semibold capitalize list-none">
                  top level domains:
                  <>
                    {country.tld?.map((domain) => (
                      <span key={domain} className="font-light pl-2">
                        {domain}
                      </span>
                    ))}
                  </>
                </li>

                {/* <li className="text-base font-semibold capitalize list-none">
                top level domains:
                <p className="font-light">
                  {country.currencies.map((currency, i) => (
                    <p key={currency.code}>
                      {currency.name}
                      {country.currencies.length > 1 &&
                        i + 1 < country.currencies.length &&
                        ","}
                    </p>
                  ))}
                </p>
              </li> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
//53 193 borders
export default countrydetails
const BASE_URL = "https://restcountries.com/v3.1/"

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${BASE_URL}all?fields=cioc`)
  const countries = await res.json()

  const paths = countries.map((country: { cioc: string }) => ({
    params: { id: country.cioc },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `${BASE_URL}alpha/${params.id}?fields=cioc,name,flags,nativeName,tld,subregion,currencies,languages,population,region,capital,borders`
  )
  const country = await res.json()
  // console.log(country)

  return {
    props: {
      country,
    },
  }
}
