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

export const useBreedImages = (params = { limit: 10 }) => {
	const {
		data: breedImagesList,
		error: breedImagesError,
		pending: breedImagesPending,
		execute: fetchBreedImages,
	} = useFetch('https://api.thecatapi.com/v1/images/search', {
		params,
	})

	return {
		breedImagesList,
		breedImagesError,
		breedImagesPending,
		fetchBreedImages,
	}
}
