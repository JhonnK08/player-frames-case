import { ReactElement, useState } from 'react';
import { Svg } from '../Svgs';

interface PlayPauseProperties {
	onClickPlayPause: (isPlaying: boolean) => void;
}

function PlayPause({ onClickPlayPause }: PlayPauseProperties): ReactElement {
	const [isPlaying, setIsPlaying] = useState(false);

	function onClickButton(): void {
		setIsPlaying(previousValue => !previousValue);
		onClickPlayPause(!isPlaying);
	}

	return (
		<div className='flex items-center justify-center'>
			<button type='button' onClick={onClickButton}>
				<Svg
					svgName={isPlaying ? 'pause' : 'play'}
					className='h-8 w-8 fill-gray-800 text-gray-800'
				/>
			</button>
		</div>
	);
}

export default PlayPause;
