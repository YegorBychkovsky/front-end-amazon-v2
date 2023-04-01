export interface ICategory {
	map(arg0: (category: any) => { params: { slug: any } }): unknown
	id: number
	slug: string
	name: string
}
