# Verifica

Troverai una base già pronta con due rotte distinte che mostrano due liste, rispettivamente **Umani** e **Bestie**.

La prova ti richiede di svolgere una serie di task a partire dalle liste già presenti.
Il focus della prova è la manipolazione delle strutture dati e degli oggetti; l'interfaccia grafica è da utilizzare solo come
mezzo di conferma dell'efficacia della soluzione scelta.

Per lo svolgimento della verifica **NON** sarà possibile utilizzare qualsiasi tipo di strumento IA, incluso il completamento automatico di WebStorm. Si consiglia quindi di lavorare su VSCode.
Ogni progresso dovrà essere pushato, per la valutazione verrà considerato unicamente il codice committato.

## Obiettivi:

1) _Filtraggio_:

- Implementare una barra di ricerca condivisa per entrambe le liste; in entrambi i casi la ricerca avverrà per nome;
- Per la lista degli umani implementare una select che permetta di filtrare per occupazione. La lista di occupazioni da usare come opzioni dovrà essere ricavata dalla lista degli umani;
- Per la lista delle bestie implementare une select che permetta di filtrare per specie. La lista di specie da usare come opzioni dovrà essere ricavata dalla lista delle bestie;
- Per gli umani, implementare una select che permetta di filtrare per fascia di età (<20, 20-30, 30-40, >40);
- Per le bestie, implementare una select che permetta di filtrare per fasce di lunghezza (<5, 5-10, 10-15, >15);

2) _Ordinamento_:

- Per la lista degli umani, implementare un bottone che permetta di ordinare per età in modo ascendente o discendente a scelta dell'utente;
- Per la lista delle bestie, implementare un bottone che permetta di ordinare per peso in modo ascendente o discendente a scelta dell'utente;

3) _Trasformazione_:

- Sotto alla tabella degli umani, mostrare una tabella con una lista di indirizzi ricavati dalla lista degli umani ordinata alfabeticamente per codice statale (proprietà "state");
- Sotto alla tabella delle bestie, raggruppare gli animali per dieta. Mostrare quindi N liste dove N è il numero di diete possibili;
- Sulla lista degli umani implementare due bottoni "Invecchia" e "Ringiovanisci", dove il primo aumenterà di 5 l'età di ogni umano e il secondo la ridurrà di 5. Le età non possono superare il 100 e scendere sotto l'1;
- Su tutte le liste delle bestie aggiungere due bottoni "Ingrandisci" e "Rimpicciolisci", dove il primo aumenterà di 5 la lunghezza e il peso di ogni animale e il secondo li ridurrà di 5. Le lunghezze non possono scendere sotto l'1 e i pesi non possono scendere sotto il 10.

4) _Bonus_:

- Per ogni lista, aggiungere su ogni riga un pulsante "Elimina";
- Implementare un'altra rotta "riders": presenterà un componente con due select, una per gli umani e una per le bestie. Selezionando entrambe le opzioni sarà possibile creare un Rider, ossia un oggetto che relaziona Umano e Bestia e aggiungerlo ad una lista.
- In una tabella, mostrare la lista dei riders creati.
