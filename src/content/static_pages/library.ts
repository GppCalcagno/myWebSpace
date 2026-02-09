export interface book {
    name: string;
    Author: string;
    Started: Date; 
    Finished: Date;
    Pages: number;
    Vote: number;
    ISBN13: string; 
}

export const libraryData: book[] = [
    {
    name: "12 Regole per la vita",
    Author: "Jordan Peterson",
    Started: new Date("2021-04-09"),
    Finished: new Date("2021-06-27"),
    Pages: 360,
    Vote: 1,
    ISBN13: "9788863865820"
    },
    {
    name: "La dittatura delle abitudini",
    Author: "Charles Duhigg",
    Started: new Date("2021-06-28"),
    Finished: new Date("2021-07-10"),
    Pages: 200,
    Vote: 5,
    ISBN13: "9781400069286"
    },
    {
    name: "Piccole abitudini per grandi cambiamenti",
    Author: "James Clear",
    Started: new Date("2021-07-11"),
    Finished: new Date("2021-07-19"),
    Pages: 200,
    Vote: 5,
    ISBN13: "9781847941831"
    },
    {
    name: "Elon Musk",
    Author: "Walter Isaacson",
    Started: new Date("2021-07-19"),
    Finished: new Date("2021-08-16"),
    Pages: 200,
    Vote: 5,
    ISBN13: "9788580578287"
    },
    {
    name: "corso rapido di autostima per vivere meglio",
    Author: "Olivier Hauck",
    Started: new Date("2021-08-27"),
    Finished: new Date("2021-08-31"),
    Pages: 100,
    Vote: 1,
    ISBN13: "9788867313990"
    },
    {
    name: "Manuale di Allenamento a Corpo Libero",
    Author: "",
    Started: new Date("2021-08-01"),
    Finished: new Date("2021-09-01"),
    Pages: 75,
    Vote: 1,
    ISBN13: "9798739033994"
    },
    {
    name: "how to win friends and influence people",
    Author: "Dale Carnegie",
    Started: new Date("2021-09-20"),
    Finished: new Date("2021-11-03"),
    Pages: 288,
    Vote: 3,
    ISBN13: "9780091906351"
    },
    {
    name: "Ogni Singolo Giorno",
    Author: "Alessio Alfei",
    Started: new Date("2021-11-04"),
    Finished: new Date("2021-11-14"),
    Pages: 225,
    Vote: 1,
    ISBN13: "9791220082242"
    },
    {
    name: "Indistractible",
    Author: "Nir Eyal",
    Started: new Date("2021-11-14"),
    Finished: new Date("2021-11-29"),
    Pages: 252,
    Vote: 3,
    ISBN13: "9781948836531"
    },
    {
    name: "Digital Minimalist",
    Author: "Cal Newport",
    Started: new Date("2021-11-29"),
    Finished: new Date("2021-12-21"),
    Pages: 306,
    Vote: 1,
    ISBN13: "9780525536512"
    },
    {
    name: "Il Genio Non Esiste",
    Author: "Barbascura X",
    Started: new Date("2021-12-22"),
    Finished: new Date("2021-12-29"),
    Pages: 270,
    Vote: 5,
    ISBN13: "9788899684693"
    },
    {
    name: "Deep Work",
    Author: "Cal Newport",
    Started: new Date("2022-01-03"),
    Finished: new Date("2022-02-02"),
    Pages: 266,
    Vote: 3,
    ISBN13: "9780349411903"
    },
    {
    name: "Le 10 stanze del cervello",
    Author: "Marc Dingman",
    Started: new Date("2022-01-15"),
    Finished: new Date("2022-03-05"),
    Pages: 360,
    Vote: 5,
    ISBN13: "9781473696556"
    },
    {
    name: "La fisica del Diavolo",
    Author: "Jim Al-Khalili",
    Started: new Date("2022-03-27"),
    Finished: new Date("2022-04-04"),
    Pages: 252,
    Vote: 5,
    ISBN13: "9788833923123"
    },
    {
    name: "Immune. Viaggio nel sistema che ci tiene in vita",
    Author: "Philipp Dettmer",
    Started: new Date("2022-04-06"),
    Finished: new Date("2022-04-29"),
    Pages: 360,
    Vote: 5,
    ISBN13: "9781529360707"
    },
    {
    name: "Self Discipline Mindset",
    Author: "Curtis Leone",
    Started: new Date("2022-04-04"),
    Finished: new Date("2022-04-05"),
    Pages: 180,
    Vote: 1,
    ISBN13: "9781544660479"
    },
    {
    name: "The Molecule of More",
    Author: "Mike Long",
    Started: new Date("2022-04-30"),
    Finished: new Date("2022-05-26"),
    Pages: 360,
    Vote: 5,
    ISBN13: "1946885118"
    },
    {
    name: "La Scienza delle Verdure",
    Author: "Dario Bressanini",
    Started: new Date("2022-05-27"),
    Finished: new Date("2022-06-13"),
    Pages: 315,
    Vote: 3,
    ISBN13: "8858025199"
    },
    {
    name: "The Subtle Art of Not Giving a Fuck",
    Author: "Mark Manson",
    Started: new Date("2022-06-13"),
    Finished: new Date("2022-06-28"),
    Pages: 184,
    Vote: 1,
    ISBN13: "9780062457721"
    },
    {
    name: "L'Algoritmo e L'oracolo",
    Author: "Alessandro Vespignani",
    Started: new Date("2022-06-28"),
    Finished: new Date("2022-07-12"),
    Pages: 252,
    Vote: 1,
    ISBN13: "9788842825821"
    },
    {
    name: "Dopamine Nation",
    Author: "Anna Lembke",
    Started: new Date("2022-07-14"),
    Finished: new Date("2022-08-14"),
    Pages: 450,
    Vote: 3,
    ISBN13: "9781472294111"
    },
    {
    name: "Overcoming Gravity",
    Author: "Steven Low",
    Started: new Date("2022-08-25"),
    Finished: new Date("2022-09-21"),
    Pages: 450,
    Vote: 1,
    ISBN13: "9780990873853"
    },
    {
    name: "Fattore 1%",
    Author: "Luca Mazzucchelli",
    Started: new Date("2022-08-14"),
    Finished: new Date("2022-08-23"),
    Pages: 225,
    Vote: 1,
    ISBN13: "9788809948815"
    },
    {
    name: "Metodo mindfulness. 56 giorni alla felicità",
    Author: "Danny Penman",
    Started: new Date("2022-09-22"),
    Finished: new Date("2022-10-12"),
    Pages: 252,
    Vote: 1,
    ISBN13: "9788804659617"
    },
    {
    name: "L'ingegno e le Tenebre",
    Author: "Roberto Mercadini",
    Started: new Date("2022-10-15"),
    Finished: new Date("2022-12-06"),
    Pages: 360,
    Vote: 3,
    ISBN13: "9788817161718"
    },
    {
    name: "Sapiens, Da Animali a Dei",
    Author: "Yuval Noah Harari",
    Started: new Date("2022-12-06"),
    Finished: new Date("2023-01-25"),
    Pages: 450,
    Vote: 5,
    ISBN13: "9788845296499"
    },
    {
    name: "Le Droghe, In Sostanza",
    Author: "IlPost",
    Started: new Date("2023-01-27"),
    Finished: new Date("2023-02-16"),
    Pages: 270,
    Vote: 5,
    ISBN13: "8870919269"
    },
    {
    name: "Padre Ricco, Padre Povero",
    Author: "Robert Kiyosaki",
    Started: new Date("2023-06-01"),
    Finished: new Date("2023-06-12"),
    Pages: 315,
    Vote: 1,
    ISBN13: "8871527747"
    },
    {
    name: "Come smettere di farsi le seghe mentali e godersi la vita",
    Author: "Giulio Giacobbe",
    Started: new Date("2023-06-25"),
    Finished: new Date("2023-07-05"),
    Pages: 225,
    Vote: 1,
    ISBN13: "8862209975"
    },
    {
    name: "Fa bene o fa male? Manuale di autodifesa",
    Author: "Dario Bressanini",
    Started: new Date("2023-07-05"),
    Finished: new Date("2023-07-29"),
    Pages: 288,
    Vote: 3,
    ISBN13: "8804764872"
    },
    {
    name: "La Tempesta Imperfetta",
    Author: "Barbascura X",
    Started: new Date("2023-07-29"),
    Finished: new Date("2023-08-04"),
    Pages: 270,
    Vote: 3,
    ISBN13: "9791221202649"
    },
    {
    name: "Design Your Life",
    Author: "Bill Burnett",
    Started: new Date("2023-11-22"),
    Finished: new Date("2023-12-10"),
    Pages: 297,
    Vote: 5,
    ISBN13: "8817117935"
    },
    {
    name: "Your Erroneous Zones",
    Author: "Dr. Wayne W. Dyer",
    Started: new Date("2024-01-14"),
    Finished: new Date("2024-02-05"),
    Pages: 214,
    Vote: 5,
    ISBN13: "9780060919764"
    },
    {
    name: "How to Win At Chess",
    Author: "Levy Rozman",
    Started: new Date("2024-02-05"),
    Finished: new Date("2024-03-02"),
    Pages: 240,
    Vote: 5,
    ISBN13: "9781984862075"
    },
    {
    name: "Deep Work: Rules for Focused Success in a Distracted World",
    Author: "Cal Newport",
    Started: new Date("2024-03-02"),
    Finished: new Date("2024-03-31"),
    Pages: 199,
    Vote: 3,
    ISBN13: "978-0349411903"
    },
    {
    name: "Dopamine Detox: A Short Guide",
    Author: "Thibaut Meurisse",
    Started: new Date("2024-04-01"),
    Finished: new Date("2024-04-14"),
    Pages: 45,
    Vote: 1,
    ISBN13: "978-8525995179"
    },
    {
    name: "È facile smettere di fumare se sai come farlo",
    Author: "Allen Carr",
    Started: new Date("2024-04-20"),
    Finished: new Date("2024-06-13"),
    Pages: 175,
    Vote: 5,
    ISBN13: "978-8890123306"
    },
    {
    name: "Storia di mia vita",
    Author: "Janek Gorczyca",
    Started: new Date("2024-05-15"),
    Finished: new Date("2024-07-21"),
    Pages: 75,
    Vote: 5,
    ISBN13: "9788838946783"
    },
    {
    name: "Ultra learning",
    Author: "Scott Young",
    Started: new Date("2024-07-24"),
    Finished: new Date("2024-08-21"),
    Pages: 217,
    Vote: 5,
    ISBN13: "9780008305703"
    },
    {
    name: "Can't Hurt Me: Master Your Mind and Defy the Odds",
    Author: "David Goggins",
    Started: new Date("2024-08-21"),
    Finished: new Date("2024-09-08"),
    Pages: 220,
    Vote: 1,
    ISBN13: "9781544512280"
    },
    {
    name: "Software Engineering at Google",
    Author: "Titus Winters",
    Started: new Date("2024-09-29"),
    Finished: new Date("2025-02-02"),
    Pages: 800,
    Vote: 5,
    ISBN13: "9781492082798"
    },
    {
    name: "The Anxious Generation",
    Author: "Jonathan Haidt",
    Started: new Date("2025-02-04"),
    Finished: new Date("2025-04-13"),
    Pages: 330,
    Vote: 3,
    ISBN13: "9780593655030"
    },
    {
    name: "Slow Productivity",
    Author: "Cal Newport",
    Started: new Date("2025-04-19"),
    Finished: new Date("2025-05-17"),
    Pages: 220,
    Vote: 1,
    ISBN13: "9780593544853"
    },
    {
    name: "Giocati dal caso",
    Author: "Nassim Taleb",
    Started: new Date("2025-05-19"),
    Finished: new Date("2025-06-08"),
    Pages: 230,
    Vote: 5,
    ISBN13: "9788842820239"
    },
    {
    name: "How to Take Smart Note",
    Author: "Sönke Ahrens",
    Started: new Date("2025-06-13"),
    Finished: new Date("2025-07-15"),
    Pages: 160,
    Vote: 3,
    ISBN13: "9781542866507"
    },
    {
    name: "Algorithms to Live By",
    Author: "Award nominee",
    Started: new Date("2025-07-20"),
    Finished: new Date("2025-09-01"),
    Pages: 330,
    Vote: 3,
    ISBN13: "9781627790369"
    },
    {
    name: "Wohpe",
    Author: "Salvatore Sanfilippo",
    Started: new Date("2025-09-01"),
    Finished: new Date("2025-09-07"),
    Pages: 225,
    Vote: 3,
    ISBN13: "9791280845115"
    },
    {
    name: "So Good They Can't Ignore You",
    Author: "Cal Newport",
    Started: new Date("2025-09-19"),
    Finished: new Date("2025-11-06"),
    Pages: 240,
    Vote: 1,
    ISBN13: "9781455509126"
    },  
]