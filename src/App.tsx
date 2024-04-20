import FramePlayer from './FramePlayer';

function App() {
	const framesTest = [
		'https://free-images.com/sm/a0a4/summer_sea_sun_italy.jpg',
		'https://free-images.com/md/6356/beach_sand_sea_ocean_0.jpg',
		'https://free-images.com/sm/b009/sunrise_sun_holiday_sea.jpg',
		'https://free-images.com/md/d44b/cyclopean_isles_sicily_italy.jpg',
		'https://free-images.com/md/6356/beach_sand_sea_ocean_0.jpg'
	];

	return (
		<div className='flex h-screen w-screen flex-col items-center justify-center gap-y-6 bg-slate-200'>
			<h1 className='text-center text-2xl font-medium'>Frame Player</h1>
			<FramePlayer frames={framesTest} fps={0.2} />
		</div>
	);
}

export default App;
