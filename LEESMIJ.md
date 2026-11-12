# Gil Vanroy – portfolio website (zelfstandige versie)

Dit is een volledige kopie van https://gilvanroyvideo.myportfolio.com, omgezet naar
gewone HTML-bestanden. De site werkt **zonder Adobe-account**: alle foto's, de
achtergrondvideo, de Adobe-video's en het lettertype staan in deze map.

## Wat zit erin

| Bestand / map            | Inhoud                                              |
|--------------------------|-----------------------------------------------------|
| `index.html`             | Homepage met achtergrondvideo                       |
| `commercieel-corporate.html`, `creatief-cultuur.html` | Overzichtspagina's met projecten |
| `fotografie.html`        | Fotografie (klik op een foto voor groot beeld)      |
| `contact.html`           | Contact (formulier opent het mailprogramma)          |
| `aquafin.html`, `elia.html`, … | De projectpagina's                            |
| `assets/style.css`       | De volledige vormgeving (kleuren, lettertype, layout) |
| `assets/site.js`         | Mobiel menu, foto-lightbox, contactformulier        |
| `assets/img/`            | Alle foto's en coverbeelden                         |
| `assets/video/`          | 14 video's die bij Adobe stonden (1080p) + posters  |
| `assets/fonts/`          | Bebas Neue (gratis lettertype, vervangt het Adobe-font) |

De 45 YouTube-video's blijven gewoon via YouTube afgespeeld; die zijn niet van Adobe afhankelijk.

## Lokaal bekijken

Dubbelklik op `index.html`. (YouTube-video's spelen soms pas af als de site online staat.)

## Online zetten (gratis)

De map is ±670 MB, vooral door de video's (grootste bestand ±70 MB).

**Optie A – GitHub Pages** (gratis, bestanden tot 100 MB, site tot 1 GB)
1. Maak een account op github.com en een nieuwe *repository*, bv. `portfolio`.
2. Upload de inhoud van deze map (met GitHub Desktop gaat dat het makkelijkst bij veel/grote bestanden).
3. Ga naar *Settings → Pages* en kies de `main`-branch als bron.
4. De site staat dan op `https://<gebruikersnaam>.github.io/portfolio/`.

**Optie B – Netlify** (netlify.com): sleep de map naar *Netlify Drop*. Snel, maar controleer
of de upload van de grote video's lukt.

**Tip:** wil je de site licht en snel houden, upload dan de 14 video's uit `assets/video/`
ook naar YouTube of Vimeo (zoals de andere video's al zijn) en vervang in de HTML het
`<video>`-blok door een YouTube-embed. Dan is de site nog maar ±55 MB en past ze overal.

**Eigen domeinnaam** (bv. gilvanroy.be): koop die bij een registrar (Combell, one.com,
Cloudflare…) en koppel ze in de instellingen van GitHub Pages of Netlify ("custom domain").

## Iets aanpassen

Alle pagina's zijn gewone HTML; open ze in een teksteditor (bv. VS Code).

- **Tekst wijzigen:** zoek de tekst in het juiste `.html`-bestand en pas ze aan.
- **Nieuw project toevoegen:**
  1. Kopieer een bestaande projectpagina, bv. `aquafin.html` → `nieuw-project.html`.
  2. Pas titel, beschrijving en tekst aan.
  3. Vervang de YouTube-code in `https://www.youtube.com/embed/XXXXXXXX` door die van je video.
  4. Zet een coverbeeld in `assets/img/` en voeg een blok `<a class="cover" …>` toe op
     `commercieel-corporate.html` of `creatief-cultuur.html` (kopieer een bestaand blok).
- **Kleuren / lettergrootte:** bovenaan `assets/style.css` staan de belangrijkste instellingen.
- **Contact:** het formulier opent het mailprogramma van de bezoeker met een bericht naar
  gil.vanroy@hotmail.com. Wil je een echt verzendformulier, dan kan dat gratis via
  bv. Formspree of Netlify Forms.
