export const useBreedsState = () => {
	const breedListState = useState('breedList', () => [])
	const breedState = useState('breed', () => {})

	const setBreedListState = newList => {
		breedListState.value = newList
	}

	const setBreedState = newBreed => {
		breedState.value = newBreed
	}

	const setRandomBreedState = () => {
		const randomIndex = Math.floor(Math.random() * breedListState.value.length)
		const randomBreed = breedListState.value[randomIndex]
		setBreedState(randomBreed)
	}

	return {
		breedState,
		breedListState,
		setBreedState,
		setBreedListState,
		setRandomBreedState,
	}
}
