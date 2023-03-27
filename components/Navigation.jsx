import Link from 'next/link'
import IconNavHome from './icons/IconNavHome'
import IconNavMovie from './icons/IconNavMovie'
import IconNavTv from './icons/IconNavTv'
import NavigationLink from './NavigationLink'
// import { navMenu } from '../constant/NavMenu'
import { FcFilmReel } from 'react-icons/fc'

import { useState } from 'react'
import { useThemeContext } from '../context/ThemeContext'

const ThemeNavigation = ({ bgColor, onClick, activeClass }) => {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      className={`h-5 w-5 cursor-pointer rounded-full transition-all ${
        activeClass === bgColor ? 'shadow-3xl' : ''
      }`}
      value={bgColor}
      onClick={onClick}
    />
  )
}

const bgColors = [
  { id: 0, color:'#FFFCF1', value: 'MvMilky' },
  { id: 1, color:'#edcbab', value: 'MvDesertSand' },
  { id: 2, color:'#7dbbab', value: 'MVGreenSheen' }
]
export default function Navigation() {
  const [activeClass, setActiveClass] = useState('')
  const { theme, setTheme } = useThemeContext()

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between bg-${theme} p-5 md:mx-6 md:mt-6 md:mb-[33px] lg:fixed lg:left-0 lg:mr-0 lg:h-5/6 lg:flex-col lg:py-9`}>
      <div className='absolute  top-0 left-0 right-0 h-1 bg-red-500 p-4' />
      {console.log({theme})}
      <Link href='/' passHref>
        <a>
          <FcFilmReel size={40} />
        </a>
      </Link>
      <div className='flex w-1/2 items-center justify-between lg:h-[200px] lg:flex-col 2xs:w-2/5'>
        <NavigationLink href='/'>
          <IconNavHome />
        </NavigationLink>
        <NavigationLink href='/movie'>
          <IconNavMovie />
        </NavigationLink>
        <NavigationLink href='/tv'>
          <IconNavTv />
        </NavigationLink>
        {/* {navMenu.map((menu) => {
            return (
              <NavigationLink href={menu.href} key={menu.id}>
                {menu.icon}
              </NavigationLink>
            )
          })} */}
      </div>
      <div className='grid grid-cols-2 gap-1'>
        {bgColors.map((bgColor, indx) => {
          return (
            <ThemeNavigation
              bgColor={bgColor?.color}
              key={bgColor.id}
              activeClass={activeClass}
              onClick={() => {
                setActiveClass(bgColor.color)
                setTheme(bgColor.value)
              }}
            />
          )
        })}
        {/* <div className='h-5 w-5 rounded-full bg-MvMilky'></div>
        <div className='h-5 w-5 rounded-full bg-MVGreenSheen shadow-3xl'></div>
        <div className='h-5 w-5 rounded-full bg-MvDesertSand'></div>
        <div className='h-5 w-5 rounded-full bg-green-400'></div> */}
        <div className='absolute bottom-0 left-0 right-0 bg-red-500 p-1 opacity-90' />
      </div>
    </nav>
  )
}
