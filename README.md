# Aplicación de Personajes con React + Vite: Explorando Consumo de APIs y Datos Locales

Esta aplicación web, desarrollada con React y Vite, sirve como un ejemplo práctico para explorar diferentes estrategias de manejo de datos en una aplicación frontend. Demuestra cómo integrar datos desde una API externa y cómo gestionar datos locales, todo ello presentado de manera interactiva y visualmente atractiva.

El proyecto incluye dos implementaciones principales para ilustrar estos conceptos:

-   `_App.jsx`: **Gestión de Datos Locales** - Utiliza datos almacenados directamente en `/data/personajes.json`. Ideal para entender cómo trabajar con conjuntos de datos estáticos o simulados.
-   `App.jsx`: **Consumo de API Externa** - Se conecta a la [Dragon Ball API](https://dragon-ball-api.com/) para obtener datos en tiempo real y los gestiona utilizando el almacenamiento local (localStorage) del navegador para persistencia.

## Características Destacadas

-   **Consumo de APIs REST**: Demostración práctica de cómo realizar llamadas a APIs externas y procesar sus respuestas.
-   **Gestión de Datos Locales**: Implementación de carga y manipulación de datos desde un archivo JSON local.
-   **Visualización de Personajes**: Interfaz dinámica para mostrar personajes en tarjetas individuales.
-   **Persistencia de Datos**: Uso de `localStorage` para mantener el estado de la aplicación y los datos obtenidos de la API.
-   **Interfaz Moderna y Responsive**: Diseño adaptable para una experiencia de usuario consistente en diferentes dispositivos.
-   **Desarrollo Rápido con Vite**: Aprovecha las ventajas de Vite para un entorno de desarrollo ágil y eficiente con Hot Module Replacement (HMR).

## Estructura del Proyecto

```
src/
  ├── componentes/    # Componentes React reutilizables (e.g., Tarjeta.jsx para personajes)
  │   └── Tarjeta.jsx # Componente de tarjeta de personaje
  ├── data/          # Archivos de datos locales y configuraciones
  │   ├── personajes.js
  │   └── personajes.json
  ├── utils/         # Utilidades y funciones auxiliares (e.g., para llamadas a API y almacenamiento)
  │   ├── almacenamiento.js
  │   └── llamadas.js
  └── assets/        # Recursos estáticos (imágenes, iconos, etc.)
```

## Instalación

Para poner en marcha el proyecto en tu entorno local:

1.  Clona este repositorio:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```
2.  Navega al directorio del proyecto:
    ```bash
    cd fs-1-tt-31
    ```
3.  Instala las dependencias necesarias:
    ```bash
    npm install
    ```

## Scripts Disponibles

-   `npm run dev`: Inicia el servidor de desarrollo local con Vite.
-   `npm run build`: Compila la aplicación para su despliegue en producción.
-   `npm run lint`: Ejecuta ESLint para analizar el código y asegurar su calidad y consistencia.

## Tecnologías Principales

-   **React**: Biblioteca de JavaScript para construir interfaces de usuario.
-   **Vite**: Herramienta de construcción frontend de próxima generación.
-   **ESLint**: Para mantener un código limpio y libre de errores.
-   **CSS Moderno**: Estilos y diseño responsivo.

## APIs y Estrategias de Datos

-   **Dragon Ball API (Consumo en Tiempo Real)**: Integración con una API externa para obtener datos dinámicamente, con persistencia a través de `localStorage`.
-   **ws.php (API Local)**: Un script PHP que actúa como un endpoint de API local, sirviendo datos de publicaciones de Dragon Ball en formato JSON.

## Contribución

Las contribuciones son bienvenidas. Por favor, asegúrate de seguir las convenciones de código existentes y de actualizar las pruebas si es necesario.

## Licencia

Este proyecto está bajo la Licencia MIT.

---
Desarrollado con ❤️ usando React + Vite
