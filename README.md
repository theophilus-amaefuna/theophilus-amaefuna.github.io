# PhD Personal Academic Website

A clean, fast, single-page academic homepage template driven by a simple JSON-style data file (`data.js`). You never have to edit HTML tags to update your bio, papers, or talks!

## Folder Structure

- `data.js` — **The only file you need to edit!** Contains your bio, social links, news, publications, talks, projects, and teaching in a clean JSON-style format.
- `index.html` — Automatically reads `data.js` and builds the page layout (including conditional images and BibTeX toggles).
- `style.css` — Styling, colors, and responsive mobile layout.
- `assets/` — Put your headshot (e.g. `profile.jpg`), paper/talk figures, and `CV.pdf` inside this folder.

## How to Customize & Add Entries

1. Open `data.js` in any text editor.
2. Update your profile info at the top (`name`, `role`, `department`, `university`, `aboutParagraphs`).
3. **To add a new Paper or Talk:** Just add a new `{ ... },` item to the `publications` or `talks` list in `data.js`.
4. **Conditional Images:**
   - Want an image on a paper or talk? Set `image: "assets/my-figure.png"`.
   - Don't want an image on that entry? Set `image: ""` (empty quotes). The layout automatically adjusts to full width!

## How to Publish for Free on GitHub Pages (Takes 3 Minutes)

1. Go to [github.com/new](https://github.com/new) and create a **Public** repository named:
   `<your-github-username>.github.io`
2. Upload `index.html`, `data.js`, `style.css`, and the `assets/` folder to that repository.
3. In your repository, go to **Settings → Pages**, and under **Build and deployment**, make sure **Deploy from a branch** (`main`) is selected.
4. Wait ~60 seconds and visit `https://<your-github-username>.github.io`!
