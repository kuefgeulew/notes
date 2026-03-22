// ─────────────────────────────────────────────────────────────
//  POSTS REGISTRY
//  To add a new note: copy one object below, paste at the top,
//  fill in the 6 fields. That's it.
//
//  Fields:
//    file  → filename of your HTML (e.g. "my_note.html")
//    title → title shown on the card
//    desc  → 1–2 sentence description shown on the card
//    tag   → category label (used for filter buttons)
//    date  → display date (e.g. "Jun 2025")
//    theme → card color: teal | amber | purple | red | dark | green | blue | coral
// ─────────────────────────────────────────────────────────────

const POSTS = [

  {
    file:  "bd_clothing_brands.html",
    title: "Bangladesh clothing brands — personal analysis",
    desc:  "Brand hierarchy, discount windows, value comparisons, and family tree of 8 local brands including Yellow, Artisan, Infinity, STC and more.",
    tag:   "Lifestyle",
    date:  "Jun 2025",
    theme: "amber"
  },

  {
    file:  "myth_power_notes.html",
    title: "Myth, fascism & mass psychology",
    desc:  "Structural breakdown of how myth functions as a control mechanism, Hegel's influence on fascist thought, and the full pipeline from narrative to power.",
    tag:   "Politics",
    date:  "Jun 2025",
    theme: "dark"
  },

  {
    file:  "wordle_sa_analysis.html",
    title: "Wordle — S+A tier 3-word greedy analysis",
    desc:  "Greedy word selection from the top 15 Wordle letter frequencies. ALERT + PIONS + DUCHY for a fixed grand total of 415% across all S and A tier letters.",
    tag:   "Wordle",
    date:  "Jun 2025",
    theme: "teal"
  },

  {
    file:  "wordle_btier_words.html",
    title: "Wordle — covering G,M,B,F,W,K with 1 vowel each",
    desc:  "FUNKY + WOMBS + GRAPH: three words covering all 6 B-tier consonants with exactly one vowel per word and zero repeated letters.",
    tag:   "Wordle",
    date:  "Jun 2025",
    theme: "coral"
  },

];
