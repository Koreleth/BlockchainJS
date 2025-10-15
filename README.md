# BlockchainJS

Dieses Projekt ist eine einfache Implementierung einer Blockchain in JavaScript.  
Der Code wurde als Lernprojekt erstellt und basiert auf dem YouTube-Tutorial von **Junus – Programmieren Lernen**.  
[Video-Link zum Tutorial](https://www.youtube.com/watch?v=EyRQ7r7875w)

---

## 📖 Überblick & Motivation

Eine Blockchain ist eine verkettete Liste von Blöcken, bei der jeder Block eine Verbindung zum vorherigen Block über dessen Hash herstellt.  
Dieses Projekt demonstriert die Grundprinzipien einer Blockchain — wie neue Blöcke erzeugt, validiert und an die Kette angehängt werden.

Ziel ist es, die wesentlichen Mechanismen einer (sehr einfachen) Blockchain zu verstehen:

- Blockstruktur und Hash-Berechnung  
- Verkettung von Blöcken  
- Validierung der gesamten Kette  
- Demonstration von Manipulationsversuchen und deren Erkennung

  <img width="2881" height="1561" alt="screencapture-file-C-Users-korel-Desktop-Coding-Blockhain-index-html-2025-10-14-10_20_29" src="https://github.com/user-attachments/assets/fca9da64-be55-4b3d-9b20-3fe47924cb45" />


---

## 🧱 Projektstruktur

```text
BlockchainJS/
├── .vscode/                 # VS Code-Projektkonfigurationen
│
├── index.html               # Hauptseite der Anwendung (Frontend-Demo)
├── style.css                # Stylesheet für die Benutzeroberfläche
├── script.js                # Zentrale Skriptlogik (UI-Interaktionen, Blockchain-Start)
├── chart.js                 # Darstellung der Blockchain-Daten (z. B. visuelle Diagramme)
│
├── block.class.js           # Definition der Block-Klasse (enthält Hash, Zeitstempel, etc.)
├── blockchain.class.js      # Definition der Blockchain-Klasse (Verwaltung der Kette & Validierung)
├── mining-node.class.js     # Simuliert einen Mining-Knoten, der neue Blöcke erstellt
├── broadcaster.js           # Kommunikation zwischen mehreren Knoten (z. B. Netzwerk-Simulation)
├── sha256.js                # Implementierung bzw. Import des SHA-256-Hashalgorithmus
│
└── README.md                # Projektdokumentation

```

*(Passe diese Struktur bitte an dein tatsächliches Repo an, falls sie abweicht.)*

---

## 🛠️ Installation & Nutzung

1. **Klonen des Repositories**

   ```bash
   git clone https://github.com/Koreleth/BlockhainJS.git
   cd BlockhainJS
   ```
2. Öffne `index.html`.

---

## 🧾 Funktionsweise & Beispiel

**🔐 Block**
Ein Block enthält typischerweise:
- Index
- Zeitstempel
- Daten (z. B. Transaktionen)
- previousHash (Hash des vorherigen Blocks)
- hash (eigenständiger Hash, z. B. SHA256 über die Inhalte)
  

**🧩 Blockchain**
- Start mit einem Genesis-Block**
- Neue Blöcke erzeugen (mit Daten)
- Validierung der Kette (Widersprüche im previousHash, Hash-Übereinstimmung)
- Schutz vor Manipulation — wenn ein Block verändert wird, ist die gesamte Kette nicht mehr gültig


**Beispiel (in index.js)**
```javascript
const { Block, Blockchain } = require('./Block.js', './Blockchain.js');

const myChain = new Blockchain();
myChain.addBlock(new Block(1, "01/01/2025", { amount: 4 }));
myChain.addBlock(new Block(2, "02/01/2025", { amount: 10 }));

console.log(JSON.stringify(myChain, null, 4));
console.log("Ist Kette gültig? " + myChain.isChainValid());

// Versuch, eine Manipulation durchzuführen:
myChain.chain[1].data = { amount: 1000 };
myChain.chain[1].hash = myChain.chain[1].calculateHash();

console.log("Nach Manipulation - gültig? " + myChain.isChainValid());
```
---

## 🎓 Lernaspekt & Hinweis

- Lehrprojekt: Diese Implementierung ist nicht für produktiven Einsatz gedacht
- Einfachheit vor Sicherheit: Viele Sicherheitsmaßnahmen echter Blockchains (z. B. Proof of Work, Netzwerkkonsens, P2P, Mining) sind hier nicht enthalten
- Der Code wurde rekonstruiert anhand des Tutorials von Junus – es handelt sich nicht um Originalcode, sondern um deinen eigenen Nachbau

---

## 📺 Tutorial-Quelle
Junus – Programmieren Lernen
YouTube-Video: [Eine Blockchain von Grund auf in JavaScript umsetzen](https://www.youtube.com/watch?v=EyRQ7r7875w)

---
