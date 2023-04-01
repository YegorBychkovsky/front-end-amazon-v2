import Link from 'next/link'
import { FC } from 'react'

const Header: FC = () => {
	return (
		<header
			className='bg-secondary w-full py-6 px-6 grid'
			style={{ gridTemplateColumns: '1fr 3fr 1.2fr' }}
		>
			<Link href='/'>
				{/* <Image
					priority
					width={180}
					height={37}
					src='/images/logo.svg'
					alt='Amazon v2'
				></Image> */}
			</Link>
			{/* <Search /> */}
			<div className='flex items-center justify-end gap-10'>
				<Link href='/favorites' className='text-white'>
					{/* <AiOutlinedHeart size={28} /> */}
				</Link>
				{/* <HeaderCart />
				<HeaderProfile /> */}
			</div>
		</header>
	)
}

export default Header
