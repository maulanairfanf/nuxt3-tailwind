<template>
	<div class="container mx-auto flex justify-center items-center h-screen">
		<div class="grid md:grid-cols-4 place-items-center gap-4">
			<div class="p-4 border">
				<button
					class="button-primary"
					:disabled="isRunning"
					@click="startCountdown"
				>
					{{ isRunning ? `Wait ${countdown} seconds` : 'Hello' }}
				</button>
			</div>
			<div class="p-4 border">
				<p>Original Number: 1000000</p>
				<p>Formatted Currency: {{ formatCurrency(1000000) }}</p>
			</div>
			<div class="p-4 border">
				<input
					class="input-text"
					v-model="inputValue"
					placeholder="Enter some text"
				/>
				<p>Original: {{ inputValue }}</p>
				<p>Capitalized: {{ capitalizedInput }}</p>
			</div>
			<div class="p-4 border">
				<p>Watch Data Input Value</p>
				<p>{{ watchValue }}</p>
			</div>
			<div class="p-4 border">
				<button @click="showModal = true" class="button-primary">
					Toggle Modals
				</button>

				<Modal v-if="showModal" @close="showModal = false" />
			</div>
		</div>
	</div>
</template>

<script setup>
import Modal from '@/components/modal'
definePageMeta({
	layout: 'default',
})
// const LazyModal = defineAsyncComponent(() => import('@/components/Modal.vue'))

const { countdown, isRunning, startCountdown } = useCountdown(5)
const { formatCurrency } = useCurrency()

const inputValue = ref('')
const watchValue = ref('')
const showModal = ref(false)

const capitalizedInput = computed(() => {
	return inputValue.value.toUpperCase()
})

watch(
	inputValue,
	(newValue, oldValue) => {
		watchValue.value = newValue
	},
	{ once: false }
)
</script>
