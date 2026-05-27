// data/supplies-data.js

const SUPPLIES_VARIANTS = {
  "Arterial Line": [
    {
      title: "Arterial Line",
      headerImageName: "Aline No Kit",
      checklistItems: [
        { name: "Personal Protective Equipment", contents: ["Mask", "Surgical Cap", "Sterile Gloves x2", "Sterile Gown"] },
        { name: "Ultrasound Machine", contents: [] },
        {
          name: "Ultrasound Probe Cover",
          contents: ["Sterile Ultrasound Gel", "Sterile Transducer Sheath", "Sterile Rubber Bands"]
        },
        { name: "Small Fenestrated Drape (x2)", contents: [], caption: "" },
        { name: "Chlorhexidine skin prep applicator", contents: [], caption: "" },
        { name: "Arterial Catheterization Set", contents: ["Introducer Needle", "Catheter", "Guidewire"], caption: "" },
        { name: "Tape", contents: [], caption: "" },
        { name: "Keith Straight Needle", contents: [], caption: "" },
        { name: "Central Line Dressing Kit", contents: [], caption: "" },
        { name: "Sterile Gauze (e.g. Bulkee II)", contents: [], caption: "" },
        { name: "Pressure Bag, IV Fluids, Transducer, and Tubing", contents: [], caption: "Typically setup by nursing staff." }
      ],
      optionalItems: [
        { name: "Extra Chlorhexidine skin prep applicator", contents: [], caption: "" },
        { name: "Lidocaine 1% injectable solution and alcohol prep", contents: [], caption: "" },
        { name: "Injection Needle with 5 mL syringe", contents: [], caption: "" }
      ],
      kitPreference: "No Kit"
    },
    {
      title: "Arterial Line",
      headerImageName: null,
      checklistItems: [
        { name: "Personal Protective Equipment", contents: ["Mask", "Surgical Cap", "Sterile Gloves x2", "Sterile Gown"] },
        { name: "Ultrasound Machine", contents: [] },
        {
          name: "Ultrasound Probe Cover",
          contents: ["Sterile Ultrasound Gel", "Sterile Transducer Sheath", "Sterile Rubber Bands"]
        },
        {
          name: "ARROW Arterial Catheterization Kit",
          contents: [
            "One-lumen catheter (20 Ga × 12 cm)",
            "Spring-wire guide with Arrow Advancer (0.025 in × 35 cm)",
            "Introducer needles (XTW 20 Ga × 2 in, RW 18 Ga × 2.5 in)",
            "Injection needles (25 Ga × 1 in, 22 Ga × 1.5 in)",
            "Blunt fill needle (18 Ga × 1.5 in)",
            "Luer-Lock syringe (3 mL)",
            "Lidocaine 1% and alcohol prep",
            "ChloraPrep 3 mL",
            "Sharps disposal cup",
            "Fenestrated drape (41×55 in)",
            "Towel (13×18 in)",
            "Needle holder",
            "Safety scalpel (#11 blade)",
            "Medication label — Lidocaine 1%",
            "Gauze pads (2×2 in, 4×4 in)",
            "Tegaderm dressing (10×12 cm)",
            "Impervious gown, bouffant cap, mask with eye shield",
            "3-0 silk suture"
          ]
        },
        { name: "Central Line Dressing Kit", contents: [], caption: "" },
        { name: "Pressure Bag, IV Fluids, Transducer, and Tubing", contents: [], caption: "Typically setup by nursing staff." }
      ],
      optionalItems: [
        { name: "Extra Chlorhexidine skin prep applicator", contents: [], caption: "" }
      ],
      kitPreference: "ARROW Arterial Kit"
    }
  ],
  "Arterial Blood Gas": [
    {
      title: "Arterial Blood Gas",
      headerImageName: "F42C3F66-09EA-4422-8958-278296818350_4_5005_c",
      checklistItems: [
        { name: "Nonsterile Gloves", contents: [] },
        { name: "Arterial Blood Gas Set", contents: ["Syringe with dry heparin", "Safety Needle", "Cap"] },
        { name: "Alcohol Swab", contents: [] },
        { name: "Gauze Pads, 2×2 inch", contents: [] },
        { name: "Silk Tape", contents: [] },
        { name: "Paper Tape", contents: [] },
        { name: "Rolled Towel", contents: [] }
      ],
      optionalItems: [
        { name: "Bag of Ice (For Sample Transport)", contents: [], caption: "Refer to institutional policies for requirement." },
        { name: "Nonsterile Gown", contents: [], caption: "Refer to institutional policies for requirement." }
      ],
      kitPreference: "No Kit"
    }
  ],
  "Lumbar Puncture": [
    {
      title: "Lumbar Puncture",
      checklistItems: [
        { name: "Personal Protective Equipment", contents: ["Mask", "Surgical Cap", "Sterile Gloves", "Sterile Gown"] },
        { name: "Adhesive bandage", contents: [] },
        { name: "Extension tubing", contents: [] },
        { name: "Fenestrated drape", contents: [] },
        { name: "Gauze pads", contents: [] },
        { name: "Sponge applicators / sponge sticks (x3)", contents: [] },
        { name: "Lidocaine 2%, 5 mL vial", contents: [] },
        { name: "Manometer", contents: [] },
        { name: "3-way stopcock", contents: [] },
        { name: "3 mL Luer lock syringe", contents: [] },
        { name: "Fill needle", contents: [] },
        { name: "23 Ga Needle", contents: [] },
        { name: "Additional sterile needles w/ caps", contents: [] },
        { name: "3.5\" Spinal needle", contents: [] },
        { name: "Specimen tubes/vials w/ caps (#1–4) (4)", contents: [] },
        { name: "Absorbent towel", contents: [] }
      ],
      optionalItems: [
        { name: "Extra Chloraprep or betadine solution", contents: [] }
      ],
      kitPreference: "No Kit"
    },
    {
      title: "Lumbar Puncture",
      checklistItems: [
        { name: "Personal Protective Equipment", contents: ["Mask", "Surgical Cap", "Sterile Gloves", "Sterile Gown"] },
        {
          name: "Lumbar Puncture Tray",
          contents: [
            "Adhesive bandage",
            "Extension tubing",
            "Fenestrated drape",
            "Gauze pads",
            "Sponge applicators / sponge sticks (x3)",
            "Lidocaine 2%, 5 mL vial",
            "Manometer",
            "3-way stopcock",
            "3 mL Luer lock syringe",
            "Fill needle",
            "23 Ga Needle",
            "Additional sterile needles w/ caps",
            "3.5\" Spinal needle",
            "Specimen tubes/vials w/ caps (#1–4) (4)",
            "Absorbent towel"
          ]
        }
      ],
      optionalItems: [
        { name: "Extra Chloraprep or betadine solution", contents: [] }
      ],
      kitPreference: "LP Tray (Medline)"
    }
  ],
  "Paracentesis": [
    {
      title: "Paracentesis",
      checklistItems: [
        { name: "Personal Protective Equipment", contents: ["Mask", "Surgical Cap", "Sterile Gloves", "Sterile Gown"] },
        { name: "Ultrasound Machine", contents: [] },
        {
          name: "Ultrasound Probe Cover",
          contents: ["Sterile Ultrasound Gel", "Sterile Transducer Sheath", "Sterile Rubber Bands"]
        },
        { name: "Paracentesis Drainage Catheter", contents: [] },
        { name: "Filter Straw", contents: [] },
        { name: "Introducer Needles", contents: [] },
        { name: "Luer-Lock Syringes", contents: [] },
        { name: "Scalpel", contents: [] },
        { name: "Drainage Tubing, Adapter, and Bag", contents: [] },
        { name: "Vacuum Bottle Spike, Needle, and Specimen Vials", contents: [] },
        { name: "ChloraPrep", contents: [] },
        { name: "Gauze Pads", contents: [] },
        { name: "Lidocaine 1% injectable solution", contents: [] },
        { name: "Fenestrated Drape", contents: [] },
        { name: "Towel", contents: [] },
        { name: "Bandage", contents: [] },
        { name: "Fine Tip Marker", contents: [] },
        { name: "Foam Needle Stop", contents: [] },
        { name: "50 cc Luer-Lock Syringe", contents: [] },
        { name: "20 or 30 cc Luer-Lock syringe", contents: [] }
      ],
      optionalItems: [
        { name: "Evacuated Containers", contents: [], caption: "For large-volume fluid removal." },
        { name: "Suction Unit", contents: [] },
        { name: "Extra Chloraprep", contents: [] }
      ],
      kitPreference: "No Kit"
    },
    {
      title: "Paracentesis",
      headerImageNames: ["Equipment 2", "Equipment 1"],
      checklistItems: [
        { name: "Personal Protective Equipment", contents: ["Mask", "Surgical Cap", "Sterile Gloves", "Sterile Gown"] },
        { name: "Ultrasound Machine", contents: [] },
        {
          name: "Ultrasound Probe Cover",
          contents: ["Sterile Ultrasound Gel", "Sterile Transducer Sheath", "Sterile Rubber Bands"]
        },
        {
          name: "Paracentesis Kit",
          contents: [
            "Paracentesis Drainage Catheter",
            "Filter Straw",
            "Introducer Needles",
            "Luer-Lock Syringes, e.g. 50 mL, 20 mL, 30mL",
            "Scalpel",
            "Drainage Tubing, Adapter, and Bag",
            "Vacuum Bottle Spike, Needle, and Specimen Vials",
            "ChloraPrep",
            "Gauze Pads",
            "Lidocaine 1% injectable solution",
            "Fenestrated Drape",
            "Towel",
            "Bandage",
            "Fine Tip Marker",
            "Foam Needle Stop"
          ]
        }
      ],
      optionalItems: [
        { name: "Evacuated Containers", contents: [], caption: "For large-volume fluid removal." },
        { name: "Suction Unit", contents: [] },
        { name: "Extra Chloraprep", contents: [] }
      ],
      kitPreference: "Safe-T-Centesis PLUS"
    }
  ],
  "Central Venous Line": [
    {
      title: "Central Venous Line",
      checklistItems: [
        { name: "Personal Protective Equipment", contents: ["Mask", "Surgical Cap", "Sterile Gloves", "Sterile Gown", "Eye Protection"] },
        { name: "Ultrasound Machine", contents: [] },
        {
          name: "Ultrasound Probe Cover",
          contents: ["Sterile Ultrasound Gel", "Sterile Transducer Sheath", "Sterile Rubber Bands"]
        },
        { name: "Triple-lumen CVC with needless connectors", contents: [] },
        { name: "Guidewire", contents: [] },
        { name: "Introducer", contents: [] },
        { name: "Tissue Dilator", contents: [] },
        { name: "Blunt fill needle", contents: [] },
        { name: "Injection needles", contents: [] },
        { name: "Syringes (10 mL, 5 mL, 3 mL)", contents: [] },
        { name: "Pre-filled saline syringes", contents: [] },
        { name: "Lidocaine 1% injectable solution + alcohol prep", contents: [] },
        { name: "Chloraprep applicators (x2)", contents: [] },
        { name: "Maximal barrier drape (4\" fenestration)", contents: [] },
        { name: "Sterile towel", contents: [] },
        { name: "Needle holder", contents: [] },
        { name: "Safety scalpel, #11", contents: [] },
        { name: "Gauze pads", contents: [] },
        { name: "IV dressing", contents: [] },
        { name: "Transducer cover", contents: [] },
        { name: "Securement hub", contents: [] },
        { name: "Gown, cap, mask with eye shield", contents: [] },
        { name: "3-0 silk suture", contents: [] },
        { name: "Sharps disposal cups", contents: [] },
        { name: "Extension tubing", contents: [] }
      ],
      optionalItems: [
        { name: "Extra Chloraprep", contents: [], caption: "" },
        { name: "Extra pre-filled saline syringes", contents: [], caption: "" }
      ],
      kitPreference: "No Kit"
    },
    {
      title: "Central Venous Line",
      checklistItems: [
        { name: "Personal Protective Equipment", contents: ["Mask", "Surgical Cap", "Sterile Gloves", "Sterile Gown", "Eye Protection"] },
        { name: "Ultrasound Machine", contents: [] },
        {
          name: "Ultrasound Probe Cover",
          contents: ["Sterile Ultrasound Gel", "Sterile Transducer Sheath", "Sterile Rubber Bands"]
        },
        {
          name: "Triple Lumen Central Venous Catheter Kit",
          contents: [
            "Triple-lumen CVC with needless connectors",
            "Guidewire",
            "Introducer",
            "Tissue Dilator",
            "Blunt fill needle",
            "Injection needles",
            "Syringes (10 mL, 5 mL, 3 mL)",
            "Pre-filled saline syringes",
            "Lidocaine 1% injectable solution + alcohol prep",
            "Chloraprep applicators (x2)",
            "Maximal barrier drape (4\" fenestration)",
            "Sterile towel",
            "Needle holder",
            "Safety scalpel, #11",
            "Gauze pads",
            "IV dressing",
            "Transducer cover",
            "Securement hub",
            "Gown, cap, mask with eye shield",
            "3-0 silk suture",
            "Sharps disposal cups",
            "Extension tubing"
          ]
        }
      ],
      optionalItems: [
        { name: "Extra Chloraprep", contents: [], caption: "" },
        { name: "Extra pre-filled saline syringes", contents: [], caption: "" }
      ],
      kitPreference: "CVC Kit (ARROW)"
    }
  ],
  "Peripheral IV": [
    {
      title: "Peripheral IV",
      headerImageName: "Peripheral IV No Kit",
      checklistItems: [
        { name: "Personal Protective Equipment", contents: ["Nonsterile Gloves"] },
        { name: "Nonlatex Tourniquet", contents: [] },
        { name: "Alcohol Prep Pad", contents: [] },
        { name: "Sterile Gauze", contents: [] },
        { name: "Saline Flush", contents: [] },
        { name: "Transparent Occlusive Dressing and Tape", contents: [] },
        { name: "Catheter (14–24 Gauge)", contents: [] },
        { name: "Catheter tube connector", contents: [] },
        { name: "Tape", contents: [] }
      ],
      kitPreference: "No Kit"
    },
    {
      title: "Peripheral IV",
      headerImageName: "BD Nexiva",
      checklistItems: [
        { name: "Personal Protective Equipment", contents: ["Nonsterile Gloves"] },
        { name: "Nonlatex Tourniquet", contents: [] },
        { name: "Alcohol Prep Pad", contents: [] },
        { name: "Sterile Gauze", contents: [] },
        { name: "Saline Flush", contents: [] },
        { name: "Transparent Occlusive Dressing and Tape", contents: [] },
        {
          name: "Peripheral IV Start Kit",
          contents: ["Catheter (14-24 Gauge)", "Needle-free Connector"]
        },
        { name: "Tape", contents: [] }
      ],
      kitPreference: "BD Nexiva"
    }
  ]
};

const SUPPLIES_SINGLES = [
  {
    title: "Nasogastric Tube",
    checklistItems: [
      { name: "Personal Protective Equipment", contents: ["Nonsterile Gloves", "Eye Protection"] },
      { name: "Nasogastric Tube", contents: [] },
      { name: "Lubricating Jelly", contents: [] },
      { name: "Silk Tape or Attachment Device", contents: [] },
      { name: "Stethoscope", contents: [] },
      { name: "Suction Unit", contents: [] }
    ],
    optionalItems: [
      { name: "Lidocaine topical 2% gel", contents: [] },
      { name: "Benzocaine 5% mucous membrane spray", contents: [] },
      { name: "Water Cup with Straw", contents: [] },
      { name: "Absorbent Pads / Towels", contents: [] },
      { name: "Emesis Basin", contents: [] },
      { name: "Skin Prep, e.g. alcohol swab", contents: [], caption: "Helpful for cleaning oily skin of the nose." }
    ]
  },
  {
    title: "Phlebotomy",
    headerImageName: "Phlebotomy Kit",
    checklistItems: [
      { name: "Personal Protective Equipment", contents: ["Nonsterile Gloves"] },
      { name: "Nonlatex Tourniquet", contents: [] },
      { name: "Alcohol Prep Pad", contents: [] },
      { name: "Sterile Gauze", contents: [] },
      { name: "Tape", contents: [] },
      { name: "Butterfly or Venipuncture Needle", contents: [] },
      { name: "Vacutainer", contents: [] },
      { name: "Blood Collection Tubes", contents: [] },
      { name: "Patient Labels", contents: [] }
    ]
  },
  {
    title: "Central Line Removal",
    headerImageName: "Central Line Removal Setup",
    checklistItems: [
      { name: "Personal Protective Equipment", contents: ["Nonsterile Gloves", "Mask"] },
      { name: "Suture Removal Tray", contents: [] },
      { name: "Alcohol Swab", contents: [] },
      { name: "Gauze", contents: [] },
      { name: "Tegaderm", contents: [] }
    ],
    optionalItems: [
      { name: "Scalpel", contents: [] },
      { name: "Chlorhexidine swab", contents: [] },
      { name: "Specimen Cup", contents: [] }
    ]
  }
];

function suppliesContent() {
  const allProcedures = [];
  
  // Add variants based on current kit preferences
  Object.keys(SUPPLIES_VARIANTS).forEach(title => {
    const variants = SUPPLIES_VARIANTS[title];
    variants.forEach(v => {
      allProcedures.push(v);
    });
  });

  // Add single lists
  SUPPLIES_SINGLES.forEach(s => {
    allProcedures.push(s);
  });

  return allProcedures;
}

function suppliesKitOptions() {
  const result = {};
  
  Object.keys(SUPPLIES_VARIANTS).forEach(title => {
    const options = new Set();
    SUPPLIES_VARIANTS[title].forEach(v => {
      if (v.kitPreference) {
        options.add(v.kitPreference);
      }
    });
    
    // Sort and ensure "No Kit" is first
    const sortedOptions = Array.from(options).sort((a, b) => {
      if (a === "No Kit") return -1;
      if (b === "No Kit") return 1;
      return a.localeCompare(b);
    });
    
    result[title] = sortedOptions;
  });

  // For singles, they only have "No Kit" option
  SUPPLIES_SINGLES.forEach(s => {
    result[s.title] = ["No Kit"];
  });

  return result;
}

function getKitOptions(procedureTitle) {
  const options = suppliesKitOptions();
  return options[procedureTitle] || ["No Kit"];
}

function getFilteredSupplies(kitSelections, enabledProcedures) {
  const rawSupplies = suppliesContent();
  
  return rawSupplies.filter(supply => {
    // 1. Check if procedure is enabled
    // If the base procedure is not enabled, filter it out
    const enabled = enabledProcedures[supply.title] !== false;
    if (!enabled) return false;
    
    // 2. Check if this specific kit variant matches preferences
    if (supply.kitPreference) {
      const selectedKit = kitSelections[supply.title] || "No Kit";
      return supply.kitPreference === selectedKit;
    }
    
    // If no kitPreference, it always shows
    return true;
  }).sort((a, b) => a.title.localeCompare(b.title));
}
