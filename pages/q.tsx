import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Meta from '@/ui/Meta'
import Catalog from '@/ui/catalog/Catalog'
import Layout from '@/ui/layout/Layout'

import { ProductService } from '@/services/product/product.service'

const SearchPage: NextPage = () => {
	const { query } = useRouter()
	const { data } = useQuery(['search products', query.temps], () =>
		ProductService.getAll({
			searchItem: query.term as string
		})
	)
	return (
		<Meta title={'Search'}>
			<Layout>
				<Catalog
					products={data?.products || []}
					title={`Search by request "${query.term || ''}"`}
				></Catalog>
			</Layout>
		</Meta>
	)
}

export default SearchPage
