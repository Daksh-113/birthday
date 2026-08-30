# Happy Birthday, Tanzil 🎉💗

A little birthday website: a funny, playful intro that leads into a romantic
surprise reveal, complete with a photo gallery, a personal letter, floating
hearts, confetti, and optional background music.

## How it works

1. **Fun intro** — a silly fake "loading" sequence with joke lines, then a
   button that dodges your cursor a few times before you can click it.
2. **Romantic reveal** — clicking the button triggers a confetti burst and
   transitions into the romantic section: a big "Happy Birthday, Tanzil"
   hero, a photo gallery, a personal letter, and floating hearts in the
   background.

## Customize it

- **The letter**: open `index.html` and edit the text inside
  `<div class="letter-card">` (search for `EDIT THIS LETTER`). Make it yours!
- **Photos**: drop your own photos into the `assets` folder, named exactly
  `photo1.jpg` through `photo6.jpg`. Any photo you don't add will just show a
  cute placeholder — add fewer or more by editing the `.gallery-grid` in
  `index.html`.
- **Music**: add an mp3 file to `assets/song.mp3` and it'll be available via
  the 🎵 button in the bottom-right corner once the romantic section loads
  (browsers block autoplay with sound, so it only plays after the button is
  clicked or tapped).
- **Colors/fonts**: tweak the CSS variables at the top of `style.css`
  (`--fun-1`, `--fun-2`, `--romantic-accent`, etc).
- **Jokes**: edit the `loadingLines` array at the top of `script.js`.

## View it locally

Just open `index.html` in a browser — no build step needed.

## Deploy it (so you can send her a link)

Easiest option is **GitHub Pages**:

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Go to the repo's **Settings → Pages**.
3. Under "Build and deployment", set Source to "Deploy from a branch", pick
   the branch this code is on, and folder `/ (root)`.
4. Save — GitHub will give you a URL like
   `https://<username>.github.io/<repo>/` within a minute or two.

Alternatively, drag the folder into [Netlify Drop](https://app.netlify.com/drop)
for an instant link.
