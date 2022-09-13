import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import MoonSolid from "../icons/MoonSolid"
import MoonReg from "../icons/MoonReg"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <>
      <div className="bg-light_Mode_Background dark:bg-dark_Mode_Background min-h-screen">
        <header className="px-5 md:px-7 lg:px-6 xl:px-0 bg-light_Mode_Elements dark:bg-dark_Mode_Elements  mb-7 lg:mb-10 font-nunito">
          <nav className="flex items-center justify-between container h-24 lg:h-20 w-full ">
            <div>
              <p className="text-light_Mode_Text dark:text-dark_Mode_Text text-base lg:text-lg font-extrabold">
                Where in the world?
              </p>
            </div>
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? <MoonSolid /> : <MoonReg />}
              <p className="text-light_Mode_Text dark:text-dark_Mode_Text text-sm font-semibold">
                {theme === "dark" ? "Dark Mode" : "Light Mode"}
              </p>
            </motion.div>
          </nav>
        </header>
        <main className="container font-nunito">{children}</main>
      </div>
    </>
  )
}

export default Layout
