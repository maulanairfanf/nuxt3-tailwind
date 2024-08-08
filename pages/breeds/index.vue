<template>
	<div class="relative overflow-x-auto container mx-auto mt-10">
		<div v-if="breedPending">Loading...</div>

		<table class="w-full text-sm text-left rtl:text-right text-gray-500" v-else>
			<thead class="text-xs text-gray-700 uppercase bg-gray-50">
				<tr>
					<th scope="col" class="px-6 py-3">Id</th>
					<th scope="col" class="px-6 py-3">Name</th>
					<th scope="col" class="px-6 py-3">Action 1</th>
					<th scope="col" class="px-6 py-3">Action 2</th>
				</tr>
			</thead>
			<tbody>
				<tr
					class="border-b"
					v-for="(item, index) in breedList"
					:key="index"
					:class="
						index % 2 === 0
							? 'bg-slate-400 text-white'
							: 'bg-white text-gray-900'
					"
				>
					<td class="px-6 py-4 font-medium whitespace-nowrap">
						{{ item.id }}
					</td>
					<td class="px-6 py-4 font-medium whitespace-nowrap">
						{{ item.name }}
					</td>
					<td class="px-6 py-4 font-medium whitespace-nowrap">
						<NuxtLink :to="`/breeds/${item.id}`">See Details </NuxtLink>
					</td>
					<td
						class="px-6 py-4 font-medium whitespace-nowrap cursor-pointer"
						@click="handleSaveBreed(item)"
					>
						See Details By State
					</td>
				</tr>
			</tbody>
		</table>
		<div class="mt-4 flex gap-4 justify-center">
			<button class="button-primary" :disabled="page === 0" @click="handlePrev">
				Previous
			</button>
			<button class="button-primary" @click="handleNext">Next</button>
		</div>
	</div>
</template>
<script setup>
definePageMeta({
	layout: 'default',
})

const page = ref(0)
const limit = ref(10)

const { breedState, setBreedListState, setBreedState, setRandomBreedState } =
	useBreedsState()
const { breedList, breedError, breedPending, fetchBreeds } = useBreeds({
	page: page,
	limit: limit,
})

function handleSaveBreed(payload) {
	setBreedState(payload)
	navigateTo('/state-breed')
}

function handlePrev() {
	page.value--
}

function handleNext() {
	page.value++
}

watch(breedList, newList => {
	if (newList) {
		setBreedListState(newList)
		setRandomBreedState()
	}
})
</script>
