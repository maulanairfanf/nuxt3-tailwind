// useCountdown.js
import { ref } from 'vue'

export function useCountdown(initialValue = 5) {
	const countdown = ref(initialValue)
	const isRunning = ref(false)
	let timer = null

	const startCountdown = () => {
		if (isRunning.value) return

		isRunning.value = true
		countdown.value = initialValue

		timer = setInterval(() => {
			if (countdown.value > 0) {
				countdown.value--
			} else {
				isRunning.value = false
				clearInterval(timer)
			}
		}, 1000)
	}

	const resetCountdown = () => {
		isRunning.value = false
		clearInterval(timer)
		countdown.value = initialValue
	}

	return {
		countdown,
		isRunning,
		startCountdown,
		resetCountdown,
	}
}
