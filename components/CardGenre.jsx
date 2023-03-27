import React from 'react'

const CardGenre = React.forwardRef(
  ({ oddBgColor = 'odd:bg-app-greyish-blue', onClick, href, text }, ref) => {
    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        className={`relative card-hover-animation m-2 flex h-44 w-44 grow items-center justify-center rounded-lg p-8 text-center text-xl font-medium even:bg-app-semi-dark-blue ${oddBgColor}`}
      >
        <p className='absolute left-0 right-0 top-0 bg-white text-[0] h-1 m-2 opacity-10'>w</p>
        {text}
      </a>
    )
  }
)

CardGenre.displayName = 'CardGenre'
export default CardGenre
