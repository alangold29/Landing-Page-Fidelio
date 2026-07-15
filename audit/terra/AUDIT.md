# Auditoría Terra — Fidelio

Auditoría visual realizada sobre la rama `Imágenes` antes de abrir `Imágenes-Terra`.

## Hallazgos y decisiones

1. El hero ya tenía una dirección de marca diferenciada, pero el mockup de Wallet solo aparecía en pantallas extra grandes. Terra lo adelanta a escritorio para que la propuesta de producto sea visible en el primer impacto.
2. La navegación no comunicaba conversión ni mantenía el lenguaje del producto: `Features` era el único ítem en inglés. Se reemplazó por `Activación`, se agregó una CTA de demo en escritorio y se conservó navegación horizontal accesible en móvil.
3. Los primeros fotogramas de las páginas internas se desenfocaban por la animación de título. Se eliminó el filtro blur, se acortó la transición y se incorporó respeto por `prefers-reduced-motion`.
4. Los espacios para futuras fotografías y tarjetas se percibían como mensajes internos de demo. Ahora funcionan como briefs visuales de contenido, sin afirmar que esos assets ya existen.
5. La base no tenía título, metadescripción, idioma ni Open Graph. Se añadieron metadatos en español orientados a `fidelización para negocios locales`, `tarjetas de fidelización digitales`, `Apple Wallet` y `Google Wallet`.

## Evidencia

- `home-baseline.png`: home de la rama Imágenes.
- `producto-baseline.png`, `features-baseline.png`, `industrias-baseline.png`: páginas internas de la rama Imágenes.
- `home-terra.png`, `producto-terra.png`, `activacion-terra.png`: validación de Terra.

## Límites conocidos

- Las fotografías de clientes y las nuevas tarjetas siguen siendo espacios de contenido intencionales. Deben sustituirse con assets finales cuando estén disponibles.
- La CTA conserva `hola@fidelio.lat`; antes de publicar debe confirmarse que el buzón sea el canal comercial definitivo.
