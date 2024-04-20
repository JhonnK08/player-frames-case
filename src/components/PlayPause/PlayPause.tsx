import { ReactElement, memo } from 'react';
import { Svg } from '../Svgs';

interface PlayPauseProperties {
	isPlaying: boolean;
	onClickPlayPause: () => void;
}

function PlayPauseComponent({
	isPlaying,
	onClickPlayPause
}: PlayPauseProperties): ReactElement {
	return (
		<div className='flex items-center justify-center'>
			<button type='button' onClick={onClickPlayPause}>
				<Svg
					svgName={isPlaying ? 'pause' : 'play'}
					className='h-8 w-8 fill-gray-800 text-gray-800'
				/>
			</button>
		</div>
	);
}

const PlayPause = memo(PlayPauseComponent);

export default PlayPause;
