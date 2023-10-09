# Daily-Rends-

Se pide realizar un API (DailyTrends) que exponga un feed de noticias. Este feed es un
agregador de noticias de diferentes periódicos. DailyTrends es un periódico que une las
portadas de los periódicos número uno.
Cuando un usuario abre DailyTrends, se encuentra con las 5 noticias de portada de El País y
El Mundo del día en el que lo abre, además se pueden añadir noticias a mano desde el API.

## Instalación

1. Clona el repositorio: `https://github.com/cvillanueva94/Daily-Trends`
2. Navega al directorio del proyecto: `cd Daily-Trends`
3. Instala las dependencias: `yarn`

## Configuración

Antes de ejecutar la API, asegúrate de configurar las siguientes variables de entorno:

1. Crea un archivo `.env` en la raíz del proyecto.
2. Copia el contenido del archivo `.env.example` y pégalo en el archivo `.env`.
3. Completa los valores de las variables de entorno en el archivo `.env` según tus necesidades.

Asegúrate de no compartir tu archivo `.env` en un repositorio público, ya que puede contener información sensible.

## Uso

1. Ejecuta la API: `yarn dev`
2. Accede a la API en tu navegador o a través de herramientas como Postman:
   - URL base: `http://localhost:{PORT}`

## Endpoints

A continuación se detallan los endpoints disponibles en esta API:

- `GET /`: Retorna un saludo de bienvenida.
- `GET /feed`: Retorna el listado de feeds creados hasta la fecha.
- `POST /feed`: Permite crear un feed.
- `GET /feed/{id}`: Retorna un feed dado el id proporcionado.
- `PATCH /feed{id}`: Actualiza un feed dado el id proporcionado.
- `DELETE /feed{id}`: Elimina el feed dado el id proporcionado.
- `GET /my-feed`: Retorna el feed de noticias del día actual.
- `GET /news-paper`: Retorna el listado de periódicos creados hasta la fecha.
- `POST /news-paper`: Permite crear un periódicos.
- `GET /news-paper/{id}`: Retorna un periódicos dado el id proporcionado.
- `PATCH /news-paper{id}`: Actualiza un periódicos dado el id proporcionado.
- `DELETE /news-paper{id}`: Elimina el periódicos dado el id proporcionado.

## Ejemplos de periódicos
### El País
```json
{
    "name": "ElPais",
    "url": "https://elpais.com/america/",
    "articleSection": "article",
    "imageSection": "img",
    "videoSection": "video",
    "urlSection": "a",
    "titleClass": ".c_t",
    "descriptionClass": ".c_d"
}
```
### El Mundo
```json
{
    "name": "El Mundo",
    "url": "https://www.elmundo.es",
    "articleSection": "article",
    "imageSection": "img",
    "videoSection": "video",
    "urlSection": "a",
    "titleClass": ".ue-c-cover-content__headline",
    "descriptionClass": ".ue-c-cover-content__list-inline"
}
```

## Dibujo de la arquitectura
```flowchart TD
    A[Controller] --> B[Service]
    B --> C[Repository]
    C --> D[(Database)]
```
