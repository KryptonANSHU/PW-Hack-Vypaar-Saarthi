import Link from 'next/link'

const HashCaseLogo = () => {
  return (
    <Link href="/">
      {/* Logo */}
      <a className='my-3 md:my-0 flex items-center text-white'>
        <img src="/icons/Vyapaar2.png" alt="logo" className='w-12 md:w-16 h-16 md:h-18'/>
      </a>
    </Link>
  )
}

export default HashCaseLogo