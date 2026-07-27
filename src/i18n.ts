export type Locale = "es" | "pt";

export function getLocale(): Locale {
  return window.location.pathname === "/pt" || window.location.pathname.startsWith("/pt/")
    ? "pt"
    : "es";
}

export function getPagePath(): string {
  const locale = getLocale();
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  const path = locale === "pt" ? pathname.replace(/^\/pt(?=\/|$)/, "") || "/" : pathname;
  return path === "/" ? window.location.hash || "/" : path;
}

export function localizedPath(href: string, locale = getLocale()): string {
  if (locale !== "pt" || /^(https?:|mailto:|tel:)/.test(href)) return href;
  if (href.startsWith("/pt")) return href;
  if (href.startsWith("#")) return `/pt/${href}`;
  return href.startsWith("/") ? `/pt${href}` : href;
}

const exactTranslations: Record<string, string> = {
  Home: "Início",
  Producto: "Produto",
  Productos: "Produtos",
  Industrias: "Segmentos",
  "Ver producto": "Ver produto",
  "Tarjetas digitales": "Cartões digitais",
  Notificaciones: "Notificações",
  Automatizaciones: "Automações",
  Analítica: "Análises",
  "Sobre Taply": "Sobre a Taply",
  "Preguntas frecuentes": "Perguntas frequentes",
  Soporte: "Suporte",
  "Reserva una demo": "Agende uma demonstração",
  "Hablemos de tu programa": "Vamos falar sobre o seu programa",
  "Cómo funciona": "Como funciona",
  "Qué hacemos": "O que fazemos",
  "El problema": "O problema",
  "Cómo se instala": "Como funciona",
  "Programas de fidelización": "Programas de fidelidade",
  "Taply por industria": "Taply por segmento",
  "Más que una tarjeta": "Mais do que um cartão",
  "Una visita no basta para construir un hábito.": "Uma visita não basta para construir um hábito.",
  "Convierte clientes ocasionales en habituales.": "Transforme clientes ocasionais em clientes habituais.",
  "Tarjetas de fidelización para negocios locales": "Cartões de fidelidade para negócios locais",
  "Tarjetas de fidelización digitales para aumentar la frecuencia de visita, el retorno y el ROI. Sin app, sin complicar tu operación.": "Cartões digitais de fidelidade para aumentar a frequência de visitas, o retorno e o ROI. Sem app, sem complicar a sua operação.",
  "El Wallet también hace el trabajo.": "A Wallet também faz o trabalho.",
  "La tarjeta es el medio. Hacer que vuelvan es el resultado.": "O cartão é o meio. Fazer com que voltem é o resultado.",
  "De QR a visitas habituales.": "Do QR a visitas habituais.",
  "Ellos lo instalan, tú lo activas. La entrada es simple para el cliente y accionable para el negocio.": "Eles instalam, você ativa. A entrada é simples para o cliente e prática para o negócio.",
  "Una forma de fidelizar para cada negocio.": "Uma forma de fidelizar para cada negócio.",
  "Convierte más visitas en clientes habituales.": "Transforme mais visitas em clientes habituais.",
  "Los clientes no vuelven por accidente.": "Clientes não voltam por acidente.",
  "Estamos para ayudarte.": "Estamos aqui para ajudar.",
  "Si tienes preguntas, dudas o cualquier contacto, envía un correo a": "Se você tiver perguntas, dúvidas ou quiser entrar em contato, envie um e-mail para",
  "Cafeterías": "Cafeterias",
  "Restaurantes": "Restaurantes",
  Bares: "Bares",
  Comercios: "Comércios",
  "Panaderías": "Padarias",
  Eventos: "Eventos",
  "Sin app": "Sem app",
  "Una base simple": "Uma base simples",
  "Conoce el producto": "Conheça o produto",
  "Cuatro capacidades. Una relación que sigue.": "Quatro capacidades. Uma relação que continua.",
  "Siempre disponible": "Sempre disponível",
  "Operación simple": "Operação simples",
  "Una función. Un resultado claro.": "Uma função. Um resultado claro.",
  "Casos de uso": "Casos de uso",
  "Elige la tarjeta que mejor funciona para tu negocio.": "Escolha o cartão que funciona melhor para o seu negócio.",
  "Recompensa cada visita, acumula puntos por compra o comunica tus eventos con una tarjeta que vive dentro del Wallet.": "Recompense cada visita, acumule pontos por compra ou comunique seus eventos com um cartão que vive na Wallet.",
  "Tarjeta de sellos": "Cartão de selos",
  "Tarjeta por puntos": "Cartão por pontos",
  "Tarjeta de evento": "Cartão de evento",
  "La frecuencia se construye": "A frequência é construída",
  "La tecnología debe desaparecer": "A tecnologia deve desaparecer",
  "La relación es del negocio": "A relação é do negócio",
};

const replacements: Array<[RegExp, string]> = [
  [/fidelización/gi, "fidelidade"],
  [/tarjetas/gi, "cartões"],
  [/tarjeta/gi, "cartão"],
  [/negocios/gi, "negócios"],
  [/negocio/gi, "negócio"],
  [/clientes habituales/gi, "clientes habituais"],
  [/clientes ocasionales/gi, "clientes ocasionais"],
  [/vuelven/gi, "voltam"],
  [/volver/gi, "voltar"],
  [/vuelve/gi, "volta"],
  [/próxima visita/gi, "próxima visita"],
  [/siguiente visita/gi, "próxima visita"],
  [/frecuencia/gi, "frequência"],
  [/notificaciones/gi, "notificações"],
  [/automatizaciones/gi, "automações"],
  [/analítica/gi, "análises"],
  [/próximo/gi, "próximo"],
  [/próxima/gi, "próxima"],
  [/más/gi, "mais"],
  [/también/gi, "também"],
  [/después/gi, "depois"],
  [/campañas/gi, "campanhas"],
  [/beneficios/gi, "benefícios"],
  [/visitas/gi, "visitas"],
  [/regreso/gi, "retorno"],
];

export function translateText(value: string): string {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (!normalized) return value;
  const translated = exactTranslations[normalized] ?? replacements.reduce(
    (result, [pattern, replacement]) => result.replace(pattern, replacement),
    normalized,
  );
  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  return `${leading}${translated}${trailing}`;
}
