Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.


PROBLEMA
1 - creare form dove l'utente inserisce i chilmetri da percorrere
    1.1 - creare form in html
    1.2 - mostrare a video
2 - creare form dove l'utente inserisce la sua fascia d'età
    2.1 - creare form in html
    2.2 - assegnare un valore per ogni fascia d'età 
    2.3 - assegnare ad ogni valore una percentuale di sconto
    2.4 - mostrare a video
3 - creare bottone che all'evento click recuperi i valori impostati dall'utente e li mostri in console
    3.1 - creare bottone su html
    3.2 - recuperare valore chilmetri tramite id e mostrare in console
        3.2.1 - moltiplicare per la const (0.21) e ottenere cosi prezzo/km
    3.3 - recuperare valore età tramite id e mostrare in console
    3.4 - condizionare il valore del prezzo finale mostrato a video
        3.4.1 - se la fascia d'età è minore a 18 applicare 20% a prezzo/km mostrando massimo due decimali
        3.4.2 - altrimenti se la fascia d'età è maggiore a 65 applicare 40% a prezzo/km
        3.4.3 - altrimenti non applicare sconto
4 - recuperare valori ottenuti in precedenza e mostrare a video tremite innertext
