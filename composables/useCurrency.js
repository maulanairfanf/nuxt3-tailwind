// useCurrency.js
export function useCurrency() {
	const formatCurrency = value => {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(value)
	}

	return {
		formatCurrency,
	}
}
