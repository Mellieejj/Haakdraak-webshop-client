import {images} from "./images";

const categories = {
  rammelaar: {
    id: "c0",
    name: "Bijtringen & Rammelaars",
  },
  babyOverig: {
    id: "c1",
    name: "Baby Overige",
  },
  knuffels: {
    id: "c2",
    name: "Knuffels",
  },
  sleutelhangers: {
    id: "c3",
    name: "Sleutelhangers",
  },
  overige: {
    id: "c4",
    name: "Overige",
  },
};

export const products = [
  {
    id: 0,
    name: "Bijtring/Rammelaar Aap Abel",
    price: "12.50",
    description:
      "Houten bijtring van een apenkop met een rammelkraal erin. Deze aap is gemaakt van zacht knuffelgaren en katoengaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optional:
      "De rammelkraal kan vervangen worden door een pieper in de neus. Zonder geluid is natuurlijk ook mogelijk. De oogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.rammelaar,
    images: images.filter((image) => image.productId === 0),
    page: 1,
  },
  {
    id: 1,
    name: "Bijtring/Rammelaar Vos",
    price: "12.50",
    description:
      "Houten bijtring van een vos met een staart. In het hoofdje zit een rammelkraal. Deze vos is gemaakt van katoengaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optional:
      "De rammelkraal kan vervangen worden door een pieper in de staart. Zonder geluid is natuurlijk ook mogelijk. De oogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.rammelaar,
    images: images.filter((image) => image.productId === 1),
    page: 1,
  },
  {
    id: 2,
    name: "Bijtring/Rammelaar Wasbeer",
    price: "12.50",
    description:
      "Houten bijtring van een wasbeer. In het hoofdje zit een rammelkraal. Deze wasbeer is gemaakt van katoengaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optional:
      "Deze is heel makkelijk te veranderen naar een rode panda, door de kleuren aanpassen naar oranjerood. Zonder geluid is natuurlijk ook mogelijk. De oogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.rammelaar,
    images: images.filter((image) => image.productId === 2),
    page: 1,
  },
  {
    id: 3,
    name: "Speenknuffel Draak",
    price: "15.00",
    description:
      "Dit is een plat knuffeltje, waar de kleinste graag mee knuffelen en ze raken niet meer zo makkelijk het speentje kwijt. Het speentje wordt bevestigd door om het handje te vouwen en het drukkertje dicht te doen. Deze is gemaakt van zacht knuffelgaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
    size: "18cm",
    optional:
      "Er kan een leuk knisper geluidje aan toegevoegd worden in het lijfje. De oogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.babyOverig,
    images: images.filter((image) => image.productId === 3),
    page: 1,
  },
  {
    id: 4,
    name: "Speenkoord Giraf",
    price: "12.50",
    description:
      "Speenkoord om een speentje aan te bevestigen. Het lusje is van waxkoord gemaakt, er zit een mooie houten speenclip op. De giraf is gehaakt met katoen",
    size: "18cm",
    optional:
      "Er kan een rammel geluidje aan toegevoegd worden in het hoofdje.",
    stock: 0,
    category: categories.babyOverig,
    images: images.filter((image) => image.productId === 4),
    page: 1,
  },
  {
    id: 5,
    name: "Sleutelhanger Smileypoppetje",
    price: "2.50",
    description:
      "Vrolijke sleutelhanger met een houten smileykraal, in het lijfje is gehaakt met katoen, er zit een houten kraal in. In bijna alle kleuren mogelijk! Vermeld bij de opmerkingen even de kleur die je wilt.",
    size: "4cm",
    optional: "Musketonhaakje kan vervangen worden door een sleutelring.",
    stock: 9,
    category: categories.sleutelhangers,
    images: images.filter((image) => image.productId === 5),
    page: 1,
  },
  {
    id: 6,
    name: "Sleutelhanger Eend",
    price: "7.50",
    description:
      "Sleutelhanger Eend gehaakt met katoengaren. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "9cm",
    optional:
      "Musketonhaakje kan vervangen worden door een sleutelring. Veiligheidsoogjes kunnen vervangen worden door geborduurde ^ ^ of | | oogjes.",
    stock: 0,
    category: categories.sleutelhangers,
    images: images.filter((image) => image.productId === 6),
    page: 1,
  },
  {
    id: 7,
    name: "Sleutelhanger Pinguin",
    price: "7.50",
    description:
      "Sleutelhanger Pinguin gehaakt met katoengaren. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "7cm",
    optional:
      "Musketonhaakje kan vervangen worden door een sleutelring. Veiligheidsoogjes kunnen vervangen worden door geborduurde ^ ^ of | | oogjes.",
    stock: 1,
    category: categories.sleutelhangers,
    images: images.filter((image) => image.productId === 7),
    page: 1,
  },
  {
    id: 8,
    name: "Knuffeldoekje Draak",
    price: "20.00",
    description:
      "Dit knuffeldoekje is gehaakt met zacht knuffelgaren. Het doekje is ongeveer 35 x 35 cm. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "35cm",
    optional:
      "Geluidjes, zoals piepertje of rammelkraal kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 1,
    category: categories.babyOverig,
    images: images.filter((image) => image.productId === 8),
    page: 1,
  },
  {
    id: 9,
    name: "Speenknuffel Aap",
    price: "15.00",
    description:
      "Dit is een plat knuffeltje, waar de kleinste graag mee knuffelen en ze raken niet meer zo makkelijk het speentje kwijt. Het speentje wordt bevestigd door het handje om te vouwen en het drukkertje dicht te doen. Deze is gemaakt van zacht knuffelgaren en katoen. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "18cm",
    optional:
      "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.babyOverig,
    images: images.filter((image) => image.productId === 9),
    page: 1,
  },
  {
    id: 10,
    name: "Speenknuffel Konijn",
    price: "15.00",
    description:
      "Dit is een plat knuffeltje, waar de kleinste graag mee knuffelen en ze raken niet meer zo makkelijk het speentje kwijt. Het speentje wordt bevestigd door het handje om te vouwen en het drukkertje dicht te doen. Deze is gemaakt van zacht knuffelgaren en katoen. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "18cm",
    optional:
      "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.babyOverig,
    images: images.filter((image) => image.productId === 10),
    page: 1,
  },
  {
    id: 11,
    name: "Bijtring/Rammelaar Koala",
    price: "12.50",
    description:
      "Bijtring van een koala met een rammelkraal erin. Deze koala is gemaakt van katoengaren, in de oortjes die een klein stukje zacht knuffelgaren. De bijtring is van hout. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "10cm",
    optional:
      "Zonder geluid is natuurlijk ook mogelijk. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.rammelaar,
    images: images.filter((image) => image.productId === 11),
    page: 1,
  },
  {
    id: 12,
    name: "Bijtring/Rammelaar Koe",
    price: "12.50",
    description:
      "Bijtring van een koeienkop met een rammelkraal erin. Deze koe is gemaakt van zacht knuffelgaren en katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optional:
      "De rammelkraal kan ook vervangen worden door een pieper in de neus. Zonder geluid is natuurlijk ook mogelijk. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.rammelaar,
    images: images.filter((image) => image.productId === 12),
    page: 1,
  },
  {
    id: 13,
    name: "Bijtring/Rammelaar Draak",
    price: "12.50",
    description:
      "Bijtring van een draak met een staart. Er zit een rammeltje in de staart. Deze stoere draak is gemaakt van katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optional:
      "Het rammeltje kan vervangen worden voor een piepertje in de staart. Zonder geluid is natuurlijk ook mogelijk. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.rammelaar,
    images: images.filter((image) => image.productId === 13),
    page: 1,
  },
  {
    id: 14,
    name: "Bijtring/Rammelaar Eenhoorn",
    price: "12.50",
    description:
      "Bijtring van een eenhoorn hoofd met een rammelkraal erin. Deze eenhoorn is gemaakt van katoengaren met veel vrolijke kleurtjes, de bijtring is van hout. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optional:
      "Zonder geluid is natuurlijk ook mogelijk. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.rammelaar,
    images: images.filter((image) => image.productId === 14),
    page: 1,
  },
  {
    id: 15,
    name: "Bijtring/Rammelaar Triceratops",
    price: "12.50",
    description:
      "Bijtring van een  triceratops hoofd met een rammelkraal erin. Deze triceratops is gemaakt van katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optional:
      "Zonder geluid is natuurlijk ook mogelijk. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.rammelaar,
    images: images.filter((image) => image.productId === 15),
    page: 1,
  },
  {
    id: 16,
    name: "Bijtring/Rammelaar Pinguin met vis",
    price: "12.50",
    description:
      "Bijtring van een pinguïn met een vis bijtring vast. Er zit een rammelkraal in. Deze pinguïn is gemaakt van katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "10cm",
    optional:
      "Zonder geluid is natuurlijk ook mogelijk. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.rammelaar,
    images: images.filter((image) => image.productId === 16),
    page: 2,
  },
  {
    id: 17,
    name: "Bijtring/Rammelaar Zeepaardje",
    price: "9.95",
    description:
      "Bijtring van een zeepaardje met een rammelkraal erin. Dit zeepaardje is gemaakt van dikker katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optional:
      "Zonder geluid is natuurlijk ook mogelijk. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.rammelaar,
    images: images.filter((image) => image.productId === 17),
    page: 2,
  },
  {
    id: 18,
    name: "Giraf bijtring met kralen",
    price: "12.50",
    description:
      "Giraf bijtring met slierten met kralen, een omhaakte rammelkraal en 2 houten ringetjes. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralenketting is goed bevestigd met waxkoord.",
    size: "15cm",
    optional:
      "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt. De giraf is ook mogelijk met kralenketting. Zonder geluid is een optie.",
    stock: 1,
    category: categories.rammelaar,
    page: 2,
    images: images.filter((image) => image.productId === 18),
  },
  {
    id: 19,
    name: "Bijtring/Rammelaar Leeuw",
    price: "12.50",
    description:
      "Houten bijtring met een leeuw. In zijn lijf zit een rammelkraal. Deze leeuw is gemaakt van katoengaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optional:
      "Zonder geluid is natuurlijk ook mogelijk. De oogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 1,
    category: categories.rammelaar,
    page: 2,
    images: images.filter((image) => image.productId === 19),
  },
  {
    id: 20,
    name: "Schaap bijtring met kralen",
    price: "17.50",
    description:
      "Schaap bijtring met twee kralenkettingen, een mooie bloem bijtring en een houten bijtring met de tekst 'Sweet Dreams' erop. Daarnaast zitten er kleine plastic ringetjes aan die leuke rammelen. Een aantal kralen is omhaakt met katoengaren, het schaap is van hout, de bloem is van plastic. De kralenkettingen zijn goed bevestigd met waxkoord.",
    size: "20cm",
    optional:
      "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt. De bloem bijtring en de kleine ringetjes kunnen ook in andere kleuren. Het schaap is ook mogelijk alleen met een kralenketting.",
    stock: 1,
    category: categories.rammelaar,
    page: 2,
    images: images.filter((image) => image.productId === 20),
  },
  {
    id: 21,
    name: "Nijlpaard bijtring met kralen",
    price: "12.50",
    description:
      "Nijlpaard bijtring met slierten met kralen, een omhaakte rammelkraal en 2 houten ringetjes. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralenketting is goed bevestigd met waxkoord.",
    size: "15cm",
    optional:
      "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt. Het nijlpaard is ook mogelijk met kralenketting. Zonder geluid is een optie.",
    stock: 0,
    category: categories.rammelaar,
    images: images.filter((image) => image.productId === 21),
    page: 2,
  },
  {
    id: 22,
    name: "Vos bijtring met kralen",
    price: "12.50",
    description:
      "Vos bijtring met een kralenketting en een plastic bloem bijtring. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralenketting is goed bevestigd met waxkoord.",
    size: "13cm",
    optional:
      "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt. De bloem bijtring kan ook in andere kleuren. De vos is ook mogelijk zonder de bloem bijtring.",
    stock: 0,
    category: categories.rammelaar,
    images: images.filter((image) => image.productId === 22),
    page: 2,
  },
  {
    id: 23,
    name: "Ster bijtring met kralen",
    price: "12.50",
    description:
      "Ster bijtring met een kralenketting en een plastic bloem bijtring. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralenketting is goed bevestigd met waxkoord.",
    size: "13cm",
    optional:
      "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt. De bloem bijtring kan ook in andere kleuren. De ster is ook mogelijk zonder de bloem bijtring.",
    stock: 1,
    category: categories.rammelaar,
    images: images.filter((image) => image.productId === 23),
    page: 2,
  },
  {
    id: 24,
    name: "Vlinder bijtring met kralen",
    price: "12.50",
    description:
      "Vlinder bijtring met een kralenketting en een plastic bloem bijtring. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralenketting is goed bevestigd met waxkoord.",
    size: "13cm",
    optional:
      "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt. De bloem bijtring kan ook in andere kleuren. De vlinder is ook mogelijk zonder de bloem bijtring.",
    stock: 1,
    category: categories.rammelaar,
    images: images.filter((image) => image.productId === 24),
    page: 2,
  },
  {
    id: 25,
    name: "Cupcake bijtring met kralen",
    price: "9.95",
    description:
      "Cupcake bijtring met een kralenketting. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralenketting is goed bevestigd met waxkoord.",
    size: "9cm",
    optional:
      "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt.",
    stock: 0,
    category: categories.rammelaar,
    page: 2,
    images: images.filter((image) => image.productId === 25),
  },
  {
    id: 26,
    name: "Pinguin bijtring met kralen",
    price: "9.95",
    description:
      "Pinguïn bijtring met een kralenketting. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralenketting is goed bevestigd met waxkoord.",
    size: "9cm",
    optional:
      "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt.",
    stock: 1,
    category: categories.rammelaar,
    page: 2,
    images: images.filter((image) => image.productId === 26),
  },
  {
    id: 27,
    name: "Dolfijn bijtring met kralen",
    price: "9.95",
    description:
      "Dolfijn bijtring met een kralenketting. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralenketting is goed bevestigd met waxkoord.",
    size: "9cm",
    optional:
      "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt.",
    stock: 0,
    category: categories.rammelaar,
    page: 2,
    images: images.filter((image) => image.productId === 27),
  },
  {
    id: 28,
    name: "Knuffeldoekje Aap",
    price: "15.00",
    description:
      "Dit knuffeldoekje is gehaakt met zacht knuffelgaren. Het doekje is ongeveer 30 x 30 cm. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "30cm",
    optional:
      "Geluidjes, zoals piepertje of rammelkraal kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.babyOverig,
    page: 2,
    images: images.filter((image) => image.productId === 28),
  },
  {
    id: 29,
    name: "Olifant bijtring met kralen",
    price: "9.95",
    description:
      "Olifant bijtring met een kralenketting. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralenketting is goed bevestigd met waxkoord.",
    size: "9cm",
    optional:
      "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt.",
    stock: 0,
    category: categories.rammelaar,
    page: 2,
    images: images.filter((image) => image.productId === 29),
  },
  {
    id: 30,
    name: "Dino bijtring met kralen",
    price: "9.95",
    description:
      "Dino bijtring met een kralenketting. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralenketting is goed bevestigd met waxkoord.",
    size: "9cm",
    optional:
      "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt.",
    stock: 1,
    category: categories.rammelaar,
    page: 2,
    images: images.filter((image) => image.productId === 30),
  },
  {
    id: 31,
    name: "Knisperende Konijnen Oren",
    price: "7.50",
    description:
      "Bijtring met knisperend konijnenoren. Deze konijnen oren zijn gemaakt van katoengaren, de bijtring is van hout.",
    size: "11cm",
    optional:
      "Het knisper kan vervangen worden door een piepertje, het oor wordt dan wel dikker. Zonder geluid is natuurlijk ook mogelijk. Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt.",
    stock: 1,
    category: categories.rammelaar,
    page: 2,
    images: images.filter((image) => image.productId === 31),
  },
  {
    id: 32,
    name: "Sleutelhanger Octopus",
    price: "5.00",
    description: "Sleutelhanger octopus gehaakt met katoengaren.",
    size: "6cm",
    optional:
      "Musketonhaakje kan vervangen worden door een sleutelring. Vermeld je bij de opmerkingen welke kleur je wilt.",
    stock: 2,
    category: categories.sleutelhangers,
    page: 3,
    images: images.filter((image) => image.productId === 32),
  },
  {
    id: 33,
    name: "Sleutelhanger Egel",
    price: "7.50",
    description: "Sleutelhanger Egel gehaakt met katoengaren.",
    size: "7cm",
    optional:
      "Musketonhaakje kan vervangen worden door een sleutelring. Vermeld je bij de opmerkingen als je een andere kleur wilt (en welke kleuren).",
    stock: 0,
    category: categories.sleutelhangers,
    page: 3,
    images: images.filter((image) => image.productId === 33),
  },
  {
    id: 34,
    name: "Zachte Aap",
    price: "15.00",
    description:
      "Knuffel aap, zachte knuffel om heerlijk mee te knuffelen. Deze aap is gemaakt van zacht knuffelgaren. Zittend is deze aap ongeveer 15cm groot, liggend is hij ongeveer 22cm. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant. Deze aap kan ik ook in een groter formaat maken, dan is hij zitten ongeveer 35cm. Als je de grotere variant wilt vermeld dit even in de opmerkingen bij je bestelling, prijs van de grotere aap is €25.00.",
    size: "15cm",
    optional:
      "Veiligheidsoogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 0,
    category: categories.knuffels,
    page: 3,
    images: images.filter((image) => image.productId === 34),
  },
  {
    id: 35,
    name: "Zachte Giraf",
    price: "25.00",
    description:
      "Knuffel giraf, zachte knuffel om heerlijk mee te knuffelen. Deze giraf is gemaakt van zacht knuffelgaren. Zittend is deze giraf ongeveer 35cm groot, liggend is hij ongeveer 40cm. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant. Deze giraf kan ik ook in een kleiner formaat maken, dan is hij zitten ongeveer 15cm. Als je de kleinere variant wilt vermeld dit even in de opmerkingen bij je bestelling.",
    size: "35cm",
    optional:
      "Veiligheidsoogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 0,
    category: categories.knuffels,
    page: 3,
    images: images.filter((image) => image.productId === 35),
  },
  {
    id: 36,
    name: "Knuffeldoekje Krokodil",
    price: "17.50",
    description:
      "Een knuffeldoekje met een stukje stof aan de binnenkant, in het lijfje zit een knispergeluid. Dit knuffeldoekje heeft een houten bijting aan een van de pootjes zitten. De krokodil is gehaakt van katoengaren. Van de kop tot en met de staart gemeten is dit knuffeldoekje ongeveer 25cm lang.",
    size: "25cm",
    optional:
      "Er kan een rammelkraal in het kopje gestopt worden, zonder knisper is ook mogelijk. De houten bijtring kan ook zonder tekst, of helemaal weggelaten worden.",
    stock: 0,
    category: categories.babyOverig,
    page: 3,
    images: images.filter((image) => image.productId === 36),
  },
  {
    id: 37,
    name: "Knuffeldoekje IJsbeer",
    price: "15.00",
    description:
      "Dit knuffeldoekje is gehaakt met zacht knuffelgaren. Het heeft een gevuld hoofdje met een plat lijfje. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "25cm",
    optional:
      "Geluidjes, zoals piepertje of rammelkraal kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.babyOverig,
    page: 3,
    images: images.filter((image) => image.productId === 37),
  },
  {
    id: 38,
    name: "Mobiel Koala",
    price: "25.00",
    description:
      "Deze slapende koala mobiel is leuk voor op de babykamer. De koala en de bladeren zijn gehaakt van katoengaren, hij ligt op een mooie houten ring. Er zit een visdraad lus aan om hem aan op te hangen.",
    size: "18cm",
    optional:
      "Geluidjes, rammelkraal of een muziekdoosje(+ €7.50) kan toegevoegd worden.",
    stock: 0,
    category: categories.babyOverig,
    page: 3,
    images: images.filter((image) => image.productId === 38),
  },
  {
    id: 39,
    name: "Draakje",
    price: "15.00",
    description:
      "Knuffel draakje, zacht knuffeltje om heerlijk mee te knuffelen. Dit draakje is gemaakt van zacht knuffelgaren. Zittend is dit draakje ongeveer 17cm groot, liggend is hij ongeveer 20cm. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant. Welke kleur heeft een draak eigenlijk?? Je eigen kleur keus is mogelijk, noem de kleur even in de opmerkingen bij je bestelling.",
    size: "17cm",
    optional:
      "Dit draakje is ook leuk in katoengaren. Verschillende kleuren mogelijk! Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 1,
    category: categories.knuffels,
    page: 3,
    images: images.filter((image) => image.productId === 39),
  },
  {
    id: 40,
    name: "Tutdoekje Olifant",
    price: "15.00",
    description:
      "Een tutdoekje olifant met een zachte rug en een katoene buik. In zijn buik zit knisper. De olifant is gehaakt van katoengaren en zacht knuffelgaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
    size: "20cm",
    optional:
      "Het knisper kan vervangen worden door een rammelkraal in het hoofdje. Zonder geluid is natuurlijk ook mogelijk. De veiligheidsoogjes kunnen vervangen worden door slapende geborduurde oogjes.",
    stock: 0,
    category: categories.babyOverig,
    page: 3,
    images: images.filter((image) => image.productId === 40),
  },
  {
    id: 41,
    name: "Tuimel Kikker",
    price: "20.00",
    description:
      "Een tuimelaar kikker, bij elke tuimel maakt de kikker geluid. De kikker is gehaakt van katoengaren, in de kikker zit een tuimelaar. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
    size: "13cm",
    optional:
      "De veiligheidsoogjes kunnen vervangen worden door slapende geborduurde oogjes.",
    stock: 1,
    category: categories.babyOverig,
    page: 3,
    images: images.filter((image) => image.productId === 41),
  },
  {
    id: 42,
    name: "Knuffeldoekje Eend",
    price: "17.50",
    description:
      "Een knuffeldoekje met een stukje stof aan de binnenkant.  De eend is gehaakt van katoengaren.",
    size: "23cm",
    optional:
      "Er kan een rammelkraal in het kopje gestopt worden en/of knisper in het lijf. Er kan een  houten bijtring aan bevestigd worden in plaats van een van de pootjes.",
    stock: 0,
    category: categories.babyOverig,
    page: 3,
    images: images.filter((image) => image.productId === 42),
  },
  {
    id: 43,
    name: "Speelkubus Leeuw",
    price: "32.50",
    description:
      "Aan deze speelkubus kunnen de kleintjes heel veel ontdekken. Er zitten verschillende geluiden in, piepertje in zijn voetje en rammeltjes in zijn manen, de houten ringetjes aan zijn staart rammelen als ze tegen elkaar komen. Met de spiegel valt veel te ontdekken, de plastic bijtring is leuk om op te bijten maar je kan hem op zijn bloemenhart doen.  Ik maak gebruik van veiligheidsoogjes en neusje deze bevestig ik ook goed aan de binnenkant. De kubus is 10x10 cm, de leeuw is ongeveer 12cm groot.",
    size: "12cm",
    optional:
      "Veiligheidsoogjes kunnen vervangen worden door slapende geborduurde oogjes, het neus kan vervangen worden door een geborduurd neusje. De plastic bijtring en bloem bijtring kunnen in andere kleuren. De kubus kan in verschillende kleuren gehaakt worden. Als je andere kleuren wilt laat dit dan even weten.",
    stock: 0,
    category: categories.babyOverig,
    page: 3,
    images: images.filter((image) => image.productId === 43),
  },
  {
    id: 44,
    name: "Speenknuffel Koe",
    price: "15.00",
    description:
      "Dit is een plat knuffeltje, waar de kleinste graag mee knuffelen en ze raken niet meer zo makkelijk het speentje kwijt. Het speentje wordt bevestigd door om het handje te vouwen en het drukkertje dicht te doen. Deze is gemaakt van zacht knuffelgaren en katoen. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "18cm",
    optional:
      "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.babyOverig,
    page: 3,
    images: images.filter((image) => image.productId === 44),
  },
  {
    id: 45,
    name: "Sleutelhanger Banaan",
    price: "7.50",
    description: "Sleutelhanger Banaan gehaakt met katoengaren.",
    size: "8cm",
    optional: "Musketonhaakje kan vervangen worden door een sleutelring.",
    stock: 1,
    category: categories.sleutelhangers,
    page: 3,
    images: images.filter((image) => image.productId === 45),
  },
  {
    id: 46,
    name: "Wagenhanger Krokodil",
    price: "17.50",
    description:
      "Leuk speeltje om mee te spelen in de box, auto, kinderwagen en maxi cosi. Heeft een stevige bevestigingsring die om veel dingen heen kan. Deze krokodil bestaat uit verschillende ringen als lijf, er zit een rammelring in het midden. Deze krokodil is gemaakt van katoengaren. In deze krokodil zit een plastic rammelring, houten kralen en houten ring bevestigd. Dus een hoop speelplezier. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "25cm",
    optional:
      "De rammelring kan vervangen worden voor een houten ring of gehaakte ring. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.babyOverig,
    page: 3,
    images: images.filter((image) => image.productId === 46),
  },
  {
    id: 47,
    name: "Piepspeeltje Giraf",
    price: "12.50",
    description:
      "Leuk piepspeeltje om mee te spelen.Deze giraf is gemaakt van zacht knuffelgaren en katoengaren. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "15cm",
    optional:
      "Het piepertje kan ook vervangen worden voor een rammelkraal. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.babyOverig,
    page: 3,
    images: images.filter((image) => image.productId === 47),
  },
  {
    id: 48,
    name: "Puzzelbal Leeuw",
    price: "17.50",
    description:
      "Een puzzelbal leeuw. Deze leeuw kan in 3 delen uit elkaar gehaald worden en ook weer in elkaar gepuzzeld worden. De leeuw is gehaakt van dikker katoengaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
    size: "15cm",
    optional: "",
    stock: 1,
    category: categories.overige,
    page: 4,
    images: images.filter((image) => image.productId === 48),
  },
  {
    id: 49,
    name: "Handpop Aap",
    price: "35.00",
    description:
      "Handpop Aap is leuk om mee te spelen, zowel voor groot als klein. Je hand past in de mond om die te laten bewegen. Ik maak gebruik van veiligheidsoogjes en neusje deze bevestig ik ook goed aan de binnenkant.",
    size: "25cm",
    optional:
      "Veiligheidsoogjes kunnen vervangen worden door slapende geborduurde oogjes.",
    stock: 0,
    category: categories.overige,
    page: 4,
    images: images.filter((image) => image.productId === 49),
  },
  {
    id: 50,
    name: "Puzzelbal Dino",
    price: "17.50",
    description:
      "Een puzzelbal dino. Deze dino kan in 3 delen uit elkaar gehaald worden en ook weer in elkaar gepuzzeld worden. De dino is gehaakt van dikker katoengaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
    size: "15cm",
    optional:
      "Deze dino kan met en zonder stekels gemaakt worden. En in vele kleuren mogelijk. Vermeld je in de opmerkingen even welke kleuren (2) je wilt en of je met of zonder stekels wilt.",
    stock: 0,
    category: categories.overige,
    page: 4,
    images: images.filter((image) => image.productId === 50),
  },
  {
    id: 51,
    name: "Handpop Giraf",
    price: "27.50",
    description:
      "Handpop Giraf is leuk om mee te spelen, zowel voor groot als klein. Je hand past in de mond om die te laten bewegen. Ik maak gebruik van veiligheidsoogjes en neusje deze bevestig ik ook goed aan de binnenkant.",
    size: "30cm",
    optional:
      "Veiligheidsoogjes kunnen vervangen worden door slapende geborduurde oogjes.",
    stock: 0,
    category: categories.overige,
    page: 4,
    images: images.filter((image) => image.productId === 51),
  },
  {
    id: 52,
    name: "Boxpeeltje Giraf",
    price: "30.00",
    description:
      "Leuk boxspeeltje om mee te spelen in de box, auto, kinderwagen en maxi cosi. Heeft een stevige bevestigingsring die om veel dingen heen kan. Hij heeft allerlei leuke geluidjes en bijtringen aan zijn armen hangen. Deze giraf is gemaakt van zacht knuffelgaren en katoengaren. Er zitten verschillende vrolijke plastic bijtringen, houten kralen, houten ring en een leuk belletje. In het lijfje zit een rammelkraal. Dus een hoop speelplezier. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "25cm",
    optional:
      "Zonder rammelkraal is ook mogelijk. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.babyOverig,
    page: 4,
    images: images.filter((image) => image.productId === 52),
  },
  {
    id: 53,
    name: "Konijn",
    price: "17.50",
    description:
      "Kleurrijk knuffel konijn, knuffeltje om heerlijk mee te knuffelen. Dit konijn is gemaakt van katoengaren. Zittend is het konijn ongeveer 25cm groot, liggend is hij ongeveer 35cm. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant. Welke kleuren heeft jouw konijn? Noem de kleuren van de onderdelen even in de opmerkingen bij je bestelling.",
    size: "25cm",
    optional:
      "Verschillende kleuren mogelijk! Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.knuffels,
    page: 4,
    images: images.filter((image) => image.productId === 53),
  },
  {
    id: 54,
    name: "Sleutelhanger Kersen",
    price: "3.50",
    description: "Sleutelhanger Kersen gehaakt met katoengaren.",
    size: "6cm",
    optional: "Musketonhaakje kan vervangen worden door een sleutelring.",
    stock: 1,
    category: categories.sleutelhangers,
    page: 4,
    images: images.filter((image) => image.productId === 54),
  },
  {
    id: 55,
    name: "Sleutelhanger Peer",
    price: "3.50",
    description:
      "Sleutelhanger Peer gehaakt met katoengaren. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "4cm",
    optional:
      "Veiligheidsoogjes kunnen vervangen worden door geborduurde ^ ^ of | | oogjes. Sleutelring kan vervangen worden door een musketonhaakje.",
    stock: 0,
    category: categories.sleutelhangers,
    page: 4,
    images: images.filter((image) => image.productId === 55),
  },
  {
    id: 56,
    name: "Sleutelhanger Ananas met gezichtje",
    price: "5.00",
    description:
      "Sleutelhanger ananas met een gezichtje gehaakt met katoengaren. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "5cm",
    optional:
      "Veiligheidsoogjes kunnen vervangen worden door borduurde ^ ^ of | | oogjes. Sleutelring kan vervangen worden door een musketonhaakje.",
    stock: 0,
    category: categories.sleutelhangers,
    page: 4,
    images: images.filter((image) => image.productId === 56),
  },
  {
    id: 57,
    name: "Sleutelhanger Donut",
    price: "5.00",
    description:
      'Sleutelhanger donut in verschillende "smaken" gehaakt met katoengaren. Deze lekkere donut kan ik in verschillende smaken maken, laat in de opmerkingen van het bestelformulier even weten welke "smaak" (beschrijving hoe die er uit ziet) je wilt.',
    size: "4cm",
    optional: "Musketonhaakje kan vervangen worden door een sleutelring.",
    stock: 1,
    category: categories.sleutelhangers,
    page: 4,
    images: images.filter((image) => image.productId === 57),
  },
  {
    id: 58,
    name: "Sleutelhanger Eenhoorn Donut",
    price: "5.00",
    description:
      "Sleutelhanger eenhoorn als donut gehaakt met katoengaren. Deze eenhoorn kan uit vele kleuren bestaan, laat in de opmerkingen van het bestelformulier even weten uit welke kleuren jouw eenhoorn bestaat.",
    size: "4cm",
    optional: "Musketonhaakje kan vervangen worden door een sleutelring.",
    stock: 0,
    category: categories.sleutelhangers,
    page: 4,
    images: images.filter((image) => image.productId === 58),
  },
  {
    id: 59,
    name: "Sleutelhanger Cactus",
    price: "7.50",
    description:
      "Sleutelhanger cactus gehaakt met katoengaren. De cactus is in 3 vormen mogelijk. Formaat verschilt per cactus de grootste is 7cm.",
    size: "9cm",
    optional:
      "Sleutelring kan vervangen worden door een musketonhaakje. Vermeld je bij de opmerkingen even welke vorm je wilt.",
    stock: 0,
    category: categories.sleutelhangers,
    page: 4,
    images: images.filter((image) => image.productId === 59),
  },
  {
    id: 60,
    name: "Sleutelhanger Potlood",
    price: "5.00",
    description: "Sleutelhanger potlood gehaakt met katoengaren.",
    size: "6cm",
    optional:
      "Musketonhaakje kan vervangen worden door een sleutelring. Vermeld je bij de opmerkingen als je een andere kleur wilt (en welke kleuren).",
    stock: 1,
    category: categories.sleutelhangers,
    page: 4,
    images: images.filter((image) => image.productId === 60),
  },
  {
    id: 61,
    name: "Handpop Ezel",
    price: "15.00",
    description:
      "Handpop ezel is leuk om mee te spelen, zowel voor groot als klein. Ik maak gebruik van veiligheidsoogjes en neusje deze bevestig ik ook goed aan de binnenkant.",
    size: "20cm",
    optional:
      "Veiligheidsoogjes kunnen vervangen worden door slapende geborduurde oogjes.",
    stock: 0,
    category: categories.overige,
    page: 4,
    images: images.filter((image) => image.productId === 61),
  },
  {
    id: 62,
    name: "Sleutelhanger ijsje",
    price: "2.50",
    description:
      'Sleutelhanger ijsje met 1 bol in verschillende "smaken" gehaakt met katoengaren. Dit lekkere ijs kan ik in verschillende smaken maken, laat in de opmerkingen van het bestelformulier even weten welke "smaak" (kleuren) je wilt.',
    size: "4cm",
    optional: "Sleutelring kan vervangen worden door een musketonhaakje.",
    stock: 0,
    category: categories.sleutelhangers,
    page: 4,
    images: images.filter((image) => image.productId === 62),
  },
  {
    id: 63,
    name: "Sleutelhanger ijsje 2 bollen",
    price: "3.00",
    description:
      'Sleutelhanger ijsje met 2 bollen in verschillende "smaken" gehaakt met katoengaren. Dit lekkere ijs kan ik in verschillende smaken maken, laat in de opmerkingen van het bestelformulier even weten welke 2 "smaken" (kleuren) je wilt.',
    size: "4cm",
    optional: "Sleutelring kan vervangen worden door een musketonhaakje.",
    stock: 0,
    category: categories.sleutelhangers,
    page: 4,
    images: images.filter((image) => image.productId === 63),
  },
  {
    id: 64,
    name: "Bijtring/Rammelaar Konijn Kira",
    price: "12.50",
    description:
      "Houten bijtring van een konijnenkop met een rammelkraal erin. Dit konijn is gemaakt van zacht knuffelgaren en katoengaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optional:
      "De rammelkraal kan vervangen worden door een knisperfolie in de oren. Zonder geluid is natuurlijk ook mogelijk. De oogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 1,
    category: categories.rammelaar,
    page: 5,
    images: images.filter((image) => image.productId === 64),
  },
  {
    id: 65,
    name: "Bijtring/Rammelaar Luipaard",
    price: "12.50",
    description:
      "Houten bijtring van een luipaard met een rammelkraal erin. Deze luipaard is gemaakt van katoengaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optional:
      "Zonder geluid is natuurlijk ook mogelijk. De oogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.rammelaar,
    page: 5,
    images: images.filter((image) => image.productId === 65),
  },
  {
    id: 66,
    name: "Bijtring/Rammelaar Kitten",
    price: "12.50",
    description:
      "Houten bijtring met een kitten erom heen met een rammelkraal erin. Deze kitten is gemaakt van katoengaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optional:
      "Zonder geluid is natuurlijk ook mogelijk. De oogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.rammelaar,
    page: 5,
    images: images.filter((image) => image.productId === 66),
  },
  {
    id: 67,
    name: "Speenknuffel Leeuw",
    price: "15.00",
    description:
      "Dit is een plat knuffeltje, waar de kleinste graag mee knuffelen en ze raken niet meer zo makkelijk het speentje kwijt. Het speentje wordt bevestigd door het koord erom te vouwen en het drukkertje dicht te doen. Deze is gemaakt van katoengaren. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "20cm",
    optional:
      "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.babyOverig,
    page: 5,
    images: images.filter((image) => image.productId === 67),
  },
  {
    id: 68,
    name: "Speelkubus Krokodil",
    price: "35.00",
    description:
      "Aan deze speelkubus kunnen de kleintjes heel veel ontdekken. Er zitten verschillende geluiden in, rammeltjes in zijn voetjes, piepertje in zijn staart en een knisperde bek. Genoeg te ontdenken met de ringen aan de zijkanten en in zijn mond, het kralen 'handvat' en de zwemband. Ik maak gebruik van veiligheidsoogjes deze bevestig ik goed. De kubus zelf is 10x10 cm, de krokodil is ongeveer 15cm groot.",
    size: "15cm",
    optional:
      "Veiligheidsoogjes kunnen vervangen worden door slapende geborduurde oogjes. De plastic bijtringen kunnen in andere kleuren. De kubus kan in verschillende kleuren gehaakt worden. Als je andere kleuren wilt laat dit dan even weten.",
    stock: 0,
    category: categories.babyOverig,
    page: 5,
    images: images.filter((image) => image.productId === 68),
  },
  {
    id: 69,
    name: "Rode Panda",
    price: "22.50",
    description:
      "Rode Panda gemaakt van een dikkere katoendraad. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "30cm",
    optional:
      "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
    stock: 0,
    category: categories.knuffels,
    page: 5,
    images: images.filter((image) => image.productId === 69),
  },
  {
    id: 70,
    name: "Sleutelhanger Spekje met gezichtje",
    price: "5.00",
    description:
      "Sleutelhanger spekje met een gezichtje gehaakt met katoengaren.",
    size: "9cm",
    optional: "Musketonhaakje kan vervangen worden door een sleutelring.",
    stock: 1,
    category: categories.sleutelhangers,
    page: 5,
    images: images.filter((image) => image.productId === 70),
  },
  {
    id: 71,
    name: "Sleutelhanger Dubbellikker ijs",
    price: "5.00",
    description: "Sleutelhanger dubbellikker ijsje gehaakt met katoengaren.",
    size: "5cm",
    optional: "Musketonhaakje kan vervangen worden door een sleutelring.",
    stock: 1,
    category: categories.sleutelhangers,
    page: 5,
    images: images.filter((image) => image.productId === 71),
  },
  {
    id: 72,
    name: "Sleutelhanger Watermeloen",
    price: "3.00",
    description: "Sleutelhanger watermeloen gehaakt met katoengaren.",
    size: "4cm",
    optional: "Musketonhaakje kan vervangen worden door een sleutelring.",
    stock: 1,
    category: categories.sleutelhangers,
    page: 5,
    images: images.filter((image) => image.productId === 72),
  },
  {
    id: 73,
    name: "Sleutelhanger Giraf",
    price: "7.50",
    description:
      "Sleutelhanger giraf gehaakt met katoengaren. De giraf heeft een houten kraal als lijf.",
    size: "7cm",
    optional: "Musketonhaakje kan vervangen worden door een sleutelring.",
    stock: 1,
    category: categories.sleutelhangers,
    page: 5,
    images: images.filter((image) => image.productId === 73),
  },
  {
    id: 74,
    name: "Sleutelhanger bijtje",
    price: "7.50",
    description:
      "Sleutelhanger bijtje gehaakt met katoengaren. Het bijtje heeft een leuke houtenkraal als gezichtje en een houten kraal als lijf.",
    size: "5cm",
    optional: "Musketonhaakje kan vervangen worden door een sleutelring.",
    stock: 1,
    category: categories.sleutelhangers,
    page: 5,
    images: images.filter((image) => image.productId === 74),
  },
  {
    id: 75,
    name: "Sleutelhanger Eenhoorn ",
    price: "5.00",
    description:
      "Sleutelhanger eenhoorn gehaakt met katoengaren. De eenhoorn heeft een houten kraal als lijf. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
    size: "6cm",
    optional:
      "Musketonhaakje kan vervangen worden door een sleutelring. Veiligheidsoogjes kunnen vervangen worden door borduurde ^ ^ of | | oogjes.",
    stock: 1,
    category: categories.sleutelhangers,
    page: 5,
    images: images.filter((image) => image.productId === 75),
  },
  {
    id: 76,
    name: "Koptelefoon Muts",
    price: "25.00",
    description:
      "Muts met een koptelefoon. Deze is gemaakt van een combinatie garen van acryl en katoen. Verschillende kleuren zijn mogelijk, geef je even aan welke kleuren je wilt in de opmerkingen bij je bestelling.",
    size: "20cm",
    optional:
      "Ook verschillende maten kan ik maken. Hierover neem ik contact met je op.",
    stock: 0,
    category: categories.overige,
    page: 5,
    images: images.filter((image) => image.productId === 76),
  },
];
