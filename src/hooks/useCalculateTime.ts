import { useMemo } from 'react';

interface UseCalculateTimeResponse {
	minutes: number;
	seconds: number;
}

interface UseCalculateTimePayload {
	valueTimer: number;
}

export default function useCalculateTime({
	valueTimer
}: UseCalculateTimePayload): UseCalculateTimeResponse {
	function formatTime(timeInSeconds: number): {
		minutes: number;
		seconds: number;
	} {
		console.log('timeInSeconds', timeInSeconds);
		const minutes = Math.floor(timeInSeconds / 60);

		const response = {
			minutes,
			seconds: minutes > 0 ? timeInSeconds & 60 : timeInSeconds
		};

		return response;
	}

	const { minutes, seconds } = useMemo(() => {
		return formatTime(valueTimer);
	}, [valueTimer]);

	return {
		minutes,
		seconds
	};
}
