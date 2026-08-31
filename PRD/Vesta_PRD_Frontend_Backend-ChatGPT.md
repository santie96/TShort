# PRD --- Vesta

## Product Requirements Document --- Frontend & Backend

**Versione:** 2.0\
**Data:** 28 agosto 2026\
**Progetto:** Vesta --- E-commerce di abbigliamento\
**Lingua applicazione:** Italiano\
**Stato documento:** Definitivo per l'MVP\
**Destinatari:** sviluppatore frontend, sviluppatore backend, database
developer, QA e futuri collaboratori

> Questo documento è il contratto funzionale e tecnico di riferimento
> per l'evoluzione di Vesta. È costruito sulla codebase attuale
> analizzata, sui requisiti iniziali e sulle decisioni concordate
> durante la fase di intervista. Le decisioni già confermate non devono
> essere reinterpretate durante l'implementazione senza aggiornare
> questo documento.

------------------------------------------------------------------------

# 1. Executive Summary

Vesta è attualmente un e-commerce frontend realizzato con React 19, Vite
8, JavaScript, React Router DOM v7 e Tailwind CSS v4. Il progetto
utilizza JSON locali per i prodotti e per le recensioni e dispone già di
un carrello globale basato su `CartContext` e `localStorage`.

L'obiettivo dell'MVP è trasformare Vesta in un e-commerce applicativo
completo mantenendo l'architettura frontend esistente e introducendo un
backend Python/FastAPI con database persistente.

Il backend sarà la **fonte autorevole** per autenticazione, utenti,
prodotti, varianti, prezzi, sconti, stock, carrello persistente degli
utenti autenticati, ordini, pagamenti, spedizioni, consensi e business
logic.

Il frontend continuerà a essere responsabile principalmente di UI, UX,
navigazione, stato visuale, rendering, validazione preliminare e
comunicazione con le API.

Il sistema comprenderà:

-   registrazione e login tramite email/password;
-   autenticazione con access token + refresh token;
-   remember me;
-   recupero password;
-   catalogo servito dal backend;
-   filtri, ricerca, ordinamento e paginazione server-side;
-   varianti con stock per combinazione taglia/colore;
-   carrello locale per utenti non autenticati;
-   carrello server-side per utenti autenticati;
-   merge additivo del carrello al login;
-   checkout riservato agli utenti registrati;
-   indirizzo di spedizione e fatturazione;
-   pagamento Stripe tramite pagina hosted;
-   pagamento in contanti alla consegna;
-   webhook Stripe;
-   ordini e storico ordini;
-   stato spedizione modificabile manualmente dall'amministratore;
-   corriere unico;
-   tracking;
-   email transazionali tramite Gmail SMTP;
-   raccolta del consenso commerciale;
-   ruolo amministratore;
-   API amministrative per prodotti, varianti, ordini e spedizioni;
-   statistiche e segmentazione predisposte ma non trasformate in una
    dashboard avanzata nell'MVP.

Il progetto rimane volutamente proporzionato alle sue dimensioni: niente
microservizi, niente Redux/Zustand, niente TypeScript e nessuna nuova
libreria non necessaria.

------------------------------------------------------------------------

# 2. Fonti e base documentale

Il PRD deriva da quattro categorie di informazioni:

1.  requisiti iniziali del progetto;
2.  prompt di analisi della codebase;
3.  report preliminare della codebase Vesta;
4.  decisioni definitive raccolte durante l'intervista con il team.

Il report preliminare descrive Vesta come un frontend statico con
carrello `localStorage`, senza backend, autenticazione, checkout o
chiamate HTTP, e identifica le aree già implementate, parziali e
mancanti.

La struttura prevista e il principio di compatibilità con la codebase
richiedono di riutilizzare ed estendere i componenti, Context e Logic-JS
esistenti invece di introdurre sistemi paralleli.

------------------------------------------------------------------------

# 3. Codebase Audit

## 3.1 Stato attuale

La codebase attuale è principalmente una vetrina e-commerce frontend con
carrello.

Non sono presenti:

-   backend;
-   API reali;
-   autenticazione;
-   gestione utenti;
-   checkout;
-   pagamento;
-   ordini persistenti;
-   spedizioni;
-   email transazionali;
-   database;
-   persistenza server-side.

I dati sono attualmente caricati da JSON locali e il carrello è
persistito in `localStorage`.

## 3.2 Funzionalità

  -----------------------------------------------------------------------
  Funzionalità            Stato attuale           Evoluzione MVP
  ----------------------- ----------------------- -----------------------
  Homepage                IMPLEMENTATA            Collegare eventualmente
                                                  i dati dinamici al
                                                  backend senza alterare
                                                  inutilmente la UI

  Catalogo                IMPLEMENTATA            GET backend + filtri +
                          client-side             ricerca + paginazione

  Uomo/Donna/Bambini      PARZIALMENTE            Filtri server-side
                          IMPLEMENTATA            

  Pagina prodotto         IMPLEMENTATA            Dettaglio prodotto
                          client-side             backend + varianti
                                                  reali

  Filtri                  NON IMPLEMENTATA        Server-side

  Ricerca                 NON IMPLEMENTATA        Server-side

  Paginazione             NON IMPLEMENTATA        Server-side

  Ordinamento dinamico    NON IMPLEMENTATA        Server-side

  Carrello                IMPLEMENTATA localmente Locale guest +
                                                  persistente server-side
                                                  autenticati

  Gestione quantità       IMPLEMENTATA            Riutilizzare la logica
                                                  UI, aggiungendo
                                                  sincronizzazione
                                                  backend

  Prezzo/sconto           IMPLEMENTATA            Backend autorevole;
                                                  correggere gestione
                                                  monetaria

  Sidebar carrello        PARZIALMENTE            Collegare a
                          IMPLEMENTATA            `CartContext`

  Wishlist                NON IMPLEMENTATA        Future feature

  Profilo                 NON IMPLEMENTATA        Nuova area autenticata

  Autenticazione          NON IMPLEMENTATA        MVP

  Checkout                NON IMPLEMENTATA        MVP

  Pagamento               NON IMPLEMENTATA        MVP

  Ordini                  NON IMPLEMENTATA        MVP

  Spedizioni              NON IMPLEMENTATA        MVP

  Recensioni prodotto     IMPLEMENTATA            Nessuna scrittura
                          staticamente            recensioni nell'MVP

  Pagine legali           IMPLEMENTATA            Non modificare i testi
                                                  salvo richiesta

  Responsive              IMPLEMENTATA            Mantenere mobile-first

  Loading/success/error   PARZIALMENTE            Estendere alle chiamate
                          IMPLEMENTATA            API
  -----------------------------------------------------------------------

Il report rileva inoltre che `CartContext.jsx` è l'unico Context globale
esistente e che `cartService.js`, `prezzoService.js` e
`prodottiService.js` costituiscono punti naturali di estensione.

------------------------------------------------------------------------

# 4. Architettura frontend attuale

La struttura da mantenere è:

``` text
src/
├── App.jsx
├── component/
│   ├── layout/
│   ├── pages/
│   ├── ui/
│   └── utilities/
│       ├── context/
│       ├── Custom-Hook/
│       └── function-utilities/
├── data/
└── img/
```

Il progetto utilizza `Layout` + `Outlet`, routing piatto e convenzioni
React coerenti con il progetto.

### Regola di modifica

Ordine obbligatorio:

``` text
RIUTILIZZARE
    ↓
ESTENDERE
    ↓
MODIFICARE
    ↓
CREARE SOLO SE NECESSARIO
```

Non introdurre:

-   `hooks/`;
-   `services/`;
-   `store/`;
-   `lib/`;
-   Redux;
-   Zustand;
-   TypeScript;
-   librerie UI;
-   framework CSS alternativi;
-   librerie di animazione.

Le funzioni pure e la logica tecnica devono continuare a vivere nella
struttura `utilities/` già adottata.

------------------------------------------------------------------------

# 5. Stack

## 5.1 Frontend

-   React 19
-   Vite 8
-   JavaScript
-   React Router DOM v7
-   Tailwind CSS v4
-   react-icons
-   `@vis.gl/react-google-maps`
-   JSON locali esclusivamente per contenuti statici/fallback e
    seed/migrazione

## 5.2 Backend

-   Python
-   FastAPI
-   SQLAlchemy
-   Alembic come scelta tecnica consigliata
-   PostgreSQL in produzione
-   SQLite in sviluppo

## 5.3 Servizi esterni

-   Supabase Cloud per PostgreSQL
-   Stripe per pagamenti online
-   Gmail SMTP per email transazionali
-   Vercel per frontend
-   hosting esterno già utilizzato per immagini

La decisione relativa all'hosting indica FastAPI Cloud/Supabase Cloud;
tecnicamente il runtime FastAPI richiede un ambiente Python distinto dal
database PostgreSQL. Pertanto Supabase viene considerato il provider del
database e il runtime FastAPI deve essere ospitato su un ambiente
compatibile con Python, mantenendo il vincolo di costo gratuito
dell'MVP.

------------------------------------------------------------------------

# 6. Ambienti

Sono previsti soltanto:

-   development;
-   production.

Non è previsto un ambiente staging nell'MVP.

## 6.1 Development

-   frontend locale;
-   FastAPI locale;
-   SQLite;
-   Stripe test mode;
-   credenziali SMTP di sviluppo;
-   dati seed.

## 6.2 Production

-   frontend Vercel;
-   FastAPI su hosting cloud compatibile con Python;
-   PostgreSQL Supabase;
-   Stripe;
-   Gmail SMTP;
-   variabili ambiente protette.

------------------------------------------------------------------------

# 7. Separazione delle responsabilità

## 7.1 Frontend

Responsabile di:

-   rendering;
-   UI;
-   UX;
-   navigazione;
-   stato UI;
-   form;
-   validazione preliminare;
-   gestione loading/success/error;
-   invio richieste HTTP;
-   gestione risposta;
-   protezione visuale delle route;
-   rendering del catalogo;
-   gestione del carrello locale;
-   sincronizzazione del carrello autenticato;
-   visualizzazione prezzi restituiti dal backend.

## 7.2 Backend

Responsabile di:

-   autenticazione;
-   autorizzazione;
-   utenti;
-   ruoli;
-   prodotti;
-   categorie;
-   varianti;
-   prezzi;
-   sconti;
-   stock;
-   carrello persistente;
-   checkout;
-   ordini;
-   pagamenti;
-   webhook;
-   spedizioni;
-   tracking;
-   email;
-   consensi;
-   business logic;
-   validazione definitiva;
-   sicurezza;
-   database.

Il client non è una fonte affidabile per prezzi, stock, totali,
autorizzazioni, pagamento o stato ordine.

------------------------------------------------------------------------

# 8. Source of Truth

  -----------------------------------------------------------------------
  Dato                                Source of Truth
  ----------------------------------- -----------------------------------
  Nome prodotto                       Backend

  Descrizione                         Backend

  Categoria                           Backend

  Genere                              Backend

  Prezzo                              Backend

  Sconto                              Backend

  Prezzo finale                       Backend

  Stock                               Backend

  Variante                            Backend

  SKU                                 Backend

  Carrello guest                      Frontend/localStorage

  Carrello autenticato                Backend

  Stato utente                        Backend

  Auth state corrente                 Frontend derivato dal backend

  Access token                        Frontend/runtime secondo strategia
                                      auth

  Refresh token                       Backend/browser storage sicuro
                                      secondo implementazione

  Totale ordine                       Backend

  Stato ordine                        Backend

  Stato pagamento                     Payment provider + Backend

  Stato spedizione                    Backend

  Tracking                            Backend

  Email inviate                       Backend

  Consenso                            Backend

  Rendering                           Frontend
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# 9. Obiettivi MVP

1.  trasformare il catalogo statico in catalogo backend;
2.  introdurre account utente;
3.  introdurre autenticazione;
4.  mantenere il carrello guest;
5.  introdurre carrello persistente autenticato;
6.  introdurre checkout;
7.  introdurre pagamenti Stripe;
8.  introdurre pagamento alla consegna;
9.  creare ordini persistenti;
10. introdurre storico ordini;
11. introdurre gestione spedizioni;
12. introdurre email transazionali;
13. introdurre gestione prodotti/varianti lato admin;
14. mantenere raccolta consenso commerciale;
15. preparare il sistema a future statistiche e segmentazione.

------------------------------------------------------------------------

# 10. Non-scope MVP

Non fanno parte dell'MVP:

-   wishlist;
-   recensioni scrivibili dagli utenti;
-   gift card;
-   abbonamenti;
-   loyalty;
-   chat assistenza;
-   multi-store;
-   multi-valuta;
-   multi-lingua;
-   marketing automation avanzata;
-   campagne email di segmento;
-   dashboard analytics avanzata;
-   gestione utenti amministrativa avanzata;
-   interfaccia avanzata per rimborsi;
-   guest checkout;
-   automazione temporale delle spedizioni;
-   integrazione reale con API di un corriere.

Le statistiche cliente e la segmentazione restano predisposte a livello
dati/logica ma non costituiscono una dashboard amministrativa avanzata
nell'MVP.

------------------------------------------------------------------------

# 11. Decision Log

  \#   Area                   Decisione
  ---- ---------------------- -------------------------------------------------
  1    Backend                Python + FastAPI
  2    DB produzione          PostgreSQL/Supabase
  3    DB sviluppo            SQLite
  4    ORM                    SQLAlchemy
  5    Migrazioni             Alembic consigliato
  6    Frontend hosting       Vercel
  7    Ambienti               Dev + Prod
  8    Auth                   Access + Refresh token
  9    Access token           1 ora
  10   Refresh token          30 giorni
  11   Remember me            Incluso
  12   Verifica email         Non prevista
  13   Login                  Email + password
  14   Catalogo               Backend
  15   Genere/categoria       Separati
  16   Varianti               Taglia + colore con stock proprio
  17   Seed prodotti          Script iniziale
  18   Admin prodotti         CRUD protetto
  19   Immagini               Hosting esterno
  20   Carrello guest         Frontend/localStorage
  21   Carrello autenticato   Server-side
  22   Merge carrello         Additivo
  23   Checkout               Solo utenti registrati
  24   Fatturazione           Di default uguale alla spedizione, modificabile
  25   Pagamento              Stripe Checkout hosted
  26   Metodo alternativo     Contanti alla consegna
  27   Stock                  Conferma/riduzione alla conferma pagamento
  28   Spedizione             Aggiornamento manuale admin
  29   Corriere               Uno solo
  30   Email                  Gmail SMTP
  31   Email MVP              Conferma ordine, spedito, consegnato
  32   Recupero password      MVP
  33   Segmentazione          Regole definite, uso futuro
  34   Marketing              Solo raccolta consenso
  35   Budget                 Servizi gratuiti + Stripe test mode
  36   Admin avanzato         Future feature

------------------------------------------------------------------------

# 12. Modello dati attuale

`prodotti.json` contiene 40 prodotti.

La struttura reale rilevata comprende:

``` json
{
  "id": 15,
  "title": "Top blu navy",
  "subtitle": "Top essenziale blu navy",
  "description": "...",
  "price": 29.99,
  "categories": "donna",
  "sale": 0,
  "newArrivals": true,
  "colors": [
    {
      "nome": "Blu navy",
      "hex": "#22304A"
    }
  ],
  "sizes": ["S", "M", "L"],
  "stock": 9,
  "image": "https://i.ibb.co/..."
}
```

I valori di `categories` osservati sono `donna`, `uomo`, `bambina`,
`bambino`. Il campo è quindi semanticamente un genere e non una
categoria.

Il modello backend deve correggere questa ambiguità separando:

``` text
gender
category
subcategory
```

e trasformando colori/taglie da attributi descrittivi in vere varianti.

------------------------------------------------------------------------

# 13. Migrazione prodotti

Il seed iniziale deve:

1.  leggere i 40 prodotti;
2.  trasformare `categories` nell'attributo `gender`;
3.  assegnare `category`;
4.  assegnare `subcategory` quando applicabile;
5.  generare/assegnare SKU;
6.  trasformare colori e taglie in varianti;
7.  trasferire le immagini come URL esterni;
8.  trasferire prezzo;
9.  trasferire sconto;
10. trasferire flag `newArrivals`;
11. inizializzare stock delle varianti.

La categoria e sottocategoria non possono essere inventate
silenziosamente durante l'importazione: devono essere definite tramite
mapping esplicito del seed. Se un prodotto non può essere classificato
con sufficiente certezza, il mapping deve evidenziare il caso anziché
produrre dati semanticamente errati.

------------------------------------------------------------------------

# 14. Modello dominio

Le entità MVP sono:

``` text
User
Address
Product
Category
Subcategory
ProductVariant
Cart
CartItem
Order
OrderItem
Payment
Shipment
Consent
PasswordResetToken
RefreshToken / Session
```

Le entità opzionali/future comprendono:

``` text
Coupon
MarketingPreference
CustomerStatistics
Campaign
Review
```

------------------------------------------------------------------------

# 15. Database Specification

## 15.1 User

Campi concettuali:

-   `id`
-   `nome`
-   `cognome`
-   `email`
-   `password_hash`
-   `genere` opzionale
-   `data_nascita` opzionale
-   `telefono` opzionale
-   `ruolo`
-   `data_registrazione`
-   `ultimo_accesso`
-   `is_active`

Vincoli:

-   email obbligatoria;
-   email normalizzata;
-   email UNIQUE;
-   password mai salvata in chiaro;
-   ruolo con valori controllati.

Ruoli MVP:

``` text
cliente
amministratore
```

## 15.2 Address

Campi:

-   `id`
-   `user_id`
-   `tipo`
-   `nome`
-   `cognome`
-   `via`
-   `numero_civico`
-   `cap`
-   `citta`
-   `provincia`
-   `paese`
-   `telefono`
-   `note_consegna`
-   `is_default`

`tipo`:

``` text
spedizione
fatturazione
```

Un utente può avere più indirizzi.

## 15.3 Category

-   `id`
-   `nome`
-   `slug`
-   `is_active`

## 15.4 Subcategory

-   `id`
-   `category_id`
-   `nome`
-   `slug`
-   `is_active`

## 15.5 Product

-   `id`
-   `title`
-   `subtitle`
-   `description`
-   `category_id`
-   `subcategory_id`
-   `gender`
-   `price_cents`
-   `sale_percent`
-   `new_arrivals`
-   `image_url`
-   `is_active`
-   `created_at`
-   `updated_at`

Gli importi devono essere gestiti come interi in centesimi o tramite un
tipo monetario appropriato. Non replicare nel backend la combinazione di
floating point e `.toFixed()` presente nel frontend.

## 15.6 ProductVariant

-   `id`
-   `product_id`
-   `sku`
-   `size`
-   `color_name`
-   `color_hex`
-   `stock`
-   `is_active`

Vincoli:

-   SKU UNIQUE;
-   `stock >= 0`;
-   combinazione prodotto + taglia + colore coerente;
-   nessuna variante duplicata.

La variante è l'unità di disponibilità.

Esempio:

``` text
T-shirt
├── S / Nero → stock 3
├── M / Nero → stock 0
├── L / Nero → stock 5
├── S / Bianco → stock 4
└── M / Bianco → stock 2
```

## 15.7 Cart

-   `id`
-   `user_id`
-   `created_at`
-   `updated_at`

Una sola cart attiva per utente.

## 15.8 CartItem

-   `id`
-   `cart_id`
-   `variant_id`
-   `quantity`

Vincolo:

``` text
UNIQUE(cart_id, variant_id)
```

## 15.9 Order

Campi minimi:

-   `id`
-   `user_id`
-   `order_number`
-   `status`
-   `payment_status`
-   `payment_method`
-   `subtotal_cents`
-   `shipping_cents`
-   `tax_cents`
-   `discount_cents`
-   `total_cents`
-   snapshot indirizzo spedizione
-   snapshot indirizzo fatturazione
-   `created_at`
-   `updated_at`

L'ordine deve contenere snapshot degli indirizzi e dei dati economici
utilizzati al momento dell'acquisto.

## 15.10 OrderItem

-   `id`
-   `order_id`
-   `product_id`
-   `variant_id`
-   `product_name_snapshot`
-   `sku_snapshot`
-   `size_snapshot`
-   `color_snapshot`
-   `unit_price_cents`
-   `sale_percent_snapshot`
-   `quantity`
-   `line_total_cents`

## 15.11 Payment

-   `id`
-   `order_id`
-   `provider`
-   `provider_payment_id`
-   `provider_session_id`
-   `method`
-   `status`
-   `amount_cents`
-   `currency`
-   `created_at`
-   `updated_at`

## 15.12 Shipment

-   `id`
-   `order_id`
-   `carrier`
-   `tracking_code`
-   `tracking_url`
-   `status`
-   `created_at`
-   `updated_at`

## 15.13 Consent

-   `id`
-   `user_id`
-   `type`
-   `granted`
-   `granted_at`
-   `revoked_at`
-   `source`
-   `privacy_version`

## 15.14 PasswordResetToken

-   `id`
-   `user_id`
-   `token_hash`
-   `expires_at`
-   `used_at`
-   `created_at`

------------------------------------------------------------------------

# 16. Stati

## 16.1 Order status

``` text
in_attesa_pagamento
confermato
in_preparazione
spedito
consegnato
annullato
rimborsato
```

## 16.2 Payment status

``` text
pending
paid
failed
cancelled
refunded
partially_refunded
cod_pending
```

## 16.3 Shipment status

``` text
in_attesa
confermato
spedito
consegnato
```

------------------------------------------------------------------------

# 17. Autenticazione

Vesta utilizza:

-   access token;
-   refresh token.

Durate:

``` text
Access token: 1 ora
Refresh token: 30 giorni
```

L'access token viene utilizzato per le richieste API protette.

### Raccomandazione tecnica

Per un'applicazione web, l'implementazione preferibile è:

``` text
Refresh token → cookie HttpOnly + Secure
Access token → memoria applicativa frontend
```

con CORS esplicito e configurazione cookie appropriata.

Il refresh token deve essere ruotato/revocabile e non deve essere
esposto inutilmente al codice dei componenti React.

------------------------------------------------------------------------

# 18. Remember Me

Il remember me determina la persistenza della sessione oltre la normale
sessione del browser.

## `rememberMe = true`

``` text
Login
↓
Credenziali valide
↓
Access token
↓
Refresh token persistente
↓
Durata massima 30 giorni
↓
Sessione ripristinabile dopo chiusura browser
```

## `rememberMe = false`

``` text
Login
↓
Credenziali valide
↓
Access token
↓
Sessione non persistente oltre la sessione browser
↓
Chiusura browser
↓
Nuovo login richiesto
```

Il backend controlla durata e persistenza.

------------------------------------------------------------------------

# 19. Registrazione

Campi:

-   nome;
-   cognome;
-   email;
-   password;
-   conferma password;
-   consenso commerciale.

La conferma password viene usata solo per la validazione.

Non viene salvata.

## Flusso

``` mermaid
sequenceDiagram
    participant U as Utente
    participant F as Frontend
    participant A as FastAPI
    participant DB as Database

    U->>F: Compila registrazione
    F->>F: Validazione preliminare
    F->>A: POST /api/v1/auth/register
    A->>A: Validazione definitiva
    A->>DB: Verifica email
    DB-->>A: Email disponibile
    A->>DB: Crea User
    A->>DB: Salva Consent
    A->>A: Crea sessione/token
    A-->>F: User + auth
    F->>F: Aggiorna Auth State
    F-->>U: Utente autenticato
```

Non è prevista verifica email nell'MVP.

------------------------------------------------------------------------

# 20. Login

Input:

``` json
{
  "email": "mario@example.com",
  "password": "********",
  "rememberMe": true
}
```

Risultato:

-   autenticazione;
-   access token;
-   refresh/sessione;
-   dati utente essenziali;
-   ruolo.

Messaggio generico consigliato:

> Email o password non valide.

------------------------------------------------------------------------

# 21. Logout

Il logout deve:

1.  invalidare/revocare la sessione o il refresh token lato backend;
2.  rimuovere lo stato autenticato frontend;
3.  eliminare il refresh cookie/sessione;
4.  impedire nuove richieste tramite credenziali revocate.

------------------------------------------------------------------------

# 22. Ripristino sessione

All'avvio:

``` text
App
↓
Auth Context / stato iniziale
↓
Verifica sessione
↓
GET /api/v1/auth/me
↓
200 → user autenticato
401 → tentativo refresh
↓
refresh riuscito → nuovo access token
↓
refresh fallito → logout locale
```

La UI deve avere uno stato iniziale di caricamento per evitare redirect
prematuri.

------------------------------------------------------------------------

# 23. Recupero password

Flusso:

``` text
Utente
↓
POST /auth/forgot-password
↓
Backend genera token temporaneo
↓
Email SMTP
↓
Utente apre link
↓
Frontend invia nuova password
↓
Backend verifica token
↓
Hash nuova password
↓
Token consumato
↓
Sessioni precedenti invalidate dove opportuno
```

Il token deve essere temporaneo, monouso e memorizzato in forma hashata.

------------------------------------------------------------------------

# 24. Catalogo

Endpoint:

``` http
GET /api/v1/products
```

Il frontend non deve scaricare tutti i prodotti per filtrarli
localmente.

Esempio:

``` http
GET /api/v1/products?gender=uomo&page=1&limit=24
```

Il backend:

1.  valida i parametri;
2.  costruisce la query;
3.  applica filtri;
4.  applica ordinamento;
5.  applica paginazione;
6.  restituisce prodotti + metadata.

------------------------------------------------------------------------

# 25. Filtri

Filtri supportati:

-   genere;
-   categoria;
-   sottocategoria;
-   tag;
-   prezzo minimo;
-   prezzo massimo;
-   disponibilità;
-   sconto;
-   taglia;
-   colore;
-   ricerca testuale;
-   ordinamento;
-   pagina;
-   limite.

Esempio:

``` http
GET /api/v1/products?gender=donna&category=t-shirt&minPrice=20&maxPrice=80&size=M&color=nero&available=true&page=1&limit=24&sort=price_asc
```

------------------------------------------------------------------------

# 26. Ricerca

La ricerca deve essere server-side.

Parametro:

``` text
search
```

Per l'MVP la ricerca può considerare:

-   titolo;
-   sottotitolo;
-   descrizione;
-   SKU nelle interfacce amministrative.

------------------------------------------------------------------------

# 27. Paginazione

Risposta:

``` json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 24,
    "totalItems": 120,
    "totalPages": 5,
    "hasNextPage": true,
    "hasPreviousPage": false
  }
}
```

Il frontend usa i metadata restituiti dal backend.

------------------------------------------------------------------------

# 28. Dettaglio prodotto

``` http
GET /api/v1/products/:id
```

La risposta deve contenere:

-   dati prodotto;
-   categoria;
-   sottocategoria;
-   genere;
-   prezzo;
-   sconto;
-   prezzo finale;
-   immagini;
-   varianti;
-   taglie;
-   colori;
-   disponibilità.

------------------------------------------------------------------------

# 29. Carrello

## 29.1 Guest

``` text
CartContext
↓
localStorage
```

Il comportamento esistente viene mantenuto.

## 29.2 Utente autenticato

``` text
User
↓
Cart
↓
CartItem
↓
ProductVariant
```

Il backend è la fonte autorevole della disponibilità.

------------------------------------------------------------------------

# 30. Merge carrello al login

Esempio:

``` text
Carrello guest:
A × 2
B × 1

Carrello server:
A × 1
C × 3
```

Dopo il login:

``` text
A × 3
B × 1
C × 3
```

Il merge è additivo.

Se una variante non esiste più o la quantità supera lo stock, il backend
restituisce un esito esplicito e il frontend informa l'utente.

------------------------------------------------------------------------

# 31. Quantità carrello

Il backend deve impedire:

``` text
quantity <= 0
quantity > stock
```

La validazione server-side è obbligatoria.

------------------------------------------------------------------------

# 32. Checkout

Il checkout è disponibile esclusivamente per utenti autenticati.

Percorso:

``` text
Carrello
↓
Checkout
↓
Indirizzo spedizione
↓
Indirizzo fatturazione
↓
Riepilogo
↓
Metodo pagamento
↓
Conferma
```

------------------------------------------------------------------------

# 33. Indirizzi

L'utente può avere indirizzi salvati.

L'indirizzo di fatturazione:

-   di default è uguale a quello di spedizione;
-   può essere modificato;
-   viene copiato nello snapshot dell'ordine.

------------------------------------------------------------------------

# 34. Creazione ordine

Request concettuale:

``` json
{
  "shippingAddressId": 12,
  "billingAddressId": 12,
  "paymentMethod": "stripe"
}
```

Il backend:

1.  autentica l'utente;
2.  recupera il carrello;
3.  recupera prodotti e varianti;
4.  verifica esistenza;
5.  verifica stock;
6.  recupera prezzi;
7.  calcola sconti;
8.  calcola subtotal;
9.  calcola spedizione;
10. calcola imposte;
11. calcola totale;
12. crea ordine;
13. avvia il flusso di pagamento.

Il client non invia un totale autorevole.

------------------------------------------------------------------------

# 35. Prezzi e denaro

Il backend deve usare una rappresentazione deterministica.

Raccomandazione:

``` text
29,99 € → 2999 centesimi
```

Valuta MVP:

``` text
EUR
```

Il contratto deve utilizzare una convenzione unica.

------------------------------------------------------------------------

# 36. IVA e spedizione

Il backend è autorevole per:

-   IVA;
-   spedizione;
-   totale.

Le regole numeriche esatte di IVA e spedizione non sono state definite
dal team e devono quindi essere configurabili/documentate senza
inventare valori arbitrari.

------------------------------------------------------------------------

# 37. Pagamenti Stripe

Provider:

**Stripe**

Modalità:

**Stripe Checkout hosted**

Il frontend non raccoglie direttamente dati sensibili della carta.

``` mermaid
sequenceDiagram
    participant F as Frontend
    participant A as FastAPI
    participant DB as Database
    participant S as Stripe
    participant W as Webhook

    F->>A: POST /api/v1/payments/create
    A->>DB: Recupera ordine
    A->>A: Verifica ordine e totale
    A->>S: Crea Checkout Session
    S-->>A: session_id + checkout_url
    A-->>F: checkout_url
    F->>S: Redirect
    S-->>F: Redirect success/cancel
    S->>W: Evento webhook
    W->>A: Evento firmato
    A->>DB: Aggiorna Payment/Order
```

Il webhook è la fonte affidabile per confermare il pagamento.

------------------------------------------------------------------------

# 38. Linee guida Stripe + FastAPI

Il backend deve:

-   mantenere la secret key esclusivamente server-side;
-   usare Stripe test mode nell'MVP;
-   creare Checkout Session server-side;
-   associare la sessione all'ordine interno;
-   non fidarsi dei prezzi inviati dal frontend;
-   verificare la firma del webhook;
-   gestire eventi in modo idempotente;
-   registrare gli identificativi Stripe;
-   non considerare sufficiente il redirect browser per dichiarare un
    pagamento riuscito.

------------------------------------------------------------------------

# 39. Doppio click e idempotenza pagamento

Il frontend deve disabilitare il pulsante durante la richiesta.

Il backend deve comunque proteggersi da richieste duplicate.

La creazione della sessione deve essere collegata all'ordine interno.

------------------------------------------------------------------------

# 40. Webhook Stripe

Il backend deve:

1.  ricevere l'evento;
2.  verificare la firma;
3.  identificare l'evento;
4.  verificare se è già stato processato;
5.  elaborare una sola volta;
6.  aggiornare pagamento e ordine;
7.  gestire stock;
8.  restituire rapidamente una risposta HTTP corretta.

Gli eventi devono essere salvati o comunque identificati per impedire
doppia elaborazione.

------------------------------------------------------------------------

# 41. Race condition stock

Scenario:

``` text
Utente A → checkout
Utente B → acquista ultimo pezzo
Utente A → pagamento riuscito
```

Il backend deve verificare lo stock in modo atomico al momento della
conferma dell'acquisto.

Se il pagamento è riuscito ma lo stock non è più disponibile:

1.  l'ordine non viene trattato come normale ordine completato;
2.  viene avviato il percorso di rimborso Stripe;
3.  l'operazione viene registrata;
4.  l'elaborazione è idempotente;
5.  l'utente viene informato tramite il canale previsto.

------------------------------------------------------------------------

# 42. Contanti alla consegna

Metodo:

``` text
cod
```

Flusso:

``` text
Checkout
↓
Metodo = COD
↓
Backend valida
↓
Ordine creato
↓
payment_status = cod_pending
```

Non esiste webhook Stripe per COD.

------------------------------------------------------------------------

# 43. Ordini

Un ordine deve mantenere snapshot di:

-   prodotti;
-   varianti;
-   SKU;
-   quantità;
-   prezzo unitario;
-   sconto;
-   totale riga;
-   indirizzo spedizione;
-   indirizzo fatturazione.

Le modifiche future al catalogo non devono alterare lo storico.

------------------------------------------------------------------------

# 44. Ciclo ordine

Percorso nominale:

``` text
in_attesa_pagamento
        ↓
confermato
        ↓
in_preparazione
        ↓
spedito
        ↓
consegnato
```

Percorsi alternativi:

``` text
in_attesa_pagamento → annullato
confermato → rimborsato
```

Il backend valida ogni transizione.

------------------------------------------------------------------------

# 45. Storico ordini

``` http
GET /api/v1/orders?page=1&limit=10
```

Restituisce esclusivamente gli ordini dell'utente autenticato.

Ownership:

``` text
order.user_id == authenticated_user.id
```

------------------------------------------------------------------------

# 46. Dettaglio ordine

``` http
GET /api/v1/orders/:id
```

Restituisce:

-   numero ordine;
-   data;
-   stato;
-   pagamento;
-   prodotti;
-   quantità;
-   prezzi snapshot;
-   totale;
-   spedizione;
-   tracking;
-   dati di indirizzo necessari.

------------------------------------------------------------------------

# 47. Spedizioni

MVP:

-   un solo corriere;
-   gestione manuale admin;
-   tracking;
-   nessuna sincronizzazione automatica con API del corriere.

Stati:

``` text
in_attesa
confermato
spedito
consegnato
```

Il sistema non deve avanzare automaticamente gli stati nel tempo.

------------------------------------------------------------------------

# 48. Email transazionali

Provider:

**Gmail SMTP**

Email MVP:

1.  conferma ordine;
2.  ordine spedito;
3.  ordine consegnato;
4.  recupero password.

Non sono previste email marketing automatiche legate alla segmentazione.

Ogni email deve essere idempotente.

------------------------------------------------------------------------

# 49. Profilo utente

Endpoint:

``` http
GET /api/v1/users/me
PATCH /api/v1/users/me
```

Dati gestibili:

-   nome;
-   cognome;
-   email;
-   telefono;
-   genere;
-   data di nascita;
-   indirizzi;
-   password tramite flusso dedicato.

------------------------------------------------------------------------

# 50. Marketing e consenso

Nell'MVP viene raccolto il consenso commerciale durante la
registrazione.

Il sistema distingue:

``` text
CONSENSO
```

da:

``` text
PREFERENZA
```

e:

``` text
CAMPAGNA
```

Non sono previste campagne o automazioni marketing nell'MVP.

------------------------------------------------------------------------

# 51. Segmentazione cliente

Regole concordate:

  -----------------------------------------------------------------------
  Segmento                            Regola
  ----------------------------------- -----------------------------------
  Nuovo                               0 ordini completati oppure primo
                                      ordine completato negli ultimi 30
                                      giorni

  Abituale                            almeno 2 ordini completati negli
                                      ultimi 12 mesi e almeno un ordine
                                      negli ultimi 180 giorni

  VIP                                 almeno 5 ordini negli ultimi 12
                                      mesi oppure spesa complessiva negli
                                      ultimi 12 mesi \>= 500 €

  Inattivo                            almeno un ordine in passato ma
                                      nessun ordine da più di 180 giorni
  -----------------------------------------------------------------------

La segmentazione è un dato derivato e non deve essere trattata come
verità immutabile.

Nell'MVP non genera email.

------------------------------------------------------------------------

# 52. Amministratore

Ruolo:

``` text
amministratore
```

API protette per:

### Prodotti

-   creazione;
-   lettura;
-   modifica;
-   disattivazione;
-   gestione varianti;
-   stock;
-   prezzo;
-   sconto;
-   categoria;
-   sottocategoria.

### Ordini

-   lettura;
-   dettaglio;
-   aggiornamento stato.

### Spedizioni

-   creazione/modifica;
-   tracking;
-   cambio stato.

L'interfaccia può essere minimale.

------------------------------------------------------------------------

# 53. API Specification

Base:

``` text
/api/v1
```

## Auth

  Metodo   Endpoint                  Auth
  -------- ------------------------- ---------
  POST     `/auth/register`          No
  POST     `/auth/login`             No
  POST     `/auth/logout`            Sì
  GET      `/auth/me`                Sì
  POST     `/auth/refresh`           Refresh
  POST     `/auth/forgot-password`   No
  POST     `/auth/reset-password`    Token

## Users

  Metodo   Endpoint      Auth
  -------- ------------- ------
  GET      `/users/me`   Sì
  PATCH    `/users/me`   Sì

## Addresses

  Metodo   Endpoint                    Auth
  -------- --------------------------- ------
  GET      `/users/me/addresses`       Sì
  POST     `/users/me/addresses`       Sì
  PATCH    `/users/me/addresses/:id`   Sì
  DELETE   `/users/me/addresses/:id`   Sì

## Products

  Metodo   Endpoint          Auth
  -------- ----------------- ------
  GET      `/products`       No
  GET      `/products/:id`   No

## Cart

  Metodo   Endpoint            Auth
  -------- ------------------- ------
  GET      `/cart`             Sì
  POST     `/cart/items`       Sì
  PATCH    `/cart/items/:id`   Sì
  DELETE   `/cart/items/:id`   Sì
  DELETE   `/cart`             Sì
  POST     `/cart/merge`       Sì

## Orders

  Metodo   Endpoint        Auth
  -------- --------------- ------
  POST     `/orders`       Sì
  GET      `/orders`       Sì
  GET      `/orders/:id`   Sì

## Payments

  Metodo   Endpoint              Auth
  -------- --------------------- ----------------
  POST     `/payments/create`    Sì
  GET      `/payments/:id`       Sì
  POST     `/payments/webhook`   Firma provider

## Admin

  Metodo   Endpoint                         Auth
  -------- -------------------------------- -------
  GET      `/admin/products`                Admin
  POST     `/admin/products`                Admin
  PATCH    `/admin/products/:id`            Admin
  DELETE   `/admin/products/:id`            Admin
  POST     `/admin/products/:id/variants`   Admin
  PATCH    `/admin/variants/:id`            Admin
  DELETE   `/admin/variants/:id`            Admin
  GET      `/admin/orders`                  Admin
  GET      `/admin/orders/:id`              Admin
  PATCH    `/admin/orders/:id/status`       Admin
  POST     `/admin/orders/:id/shipment`     Admin
  PATCH    `/admin/shipments/:id`           Admin

------------------------------------------------------------------------

# 54. API error contract

``` json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "I dati inseriti non sono validi.",
    "fields": {
      "email": "Inserisci un indirizzo email valido."
    }
  }
}
```

Codici:

``` text
VALIDATION_ERROR
AUTHENTICATION_REQUIRED
INVALID_CREDENTIALS
TOKEN_EXPIRED
TOKEN_INVALID
FORBIDDEN
NOT_FOUND
CONFLICT
OUT_OF_STOCK
ORDER_INVALID
PAYMENT_FAILED
PAYMENT_PENDING
RATE_LIMITED
INTERNAL_ERROR
```

Il frontend non mostra dettagli tecnici.

------------------------------------------------------------------------

# 55. HTTP status code

  Codice   Uso
  -------- ----------------------------------
  200      GET/PATCH riuscito
  201      Risorsa creata
  204      Eliminazione riuscita senza body
  400      Richiesta non valida
  401      Non autenticato
  403      Non autorizzato
  404      Risorsa non trovata
  409      Conflitto
  422      Validazione request
  429      Rate limit
  500      Errore interno

------------------------------------------------------------------------

# 56. Esempi API

## Registrazione

``` http
POST /api/v1/auth/register
Content-Type: application/json
```

``` json
{
  "nome": "Mario",
  "cognome": "Rossi",
  "email": "mario@example.com",
  "password": "PasswordSicura123!",
  "confermaPassword": "PasswordSicura123!",
  "consensoCommerciale": true
}
```

Response:

``` json
{
  "success": true,
  "data": {
    "user": {
      "id": 42,
      "nome": "Mario",
      "cognome": "Rossi",
      "email": "mario@example.com",
      "ruolo": "cliente"
    },
    "accessToken": "..."
  }
}
```

## Login

``` http
POST /api/v1/auth/login
Content-Type: application/json
```

``` json
{
  "email": "mario@example.com",
  "password": "PasswordSicura123!",
  "rememberMe": true
}
```

## Me

``` http
GET /api/v1/auth/me
Authorization: Bearer <access-token>
```

``` json
{
  "success": true,
  "data": {
    "user": {
      "id": 42,
      "nome": "Mario",
      "cognome": "Rossi",
      "email": "mario@example.com",
      "ruolo": "cliente"
    }
  }
}
```

## Prodotti

``` http
GET /api/v1/products?gender=donna&page=1&limit=24&sort=price_asc
```

``` json
{
  "success": true,
  "data": [
    {
      "id": 15,
      "title": "Top blu navy",
      "priceCents": 2999,
      "salePercent": 0,
      "available": true,
      "imageUrl": "https://i.ibb.co/...",
      "variants": []
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 24,
    "totalItems": 1,
    "totalPages": 1,
    "hasNextPage": false,
    "hasPreviousPage": false
  }
}
```

## Creazione ordine

``` http
POST /api/v1/orders
Authorization: Bearer <access-token>
Content-Type: application/json
```

``` json
{
  "shippingAddressId": 12,
  "billingAddressId": 12,
  "paymentMethod": "stripe"
}
```

## Creazione pagamento

``` http
POST /api/v1/payments/create
Authorization: Bearer <access-token>
Content-Type: application/json
```

``` json
{
  "orderId": 10025
}
```

Response:

``` json
{
  "success": true,
  "data": {
    "paymentId": 501,
    "checkoutUrl": "https://checkout.stripe.com/..."
  }
}
```

## Storico

``` http
GET /api/v1/orders?page=1&limit=10
Authorization: Bearer <access-token>
```

## Dettaglio

``` http
GET /api/v1/orders/10025
Authorization: Bearer <access-token>
```

## Cambio spedizione

``` http
PATCH /api/v1/admin/shipments/900/status
Authorization: Bearer <admin-access-token>
Content-Type: application/json
```

``` json
{
  "status": "spedito",
  "trackingCode": "ABC123456",
  "trackingUrl": "https://tracking.example/ABC123456"
}
```

------------------------------------------------------------------------

# 57. HTTP Request/Response Flows

## 57.1 Registrazione

``` text
CLIENT
 ↓
POST /auth/register
 ↓
FASTAPI ROUTER
 ↓
VALIDATION
 ↓
CHECK EMAIL
 ↓
HASH PASSWORD
 ↓
CREATE USER
 ↓
CREATE CONSENT
 ↓
CREATE AUTH SESSION
 ↓
DATABASE
 ↓
HTTP 201
 ↓
CLIENT
 ↓
Auth State = authenticated
 ↓
REDIRECT
```

## 57.2 Login

``` text
CLIENT
 ↓
POST /auth/login
 ↓
FASTAPI
 ↓
VALIDATE CREDENTIALS
 ↓
DATABASE
 ↓
CREATE ACCESS + REFRESH
 ↓
HTTP RESPONSE
 ↓
CLIENT
 ↓
Auth State
```

## 57.3 Refresh

``` text
CLIENT
 ↓
401 / access token expired
 ↓
POST /auth/refresh
 ↓
FASTAPI
 ↓
VALIDATE REFRESH
 ↓
ROTATE/REISSUE SESSION
 ↓
NEW ACCESS TOKEN
 ↓
CLIENT
 ↓
RETRY ORIGINAL REQUEST
```

## 57.4 Catalogo

``` text
CLIENT
 ↓
GET /products?...
 ↓
FASTAPI
 ↓
VALIDATION
 ↓
QUERY DATABASE
 ↓
FILTER
 ↓
SORT
 ↓
PAGINATION
 ↓
RESPONSE
 ↓
CLIENT
 ↓
RENDER
```

## 57.5 Carrello

``` text
CLIENT
 ↓
POST /cart/items
 ↓
FASTAPI
 ↓
AUTH
 ↓
VALIDATE VARIANT
 ↓
VALIDATE QUANTITY
 ↓
DATABASE
 ↓
CART RESPONSE
 ↓
CLIENT
 ↓
UPDATE CartContext
```

## 57.6 Merge login

``` text
GUEST CART
 ↓
LOGIN
 ↓
AUTH SUCCESS
 ↓
POST /cart/merge
 ↓
BACKEND
 ↓
LOAD SERVER CART
 ↓
LOAD GUEST ITEMS
 ↓
MERGE
 ↓
CHECK VALIDITY/STOCK
 ↓
SAVE
 ↓
RESPONSE
 ↓
CLIENT
 ↓
REPLACE LOCAL CART
```

## 57.7 Checkout

``` text
CLIENT
 ↓
POST /orders
 ↓
AUTH
 ↓
LOAD CART
 ↓
VALIDATE ADDRESSES
 ↓
VALIDATE PRODUCTS
 ↓
VALIDATE VARIANTS
 ↓
VALIDATE STOCK
 ↓
RECALCULATE PRICES
 ↓
CALCULATE TOTAL
 ↓
CREATE ORDER
 ↓
CLIENT
```

## 57.8 Pagamento

``` text
CLIENT
 ↓
POST /payments/create
 ↓
FASTAPI
 ↓
VERIFY ORDER OWNERSHIP
 ↓
VERIFY ORDER STATE
 ↓
STRIPE CHECKOUT SESSION
 ↓
DATABASE PAYMENT RECORD
 ↓
checkoutUrl
 ↓
CLIENT
 ↓
REDIRECT STRIPE
 ↓
STRIPE
 ↓
WEBHOOK
 ↓
FASTAPI
 ↓
VERIFY SIGNATURE
 ↓
IDEMPOTENCY
 ↓
VERIFY STOCK
 ↓
UPDATE PAYMENT
 ↓
UPDATE ORDER
 ↓
DECREMENT STOCK
 ↓
SEND CONFIRMATION EMAIL
```

## 57.9 Spedizione

``` text
ADMIN
 ↓
PATCH shipment
 ↓
FASTAPI
 ↓
AUTH + ADMIN ROLE
 ↓
VALIDATE TRANSITION
 ↓
DATABASE
 ↓
UPDATE SHIPMENT
 ↓
UPDATE ORDER IF REQUIRED
 ↓
SEND EMAIL
 ↓
RESPONSE
```

------------------------------------------------------------------------

# 58. Frontend Specification

## 58.1 Auth Context

È necessario introdurre un Context autenticazione per condividere lo
stato dell'utente tra Navbar, route private, profilo, ordini, checkout e
carrello.

Stati:

``` text
loading
authenticated
unauthenticated
error
```

Dati:

``` text
user
accessToken
```

Il refresh token non deve essere esposto inutilmente ai componenti.

## 58.2 Route

Route esistenti da mantenere dove pertinenti:

``` text
/
/catalogo
/uomo
/donna
/bambini
/prodotto/:id
/carrello
/contatti
/privacy
/cookie
/termini
/spedizioni
/resi
```

Route MVP:

``` text
/login
/registrazione
/profilo
/ordini
/ordini/:id
/checkout
/pagamento/successo
/pagamento/errore
```

Route admin:

``` text
/admin/prodotti
/admin/ordini
/admin/spedizioni
```

------------------------------------------------------------------------

# 59. Loading / Success / Error

Ogni chiamata asincrona deve seguire:

``` text
loading
success
error
```

Il pattern `isCurrent` o equivalente deve essere mantenuto dove
necessario.

Messaggi in italiano:

``` text
Non è stato possibile caricare i prodotti. Riprova tra poco.
```

``` text
La sessione è scaduta. Effettua nuovamente l'accesso.
```

------------------------------------------------------------------------

# 60. Responsive e design

Mantenere:

-   mobile-first;
-   Tailwind CSS;
-   componenti esistenti;
-   `screenSize()` quando necessario.

Non è richiesto un redesign.

------------------------------------------------------------------------

# 61. Sicurezza

## Password

-   hashing robusto;
-   mai password in chiaro;
-   mai password nei log.

## Token

-   access breve;
-   refresh più lungo;
-   rotazione/revoca;
-   validazione firma;
-   scadenza.

## CORS

Consentire esclusivamente i domini necessari.

Non utilizzare wildcard incompatibili con credenziali.

## Authorization

Ogni endpoint admin deve verificare:

``` text
authenticated
+
role == amministratore
```

------------------------------------------------------------------------

# 62. Rate limiting

Proteggere almeno:

-   login;
-   registrazione;
-   forgot password;
-   reset password;
-   refresh.

------------------------------------------------------------------------

# 63. Ownership

Un utente può accedere esclusivamente alle proprie risorse.

Vale per:

-   ordini;
-   indirizzi;
-   carrello;
-   pagamenti;
-   profilo.

------------------------------------------------------------------------

# 64. Logging

Il backend deve registrare eventi tecnici utili senza salvare:

-   password;
-   access token;
-   refresh token;
-   dati completi carta;
-   secret Stripe;
-   credenziali SMTP.

------------------------------------------------------------------------

# 65. Monitoring

MVP:

-   log server;
-   errori HTTP;
-   errori webhook;
-   errori pagamento;
-   errori email.

Future:

-   metriche;
-   alert;
-   tracing;
-   dashboard operativa.

------------------------------------------------------------------------

# 66. Backup

Il database production deve avere backup compatibili con il piano
Supabase utilizzato.

La retention effettiva deve essere verificata prima del deploy.

------------------------------------------------------------------------

# 67. Seed e migrazioni

Il backend deve prevedere una strategia per:

``` text
migrations
seed
```

Il seed deve essere ripetibile o idempotente.

Alembic è la soluzione consigliata per lo schema DB.

------------------------------------------------------------------------

# 68. Testing

## Unit test

-   calcolo prezzo;
-   sconto;
-   validazione quantità;
-   merge carrello;
-   transizioni stato;
-   segmentazione;
-   importi.

## Integration test

-   registrazione;
-   login;
-   refresh;
-   profilo;
-   prodotti;
-   carrello;
-   ordine;
-   pagamento mock;
-   webhook;
-   email mock;
-   admin.

## API test

Per ogni endpoint:

-   happy path;
-   input invalido;
-   401;
-   403;
-   404;
-   409 dove applicabile.

## E2E

``` text
Registrazione
→ Login automatico
→ Catalogo
→ Prodotto
→ Carrello
→ Checkout
→ Stripe test
→ Ordine
→ Storico
```

e:

``` text
Login
→ Ordini
→ Dettaglio
→ Spedizione
```

------------------------------------------------------------------------

# 69. Acceptance Criteria --- Autenticazione

-   [ ] Registrazione funzionante.
-   [ ] Email unica.
-   [ ] Password hashata.
-   [ ] Nessuna verifica email.
-   [ ] Login automatico post-registrazione.
-   [ ] Login email/password.
-   [ ] Access token 1 ora.
-   [ ] Refresh token massimo 30 giorni.
-   [ ] Remember me funzionante.
-   [ ] Logout.
-   [ ] `/auth/me`.
-   [ ] Route private.
-   [ ] Recupero password.

------------------------------------------------------------------------

# 70. Acceptance Criteria --- Catalogo

-   [ ] Prodotti dal backend.
-   [ ] Genere.
-   [ ] Categoria.
-   [ ] Sottocategoria.
-   [ ] Taglia.
-   [ ] Colore.
-   [ ] Prezzo.
-   [ ] Disponibilità.
-   [ ] Sconto.
-   [ ] Ricerca.
-   [ ] Ordinamento.
-   [ ] Paginazione.

------------------------------------------------------------------------

# 71. Acceptance Criteria --- Carrello

-   [ ] Carrello guest.
-   [ ] Carrello autenticato persistente.
-   [ ] Merge additivo.
-   [ ] Varianti.
-   [ ] Quantità valida.
-   [ ] Ownership.
-   [ ] Checkout server-side.

------------------------------------------------------------------------

# 72. Acceptance Criteria --- Checkout e pagamento

-   [ ] Solo utenti autenticati.
-   [ ] Billing precompilato da shipping.
-   [ ] Billing modificabile.
-   [ ] Totale server-side.
-   [ ] Stock server-side.
-   [ ] Stripe hosted.
-   [ ] Secret key server-side.
-   [ ] Firma webhook verificata.
-   [ ] Webhook idempotente.
-   [ ] Doppio click gestito.
-   [ ] COD funzionante.
-   [ ] Redirect non usato come unica conferma.

------------------------------------------------------------------------

# 73. Acceptance Criteria --- Ordini e spedizioni

-   [ ] Snapshot ordine.
-   [ ] Ownership.
-   [ ] Dettaglio protetto.
-   [ ] Transizioni validate.
-   [ ] Admin shipment.
-   [ ] Tracking.
-   [ ] Nessuna automazione temporale.
-   [ ] Email non duplicate.

------------------------------------------------------------------------

# 74. Acceptance Criteria --- Admin

-   [ ] Endpoint admin protetti.
-   [ ] Role check backend.
-   [ ] CRUD prodotti.
-   [ ] CRUD varianti.
-   [ ] Stock.
-   [ ] Ordini.
-   [ ] Spedizioni.
-   [ ] Nessuna dashboard avanzata richiesta.

------------------------------------------------------------------------

# 75. Acceptance Criteria --- GDPR

-   [ ] Consenso raccolto.
-   [ ] Utente associato.
-   [ ] Timestamp.
-   [ ] Origine.
-   [ ] Versione informativa.
-   [ ] Nessuna campagna automatica.
-   [ ] Pagine legali preservate.

------------------------------------------------------------------------

# 76. Roadmap

## Fase 0 --- Preparazione

-   [ ] Repository backend.
-   [ ] Ambienti.
-   [ ] SQLAlchemy.
-   [ ] Alembic.
-   [ ] CORS.
-   [ ] SQLite.
-   [ ] PostgreSQL.

## Fase 1 --- Modello dati

-   [ ] User.
-   [ ] Address.
-   [ ] Product.
-   [ ] Category.
-   [ ] Subcategory.
-   [ ] ProductVariant.
-   [ ] Cart.
-   [ ] Order.
-   [ ] Payment.
-   [ ] Shipment.
-   [ ] Consent.
-   [ ] Reset token.
-   [ ] Session/refresh.

## Fase 2 --- Seed

-   [ ] Migrazione 40 prodotti.
-   [ ] Mapping genere.
-   [ ] Mapping categoria.
-   [ ] Mapping sottocategoria.
-   [ ] Varianti.
-   [ ] SKU.
-   [ ] Stock.

## Fase 3 --- Auth

-   [ ] Register.
-   [ ] Login.
-   [ ] Logout.
-   [ ] Refresh.
-   [ ] Me.
-   [ ] Remember me.
-   [ ] Password reset.

## Fase 4 --- Catalogo

-   [ ] Products API.
-   [ ] Filtri.
-   [ ] Ricerca.
-   [ ] Sorting.
-   [ ] Pagination.
-   [ ] Product detail.

## Fase 5 --- Carrello

-   [ ] Backend cart.
-   [ ] CartContext integration.
-   [ ] Merge.
-   [ ] Varianti.

## Fase 6 --- Checkout

-   [ ] Addresses.
-   [ ] Order.
-   [ ] Totale.
-   [ ] Stock.

## Fase 7 --- Pagamenti

-   [ ] Stripe.
-   [ ] Checkout Session.
-   [ ] Webhook.
-   [ ] Idempotency.
-   [ ] COD.

## Fase 8 --- Orders

-   [ ] History.
-   [ ] Detail.
-   [ ] Status.

## Fase 9 --- Shipment

-   [ ] Shipment.
-   [ ] Tracking.
-   [ ] Admin status.
-   [ ] Email.

## Fase 10 --- Admin

-   [ ] Product CRUD.
-   [ ] Variant CRUD.
-   [ ] Order management.
-   [ ] Shipment management.

## Fase 11 --- QA

-   [ ] Unit.
-   [ ] Integration.
-   [ ] API.
-   [ ] E2E.
-   [ ] Security.
-   [ ] PostgreSQL validation.

## Fase 12 --- Production

-   [ ] Env.
-   [ ] DB.
-   [ ] Stripe.
-   [ ] SMTP.
-   [ ] CORS.
-   [ ] Deploy.
-   [ ] Smoke test.

------------------------------------------------------------------------

# 77. Rischi e mitigazioni

  ---------------------------------------------------------------------------------
  Problema          Rischio           Mitigazione                 Obbligatorio
  ----------------- ----------------- --------------------------- -----------------
  Race condition    Overselling       transazione + controllo     Sì
  stock                               atomico                     

  Floating point    Totali errati     centesimi                   Sì

  Refresh token     Account takeover  cookie                      Sì
  rubato                              HttpOnly/rotazione/revoca   

  CORS errato       API esposta       allowlist                   Sì

  Ownership assente Data leak         user_id check               Sì

  Webhook duplicato Doppia            idempotenza                 Sì
                    elaborazione                                  

  Doppio click      Doppio ordine     UI lock + idempotency       Sì

  Gmail limits      Invii falliti     monitoraggio                Vincolo MVP

  SQLite/Postgres   Differenze        test Postgres               Sì
                    production                                    

  Categoria         Dati incoerenti   mapping seed                Sì
  mancante                                                        

  Immagini esterne  Dipendenza        accettata nell'MVP          No
                    provider                                      

  Hosting FastAPI   Deploy bloccato   runtime Python compatibile  Prima del deploy
  ---------------------------------------------------------------------------------

------------------------------------------------------------------------

# 78. Future Features

-   dashboard admin avanzata;
-   KPI e grafici;
-   gestione utenti evoluta;
-   statistiche cliente;
-   segmentazione visualizzata;
-   campagne marketing;
-   newsletter;
-   preferenze avanzate;
-   email segmentate;
-   API corriere;
-   tracking automatico;
-   rimborsi da dashboard;
-   wishlist;
-   recensioni;
-   coupon;
-   gift card;
-   loyalty;
-   guest checkout.

------------------------------------------------------------------------

# 79. Decisioni aperte residue

Non rimangono decisioni funzionali bloccanti per l'MVP.

Restano dettagli operativi:

1.  hosting esatto del runtime FastAPI;
2.  tariffe di spedizione;
3.  configurazione fiscale/IVA;
4.  dominio API production;
5.  credenziali SMTP;
6.  mapping definitivo categorie/sottocategorie;
7.  template grafici email.

Questi punti non cambiano l'architettura.

------------------------------------------------------------------------

# 80. Definition of Done MVP

Vesta MVP è completato quando:

1.  un utente può registrarsi;
2.  viene autenticato automaticamente;
3.  il remember me funziona;
4.  il login funziona;
5.  il recupero password funziona;
6.  il catalogo arriva dal backend;
7.  filtri, ricerca, sorting e pagination funzionano;
8.  le varianti sono gestite;
9.  il carrello guest funziona;
10. il carrello autenticato è persistente;
11. il merge è additivo;
12. gli indirizzi sono gestibili;
13. il checkout è protetto;
14. Stripe Checkout funziona in test;
15. il webhook aggiorna correttamente il pagamento;
16. lo stock è consistente;
17. COD funziona;
18. l'ordine viene salvato;
19. lo storico funziona;
20. il dettaglio ordine funziona;
21. l'admin gestisce prodotti e varianti;
22. l'admin gestisce spedizioni;
23. il tracking viene visualizzato;
24. le email transazionali sono idempotenti;
25. il consenso viene registrato;
26. ownership e ruoli sono verificati;
27. test unit/integration/API/E2E principali sono verdi.

------------------------------------------------------------------------

# 81. Audit finale del PRD

## Codebase

-   [x] Stato attuale considerato.
-   [x] Funzionalità esistenti considerate.
-   [x] `CartContext` riutilizzato.
-   [x] `cartService`, `prezzoService`, `prodottiService` considerati.
-   [x] Gap catalogo/routing/carrello esplicitati.

## Frontend

-   [x] React 19.
-   [x] JavaScript.
-   [x] Vite.
-   [x] Tailwind CSS v4.
-   [x] React Router DOM v7.
-   [x] Nessun Redux/Zustand.
-   [x] Nessun TypeScript.

## Backend

-   [x] Python.
-   [x] FastAPI.
-   [x] SQLAlchemy.
-   [x] API versionate.
-   [x] Validazione.
-   [x] Auth.
-   [x] RBAC.

## Database

-   [x] PostgreSQL.
-   [x] SQLite development.
-   [x] Foreign key.
-   [x] Unique.
-   [x] Indici.
-   [x] Varianti.
-   [x] Snapshot.
-   [x] Stock concorrente.

## E-commerce

-   [x] Prezzi server-side.
-   [x] Sconti server-side.
-   [x] Totale server-side.
-   [x] Stock server-side.
-   [x] Stripe.
-   [x] COD.
-   [x] Ordine.
-   [x] Spedizione.
-   [x] Tracking.
-   [x] Rimborso tecnico previsto.

## HTTP

-   [x] Request.
-   [x] Response.
-   [x] Status code.
-   [x] Error contract.
-   [x] Auth.
-   [x] Ownership.
-   [x] Pagination.
-   [x] Query parameters.
-   [x] Flussi end-to-end.

## Email

-   [x] Conferma ordine.
-   [x] Spedito.
-   [x] Consegnato.
-   [x] Recupero password.
-   [x] Idempotenza.

## GDPR

-   [x] Consenso.
-   [x] Timestamp.
-   [x] Origine.
-   [x] Versione informativa.
-   [x] Nessun marketing automatico.

## Testing

-   [x] Unit.
-   [x] Integration.
-   [x] API.
-   [x] E2E.
-   [x] Webhook.
-   [x] Concorrenza stock.
-   [x] PostgreSQL.

------------------------------------------------------------------------

# 82. Conclusione

Il PRD definisce Vesta come un'architettura frontend React + backend
FastAPI + database PostgreSQL costruita per evolvere la codebase
esistente senza riscriverla inutilmente.

Il principio centrale è:

``` text
FRONTEND
UI / UX / STATE
        ↓
HTTP API
        ↓
FASTAPI
AUTH / VALIDATION / BUSINESS LOGIC
        ↓
DATABASE / STRIPE / SMTP
```

Il frontend rimane responsabile dell'esperienza utente.

Il backend diventa la fonte autorevole per tutti i dati e i processi
sensibili.

L'MVP mantiene una superficie tecnica contenuta: un backend, un database
production, un solo corriere, Stripe hosted, Gmail SMTP, admin minimale
e nessuna infrastruttura distribuita non necessaria.

Il documento deve essere utilizzato come contratto condiviso tra
frontend e backend. Qualunque modifica sostanziale a endpoint, modelli,
flussi, stati o responsabilità deve essere prima riflessa nel PRD.
