import classNames from 'classnames';
import { ReactElement, useEffect, useState } from 'react';
import useCacheFrames from '../../hooks/useCacheFrames';
import Spinner from '../Spinner/Spinner';

interface ScreenProperties {
	frames: string[];
	currentFrame: number;
}

function Screen({ currentFrame, frames }: ScreenProperties): ReactElement {
	const [loading, setLoading] = useState(true);
	const { cacheFrames, loadedFrames } = useCacheFrames(frames);

	useEffect(() => {
		if (loadedFrames) {
			setLoading(false);
		}
	}, [loadedFrames]);

	useEffect(() => {
		cacheFrames();
	}, []);

	function renderElement(): ReactElement | null {
		if (loading) {
			return <Spinner />;
		}

		if (frames[currentFrame]) {
			return (
				<img
					className='h-full object-contain'
					src={frames[currentFrame]}
					alt={`frame-${currentFrame}`}
				/>
			);
		}
		return null;
	}

	return (
		<div
			className={classNames('w-full flex-1 bg-black text-white', {
				'flex items-center justify-center': loading
			})}
		>
			{renderElement()}
		</div>
	);
}

export default Screen;
