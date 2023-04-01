import { NextPage } from 'next'

import Meta from '@/ui/Meta'
import Catalog from '@/ui/catalog/Catalog'
import Layout from '@/ui/layout/Layout'

import { useProfile } from '@/hooks/useProfile'

const FavoritesPage: NextPage = () => {
	const { profile } = useProfile()

	return (
		<Meta title={'Favorites'}>
			<Layout>
				<Catalog products={profile?.favorites || []} title='Favorites' />
			</Layout>
		</Meta>
	)
}
// FavoritesPage.isOnlyUser = true
export default FavoritesPage
