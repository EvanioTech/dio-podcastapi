# Nome do aplicativo

Podcast Menager

### Descrição 
Um app ao estilo netflix,  aonde possa centralizar diferentes episódios podcasts separadados por categoria

### Dominio

Podcasts feitos em vídeo

### Features 

- Listar os episodios podcats em sessões de categorias
- [saúde, fitness, mentalidade, humor]
- Filtrar epsódios por nome do podcast

## Como

### Feature

Listar os episodios podcats em sessões de categorias

### Como vou implementar:

GET: retorna a lista de episódios

response:

Vou retornar em uma api rest (json) o 
nome do podcast, nome do episódio, imagem de capa, link, categorias

```js
[
{
    podcastName: "flow",
    episode: "EDUARDO FELDBERG [PRIMO POBRE] - Flow #336",
    videoId: "KGs31YO6mT8",
    cover: "https://i.ytimg.com/vi/KGs31YO6mT8/hqdefault.jpg",
    categories: ["mentalidade", "desenvolvimento pessoal"]

},
{
    podcastName: "flow",
    episode: "LEANDRO KARNAL - Flow #423",
    videoId: "SjkNXv3I4VE",
    cover: "https://i.ytimg.com/vi/SjkNXv3I4VE/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=SjkNXv3I4VE",
    categories: ["mentalidade", "desenvolvimento pessoal"]

},
]
```
