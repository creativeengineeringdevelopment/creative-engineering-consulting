/**
 * Blocking theme bootstrap — runs before first paint so there is no flash.
 * Default is dark (design.md); a stored choice overrides. No system mode:
 * the theme is a deliberate brand surface, not an OS preference.
 */
const themeInit = `(function(){try{var t=localStorage.getItem("ce-theme");if(t==="light"||t==="dark"){document.documentElement.classList.toggle("light",t==="light");}}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeInit }} />;
}
