# Palette Colori — Design System E-commerce

Documentazione dei colori usati nel sito, in modalità **chiara** e **scura**, organizzata per token e per componente. I valori sorgente sono in formato `oklch()` (definiti in `app/globals.css`); accanto è riportato l'equivalente HEX approssimato per riferimento pratico.

---

## 1. Token base (light / dark)

| Token | Uso | Light (HEX) | Light (OKLCH) | Dark (HEX) | Dark (OKLCH) |
|---|---|---|---|---|---|
| `background` | Sfondo pagina | `#F6F4F0` | `oklch(0.968 0.006 83)` | `#151210` | `oklch(0.185 0.006 66)` |
| `foreground` | Testo principale | `#211D1A` | `oklch(0.235 0.008 63)` | `#EDEBE7` | `oklch(0.94 0.006 84)` |
| `card` | Sfondo card | `#FDFCF9` | `oklch(0.99 0.004 85)` | `#1E1B18` | `oklch(0.225 0.007 66)` |
| `card-foreground` | Testo su card | `#211D1A` | `oklch(0.235 0.008 63)` | `#EDEBE7` | `oklch(0.94 0.006 84)` |
| `popover` | Sfondo popover/menu | `#FDFCF9` | `oklch(0.99 0.004 85)` | `#1E1B18` | `oklch(0.225 0.007 66)` |
| `popover-foreground` | Testo popover | `#211D1A` | `oklch(0.235 0.008 63)` | `#EDEBE7` | `oklch(0.94 0.006 84)` |
| `primary` | Colore primario (bottoni scuri, testo forte) | `#23201D` | `oklch(0.245 0.008 63)` | `#EDEBE7` | `oklch(0.94 0.006 84)` |
| `primary-foreground` | Testo su primary | `#FAF8F4` | `oklch(0.98 0.006 85)` | `#1E1B18` | `oklch(0.225 0.007 66)` |
| `secondary` | Sfondo secondario (badge, pill) | `#EAE7E2` | `oklch(0.93 0.008 82)` | `#2C2825` | `oklch(0.28 0.008 66)` |
| `secondary-foreground` | Testo su secondary | `#312D2A` | `oklch(0.3 0.008 63)` | `#EDEBE7` | `oklch(0.94 0.006 84)` |
| `muted` | Sfondi tenui, skeleton | `#ECE9E4` | `oklch(0.935 0.007 82)` | `#2C2825` | `oklch(0.28 0.008 66)` |
| `muted-foreground` | Testo secondario/descrittivo | `#6E6862` | `oklch(0.52 0.012 66)` | `#A8A49E` | `oklch(0.72 0.01 76)` |
| `accent` | Colore accento (CTA, link attivi) | `#C47048` | `oklch(0.63 0.12 45)` | `#D47F56` | `oklch(0.68 0.12 46)` |
| `accent-foreground` | Testo su accent | `#FDFCF8` | `oklch(0.99 0.005 85)` | `#15110D` | `oklch(0.18 0.01 66)` |
| `brand` | Colore brand (uguale ad accent) | `#C47048` | `oklch(0.63 0.12 45)` | `#D47F56` | `oklch(0.68 0.12 46)` |
| `brand-foreground` | Testo su brand | `#FDFCF8` | `oklch(0.99 0.005 85)` | `#15110D` | `oklch(0.18 0.01 66)` |
| `border` | Bordi generici | `#DDDAD5` | `oklch(0.89 0.008 80)` | `rgba(255,255,255,.12)` | `oklch(1 0 0 / 12%)` |
| `input` | Bordi campi input | `#DDDAD5` | `oklch(0.89 0.008 80)` | `rgba(255,255,255,.15)` | `oklch(1 0 0 / 15%)` |
| `ring` | Focus ring | `#C47048` | `oklch(0.63 0.12 45)` | `#D47F56` | `oklch(0.68 0.12 46)` |

## 2. Colori di stato

| Token | Uso | Light (HEX) | Dark (HEX) |
|---|---|---|---|
| `destructive` | Errori, azioni distruttive | `#CC2827` | `#E8594F` |
| `destructive-foreground` | Testo su destructive | `#FDFCF8` | `#FAF8F5` |
| `success` | Conferme (es. "aggiunto al carrello") | `#4A925C` | `#63AB74` |
| `success-foreground` | Testo su success | `#FDFCF8` | `#15110D` |
| `warning` | Avvisi | `#DEA143` | `#EBB353` |
| `warning-foreground` | Testo su warning | `#272017` | `#201910` |
| `info` | Informazioni | `#3F8AAC` | `#58A3C5` |
| `info-foreground` | Testo su info | `#FDFCF8` | `#15110D` |
| `sale` | Badge sconto/saldi | `#D33B36` | `#F36358` |

## 3. Sidebar (menu laterale)

| Token | Light (HEX) | Dark (HEX) |
|---|---|---|
| `sidebar` | `#FDFCF9` | `#1E1B18` |
| `sidebar-foreground` | `#211D1A` | `#EDEBE7` |
| `sidebar-primary` | `#23201D` | `#D47F56` |
| `sidebar-primary-foreground` | `#FAF8F4` | `#15110D` |
| `sidebar-accent` | `#EAE7E2` | `#2C2825` |
| `sidebar-accent-foreground` | `#312D2A` | `#EDEBE7` |
| `sidebar-border` | `#DDDAD5` | `rgba(255,255,255,.12)` |
| `sidebar-ring` | `#C47048` | `#D47F56` |

---

## 4. Colori per componente

### 🔝 Navbar (`site-header.tsx`)
| Elemento | Token usato | Light | Dark |
|---|---|---|---|
| Sfondo header | `background` / `background/85` (con blur) | `#F6F4F0` | `#151210` |
| Testo/link | `foreground`, `foreground/80` | `#211D1A` | `#EDEBE7` |
| Link attivo/hover | `accent` | `#C47048` | `#D47F56` |
| Badge contatore carrello | `bg-accent` + `text-accent-foreground` | `#C47048` su `#FDFCF8` | `#D47F56` su `#15110D` |
| Icona/pallino saldi | `sale` | `#D33B36` | `#F36358` |
| Bordo inferiore | `border` | `#DDDAD5` | `rgba(255,255,255,.12)` |
| Overlay menu mobile | `foreground/40` | `#211D1A` 40% | `#EDEBE7` 40% |
| Testo su sfondo scuro overlay | `background` (invertito) | `#F6F4F0` | `#151210` |
| Sfondo pill secondario | `secondary` | `#EAE7E2` | `#2C2825` |

### 🦶 Footer (`site-footer.tsx`)
| Elemento | Token usato | Light | Dark |
|---|---|---|---|
| Sfondo footer | `background` | `#F6F4F0` | `#151210` |
| Bordo superiore | `border` (`border-t`) | `#DDDAD5` | `rgba(255,255,255,.12)` |
| Titolo/logo | `foreground` | `#211D1A` | `#EDEBE7` |
| Link | `foreground/80` | `#211D1A` 80% | `#EDEBE7` 80% |
| Link accento / hover | `accent` | `#C47048` | `#D47F56` |
| Bordo elemento accento (es. newsletter) | `accent` (`border-accent`) | `#C47048` | `#D47F56` |
| Testo copyright/secondario | `muted-foreground` | `#6E6862` | `#A8A49E` |

### 🛍️ Product Card (`product-card.tsx`)
| Elemento | Token usato | Light | Dark |
|---|---|---|---|
| Sfondo card | `background` / `background/80` | `#F6F4F0` | `#151210` |
| Bordo card | `border` | `#DDDAD5` | `rgba(255,255,255,.12)` |
| Testo prodotto | `foreground` | `#211D1A` | `#EDEBE7` |
| Prezzo/descrizione secondaria | `muted-foreground` | `#6E6862` | `#A8A49E` |
| Badge "Nuovo"/overlay | `bg-foreground` + `text-background` | `#211D1A` su `#F6F4F0` | `#EDEBE7` su `#151210` |
| Badge sconto | `sale` | `#D33B36` | `#F36358` |
| Badge informativo (es. spedizione) | `info` + `info-foreground` | `#3F8AAC` su `#FDFCF8` | `#58A3C5` su `#15110D` |
| Pulsante quick-add | `accent` + `accent-foreground` | `#C47048` su `#FDFCF8` | `#D47F56` su `#15110D` |
| Sfondo pill/etichetta | `secondary` | `#EAE7E2` | `#2C2825` |

### 🛒 Cart Drawer (`cart-drawer.tsx`)
| Elemento | Token usato | Light | Dark |
|---|---|---|---|
| Sfondo drawer | `popover` | `#FDFCF9` | `#1E1B18` |
| Testo drawer | `popover-foreground` | `#211D1A` | `#EDEBE7` |
| Overlay sfondo pagina | `foreground/40` | `#211D1A` 40% | `#EDEBE7` 40% |
| Bordo separatori | `border` | `#DDDAD5` | `rgba(255,255,255,.12)` |
| Sfondo riepilogo/riga prodotto | `secondary` | `#EAE7E2` | `#2C2825` |
| Testo prezzi/quantità | `muted-foreground` | `#6E6862` | `#A8A49E` |
| Messaggio saldo/sconto | `sale` | `#D33B36` | `#F36358` |
| Messaggio di conferma (es. checkout ok) | `success` + `success-foreground` | `#4A925C` su `#FDFCF8` | `#63AB74` su `#15110D` |
| Sfondo pagina (fallback) | `background` | `#F6F4F0` | `#151210` |

### 🔘 Bottoni (`ui/button.tsx`)
| Variante | Token sfondo | Token testo | Light | Dark |
|---|---|---|---|---|
| Primary | `primary` | `primary-foreground` | `#23201D` su `#FAF8F4` | `#EDEBE7` su `#1E1B18` |
| Primary hover | `primary/80` | `primary-foreground` | 80% opacità | 80% opacità |
| Secondary | `secondary` | `secondary-foreground` | `#EAE7E2` su `#312D2A` | `#2C2825` su `#EDEBE7` |
| Secondary hover | `secondary/80` | `secondary-foreground` | 80% opacità | 80% opacità |
| Ghost/outline | trasparente | `foreground` | — su `#211D1A` | — su `#EDEBE7` |
| Bordo outline | `border` / `input` | — | `#DDDAD5` | `rgba(255,255,255,.15)` |
| Destructive | `destructive/10-30` | `destructive` | `#CC2827` (opacità variabile) | `#E8594F` (opacità variabile) |
| Muted (disabled-like) | `muted` / `muted/50` | — | `#ECE9E4` | `#2C2825` |
| Focus ring | `ring/50` | — | `#C47048` 50% | `#D47F56` 50% |

---

## 5. Font associati (per completezza)
- **Titoli (`h1`–`h4`)**: `font-heading` → Fraunces (serif)
- **Testo corpo**: `font-sans` → Inter
- **Codice/mono**: `font-mono` → Geist Mono

---

## 6. Note tecniche
- Tutti i colori sono definiti come variabili CSS in formato **OKLCH** in `app/globals.css`, sotto i selettori `:root` (light) e `.dark` (dark mode).
- Il tema scuro si attiva applicando la classe `.dark` all'elemento root (gestito da `theme-toggle.tsx`).
- I colori `border` e `input` in dark mode usano bianco semi-trasparente (`oklch(1 0 0 / 12-15%)`) invece di un colore pieno, per adattarsi meglio a sfondi diversi.
- `accent` e `brand` condividono sempre lo stesso valore: è il colore terracotta/arancio bruciato distintivo del brand.
- Il raggio dei bordi (`--radius`) è unico per entrambi i temi: `0.5rem`, con varianti calcolate (`sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`).
