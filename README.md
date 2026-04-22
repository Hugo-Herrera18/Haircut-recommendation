# StyleMatch - Landing Page de Recomendación de Cortes

StyleMatch es una landing page moderna e interactiva diseñada para sugerir cortes de cabello ideales basados en la forma del rostro del usuario. Esta versión inicial implementa una demostración de la interfaz y un flujo estático (mockup visual) del escaneo facial para presentar las recomendaciones sin necesidad de una base de datos o backend activo.

## 🚀 Características

- **Diseño Premium y Responsivo:** UI limpia y focalizada con paletas oscuras y claras, respetando las mejores prácticas modernas.
- **Simulación de IA estática (Fake Upload App Flow):** Permite al usuario "subir" o tomar una foto temporal usando `URL.createObjectURL` renderizándolo en la previsualización local, seguido de una animación de análisis y *auto-scroll* a los resultados. Todo en el lado del cliente (Frontend).
- **Secciones Desglosadas:**
  - **Hero Section:** Presentación del valor y demostración visual de carga de imagen.
  - **Cómo Funciona (How It Works):** Explicación modular sobre cómo se logran las sugerencias.
  - **Recomendaciones de Estilo:** Tarjetas interactivas con estilos sugeridos basados en la preasignación de "Rostro Ovalado".
  - **Trust/Features Module:** Mensajes de confianza para el usuario respecto a su privacidad y métodos.

## 🛠️ Stack Tecnológico

- **Framework:** [React](https://reactjs.org/) (Configurado con [Vite](https://vitejs.dev/)).
- **Estilos:** Variables Globales en CSS Vanilla + CSS Modules clásicos (`.module.css`).
- **Iconos:** [Lucide React](https://lucide.dev/).
- **Fuentes:** [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts).

## 💻 Instalación y Uso de Desarrollo

Instrucciones para iniciar la aplicación:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Hugo-Herrera18/Haircut-recommendation.git
   ```
2. Accede al directorio del proyecto (si estás desde otra terminal):
   ```bash
   cd Haircut-recommendation1
   ```
3. Instala todas las dependencias necesarias:
   ```bash
   npm install
   ```
4. Levanta el servidor local de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre la consola en tu navegador en la URL asignada, comúnmente `http://localhost:5173`.

---
*Este proyecto fue desarrollado íntegramente de acuerdo al mockup e indicaciones proporcionadas de UX/UI moderno.*
