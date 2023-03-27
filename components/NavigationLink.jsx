import Link from 'next/link'

export default function NavigationLink({ children, href }) {
// export default function NavigationLink({ menu }) {
  return (
    <Link href={href} passHref>
      {/* <a className='cursor-pointer'>{menu.icon}</a> */}
      <a className='cursor-pointer'>{children}</a>
    </Link>
  )
}
