import { useFetch } from 'nuxt/app'

export const useBreeds = params => {
	const {
		data: breedList,
		error: breedError,
		pending: breedPending,
		execute: fetchBreeds,
	} = useFetch('https://api.thedogapi.com/v1/breeds', {
		params,
	})

	const breedListState = useState('breedList', () => [])

	return {
		breedList,
		breedError,
		breedPending,
		fetchBreeds,
	}
}

export const useBreedAsync = () => {
	const {
		data: breedList,
		error: breedError,
		pending: breedPending,
	} = useAsyncData(
		'breeds',
		async () => {
			const response = await fetch('https://api.thedogapi.com/v1/breeds')
			if (!response.ok) {
				throw new Error('Failed to fetch breeds')
			}
			return response.json()
		},
		{
			immediate: true,
		}
	)

	return {
		breedList,
		breedError,
		breedPending,
	}
}

export const useBreedDetails = id => {
	const {
		data: breed,
		error: breedError,
		pending: breedPending,
		execute: fetchBreedDetails,
	} = useFetch(`https://api.thedogapi.com/v1/breeds/${id}`)

	return {
		breed,
		breedError,
		breedPending,
		fetchBreedDetails,
	}
}
