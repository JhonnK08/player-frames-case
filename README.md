# Frame Player

Projeto realizado utilizando React.js, Typescript, TailwindCSS, Vite.

Componente que recebe um array de URL de frames e o FPS, e cria um player com essas imagens.

```
<FramePlayer
    frames={[
		    'https://free-images.com/sm/a0a4/summer_sea_sun_italy.jpg',
		    'https://free-images.com/md/6356/beach_sand_sea_ocean_0.jpg',
		    'https://free-images.com/sm/b009/sunrise_sun_holiday_sea.jpg',
		    'https://free-images.com/md/d44b/cyclopean_isles_sicily_italy.jpg',
		    'https://free-images.com/md/6356/beach_sand_sea_ocean_0.jpg'
	  ]}
    fps={0.2}
/>
```

## Requisitos

Node.js 18

## Como rodar

```bash
npm install -g pnpm # Instalar pnpm

pnpm i # Instala as dependências

pnpm dev # Roda projeto localmente

```
