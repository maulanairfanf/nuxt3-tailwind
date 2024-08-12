<template>
	<div class="relative overflow-x-auto container mx-auto mt-10">
		<div v-if="breedPending">Loading..</div>
		<div v-else-if="breedError">{{ breedError }}</div>
		<Table
			v-else
			:headers="headers"
			:keys="keys"
			:data="breedList"
			:pending="breedPending"
			:page="page"
			:limit="limit"
			@page-changed="handlePageChange"
			@save-bread="handleSaveBreed"
		/>
	</div>
</template>

<script setup>
import Table from '~/components/Table.vue'

const page = ref(0)
const limit = ref(10)

const { breedList, breedError, breedPending, fetchBreeds } = useBreeds({
	page: page,
	limit: limit,
})

const { breedState, setBreedListState, setBreedState, setRandomBreedState } =
	useBreedsState()

const headers = [
	{ text: 'Id', key: 'id' },
	{ text: 'Name', key: 'name' },
	{ text: 'Action 1', key: 'action1' },
	{ text: 'Action 2', key: 'action2' },
]

const keys = ['id', 'name']

function handleSaveBreed(payload) {
	setBreedState(payload)
	navigateTo('/state-breed')
}

function handlePageChange(newPage) {
	page.value = newPage
}

watch(breedList, newList => {
	if (newList) {
		console.log('newList', newList)
		setBreedListState(newList)
	}
})
</script>
