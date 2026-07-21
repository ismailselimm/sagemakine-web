/**
 * EN sektör sayfası içerikleri — /en/industries/[slug]/
 * TR karşılığı: src/data/sektorler.ts (görseller ortak).
 */
import type { Sektor } from '../sektorler';

export const SEKTORLER_EN: Sektor[] = [
  {
    slug: "dried-fruit",
    title: "Dried Fruit",
    metaTitle: "Sultana Raisin, Fig & Apricot Sorting Machines | SAGE Makine",
    metaDescription: "Stems, stalks and stones in Manisa raisins, aflatoxin-suspect figs, pit fragments in apricots: color sorting and X-ray solutions for dried fruit.",
    eyebrow: "Industry · Dried Fruit",
    heroTitle: "Sorting Solutions for Dried Fruit Processors",
    heroLead: "Manisa raisins travel to tables worldwide — don't let a single stem, stalk, or stone cost you your brand. Secure export quality in raisins, figs, and apricots with a color sorting + X-ray combination.",
    image: "sector-kuru-uzum",
    imageAlt: "Golden sultana raisins in an open palm",
    extraImage: "food-incir",
    extraImageAlt: "Halved dried figs",
    factsIntro: "We are headquartered in Manisa — the heart of Turkey's dried fruit exports. We know your product's harvest, its drying, and your buyer's expectations first-hand.",
    facts: [
      {
        stat: "90%+",
        label: "Share of Turkey's sultana raisins grown in and around Manisa"
      },
      {
        stat: "~2/3",
        label: "The Aegean Region's approximate share of Turkey's dried fruit exports"
      },
      {
        stat: "1 lot",
        label: "The cost of a single container rejected at the EU border: returns, disposal, and lost customers"
      }
    ],
    defects: [
      {
        icon: "sap",
        label: "Stems and stalks (raisins)"
      },
      {
        icon: "tas",
        label: "Stones and soil"
      },
      {
        icon: "kuf",
        label: "Soured / moldy berries"
      },
      {
        icon: "renk",
        label: "Aflatoxin-suspect dark fruit (figs)"
      },
      {
        icon: "kabuk",
        label: "Pits and worm-damaged or dirty fruit (apricots)"
      },
      {
        icon: "cam",
        label: "Glass, metal, plastic"
      }
    ],
    cozum: {
      intro: "In dried fruit, the right setup is usually two-stage: first, belt-type color sorting at line intake removes stems, stalks and color defects; afterward, bulk X-ray removes high-density foreign material.",
      adimlar: [
        {
          baslik: "Belt-Type Color Sorting",
          text: "Sticky, delicate dried fruit is scanned in a single layer on a belt; stems, stalks, and color defects are removed by air jets.",
          href: "/en/color-sorter/belt-type/",
          linkLabel: "Explore belt-type machines"
        },
        {
          baslik: "Bulk Product X-Ray",
          text: "Stones, glass, and metal are detected by density imaging regardless of product color; only the defective section is diverted to the reject stream.",
          href: "/en/x-ray-food-inspection/bulk-product/",
          linkLabel: "Explore the bulk X-ray solution"
        }
      ]
    },
    servisNotu: "From our Manisa headquarters, we are positioned to reach Salihli, Alaşehir, Sarıgöl, and the entire Aegean production basin the same day. Keeping you free of downtime during harvest season is our priority.",
    waTopic: "Dried fruit sorting machines"
  },
  {
    slug: "nuts",
    title: "Nuts",
    metaTitle: "Hazelnut, Almond & Walnut Sorting Machines | SAGE Makine",
    metaDescription: "Shell fragments in hazelnut kernels, membrane in walnuts, stones in almonds: color sorting and X-ray solutions for nut processors.",
    eyebrow: "Industry · Nuts",
    heroTitle: "Sorting Solutions for Nut Processors",
    heroLead: "For hazelnut kernels headed to the chocolate industry, the tolerance for shell fragments is zero. In hazelnuts, almonds, and walnuts, remove shell, stones, and moldy kernels from the line with color sorting + X-ray.",
    image: "sector-kuruyemis-findik",
    imageAlt: "Hazelnut kernels being poured",
    extraImage: "sorting-oncesi-sonrasi",
    extraImageAlt: "Trays of mixed product before sorting and clean hazelnut kernels after sorting",
    factsIntro: "Turkey supplies roughly two-thirds of world hazelnut production — and sells to the world's most exacting buyers. Your compliance with chocolate and confectionery specifications is only as good as your sorting line.",
    facts: [
      {
        stat: "~2/3",
        label: "Turkey's approximate share of world hazelnut production"
      },
      {
        stat: "0",
        label: "The chocolate industry's tolerance for shell fragments in hazelnut kernels"
      },
      {
        stat: "2",
        label: "Technologies working together: optics see the shell, X-ray sees stones and glass"
      }
    ],
    defects: [
      {
        icon: "kabuk",
        label: "Shell fragments"
      },
      {
        icon: "kuf",
        label: "Moldy / spoiled kernels"
      },
      {
        icon: "tas",
        label: "Stones and hard foreign material"
      },
      {
        icon: "sap",
        label: "Membrane and plant debris (walnuts)"
      },
      {
        icon: "renk",
        label: "Color-defective kernels"
      },
      {
        icon: "metal",
        label: "Metal"
      }
    ],
    cozum: {
      intro: "In nuts, the safest setup has two layers: belt- or chute-type color sorting after cracking for shell and color defects, plus X-ray before packaging for stone, glass, and metal control.",
      adimlar: [
        {
          baslik: "Color Sorting",
          text: "High-resolution RGB cameras recognize shell and color defects by differences in color and surface texture.",
          href: "/en/color-sorter/",
          linkLabel: "Explore color sorting machines"
        },
        {
          baslik: "Pre-Packaging X-Ray",
          text: "The final inspection point before packing — with automatic logging and image archiving.",
          href: "/en/x-ray-food-inspection/",
          linkLabel: "Explore X-ray systems"
        }
      ]
    },
    servisNotu: "We coordinate installation, training, and spare-parts support for the Black Sea hazelnut basin and Central Anatolian nut processors from our Manisa headquarters.",
    waTopic: "Nut sorting machines"
  },
  {
    slug: "pistachio",
    title: "Pistachio",
    metaTitle: "Pistachio Sorting Machines – Color & X-Ray | SAGE Makine",
    metaDescription: "Color sorting + X-ray for aflatoxin risk, empty/full kernel separation, and shell fragments in pistachios. Service in the Gaziantep and Şanlıurfa region.",
    eyebrow: "Industry · Pistachio",
    heroTitle: "Sorting Solutions for Pistachio Processors",
    heroLead: "Aflatoxin and empty nuts are the two great risks of pistachio exports — and machines see both. From empty/full kernel separation to shell fragments, secure your export lot.",
    image: "sector-antep-fistigi",
    imageAlt: "Open-shell pistachios revealing green kernels",
    factsIntro: "For processors along the Gaziantep–Şanlıurfa corridor, pistachios mean both pride and risk: one of our most valuable export products, and one of the most closely watched at EU border controls.",
    facts: [
      {
        stat: "Top 3",
        label: "Turkey's position in world pistachio production"
      },
      {
        stat: "#1 reason",
        label: "Aflatoxin in pistachio export rejections — the most frequently cited cause"
      },
      {
        stat: "Empty/Full",
        label: "X-ray images kernel fill without cracking the shell"
      }
    ],
    defects: [
      {
        icon: "renk",
        label: "Aflatoxin-suspect kernels"
      },
      {
        icon: "kabuk",
        label: "Shell fragments"
      },
      {
        icon: "dogruluk",
        label: "Empty and half-filled nuts"
      },
      {
        icon: "tas",
        label: "Stones and soil"
      },
      {
        icon: "kuf",
        label: "Moldy / spoiled kernels"
      },
      {
        icon: "sap",
        label: "Stems and plant debris"
      }
    ],
    cozum: {
      intro: "Our recommended flow for pistachios: X-ray on in-shell product to separate empty nuts from full ones and remove stones, then color sorting on kernels to control shell and aflatoxin-suspect nuts.",
      adimlar: [
        {
          baslik: "X-Ray Empty/Full and Stone Separation",
          text: "Images the inside without cracking the shell: empty nuts, stones, and dense foreign material are separated in a single pass.",
          href: "/en/x-ray-food-inspection/bulk-product/",
          linkLabel: "Explore the bulk X-ray solution"
        },
        {
          baslik: "Color Sorting",
          text: "Shell fragments, mold, and color defects in kernels are sorted out with high-resolution cameras.",
          href: "/en/color-sorter/",
          linkLabel: "Explore color sorting machines"
        }
      ]
    },
    servisNotu: "For facilities in the Gaziantep, Şanlıurfa, and Siirt region, we plan installation and service around the season calendar and pre-position spare parts in advance.",
    waTopic: "Pistachio sorting machines"
  },
  {
    slug: "pulses",
    title: "Pulses",
    metaTitle: "Pulse Color Sorters – Lentils, Chickpeas, Beans | SAGE Makine",
    metaDescription: "Color sorting and X-ray catch the stones that screens and gravity tables miss. High-capacity chute-type machines for pulse processing plants.",
    eyebrow: "Industry · Pulses",
    heroTitle: "Sorting Solutions for Pulse Processors",
    heroLead: "A screen cannot see a stone the same size as a lentil — a color sorter and X-ray can. High-capacity sorting with minimal product loss for lentils, chickpeas, and beans.",
    image: "sector-bakliyat-mercimek",
    imageAlt: "A single gray stone hidden in a pile of red lentils",
    factsIntro: "Turkey is one of the world's leading processing and re-export hubs for red lentils. In plants running high tonnages, the speed of the sorting line sets the capacity of the entire facility.",
    facts: [
      {
        stat: "t/hr",
        label: "In pulses, capacity is everything — chute-type machines are built for high tonnage"
      },
      {
        stat: "Same size",
        label: "Cameras and X-ray identify the stones that pass through screens and fool gravity tables"
      },
      {
        stat: "2nd pass",
        label: "A re-sort pass on the reject stream keeps good-product loss to a minimum"
      }
    ],
    defects: [
      {
        icon: "tas",
        label: "Stones and soil clods"
      },
      {
        icon: "renk",
        label: "Discolored kernels"
      },
      {
        icon: "kuf",
        label: "Insect-damaged kernels"
      },
      {
        icon: "sap",
        label: "Stems, hulls, and plant debris"
      },
      {
        icon: "cam",
        label: "Glass and ceramic"
      },
      {
        icon: "metal",
        label: "Metal"
      }
    ],
    cozum: {
      intro: "The standard setup for pulses: high-capacity chute-type color sorting (with a second pass where needed) plus a final X-ray check before packing.",
      adimlar: [
        {
          baslik: "Chute-Type Color Sorting",
          text: "Free-flowing kernels stream down the chutes in a thin curtain; thousands of kernels are scanned every second and defects are ejected with a jet of air.",
          href: "/en/color-sorter/chute-type/",
          linkLabel: "Explore chute-type machines"
        },
        {
          baslik: "Final X-Ray Inspection",
          text: "A safety net for glass, stone, and metal before packing — with automatic record keeping and image archiving.",
          href: "/en/x-ray-food-inspection/",
          linkLabel: "Explore X-ray systems"
        }
      ]
    },
    servisNotu: "We install and service pulse processing plants along the Mersin, Gaziantep, and Karaman corridor, and our pre-season maintenance planning keeps your line ready to run.",
    waTopic: "Pulse color sorting machines"
  },
  {
    slug: "frozen-food-iqf",
    title: "Frozen Food (IQF)",
    metaTitle: "IQF Frozen Fruit & Vegetable Optical Sorting | SAGE Makine",
    metaDescription: "Belt-type optical sorting and washdown X-ray systems for stems, pits, plastic, and glass on IQF lines. Your last line of defense before packing.",
    eyebrow: "Industry · Frozen Food (IQF)",
    heroTitle: "Sorting Solutions for IQF and Frozen Food",
    heroLead: "The last line of defense for frozen product: optical sorting and X-ray before packing. From sour-cherry pits to plastic fragments — make sure only fruit reaches your customer's table.",
    image: "sector-iqf",
    imageAlt: "IQF flash-frozen sour cherries and berries coated in ice crystals",
    factsIntro: "Turkey's frozen fruit and vegetable exports are growing fast; in sour cherries, cherries, and red berries, we are among Europe's key suppliers. On a frozen line, speed and hygiene have to work together.",
    facts: [
      {
        stat: "-18°C",
        label: "Systems configured to run non-stop in cold environments"
      },
      {
        stat: "IP69K",
        label: "Washdown-ready design — enclosure options to match your hygiene regime"
      },
      {
        stat: "Final step",
        label: "X-ray before packing is the last inspection point on your line"
      }
    ],
    defects: [
      {
        icon: "kabuk",
        label: "Pits and pit fragments"
      },
      {
        icon: "sap",
        label: "Stems and leaves"
      },
      {
        icon: "cam",
        label: "Glass and hard plastic"
      },
      {
        icon: "renk",
        label: "Discolored / bruised fruit"
      },
      {
        icon: "metal",
        label: "Metal"
      },
      {
        icon: "tas",
        label: "Stones"
      }
    ],
    cozum: {
      intro: "Our recommendation for IQF lines: belt-type optical sorting after flash freezing, plus a washdown X-ray check before packing.",
      adimlar: [
        {
          baslik: "Belt-Type Optical Sorting",
          text: "Frozen product spreads in a single layer on the belt; stems, leaves, and color defects are ejected with a jet of air.",
          href: "/en/color-sorter/belt-type/",
          linkLabel: "Explore belt-type machines"
        },
        {
          baslik: "Packaged / Bulk X-Ray",
          text: "A final safety net for pits, glass, and metal — with enclosures built for cold, wet environments.",
          href: "/en/x-ray-food-inspection/",
          linkLabel: "Explore X-ray systems"
        }
      ]
    },
    servisNotu: "Fast on-site service for frozen food plants across the Aegean and Marmara regions, with a priority response plan for peak-season demand.",
    waTopic: "IQF optical sorting machines"
  },
  {
    slug: "potato-products",
    title: "Potato Products",
    metaTitle: "Potato & Chip Optical Sorting Machines | SAGE Makine",
    metaDescription: "Burnt ends and field stones in french fries, blemished slices in chips: optical sorting and X-ray solutions before and after the fryer line.",
    eyebrow: "Industry · Potato Products",
    heroTitle: "Sorting Solutions for Potato and Chip Lines",
    heroLead: "Burnt fries and stones from the field are removed before they enter the fryer line. Both raw-material and finished-product inspection for french fry and chip production — from a single solution partner.",
    image: "sector-patates",
    imageAlt: "Golden french fries on a stainless-steel conveyor belt",
    factsIntro: "Turkey's fast-growing frozen potato investments demand speed and consistency on high-capacity lines. A stone that slips through before frying damages your fryer; a green fry that slips through damages your brand.",
    facts: [
      {
        stat: "2 points",
        label: "Critical checks: raw material before frying + finished product before packing"
      },
      {
        stat: "Shape+Color",
        label: "Burnt ends, greening, and peel residue are sorted out in a single pass"
      },
      {
        stat: "Field stones",
        label: "X-ray identifies stones the same color as the potato by their density"
      }
    ],
    defects: [
      {
        icon: "renk",
        label: "Burnt ends and dark blemishes"
      },
      {
        icon: "kuf",
        label: "Greening and rot"
      },
      {
        icon: "kabuk",
        label: "Peel residue"
      },
      {
        icon: "tas",
        label: "Field stones"
      },
      {
        icon: "cam",
        label: "Glass and plastic"
      },
      {
        icon: "metal",
        label: "Metal"
      }
    ],
    cozum: {
      intro: "Our recommendation for potato lines: X-ray stone removal at raw-material intake, belt-type optical sorting after cutting and frying, and a final X-ray check before packing.",
      adimlar: [
        {
          baslik: "Belt-Type Optical Sorting",
          text: "Fries and slices are scanned on the belt; burnt, green, and peel-covered pieces are ejected with a jet of air.",
          href: "/en/color-sorter/belt-type/",
          linkLabel: "Explore belt-type machines"
        },
        {
          baslik: "X-Ray Inspection",
          text: "From field stones to metal, dense foreign material is detected in both the raw material and the finished product.",
          href: "/en/x-ray-food-inspection/",
          linkLabel: "Explore X-ray systems"
        }
      ]
    },
    servisNotu: "We plan installations and service for plants across the Afyon, Konya, and Central Anatolia potato belt, and provide priority support during campaign periods.",
    waTopic: "Potato and chip sorting machines"
  }
];
