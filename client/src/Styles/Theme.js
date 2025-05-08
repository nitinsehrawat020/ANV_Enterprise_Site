const size = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1200px",
};

const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: ` (max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
  desktop: `(min-width:${size.laptop} and max-width: ${size.desktop})`,
  phnAndTab: `(max-width: ${size.tablet})`,
};

export { size, device };
