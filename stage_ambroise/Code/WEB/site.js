// Applique config_site.js : sans l'option, l'onglet Évolution (bouton et contenu) est retiré de la page.
(function () {
  if (window.SITE_EVOLUTION) return;
  document.querySelectorAll('[data-tab="evolutiontab"], #evolutiontab').forEach(function (e) { e.remove(); });
})();

// Onglet Dominance : masqué sur ce site (remplacé par « Comparer ma commune »). Le code reste ; pour le réafficher : window.SITE_DOMINANCE = true.
(function () {
  if (window.SITE_DOMINANCE) return;
  document.querySelectorAll('[data-tab="dominancetab"], #dominancetab').forEach(function (e) { e.remove(); });
})();

// Onglet « Comparer ma commune » : proposé par défaut ; window.SITE_COMPARER = false le retire.
// La ligne de fourchette de rang du panneau de la commune et de la fiche EPCI reste affichée dans tous les cas.
(function () {
  if (window.SITE_COMPARER !== false) return;
  document.querySelectorAll('[data-tab="comparertab"], #comparertab').forEach(function (e) { e.remove(); });
})();
