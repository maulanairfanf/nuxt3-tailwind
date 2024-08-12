<template>
	<div class="container mx-auto p-4">
		<h1 class="text-2xl font-bold mb-4">Detail Breed</h1>
		<div v-if="breed">
			<p><strong>ID:</strong> {{ breed.id }}</p>
			<p><strong>Name:</strong> {{ breed.name }}</p>
		</div>
	</div>
</template>

<script setup>
const route = useRoute()
const breedId = route.params.id

const { breed, breedError, breedPending, fetchBreedDetails } =
	useBreedDetails(breedId)
</script>
