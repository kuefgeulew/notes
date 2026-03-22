# Notes Blog

Personal research notes, analysis, and reference sheets.

## Setup (one time, ~5 minutes)

1. Create a new GitHub repository — name it anything (e.g. `notes`)
2. Upload all files into the repo root
3. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**
4. Your blog is live at `https://yourusername.github.io/notes`

## File structure

```
/
├── index.html       ← blog homepage (never needs editing)
├── posts.js         ← the only file you touch to add notes
├── bd_clothing_brands.html
├── myth_power_notes.html
├── wordle_sa_analysis.html
├── wordle_btier_words.html
└── README.md
```

## Adding a new note

1. Drop the new `.html` file into the repo
2. Open `posts.js` and paste one new object at the **top** of the array:

```js
{
  file:  "your_new_file.html",
  title: "Your note title",
  desc:  "One or two sentences describing what's in this note.",
  tag:   "Category",
  date:  "Jul 2025",
  theme: "teal"
},
```

3. Commit. Done. The card appears on the homepage automatically.

## Theme colors

| theme    | color   |
|----------|---------|
| `teal`   | Green   |
| `amber`  | Orange  |
| `purple` | Purple  |
| `red`    | Red     |
| `dark`   | Black   |
| `green`  | Forest  |
| `blue`   | Blue    |
| `coral`  | Coral   |

## Tags

Tags become filter buttons on the homepage automatically — just use consistent names across posts (e.g. always `"Wordle"` not sometimes `"wordle"`).
