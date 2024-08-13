<template>
	<div class="container mx-auto">
		<div class="mt-10 flex flex-col items-center justify-center">
			<SStepper
				:steps="steps"
				:currentStep="currentStep"
				textColor="text-gray-500"
				activeColor="text-blue-500"
				completedColor="text-blue-600"
				size="md"
			>
				<template #default="{ currentStep }">
					<div v-if="currentStep === 0">
						<h2 class="text-2xl font-bold">Step 1: Personal Info</h2>
						<p>Enter your personal information here.</p>
					</div>
					<div v-if="currentStep === 1">
						<h2 class="text-2xl font-bold">Step 2: Account Info</h2>
						<p>Set up your account details here.</p>
					</div>
					<div v-if="currentStep === 2">
						<h2 class="text-2xl font-bold">Step 3: Confirmation</h2>
						<p>Review and confirm your information.</p>
					</div>
				</template>
			</SStepper>
			<div class="flex gap-2 mt-10">
				<button class="button-primary" @click="prevStep">Prev Step</button>
				<button class="button-primary" @click="nextStep">Next Step</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import SStepper from '@/components/Stepper/SStepper.vue'

const steps = ['Personal Info', 'Account Info', 'Confirmation']
const currentStep = ref(0)

const nextStep = () => {
	if (currentStep.value < steps.length - 1) {
		currentStep.value += 1
	}
}

const prevStep = () => {
	if (currentStep.value > 0) {
		currentStep.value -= 1
	}
}
</script>
