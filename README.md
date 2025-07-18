# Frontend Mentor - Project tracking intro component solution

This is a solution to the [Project tracking intro component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/project-tracking-intro-component-5d289097500fcb331a67d80e). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Create the background shape using code

### Screenshot

![](./images/screenshot/Mobile.png)
![](./images/screenshot/Desktop.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Mobile First](https://img.shields.io/badge/mobile--first-2D9CDB?style=for-the-badge&logo=responsive&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

### What I learned

- Cómo estructurar un layout responsive usando media queries y Flexbox.
- Uso de variables CSS para mantener consistencia en colores y fuentes.
- Implementación de animaciones suaves para la aparición del menú.
- Mejor manejo de hover states y accesibilidad básica.

#### Ejemplo de código que me gustó:

```css
.nav {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.nav--active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
```

### Continued development

Me gustaría seguir mejorando en:

- Accesibilidad web (mejorar navegación con teclado y lectores de pantalla).
- Animaciones avanzadas con CSS y JavaScript.
- Uso de frameworks modernos como React o Vue.

### Useful resources

- [CSS Tricks - Responsive Design](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/) - Para entender mejor los breakpoints.
- [MDN Web Docs - Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) - Referencia esencial para Flexbox.

## Author

- Website - [Github](https://github.com/cyeguez/-Project-tracking-intro-component)
- Frontend Mentor - [@cyeguez](https://www.frontendmentor.io/profile/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Gracias a la comunidad de Frontend Mentor por los recursos y feedback.  
Inspiración tomada de otras soluciones en la plataforma.
