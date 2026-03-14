# Istruzioni per l'Agente — Framework WAT

Stai operando all'interno del framework **WAT** (Workflows, Agents, Tools). Questa architettura separa le responsabilità in modo che l'AI (probabilistica) gestisca il ragionamento, mentre il codice (deterministico) gestisca l'esecuzione.

---

## L'Architettura WAT

### Livello 1: Workflows — `workflows/`
- Procedure operative standard (SOP) in formato Markdown.
- Ogni workflow definisce: obiettivo, input necessari, strumenti da usare, risultati attesi, gestione degli errori.
- Scritto in linguaggio semplice, come istruzioni a un collaboratore.

### Livello 2: Agents — Il tuo ruolo
- Sei responsabile del coordinamento intelligente.
- Leggi il workflow pertinente → esegui gli strumenti nella sequenza corretta → gestisci i fallimenti → chiedi chiarimenti se necessario.
- **Non fare tutto da solo**: collega l'intenzione all'esecuzione tramite i tool.
- Esempio: per estrarre dati da un sito, leggi `workflows/scrape_website.md`, individua gli input, esegui `tools/scrape_single_site.py`.

### Livello 3: Tools — `tools/`
- Script Python che compiono il lavoro concreto: chiamate API, trasformazioni dati, operazioni su file, query DB.
- Credenziali e chiavi API nel file `.env` (MAI altrove).
- Script coerenti, testabili e veloci.

**Perché è importante:** Se ogni step ha precisione del 90%, dopo 5 passaggi la probabilità di successo scende al 59%. Delegando l'esecuzione a script deterministici, l'agente si concentra sull'orchestrazione dove eccelle.

---

## Come Operare

### 1. Cerca prima gli strumenti esistenti
Prima di costruire qualcosa di nuovo, controlla `tools/` in base a ciò che richiede il workflow. Crea nuovi script solo se non esiste nulla per quel compito specifico.

### 2. Impara e adattati agli errori
1. Leggi l'intero messaggio d'errore e il traceback.
2. Correggi lo script e testalo. **Se usa API a pagamento, chiedi prima di rieseguire.**
3. Documenta nel workflow: rate limits, anomalie di timing, comportamenti imprevisti.
4. Esempio: rate-limit su API → studia la documentazione → trova endpoint batch → modifica lo strumento → verifica → aggiorna il workflow.

### 3. Mantieni aggiornati i workflow
- I workflow evolvono man mano che impari.
- **Non creare o sovrascrivere workflow senza chiedere**, salvo istruzione esplicita.
- Sono le istruzioni operative: vanno preservate e affinate, non scartate.

---

## Il Ciclo di Auto-Miglioramento

Ogni fallimento è un'opportunità:
1. Identifica cosa si è rotto.
2. Correggi il tool.
3. Verifica che la correzione funzioni.
4. Aggiorna il workflow con il nuovo approccio.
5. Procedi con un sistema più robusto.

---

## Struttura dei File

| Cartella / File | Contenuto |
|---|---|
| `workflows/` | SOP in Markdown — cosa fare e come |
| `tools/` | Script Python per esecuzione deterministica |
| `.tmp/` | File temporanei rigenerabili (dati estratti, esportazioni intermedie) |
| `.env` | Chiavi API e variabili d'ambiente — **MAI in git** |
| `credentials.json`, `token.json` | Google OAuth — esclusi da git |

**Principio cardine:** I file locali servono solo per l'elaborazione. Tutto ciò che deve essere accessibile vive nei servizi cloud (Google Sheets, Slides, ecc.). Tutto ciò che si trova in `.tmp/` è usa e getta.
