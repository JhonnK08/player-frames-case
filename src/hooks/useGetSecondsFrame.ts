import { useMemo } from 'react';

interface UseGetSecondsFramePayload {
	framesLength: number;
	fps: number;
}

interface UseGetSecondsFrameResponse {
	secondsPerFrame: number;
	totalSeconds: number;
}

export default function useGetSecondsFrame({
	fps,
	framesLength
}: UseGetSecondsFramePayload): UseGetSecondsFrameResponse {
	const secondsPerFrame = useMemo(() => {
		const seconds = Math.floor(framesLength / fps);
		const secondsPerFrame = Math.floor(seconds / framesLength);
		return secondsPerFrame;
	}, [framesLength, fps]);

	return {
		secondsPerFrame,
		totalSeconds: secondsPerFrame * framesLength
	};
}
