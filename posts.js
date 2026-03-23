// ─────────────────────────────────────────────────────────────
//  POSTS REGISTRY
//  To add a new note: copy one object below, paste at the top,
//  fill in the 6 fields. That's it
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
  file:  "green_papaya_review.html",
  title: "The Scent of Green Papaya — three readings of one film",
  desc:  "Trần Anh Hùng's 1993 film resists plot, rewards patience, and raises questions about the beauty of a life observed without consent.",
  tag:   "Movie",
  date:  "Feb 2024",
  theme: "green"
},
 
  {
  file:  "ytmt_review.html",
  title: "Y Tu Mamá También — he did not expect to feel this much",
  desc:  "A review of Cuarón's 2001 film alongside Before Sunrise, Call Me By Your Name, Moonlight, Boyhood, and Roma. About roads, unsaid things, and giving yourself away like the sea.",
  tag:   "Movie",
  date:  "Jun 2025",
  theme: "amber"
},
  {
  file:  "madrid_city_nights.html",
  title: "The two nights that cannot be explained",
  desc:  "Real Madrid vs Manchester City in 2022 and 2024. Same clubs, same competition, same impossible situation. At some point you stop calling it luck.",
  tag:   "Football",
  date:  "Dec 2025",
  theme: "blue"
},
  {
  file:  "guti_real_madrid.html",
  title: "Guti — the player who was always almost everything",
  desc:  "542 appearances, 15 trophies, and the eternal promise. Real Madrid's most loyal servant was also its greatest what-if.",
  tag:   "Football",
  date:  "Jun 2020",
  theme: "red"
},
  {
  file:  "bengal_partition_ecology.html",
  title: "How communal politics ruined agrarian Bengal",
  desc:  "The 1947 partition was not just about religion — it was about who controlled the delta, the water, and the rice fields. The game nobody won, told through the lens of Game of Thrones.",
  tag:   "Politics",
  date:  "Apr 2019",
  theme: "dark"
},
  {
  file:  "utsab_review.html",
  title: "Utsab — what a family is actually held together by",
  desc:  "Rituparno Ghosh's 2000 film is not about a family falling apart. It's about thirty years of ordinary moments — the necklace, the cigarette, the tea and French toast — that are only understood as love in retrospect.",
  tag:   "Movie",
  date:  "Jun 2025",
  theme: "coral"
},
  {
  file:  "death_in_the_gunj_review.html",
  title: "A Death in the Gunj — on being the last to be picked",
  desc:  "Konkona Sen Sharma's 2016 debut is about invisibility — the slow kind, the kind that happens in full view of people who love you in their way, just not enough to actually look.",
  tag:   "Movie",
  date:  "Nov 2022",
  theme: "dark"
},
  {
  file:  "utshob_review.html",
  title: "Utshob — a celebration that earns its tears",
  desc:  "Begins as a light Bangla comedy, becomes something much quieter. Zahid Hasan's best in years, and the kind of film you recommend to your parents without having to explain why.",
  tag:   "Movie",
  date:  "Sep 2025",
  theme: "purple"
},
  {
  file:  "valverde_little_bird.html",
  title: "The Little Bird takes flight — Valverde's 22-minute hat-trick",
  desc:  "Right-back, then the 7, 8, 9 and 10, then right-back again. One of the great individual performances the Bernabéu has ever staged.",
  tag:   "Football",
  date:  "Mar 2026",
  theme: "red"
},
  {
  file:  "thesis_football_ml.html",
  title: "BSc thesis — predicting EPL matches with 96% accuracy",
  desc:  "A machine learning study across 23 seasons of Premier League data. Six models, feature engineering, and the finding that Logistic Regression beats every ensemble when the inputs are right.",
  tag:   "Research",
  date:  "Apr 2024",
  theme: "blue"
},
  {
  file:  "why_fpl.html",
  title: "FPL is not a game — it's a cognitive system",
  desc:  "Why I treat every blank gameweek as data, every bad captain pick as variance, and every international break as a noticeable absence.",
  tag:   "FPL",
  date:  "Aug 2023",
  theme: "blue"
},

{
  file:  "100_narrated_films_lb_imdb_avg.html",
  title: "100 first-person narrated films — rated & ranked",
  desc:  "Letterboxd vs IMDb, averaged and sorted. Every film where someone decided their story was worth telling in their own voice.",
  tag:   "Movie",
  date:  "Jun 2025",
  theme: "coral"
},
{
    file:  "sentimental_value_review.html",
    title: "Joachim Trier's Best Film Is About Someone Making His Worst",
    desc:  "A deeply layered family drama that uses filmmaking as both subject and method. It dissects memory, identity, and inherited pain with rare precision — and arrives at something honest: love is limited by one's ability to express it.",
    tag:   "Movie",
    date:  "Mar 2026",
    theme: "green"
  },
  
{
    file:  "bd_clothing_brands.html",
    title: "Bangladesh clothing brands — personal analysis",
    desc:  "Brand hierarchy, discount windows, value comparisons, and family tree of 8 local brands including Yellow, Artisan, Infinity, STC and more.",
    tag:   "Random",
    date:  "Nov 2025",
    theme: "amber"
  },
  
  {
    file:  "myth_power_notes.html",
    title: "Myth, fascism & mass psychology",
    desc:  "Structural breakdown of how myth functions as a control mechanism, Hegel's influence on fascist thought, and the full pipeline from narrative to power.",
    tag:   "Politics",
    date:  "Feb 2025",
    theme: "dark"
  },
   {
  file:  "fpl_asad_story.html",
  title: "The captain you cannot unsee",
  desc:  "A short story about Asad, FPL, and a hamstring injury in the twenty-ninth minute. The framework was correct. The outcome was not. These are not the same thing.",
  tag:   "FPL",
  date:  "Aug 2021",
  theme: "dark"
},

  {
    file:  "wordle_sa_analysis.html",
    title: "Wordle Starter",
    desc:  "Greedy word selection from the top 15 Wordle letter frequencies. ALERT + PIONS + DUCHY for a fixed grand total of 415% across all S and A tier letters.",
    tag:   "Random",
    date:  "Mar 2026",
    theme: "teal"
  },



];
