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

---

## 🧱 Projektstruktur

```text
BlockchainJS/
├── src/ # Quellcode der Blockchain-Implementierung
│ ├── Block.js
│ ├── Blockchain.js
│ └── index.js
├── examples/ # Kleine Demo-Skripte zur Nutzung der Blockchain
├── package.json
└── README.md
```

*(Passe diese Struktur bitte an dein tatsächliches Repo an, falls sie abweicht.)*

---

## 🛠️ Installation & Nutzung

1. **Klonen des Repositories**

   ```bash
   git clone https://github.com/Koreleth/BlockhainJS.git
   cd BlockhainJS
   ```
2. **Dependencies installieren**
   ```bash
   npm install
   ```

3. **Beispiel starten**
   ```bash
   node src/index.js
   ```

oder oder, falls du ein Demo-Skript in [./examples](./examples) hast:
   ```bash
   node examples/demo.js
   ```

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
