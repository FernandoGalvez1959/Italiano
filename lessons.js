/* Contenido del curso: Italiano Básico A1 (8 lecciones) */
window.APP = {
  id: "italiano-basico-a1",
  langName: "italiano",
  speechLang: "it-IT",
  voicePrefix: "it",
  contractions: false,
  LESSONS: [

  /* ---------- 1 ---------- */
  { title: "Saludos y presentarse",
    intro: "Aprende a saludar, despedirte y decir tu nombre.",
    items: [
      ["Buongiorno", "buon-yór-no", "Buenos días"],
      ["Buonasera", "buo-na-sé-ra", "Buenas tardes / noches (al llegar)"],
      ["Ciao", "chao", "Hola / adiós (con amigos)"],
      ["Arrivederci", "a-rri-ve-dér-chi", "Adiós"],
      ["Grazie", "grá-tsie", "Gracias"],
      ["Per favore", "per fa-vó-re", "Por favor"],
      ["Mi chiamo Fer", "mi quiá-mo Fer", "Me llamo Fer"],
      ["Come si chiama?", "có-me si quiá-ma", "¿Cómo se llama usted?"],
      ["Piacere", "pia-ché-re", "Encantado"],
      ["Come sta?", "có-me sta", "¿Cómo está usted?"],
      ["Sto bene, grazie", "sto bé-ne grá-tsie", "Estoy bien, gracias"],
      ["E Lei?", "e léi", "¿Y usted?"],
      ["Buonanotte", "buo-na-nót-te", "Buenas noches (al acostarse)"]
    ],
    tips: [
      "<b>Tú y usted.</b> Con familia y amigos se dice <b>tu</b> (<b>Come stai?</b>); con desconocidos y personas mayores, <b>Lei</b> (usted) (<b>Come sta?</b>). Ante la duda, usa siempre <b>Lei</b>.",
      "<b>La «c» delante de «e» o «i»</b> suena «ch»: <b>ciao</b> = «chao», <b>arrivederci</b> = «a-rri-ve-dér-chi».",
      "Las vocales suenan como en español. Las consonantes dobles se alargan un poco: <b>buonanotte</b>."
    ],
    dialogs: [
      { title: "Primer encuentro", lines: [
        ["Buongiorno! Mi chiamo Maria.", "¡Buenos días! Me llamo Maria."],
        ["Buongiorno Maria! Mi chiamo Fer.", "¡Buenos días, Maria! Me llamo Fer."],
        ["Piacere!", "¡Encantada!"],
        ["Piacere!", "¡Encantado!"]
      ]},
      { title: "¿Cómo está usted?", lines: [
        ["Buonasera, come sta?", "Buenas tardes, ¿cómo está usted?"],
        ["Sto bene, grazie. E Lei?", "Estoy bien, gracias. ¿Y usted?"],
        ["Molto bene, grazie.", "Muy bien, gracias."],
        ["Arrivederci!", "¡Adiós!"]
      ]}
    ]
  },

  /* ---------- 2 ---------- */
  { title: "Pronunciación y letras",
    intro: "Los sonidos del italiano que conviene practicar.",
    items: [
      ["ciao", "chao", "hola / adiós"],
      ["cena", "ché-na", "cena"],
      ["gelato", "ye-lá-to", "helado"],
      ["giorno", "yór-no", "día"],
      ["chiave", "quiá-ve", "llave"],
      ["gnocchi", "ñó-qui", "ñoquis"],
      ["famiglia", "fa-mí-lla", "familia"],
      ["pesce", "pé-she", "pescado"],
      ["pizza", "pí-tsa", "pizza"],
      ["spaghetti", "spa-gué-ti", "espaguetis"],
      ["Come si scrive?", "có-me si scrí-ve", "¿Cómo se escribe?"],
      ["Può ripetere, per favore?", "pue ri-pé-te-re per fa-vó-re", "¿Puede repetir, por favor?"],
      ["Più lentamente, per favore", "piu len-ta-mén-te per fa-vó-re", "Más despacio, por favor"]
    ],
    tips: [
      "<b>«c» y «g» suaves:</b> delante de <b>e</b> o <b>i</b>, la <b>c</b> suena «ch» (<b>cena</b> = «ché-na») y la <b>g</b> suena «y» suave (<b>gelato</b> = «ye-lá-to»). Delante de a, o, u suenan duras, como en español: <b>casa</b>, <b>gatto</b>.",
      "<b>Para endurecerlas</b> delante de e/i se añade una <b>h</b>: <b>chi</b> = «qui», <b>che</b> = «que», <b>ghi</b> = «gui», <b>ghe</b> = «gue». <b>chiave</b> = «quiá-ve».",
      "<b>Combinaciones:</b> <b>gn</b> = «ñ» (<b>gnocchi</b>) · <b>gli</b> = «lli» suave (<b>famiglia</b>) · <b>sc</b> + e/i = «sh» (<b>pesce</b>) · <b>z</b> = «ts» (<b>pizza</b>).",
      "<b>Letras mudas y dobles:</b> la <b>h</b> nunca suena. Las consonantes dobles se pronuncian más largas: no es lo mismo <b>sete</b> (sed) que <b>sette</b> (siete).",
      "<b>Alfabeto:</b> A (a) B (bi) C (chi) D (di) E (e) F (é-fe) G (yi) H (ak-ka) I (i) L (é-le) M (é-me) N (é-ne) O (o) P (pi) Q (cu) R (é-rre) S (é-se) T (ti) U (u) V (vu) Z (dsé-ta). Solo en palabras extranjeras: J (i lún-ga) K (cap-pa) W (vu dop-pia) X (iks) Y (í-psi-lon)."
    ],
    dialogs: [
      { title: "Deletrear un nombre", lines: [
        ["Come si scrive?", "¿Cómo se escribe?"],
        ["Fer: effe, e, erre.", "Fer: efe, e, erre."],
        ["Può ripetere, per favore?", "¿Puede repetir, por favor?"],
        ["Più lentamente, per favore.", "Más despacio, por favor."]
      ]}
    ]
  },

  /* ---------- 3 ---------- */
  { title: "Números del 0 al 20",
    intro: "Contar, decir tu edad y pedir un número de teléfono.",
    items: [
      ["zero", "dsé-ro", "cero"],
      ["uno", "ú-no", "uno"],
      ["due", "dúe", "dos"],
      ["tre", "tre", "tres"],
      ["quattro", "cuát-tro", "cuatro"],
      ["cinque", "chín-cue", "cinco"],
      ["sei", "séi", "seis"],
      ["sette", "sét-te", "siete"],
      ["otto", "ót-to", "ocho"],
      ["nove", "nó-ve", "nueve"],
      ["dieci", "dié-chi", "diez"],
      ["undici", "ún-di-chi", "once"],
      ["dodici", "dó-di-chi", "doce"],
      ["tredici", "tré-di-chi", "trece"],
      ["quattordici", "cuat-tór-di-chi", "catorce"],
      ["quindici", "cuín-di-chi", "quince"],
      ["sedici", "sé-di-chi", "dieciséis"],
      ["diciassette", "di-chas-sét-te", "diecisiete"],
      ["diciotto", "di-chót-to", "dieciocho"],
      ["diciannove", "di-chan-nó-ve", "diecinueve"],
      ["venti", "vén-ti", "veinte"],
      ["Ho venti anni", "o vén-ti án-ni", "Tengo veinte años"],
      ["Quanti anni ha?", "cuán-ti án-ni a", "¿Cuántos años tiene usted?"]
    ],
    tips: [
      "<b>Del 11 al 16</b> terminan en <b>-dici</b>: <b>undici, dodici, tredici, quattordici, quindici, sedici</b>. <b>Del 17 al 19</b> se dice «diez y siete…»: <b>diciassette, diciotto, diciannove</b>.",
      "<b>La edad usa «tener»:</b> <b>Ho venti anni</b> = «tengo veinte años». Nunca «sono venti anni».",
      "<b>sei</b> significa «seis» y también «eres» (<b>tu sei</b>). Por el contexto sabrás cuál es."
    ],
    dialogs: [
      { title: "Preguntar la edad", lines: [
        ["Quanti anni ha?", "¿Cuántos años tiene usted?"],
        ["Ho quindici anni. E Lei?", "Tengo quince años. ¿Y usted?"],
        ["Ho diciotto anni.", "Tengo dieciocho años."]
      ]},
      { title: "Contar", lines: [
        ["Uno, due, tre, quattro, cinque.", "Uno, dos, tres, cuatro, cinco."],
        ["Sei, sette, otto, nove, dieci.", "Seis, siete, ocho, nueve, diez."]
      ]}
    ]
  },

  /* ---------- 4 ---------- */
  { title: "Género y artículos",
    intro: "En italiano todos los nombres son masculinos o femeninos: aprende cada palabra con su artículo.",
    items: [
      ["il libro", "il lí-bro", "el libro"],
      ["la casa", "la cá-sa", "la casa"],
      ["l’amico", "la-mí-co", "el amigo"],
      ["l’amica", "la-mí-ca", "la amiga"],
      ["lo studente", "lo stu-dén-te", "el estudiante"],
      ["i libri", "i lí-bri", "los libros"],
      ["le case", "le cá-se", "las casas"],
      ["gli amici", "li a-mí-chi", "los amigos"],
      ["un libro", "un lí-bro", "un libro"],
      ["una casa", "u-na cá-sa", "una casa"],
      ["un’amica", "u-na-mí-ca", "una amiga"],
      ["il gatto", "il gát-to", "el gato"],
      ["il tavolo", "il tá-vo-lo", "la mesa"],
      ["È un libro", "e un lí-bro", "Es un libro"],
      ["È una casa", "e u-na cá-sa", "Es una casa"]
    ],
    tips: [
      "<b>El (masculino):</b> <b>il</b> delante de consonante · <b>lo</b> delante de «s + consonante» o «z» (<b>lo studente</b>, <b>lo zaino</b>) · <b>l’</b> delante de vocal (<b>l’amico</b>). <b>La (femenino):</b> <b>la</b> o <b>l’</b> delante de vocal (<b>l’amica</b>).",
      "<b>Un / una:</b> <b>un</b> (<b>un libro</b>, <b>un amico</b>) · <b>uno</b> (<b>uno studente</b>) · <b>una</b> (<b>una casa</b>) · <b>un’</b> (<b>un’amica</b>).",
      "<b>Plural:</b> <b>-o → -i</b> (libro → libri) · <b>-a → -e</b> (casa → case) · <b>-e → -i</b>. Los artículos plurales son <b>i</b> (masc.), <b>gli</b> (masc. delante de vocal o s+consonante) y <b>le</b> (fem.).",
      "Regla para empezar: casi todos los nombres en <b>-a</b> son femeninos y en <b>-o</b> masculinos."
    ],
    dialogs: [
      { title: "¿Qué es esto?", lines: [
        ["È un libro?", "¿Es un libro?"],
        ["No, è un tavolo.", "No, es una mesa."],
        ["E questo? È un gatto?", "¿Y esto? ¿Es un gato?"],
        ["Sì, è il gatto del mio amico.", "Sí, es el gato de mi amigo."]
      ]}
    ]
  },

  /* ---------- 5 ---------- */
  { title: "Ser y tener: essere y avere",
    intro: "Los dos verbos más importantes del italiano: te servirán en cada frase.",
    items: [
      ["Sono spagnolo", "só-no spa-ñó-lo", "Soy español"],
      ["Sei contento", "séi con-tén-to", "Estás contento"],
      ["È stanco", "e stán-co", "Él está cansado"],
      ["Lei è italiana", "léi e i-ta-liá-na", "Ella es italiana"],
      ["Siamo qui", "siá-mo cuí", "Estamos aquí"],
      ["Siete pronti", "sié-te prón-ti", "Estáis listos"],
      ["Loro sono a casa", "ló-ro só-no a cá-sa", "Ellos están en casa"],
      ["Ho trent’anni", "o tren-tán-ni", "Tengo treinta años"],
      ["Hai un fratello", "ái un fra-tél-lo", "Tienes un hermano"],
      ["Ha una macchina", "a u-na mák-ki-na", "Él tiene un coche"],
      ["Abbiamo fame", "ab-biá-mo fá-me", "Tenemos hambre"],
      ["Avete ragione", "a-vé-te ra-yó-ne", "Tenéis razón"],
      ["Hanno sete", "án-no sé-te", "Tienen sed"]
    ],
    tips: [
      "<b>essere</b> (ser / estar): io <b>sono</b> · tu <b>sei</b> · lui/lei <b>è</b> · noi <b>siamo</b> · voi <b>siete</b> · loro <b>sono</b>.",
      "<b>avere</b> (tener): io <b>ho</b> · tu <b>hai</b> · lui/lei <b>ha</b> · noi <b>abbiamo</b> · voi <b>avete</b> · loro <b>hanno</b>. La <b>h</b> es muda: <b>ho</b> suena «o».",
      "En italiano se <b>tiene</b> hambre, sed, razón y años: <b>ho fame</b>, <b>ho sete</b>, <b>ho ragione</b>, <b>ho trent’anni</b>.",
      "Casi nunca se dice el pronombre: <b>Sono stanco</b>, no «Io sono stanco». Con <b>è</b> (con acento) = «es»; <b>e</b> (sin acento) = «y»."
    ],
    dialogs: [
      { title: "Presentarse", lines: [
        ["Lei è italiano?", "¿Es usted italiano?"],
        ["No, sono spagnolo. E Lei?", "No, soy español. ¿Y usted?"],
        ["Io sono italiano. Ho un fratello a Madrid.", "Yo soy italiano. Tengo un hermano en Madrid."]
      ]},
      { title: "Hambre y sed", lines: [
        ["Hai fame?", "¿Tienes hambre?"],
        ["Sì, e ho anche sete.", "Sí, y también tengo sed."],
        ["Abbiamo pane e acqua.", "Tenemos pan y agua."]
      ]}
    ]
  },

  /* ---------- 6 ---------- */
  { title: "La familia y los posesivos",
    intro: "Habla de tu familia con mio, mia, miei y nostro.",
    items: [
      ["mio padre", "mí-o pá-dre", "mi padre"],
      ["mia madre", "mí-a má-dre", "mi madre"],
      ["mio fratello", "mí-o fra-tél-lo", "mi hermano"],
      ["mia sorella", "mí-a so-ré-lla", "mi hermana"],
      ["i miei genitori", "i mié-i ye-ni-tó-ri", "mis padres"],
      ["mio figlio", "mí-o fí-llo", "mi hijo"],
      ["mia figlia", "mí-a fí-lla", "mi hija"],
      ["mio nonno", "mí-o nón-no", "mi abuelo"],
      ["mia nonna", "mí-a nón-na", "mi abuela"],
      ["mio marito", "mí-o ma-rí-to", "mi marido"],
      ["mia moglie", "mí-a mó-llie", "mi mujer"],
      ["la nostra famiglia", "la nós-tra fa-mí-lla", "nuestra familia"],
      ["Ecco la mia famiglia", "éc-co la mí-a fa-mí-lla", "Esta es mi familia"]
    ],
    tips: [
      "<b>Mi:</b> <b>mio</b> (masc.) · <b>mia</b> (fem.) · <b>miei</b> (masc. plural) · <b>mie</b> (fem. plural). Igual con <b>tuo / tua</b> (tu) y <b>suo / sua</b> (su).",
      "<b>Sin artículo con un familiar en singular:</b> <b>mia madre</b>, <b>mio fratello</b>. Con el plural y con cosas, sí: <b>i miei genitori</b>, <b>il mio libro</b>, <b>la mia casa</b>.",
      "El posesivo concuerda con la cosa poseída, no con quien la posee: <b>suo padre</b> es «su padre» (de él o de ella).",
      "<b>Nuestro:</b> <b>nostro / nostra</b> · <b>Vuestro:</b> <b>vostro / vostra</b> · <b>Su (de ellos):</b> <b>loro</b> (no cambia)."
    ],
    dialogs: [
      { title: "Mi familia", lines: [
        ["Ecco la mia famiglia.", "Esta es mi familia."],
        ["È tuo padre?", "¿Es tu padre?"],
        ["Sì, e questi sono mia madre e i miei fratelli.", "Sí, y estos son mi madre y mis hermanos."]
      ]},
      { title: "Preguntar por la familia", lines: [
        ["Ha figli?", "¿Tiene usted hijos?"],
        ["Sì, ho un figlio e una figlia.", "Sí, tengo un hijo y una hija."],
        ["E sua moglie?", "¿Y su mujer?"],
        ["Mia moglie è a casa.", "Mi mujer está en casa."]
      ]}
    ]
  },

  /* ---------- 7 ---------- */
  { title: "Verbos en -are y negación",
    intro: "Hablar, vivir, comer, mirar… y cómo decir que no.",
    items: [
      ["Parlo italiano", "pár-lo i-ta-liá-no", "Hablo italiano"],
      ["Parli spagnolo", "pár-li spa-ñó-lo", "Hablas español"],
      ["Lei abita a Gijón", "léi á-bi-ta a ji-jón", "Ella vive en Gijón"],
      ["Mangiamo il pane", "man-yá-mo il pá-ne", "Comemos pan"],
      ["Guardano la televisione", "guár-da-no la te-le-vi-sió-ne", "Ellos miran la tele"],
      ["Mi piace il caffè", "mi piá-che il caf-fé", "Me gusta el café"],
      ["Le piace il caffè?", "le piá-che il caf-fé", "¿Le gusta el café?"],
      ["Non mi piace il tè", "non mi piá-che il té", "No me gusta el té"],
      ["Non parlo francese", "non pár-lo fran-ché-se", "No hablo francés"],
      ["Non mangio carne", "non mán-yo cár-ne", "No como carne"],
      ["Parla spagnolo?", "pár-la spa-ñó-lo", "¿Habla usted español?"],
      ["Abita qui?", "á-bi-ta cuí", "¿Vive usted aquí?"],
      ["Non capiamo", "non ca-piá-mo", "No entendemos"]
    ],
    tips: [
      "<b>Verbos en -are.</b> Quita <b>-are</b> y añade: <b>-o, -i, -a, -iamo, -ate, -ano</b>. <b>parlare</b>: io parl<b>o</b> · tu parl<b>i</b> · lui/lei parl<b>a</b> · noi parl<b>iamo</b> · voi parl<b>ate</b> · loro parl<b>ano</b>.",
      "<b>Negación:</b> pon <b>non</b> delante del verbo: <b>Non parlo francese</b>. Es más fácil que en francés: una sola palabra.",
      "<b>Preguntas fáciles:</b> es la misma frase con entonación de pregunta: <b>Parla spagnolo?</b>, sin cambiar el orden.",
      "<b>Gustar:</b> <b>mi piace</b> + singular (<b>mi piace il caffè</b>); <b>mi piacciono</b> + plural (<b>mi piacciono i gatti</b>). Con usted: <b>Le piace…?</b>"
    ],
    dialogs: [
      { title: "¿Dónde vive usted?", lines: [
        ["Abita qui?", "¿Vive usted aquí?"],
        ["Sì, abito a Gijón. E Lei?", "Sí, vivo en Gijón. ¿Y usted?"],
        ["Io abito a Roma. Parlo un po’ di spagnolo.", "Yo vivo en Roma. Hablo un poco de español."]
      ]},
      { title: "Gustos", lines: [
        ["Le piace il caffè?", "¿Le gusta el café?"],
        ["No, non mi piace il caffè. Mi piace il tè.", "No, no me gusta el café. Me gusta el té."],
        ["Io non mangio carne.", "Yo no como carne."]
      ]}
    ]
  },

  /* ---------- 8 ---------- */
  { title: "En el café y frases útiles",
    intro: "Con estas frases te defiendes en un bar, un restaurante o una tienda.",
    items: [
      ["Vorrei un caffè", "vo-rréi un caf-fé", "Quisiera un café"],
      ["Un tè, per favore", "un té per fa-vó-re", "Un té, por favor"],
      ["Acqua, per favore", "á-cua per fa-vó-re", "Agua, por favor"],
      ["Un cornetto", "un cor-nét-to", "Un cruasán"],
      ["Il conto, per favore", "il cón-to per fa-vó-re", "La cuenta, por favor"],
      ["Quanto costa?", "cuán-to cós-ta", "¿Cuánto cuesta?"],
      ["Dov’è il bagno?", "do-vé il bá-ño", "¿Dónde está el baño?"],
      ["Non capisco", "non ca-pís-co", "No entiendo"],
      ["Mi scusi", "mi skú-si", "Disculpe"],
      ["Prego", "pré-go", "De nada / adelante"],
      ["Con piacere", "con pia-ché-re", "Con mucho gusto"],
      ["È delizioso", "e de-li-tsió-so", "Está delicioso"]
    ],
    tips: [
      "<b>Pedir con educación:</b> usa <b>Vorrei…</b> («quisiera…») y termina con <b>per favore</b>.",
      "<b>Si no entiendes</b> algo, di con calma: <b>Può ripetere, per favore?</b>",
      "Para llamar la atención del camarero: <b>Scusi, signore</b> / <b>signora</b>.",
      "<b>Costumbre italiana:</b> el <b>cappuccino</b> se toma por la mañana; después de comer se pide un <b>caffè</b> (un espresso corto)."
    ],
    dialogs: [
      { title: "En el bar", lines: [
        ["Buongiorno! Vorrei un caffè, per favore.", "¡Buenos días! Quisiera un café, por favor."],
        ["Ecco! Altro?", "¡Aquí tiene! ¿Algo más?"],
        ["Un cornetto, per favore.", "Un cruasán, por favor."],
        ["Va bene. Sono quattro euro.", "Muy bien. Son cuatro euros."]
      ]},
      { title: "Pedir la cuenta", lines: [
        ["Scusi, il conto, per favore.", "Disculpe, la cuenta, por favor."],
        ["Ecco, signore.", "Aquí tiene, señor."],
        ["Grazie. È delizioso!", "Gracias. ¡Está delicioso!"],
        ["Prego. Arrivederci!", "De nada. ¡Adiós!"]
      ]}
    ]
  }

  ]
};
