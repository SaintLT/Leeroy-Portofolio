# Leeroy Mwangi – Portfolio

Personal portfolio of **Leeroy Mwangi**, a Computer Science student and software developer working across software engineering, networking, Linux and cybersecurity.

**Live site:** https://saintlt.github.io/Leeroy-Portofolio/

## Features

- **Live 3D hero:** a glowing wireframe scene built with three.js that follows the cursor and reacts to scroll. If WebGL is unavailable, animated CSS rings take its place.
- **Dark and light mode:** a toggle in the nav bar that remembers your choice.
- **Scroll animations:** sections pop up as they enter the screen, and a back-to-top button appears after scrolling.
- **CV preview:** view the CV in a pop-up before downloading it.
- **3D tilt cards** for skills and projects, plus a cursor glow and a lightning loading screen.
- **Fully responsive:** a compact dropdown menu on phones and a layout that fits any screen width.
- **Accessible:** keyboard focus styles, labelled icon buttons, and animations that switch off for visitors who prefer reduced motion.

## Sections

Home · About · Skills · Projects · Experience · Contact

## Built with

- HTML, CSS and vanilla JavaScript (no framework, no build step)
- [three.js](https://threejs.org/) r128 for the 3D scene
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) via Google Fonts
- Inline SVG icons

## Project structure

```
Leeroy-Portofolio/
├── index.html                  # the whole site: HTML, CSS and JS in one annotated file
├── images/
│   └── profile1.jpg            # profile photo shown in the About section
└── assets/
    └── Leeroy_Mwangi_CV.pdf    # CV used by the View CV and Download CV buttons
```

`index.html` is commented throughout, so it doubles as a learning resource.

## Run locally

No installation is needed. Either open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. An internet connection is needed for the font and for three.js, which load from CDNs.

## Customize

| What | Where |
| --- | --- |
| Colours | CSS variables at the top of the `<style>` block (`:root`) |
| Text and projects | Inside each `<section>` in `index.html` |
| Skills | The `SK` array in the script |
| Profile photo | Replace `images/profile1.jpg` |
| CV | Replace `assets/Leeroy_Mwangi_CV.pdf` |

## Deployment

The site is hosted with **GitHub Pages**. Push changes to the main branch and the site updates within a minute or two.

## Troubleshooting

- **No 3D shape, only rings:** the browser cannot start WebGL. Turn on hardware (graphics) acceleration in the browser settings and restart it.
- **Photo missing:** check that the file is named exactly `images/profile1.jpg`.
- **CV does not preview in the pop-up:** some mobile browsers cannot show PDFs inline. Use the "Open in new tab" button instead.

## Contact

- Email: leeroymwangi92@gmail.com
- GitHub: [@SaintLT](https://github.com/SaintLT)
- LinkedIn: [Leeroy Mwangi](https://www.linkedin.com/in/leeroy-mwangi-39836832a/)
