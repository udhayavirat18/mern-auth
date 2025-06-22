import { format } from 'fecha';

function getOrdinal(n) {
	const s = ["th", "st", "nd", "rd"];
	const v = n % 100;
	return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export const formatDate = (dateString) => {
	try {
		const date = new Date(dateString);
		if (isNaN(date)) throw new Error();

		const day = getOrdinal(date.getDate());
		const rest = format(date, 'MMM YYYY hh:mm A');
		return `${day} ${rest}`;
	} catch {
		return "🚫 Invalid Date";
	}
};
