# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

![Dark Mode](public/screen-dark.jpg)

![Light Mode](public/screen-light.jpg)

### Links

- Live Site : [click here](https://countries-rest-api-ecru.vercel.app/)

## My process

### Built with

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - JS library
- [TypeScript](https://typescript.) - For Type Safety/annotations/auto docs...
- [TailwindCSS](https://tailwindcss.com/) - For styles
- [Framer - Motion](https://framer-motion.com/) - animation library
- Next - themes - For managing Dark/Light Modes
- Sharp - For Image Optimisation by Next
- Semantic HTML5 markup
- CSS Grid
- Flexbox
- Mobile-first workflow

## What I learned

What can i say,😁 i learnt so much i never expect i could learn in such a short time. The nextjs documentation is really helpful as it tells you what is and what is not possible to do with it.

I'm really glad that i could implement all the features stated as the challenge

- Some of the challenges i faced were:
  - fetching data from the api and parsing it as static files.
  - fetching all the data as quickly as possible.
  - Solution i found:
    - So after checking out the Docs of nextjs because i didn't want to use any tutorial but figure things out myself and this really helped me a bunch. i got to use "getStaticprops" and "getStaticPaths" to auto-generate the individual countries pages. i also got to use "getStaticProps" to server fetch all the countries.😋

Here are some snippets i'm proud of 👇👇👇:

- Generates Individual Pages Assigning the url as the "alpha3Code"

```js
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${BASE_URL}all?fields=alpha3Code`)
  const countries = await res.json()

  const paths = countries.map((country: { alpha3Code: string }) => ({
    params: { id: country.alpha3Code },
  }))

  return { paths, fallback: false }
}
```

- Fetching the Data needed for the individual page and parsing it to the "country" prop

```js
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) throw new Error("route id param is not defined")
  const res = await fetch(
    //@ts-ignore
    `${BASE_URL}alpha/${params.id}?fields=alpha3Code,name,flags,nativeName,topLevelDomain,subregion,currencies,languages,population,region,capital,borders`
  )
  const country = await res.json()

  return {
    props: {
      country,
    },
  }
}
```

- Fetches all the countries from the API and parses the entire result to the "countries" props which is assigned the "data" and parses it to the Page.

```js
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
```

### Useful resources

- [Nextjs Documentation](https://nextjs.org/docs) - This helped me really understand in depth how NEXTJS works, best methods on how to use the features and proper/optimum implementation. I really liked this pattern and will use it going forward.

- [frontend - Mentor](https://frontendmentor.io/) - I got to check out other people's solutions and approaches to get an insight on the design.

## Author

- Frontend Mentor - [@Headbwoi](https://www.frontendmentor.io/profile/Headbwoi)
- Twitter - [@headbwoi_1](https://www.twitter.com/headbwoi_1)
