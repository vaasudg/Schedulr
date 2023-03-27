import { AiFillHome } from 'react-icons/ai'
import { MdLocalMovies } from 'react-icons/md'
import { SiAirplayvideo } from 'react-icons/si'

export const navMenu =  [
  {
    id: 1,
    name: 'Home',
    icon: <AiFillHome size={30} fill='currentColor'/>,
    href: '/',
    query: ''
  },
  {
    id: 2,
    name: 'Movies',
    icon: <MdLocalMovies size={30} />,
    href: '/movie',
    query: 'viewTask=true'
  },
  {
    id: 3,
    name: 'TV',
    icon: <SiAirplayvideo size={25} />,
    href: '/tv',
    query: 'viewGroup=true'
  }
]
