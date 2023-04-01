import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IProduct } from '@/types/product.interface'

import { convertPrice } from '@/utils/convertPrice'

import AddToCartButton from './AddToCartButton'
import FavoriteButton from './FavoriteButton'
import ProductRating from './ProductRating'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className='animate-scaleIn'>
			<div className='bg-white rounded-xl relative'>
				<div className='absolute top-2 right-3 z-10'>
					<FavoriteButton productId={product.id} />
					<AddToCartButton product={product} />
				</div>
				<Link href={`/product/${product.slug}`}>
					<Image
						className='rounded-xl'
						width={250}
						height={250}
						src={product.images[0]}
						alt={product.name}
					/>
				</Link>
			</div>
			<Link href={`/product/${product.slug}`}>
				<h3 className='mb-0.5 mt-2 font-semibold'>{product.name}</h3>
			</Link>

			<Link href={`/category/${product.category?.slug}`}>
				<div className='text-aqua text-xs  mb-2'>{product?.category?.name}</div>
			</Link>
			<ProductRating product={product} />
			<div className='text-xl font-semibold'>{convertPrice(product.price)}</div>
		</div>
	)
}

export default ProductItem
