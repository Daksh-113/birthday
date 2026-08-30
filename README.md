# Happy Birthday, Tanzil 🎉💗

A little birthday website: a funny, playful intro that leads into a romantic
surprise reveal, told as a full-screen, swipe-through story (like an Apple
product page) — one photo per screen from her youngest photo to today, ending
with a photo of the two of you together, then a personal letter. Floating
hearts, confetti, and optional background music throughout.

## How it works

1. **Password gate** — the very first thing anyone sees is a lock screen
   asking for a 4-digit code (currently `0509`). This is **not real
   security** — it's a plain client-side check in `script.js`
   (`GATE_PASSWORD`), viewable by anyone who looks at the page's source. It
   just keeps the site from being wide open if the link ever gets forwarded
   or shared somewhere you didn't intend. Once unlocked on a device, it's
   remembered (via `localStorage`) so it won't ask again on that device.
2. **Fun intro** — a silly fake "loading" sequence with joke lines, then a
   button that dodges your cursor a few times before you can click it.
3. **Romantic reveal** — clicking the button triggers a confetti burst and
   transitions into a full-screen scrolling story: hero page ("Happy
   Birthday, Tanzil"), then one photo per screen (oldest to newest), an "and
   then it was us" page, and finally the letter. Each page snaps into place
   as you scroll/swipe, like a native mobile story.

## Customize it

- **The letter**: open `index.html` and edit the text inside
  `<div class="letter-card">` (search for `EDIT THIS LETTER`). Make it yours!
- **Solo photos**: each `<section class="snap-section photo-section">` block
  in `index.html` is one full-screen page. They're currently wired to
  `assets/photo0.jpg` – `photo8.jpg` in age order (youngest first, ending on
  a recent photo) with a caption underneath each `<img>`. To add more, copy a
  block, point it at a new file in `assets/`, and write your own caption —
  just keep the blocks in chronological order.
- **"Us together" photos**: the page right before the letter is the
  `us-section` block, pointed at `assets/us1.jpg`. To add more couple
  photos, copy that block underneath it, naming new files `us2.jpg`,
  `us3.jpg`, etc. Any block whose image file is missing just shows a "Add a
  photo here" placeholder, so it's safe to leave extra ones in for later.
- **Music**: add an mp3 file to `assets/song.mp3` and it'll be available via
  the 🎵 button in the bottom-right corner once the romantic section loads
  (browsers block autoplay with sound, so it only plays after the button is
  clicked or tapped).
- **Colors/fonts**: tweak the CSS variables at the top of `style.css`
  (`--fun-1`, `--fun-2`, `--romantic-accent`, etc).
- **Jokes**: edit the `loadingLines` array at the top of `script.js`.
- **Password**: change `GATE_PASSWORD` near the top of `script.js`. If you
  change it after she's already unlocked the site once on her device, she
  won't be asked again there (it's remembered) — but a fresh device or
  browser will need the new one.

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
