import { useCallback, useRef, useState } from 'react';

interface UseCacheFramesResponse {
	loadedFrames: boolean;
	cacheFrames: () => void;
}

export default function useCacheFrames(
	frames: string[]
): UseCacheFramesResponse {
	const [loadedFrames, setLoadedFrames] = useState(false);
	const loadedFramesLength = useRef(0);

	const onLoadFrame = useCallback((): void => {
		if (loadedFramesLength.current + 1 === frames.length) {
			setLoadedFrames(true);
			return;
		}
		loadedFramesLength.current += 1;
	}, [frames.length]);

	const cacheFrames = useCallback(() => {
		for (let index = 0; index < frames.length; index += 1) {
			const frame = frames[index];

			const image = new Image();
			image.src = frame;

			image.onload = () => {
				onLoadFrame();
			};
		}
	}, [frames, onLoadFrame]);

	return {
		loadedFrames,
		cacheFrames: () => cacheFrames()
	};
}
