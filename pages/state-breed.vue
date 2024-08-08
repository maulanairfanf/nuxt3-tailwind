<template>
	<div class="container mx-auto p-4">
		<h1 class="text-2xl font-bold mb-4">Detail Tugas State</h1>
		<div v-if="breedState">
			<p><strong>ID:</strong> {{ breedState.id }}</p>
			<p><strong>Name:</strong> {{ breedState.name }}</p>
		</div>
		<div v-else>
			<p>State Empty</p>
		</div>
		<button class="button-primary" @click="setRandomBreedState">
			Fetch Random Breed Breed
		</button>
	</div>
</template>
<script setup>
const { breedState, setRandomBreedState } = useBreedsState()
</script>
