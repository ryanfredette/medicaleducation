const STEPS_DATA = [
  {
    id: "arterial-line",
    title: "Arterial Line",
    category: "vascularAccess",
    iconName: "activity",
    clinicalInfo: [
      {
        type: "indications",
        items: [
          "Continuous arterial pressure monitoring",
          "Repeated arterial blood sampling"
        ]
      },
      {
        type: "contraindications",
        items: [
          { text: "Insertion through infected skin", severity: "relative" },
          { text: "Significant peripheral vascular disease", severity: "relative" },
          { text: "Inadequate collateral circulation", severity: "absolute" },
          { text: "Coagulopathy", severity: "relative" }
        ]
      },
      {
        type: "complications",
        items: [
          {
            name: "Arterial Spasm",
            incidenceRate: { mean: "19.7%", range: "1.5% – 35%" },
            mechanism: "",
            treatment: "",
            references: [
              {
                title: "Clinical review: Complications and risk factors of peripheral arterial catheters used for haemodynamic monitoring in anaesthesia and intensive care medicine",
                urlString: "https://link.springer.com/article/10.1186/cc1489"
              }
            ]
          },
          {
            name: "Permanent Ischemic Damage",
            incidenceRate: { mean: "0.09%", range: "0% – 2.9%" },
            mechanism: "",
            treatment: "",
            references: [
              {
                title: "Clinical review: Complications and risk factors of peripheral arterial catheters used for haemodynamic monitoring in anaesthesia and intensive care medicine",
                urlString: "https://link.springer.com/article/10.1186/cc1489"
              }
            ]
          },
          {
            name: "Pseudoaneurysm",
            incidenceRate: { mean: "0.09%", range: "0.05% – 3.8%" },
            mechanism: "",
            treatment: "",
            references: [
              {
                title: "Clinical review: Complications and risk factors of peripheral arterial catheters used for haemodynamic monitoring in anaesthesia and intensive care medicine",
                urlString: "https://link.springer.com/article/10.1186/cc1489"
              }
            ]
          },
          {
            name: "Hematoma",
            incidenceRate: { mean: "14.4%", range: "3.8% – 31%" },
            mechanism: "",
            treatment: "",
            references: [
              {
                title: "Clinical review: Complications and risk factors of peripheral arterial catheters used for haemodynamic monitoring in anaesthesia and intensive care medicine",
                urlString: "https://link.springer.com/article/10.1186/cc1489"
              }
            ]
          },
          {
            name: "Nerve Injury",
            incidenceRate: { mean: "0.002%" },
            mechanism: "",
            treatment: "",
            references: [
              {
                title: "Surgical and Patient Risk Factors for Severe Arterial Line Complications in Adults",
                urlString: "https://journals.lww.com/anesthesiology/pages/articleviewer.aspx?year=2016&issue=03000&article=00019&type=Fulltext"
              }
            ]
          },
          {
            name: "Sepsis",
            incidenceRate: { mean: "0.13%", range: "0% – 1.5%" },
            mechanism: "",
            treatment: "",
            references: [
              {
                title: "Clinical review: Complications and risk factors of peripheral arterial catheters used for haemodynamic monitoring in anaesthesia and intensive care medicine",
                urlString: "https://link.springer.com/article/10.1186/cc1489"
              }
            ]
          },
          {
            name: "Local Infection",
            incidenceRate: { mean: "0.72%", range: "0% – 5.9%" },
            mechanism: "",
            treatment: "",
            references: [
              {
                title: "Clinical review: Complications and risk factors of peripheral arterial catheters used for haemodynamic monitoring in anaesthesia and intensive care medicine",
                urlString: "https://link.springer.com/article/10.1186/cc1489"
              }
            ]
          },
          {
            name: "Air Embolism",
            incidenceRate: { mean: "0.03%", range: "0% – 0.2%" },
            mechanism: "",
            treatment: "",
            references: [
              {
                title: "Clinical review: Complications and risk factors of peripheral arterial catheters used for haemodynamic monitoring in anaesthesia and intensive care medicine",
                urlString: "https://link.springer.com/article/10.1186/cc1489"
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        header: "Obtain Legal Documentation",
        body: "Obtain consent from the patient or healthcare proxy and complete the appropriate institutional paperwork. Perform a standardized safety timeout prior to the procedure.",
        images: []
      },
      {
        header: "Choosing the Appropriate Side",
        body: "Using ultrasound with an arterial access preset and a linear probe, map the radial artery on both sides to determine the most suitable site. Alternative arterial sites can be considered if the radial artery is not feasible. \n\nThe brachial artery is not a preferred site as it is close to the median nerve and there is no collateral circulation, placing the patient at increased risk of acute limb ischemia.",
        callout: "The ideal radial artery will be superficial, have a larger diameter, minimal calcification, and a straight path along the wrist. The non-dominant hand is preferred.",
        images: []
      },
      {
        header: "Setting Up the Arterial Line System",
        body: "Ensure the pressure bag, transducer, and tubing are prepared, flushed, and ready to be connected prior to beginning the procedure.",
        images: [
          {
            imageName: "AL Pressure Bag",
            caption: "Arterial line pressure bag containing a 500 mL bag of normal saline. Air was removed from the bag prior to use. The tubing is connected and the line is flushed to ensure no air in the line."
          },
          {
            imageName: "AL Transducer",
            caption: "Arterial line transducer setup in the monitoring configuration, leveled at the phlebostatic axis and closed to atmosphere."
          }
        ]
      },
      {
        header: "Setting Up the Patient",
        body: "Maintain a firm, sterile working surface under the wrist. Place an absorbent pad beneath the wrist. Secure the hand in position using silk tape across the 2nd–5th digits or by taping the thumb to maintain supination.",
        images: [
          {
            imageName: "AL Positioning 1",
            caption: "Absorbent pad placed beneath wrist with silk tape wrapped around thumb to secure wrist in supination."
          },
          {
            imageName: "AL Positioning 2",
            caption: "Silk tape can be placed across 2-5th digits to help stabilize the arm during the procedure."
          }
        ]
      },
      {
        header: "Sterilization and Draping",
        body: "After donning PPE, sterilize the arm from the wrist to the antecubital fossa using Chloraprep or another approved antiseptic. Place a small fenestrated drape over the sterile field. You may place an additional sterile drape nearby to hold sterile equipment if the procedure is done alone.",
        images: [
          {
            imageName: "AL Skin Prep",
            caption: "Sterilize the wrist up to the antecubital fossa as well as the hand using provided antiseptic."
          },
          {
            imageName: "AL Draping 1",
            caption: "Create a fenestration in the drape and overlay the target area to create a sterile field."
          },
          {
            videoName: "AL Draping (Part 1)",
            caption: "Video demonstrating creation of fenestration for draping.",
            isVideo: true
          },
          {
            imageName: "AL Draping 2",
            caption: "Place another drape adjacent to the field to give space to place sterile equipment."
          }
        ]
      },
      {
        header: "Probe Preparation",
        body: "Have a non-sterile assistant disinfect the linear transducer and apply gel directly onto the probe. The assistant loads the transducer into the sterile sheath without touching the distal end. Pull the sheath over the cable. Expel air pockets by manual smoothing and secure the sheath at the probe neck with the supplied sterile rubber bands. Apply sterile gel to the outside of the covered probe.",
        callout: "Only the distal portion of the probe cover is considered sterile.",
        images: [
          {
            imageName: "AL Gel Setup",
            caption: "After setting up the probe, use the sterile probe cover wrap as a convenient holder for the sterile gel."
          }
        ]
      },
      {
        header: "Re-identify the Radial Artery",
        body: "Using the linear probe, scan the lateral, distal wrist in transverse view. Confirm arterial anatomy by noting pulsatility and relative resistance to compression. Once the target segment is identified, center it on the screen.",
        callout: "A sterile skin mark at the point of maximal pulsation may assist with needle entry.",
        images: [
          {
            imageName: "AL US Artery Positioning",
            caption: "Use probe to re-identify the radial artery."
          },
          {
            videoName: "AL US Artery",
            caption: "Follow the course of the radial artery to determine the appropriate needle trajectory for arterial entry.",
            isVideo: true
          }
        ]
      },
      {
        header: "Anesthetize the Entry Site",
        body: "After identifying the procedure entry site, administer 1% lidocaine with a small-gauge needle to create a wheal.",
        images: [
          {
            imageName: "AL Lidocaine 1",
            caption: "Use a small gauge needle to inject lidocaine at the entry site, if appropriate."
          }
        ]
      },
      {
        header: "Transverse-View Technique",
        body: "Insert the catheter–needle assembly at a 45° angle aligned with the center of the probe. Track the needle tip continuously using small adjustments. Once the lumen is entered, confirm flashback and ultrasound visualization of the needle tip. Lower the angle, advance the guidewire, and then pass the catheter over the guidewire.",
        callout: "Do not reinsert the guidewire once it is removed as this can damage the vessel or catheter.",
        images: [
          {
            imageName: "AL Grip 1",
            caption: "Hold the arterial catheter system like a pencil at the intersection of the catheter and hub."
          },
          {
            imageName: "AL Grip 2",
            caption: "Ensure the bevel is facing upwards."
          },
          {
            imageName: "AL Entry Angle",
            caption: "Insert the needle at a 45–60° angle parallel to the radial artery's tract."
          },
          {
            imageName: "AL Guidewire 1 (Blood)",
            caption: "Once you see flash, advance the guidewire forward using the black actuating lever."
          },
          {
            imageName: "AL Guidewire 2",
            caption: "At the black mark on the tubing, the guidewire reaches the needle tip. Resistance encountered beyond this point may indicate that the needle is not correctly positioned within the arterial lumen or that the guidewire is contacting the arterial wall. Lower the needle angle and reattempt guidewire advancement. If resistance persists, reassess the position of the needle tip."
          },
          {
            imageName: "AL Guidewire 3",
            caption: "The guidewire is fully seated in the artery when the actuating lever is fully advanced."
          }
        ]
      },
      {
        header: "Connecting the Arterial Line",
        body: "Attach the catheter to the transducer system. Confirm a proper arterial waveform with no damping before securing everything in place.",
        callout: "Do not release the catheter until it is fully secure.",
        images: [
          {
            imageName: "AL Catheter 1",
            caption: "Once the guidewire is fully seated, advance the catheter fully into the artery."
          },
          {
            imageName: "AL Transducer 1",
            caption: "Remove the guidewire while maintaining catheter position, observe pulsatile flow, and attach the transducer system immediately."
          }
        ]
      },
      {
        header: "Securing the Arterial Line",
        body: "Secure the line per institutional policy. If suturing, use the indentation at the catheter base: take a superficial skin bite just lateral to the catheter, bring the needle up medially, wrap the suture within the indentation multiple times, and tie secure knots.",
        images: [
          {
            videoName: "AL Suturing (Part 1)",
            caption: "The suture should be placed adjacent to the indentation in the catheter base. A wide and superficial bite is taken underneath the catheter.",
            isVideo: true
          },
          {
            videoName: "AL Suturing (Part 2)",
            caption: "Reverse the Keith needle so the blunt end is directed under and around the catheter to avoid accidental puncture. The suture is then wrapped around the catheter six times. Pull the suture taught so the catheter is secured tightly to the skin. Tie the suture in place with multiple surgical knots then use the Keith needle's sharp end to cut the thread.",
            isVideo: true
          }
        ]
      },
      {
        header: "Dressing and Line Care",
        body: "Clean the insertion site and surrounding skin with sterile disinfectant. Next, use a sterile adhesive wipe and coat the region where the bandage will be secured. Apply a CHG-impregnated transparent dressing over the catheter and secure to the skin. Route the tubing smoothly over the thenar web space and secure with tape.",
        callout: "Avoid tension or kinking, especially along the thenar eminence or thumb, to prevent ischemia.",
        images: [
          {
            imageName: "AL Postcare 1",
            caption: "Use the provided scrub in the central line dressing kit to cleanse the catheter, tubing, and all blood off the skin."
          },
          {
            imageName: "AL Postcare 2",
            caption: "Apply the adhesive wipe and coat the tubing and skin where the dressing will overlap."
          },
          {
            imageName: "AL Postcare 3",
            caption: "Apply the CHG dressing, press it firmly to the skin, and then use the provided additional dressing piece to secure the opposite side of the tubing."
          },
          {
            imageName: "AL Postcare 4",
            caption: "Place the final dressing piece over the tubing to seal the dressing completely."
          },
          {
            imageName: "AL Tubing 1",
            caption: "Wrap the tubing around the webspace of the thumb without kinking or pulling too tightly."
          },
          {
            imageName: "AL Tubing 2",
            caption: "Tape the tubing in place along the lateral aspect of the arm."
          }
        ]
      }
    ],
    tipsAndTricks: []
  },
  {
    id: "arterial-blood-gas",
    title: "Arterial Blood Gas",
    category: "diagnosticSampling",
    iconName: "droplet",
    clinicalInfo: [
      {
        type: "indications",
        items: [
          "Assess acute, severe respiratory distress",
          "Measure arterial pH, PaO₂, and PaCO₂",
          "Evaluate acid–base balance"
        ]
      },
      {
        type: "contraindications",
        items: [
          { text: "Inadequate collateral circulation to the hand", severity: "absolute" },
          { text: "Overlying skin infection at the puncture site", severity: "relative" },
          { text: "Anticoagulation or coagulopathy", severity: "relative" }
        ]
      },
      {
        type: "complications",
        items: [
          "Accidental venous blood sampling",
          "Vasospasm",
          "Radial artery aneurysm",
          "Hand ischemia",
          "Bleeding and hematoma formation",
          "Compartment syndrome"
        ]
      }
    ],
    steps: [
      {
        header: "Set Up Wrist For Procedure",
        body: "Place the patient's wrist at their side or on a tray table. Fold towel in half and roll. Place underneath the patient's wrist to allow the wrist to extend. You may wrap silk tape around the patient's thumb to steady the hand in a supinated position.",
        images: [
          {
            imageName: "CFF5A984-65AB-4255-A84C-E9AEA2832619_4_5005_c",
            caption: "Place rolled towel under wrist."
          },
          {
            imageName: "7FA05B25-F38F-49EF-927F-E2E9462D7783_4_5005_c",
            caption: "Optionally apply tape to maintain supination."
          }
        ]
      },
      {
        header: "Palpate Radial Artery",
        body: "The radial artery will lay between the styloid process and flexor carpi radialis tendon. Identify a pulse both distally and 1 cm proximally. Plan your entry site between these two points, ensuring a straight trajectory of the artery, if possible.",
        images: [
          {
            imageName: "0AF1C0D7-0AB3-4711-BC4C-990F033075D8_4_5005_c",
            caption: "Palpation of the radial artery."
          }
        ]
      },
      {
        header: "Sterilization",
        body: "Open an arterial blood gas sampling kit and gauze with paper tape to have ready. Put on your nonsterile gloves. Clean the site with an alcohol swab. Ensure your hands do not touch the now sterilized entry site.",
        images: [
          {
            imageName: "5ACE4133-70B7-49D9-BB79-689A1CA32C71_1_105_c",
            caption: "Setup prior to starting."
          },
          {
            imageName: "DCD693FF-B74A-4C1D-82AD-0A81AEEC6057_4_5005_c",
            caption: "Wipe site with alcohol swab."
          }
        ]
      },
      {
        header: "Obtain Blood Sample",
        body: "Hold the syringe like a pencil. Aim the needle at a 30 to 45° angle to the patient's hand. Advance the needle slowly into the entry site until you see a flash of blood. Once blood begins to fill the syringe, hold the needle and syringe steady until you collect at least 0.5 mL of blood. If you do not see flashback, slowly withdraw the needle to right beneath the skin insertion point, redirect and advance the needle again.",
        callout: "Do not pull back on the plunger.",
        images: [
          {
            imageName: "670909A7-7662-4960-A5BD-BDD5EA2BB883_1_105_c",
            caption: "Holding syringe like pencil at 45° angle."
          },
          {
            imageName: "6127C8D5-CDC7-430E-B3FE-5FFE7C650ECC_1_105_c",
            caption: "Allowing blood to fill syringe passively."
          }
        ]
      },
      {
        header: "Post Collection Care",
        body: "Withdraw the syringe and protect the needle. Place sterile gauze over the site and hold pressure for approximately 5 minutes (if the patient is anticoagulated, may need to hold pressure for longer). Then tape the gauze in place with paper tape. Meanwhile, remove the needle from the syringe and expel any excess air from the syringe. Cap the syringe and push the plunger to soak the white portion of the cap with blood. Finally, label the syringe and send it to the lab immediately for analysis (some hospitals may require the sample to be sent on ice).",
        callout: "The ABG must be analyzed within 30-45 minutes, as any delay will result in inaccurate measurements, particularly a falsely elevated pO2.",
        images: [
          {
            imageName: "BC0B7DA8-608E-4B45-B0D2-19F833AE0309_1_105_c",
            caption: "Holding pressure with gauze."
          },
          {
            imageName: "F1103821-D836-4B5B-8061-C14674F207A8_1_201_a",
            caption: "Taping gauze to site."
          },
          {
            imageName: "E2A166A1-2345-42CB-8C54-A5A0009874ED_4_5005_c",
            caption: "Safely capping the needle."
          },
          {
            imageName: "C5B19D93-4E64-47DA-8C79-2216F6DDCE72_1_102_a",
            caption: "Expelling air from syringe."
          },
          {
            imageName: "AD4C1F16-DB4E-4BFD-8C1F-E8765B1BE05E_1_102_a",
            caption: "Soaking white portion of cap with blood."
          }
        ]
      }
    ],
    tipsAndTricks: []
  },
  {
    id: "central-venous-line",
    title: "Central Venous Line",
    subtitle: "Internal Jugular",
    category: "vascularAccess",
    iconName: "shield",
    clinicalInfo: [
      {
        type: "indications",
        items: [
          "Caustic/vasoactive medications",
          "Poor peripheral access",
          "Central venous pressure monitoring",
          "Hemodialysis",
          "Pacemaker lead placement"
        ]
      },
      {
        type: "contraindications",
        items: [
          { text: "Inability to lay flat", severity: "relative" },
          { text: "Overlying skin infection", severity: "relative" },
          { text: "Suspected IJ/SVC obstruction", severity: "relative" },
          { text: "Distorted neck anatomy", severity: "relative" },
          { text: "Coagulopathy", severity: "relative" }
        ]
      },
      {
        type: "complications",
        items: [
          {
            name: "Placement Failure",
            incidenceRate: { mean: "0.52%", range: "0.12% - 1.64%" },
            references: [
              {
                title: "Teja B, Bosch NA, Diep C, et al. Complication Rates of Central Venous Catheters: A Systematic Review and Meta-Analysis. JAMA Intern Med. 2024;184(5):474–482.",
                urlString: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2815818"
              }
            ]
          },
          {
            name: "Arterial Puncture",
            incidenceRate: { mean: "1.21%", range: "0.65% - 2.13%" },
            references: [
              {
                title: "Teja B, Bosch NA, Diep C, et al. Complication Rates of Central Venous Catheters: A Systematic Review and Meta-Analysis. JAMA Intern Med. 2024;184(5):474–482.",
                urlString: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2815818"
              }
            ]
          },
          {
            name: "Hemothorax",
            incidenceRate: { mean: "0%" },
            references: [
              {
                title: "Akoglu H, Piskinpasa S, Yenigun EC, Ozturk R, Dede F, Odabas AR. Real-time ultrasound guided placement of temporary internal jugular vein catheters: assessment of technical success and complication rates in nephrology practice. Nephrology (Carlton). 2012;17(7):603-606.",
                urlString: "https://onlinelibrary.wiley.com/doi/10.1111/j.1440-1797.2012.01637.x"
              }
            ]
          },
          {
            name: "Clinically Relevant Catheter Misplacement",
            incidenceRate: { mean: "0.98%" },
            references: [
              {
                title: "Hourmozdi JJ, Markin A, Johnson B, Fleming PR, Miller JB. Routine Chest Radiography Is Not Necessary After Ultrasound-Guided Right Internal Jugular Vein Catheterization. Crit Care Med. 2016 Sep;44(9):e804-8.",
                urlString: "https://pubmed.ncbi.nlm.nih.gov/27035241/"
              }
            ]
          },
          {
            name: "Air Embolism",
            incidenceRate: { mean: "1.0%" },
            references: [
              {
                title: "Quality Improvement Guidelines for Central Venous Access. Dariushnia, Sean R. et al. Journal of Vascular and Interventional Radiology, Volume 21, Issue 7, 976 - 981",
                urlString: "https://www.jvir.org/article/S1051-0443(10)00313-1/fulltext"
              }
            ]
          },
          {
            name: "Deep Vein Thrombosis",
            incidenceRate: { mean: "0.27%", range: "0.10% - 0.62%", timePeriod: "per catheter-days" },
            references: [
              {
                title: "Teja B, Bosch NA, Diep C, et al. Complication Rates of Central Venous Catheters: A Systematic Review and Meta-Analysis. JAMA Intern Med. 2024;184(5):474–482.",
                urlString: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2815818"
              }
            ]
          },
          {
            name: "Catheter Malfunction",
            incidenceRate: { mean: "0.55%", range: "0.06% - 3.8%", timePeriod: "per catheter-days" },
            references: [
              {
                title: "Teja B, Bosch NA, Diep C, et al. Complication Rates of Central Venous Catheters: A Systematic Review and Meta-Analysis. JAMA Intern Med. 2024;184(5):474–482.",
                urlString: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2815818"
              }
            ]
          },
          {
            name: "Infection",
            incidenceRate: { mean: "0.38%", range: "0.20% - 0.69%", timePeriod: "per catheter-days" },
            references: [
              {
                title: "Teja B, Bosch NA, Diep C, et al. Complication Rates of Central Venous Catheters: A Systematic Review and Meta-Analysis. JAMA Intern Med. 2024;184(5):474–482.",
                urlString: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2815818"
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        header: "Obtain Consent",
        body: "Ensure consent is obtained and time-out is performed prior to procedure.",
        images: []
      },
      {
        header: "Patient Positioning",
        body: "Position the patient supine. Apply a mild Trendelenburg tilt, if appropriate, to promote venous distention. Rotate the head only slightly away from the insertion site to prevent posterior displacement of the carotid artery behind the vein.",
        callout: "Always make sure the patient is on continuous vitals and cardiac monitoring.",
        images: [
          {
            imageName: "CL Trendelenburg",
            caption: "Patient in Trendelenburg positioning."
          }
        ]
      },
      {
        header: "Identify Landmarks",
        body: "Identify the triangle formed by the two heads of the sternocleidomastoid muscle and the clavicle. The target entry point is typically a few centimeters superior to the clavicle within this space.",
        images: [
          {
            imageName: "Neck Anatomy (Captions)",
            caption: "Identifying landmarks for location of internal jugular vein."
          }
        ]
      },
      {
        header: "Ultrasound Survey",
        body: "Use a linear transducer to identify the internal jugular vein and carotid artery. Confirm that the vein is fully compressible and free of obstruction or thrombosis. Track the internal jugular vein along its course to determine its trajectory. The needle will be inserted in alignment with the vein’s long axis, advancing parallel to its tract.",
        callout: "Color Doppler may be used as an adjunct (blue = flow away from the probe; red = flow toward the probe).",
        images: [
          {
            imageName: "US Identification (Transverse)",
            caption: "Ensure the probe is perpendicular to the skin surface."
          },
          {
            imageName: "US Identification (Transverse, Head of Bed)",
            caption: "Ensure the probe is parallel to the path of the internal jugular vein."
          },
          {
            imageName: "Vasculature on US",
            caption: "Ultrasound image of the common carotid and internal jugular vein."
          },
          {
            videoName: "US Vasculature Collapse Transverse",
            caption: "Confirmation of internal jugular vein by applying pressure to neck and observing collapse of the vein in the transverse view.",
            isVideo: true
          },
          {
            videoName: "US Vasculature Collapse Long",
            caption: "Confirmation of internal jugular vein by applying pressure to neck and observing collapse of the vein in the longitudinal view.",
            isVideo: true
          }
        ]
      },
      {
        header: "Sterilization",
        body: "Prepare the selected site with chlorhexidine antiseptic. Don cap, mask, gown, and sterile gloves, then drape the field with the large fenestrated sterile drape.",
        images: [
          {
            imageName: "Sterilization of Field",
            caption: "Use chlorhexidine prep to prepare the field."
          },
          {
            imageName: "Placing Drape",
            caption: "Remove white to reveal adhesive. Fold drape in half and place fenestration over the insertion site."
          },
          {
            imageName: "Placing Drape 2",
            caption: "Identify the arrows and pull the drape laterally and medially."
          },
          {
            imageName: "Placing Drape 3",
            caption: "Identify vertical arrows and with hand overlying the site of the fenestration, pull the drape cranially."
          },
          {
            imageName: "Placing Drape 4",
            caption: "Identify vertical arrows and with hand overlying the site of the fenestration, pull the drape caudally."
          }
        ]
      },
      {
        header: "Catheter and Guidewire Preparation",
        body: "Prepare the triple-lumen catheter by removing the caps from all three Luer locks and opening all clamps. Attach the securement hubs to the two side ports, leaving the central lumen open for guidewire passage. Flush all lumens with sterile saline. Remove the guidewire from its packaging and retract it slightly until the tip is straightened within the sheath.",
        images: [
          {
            imageName: "Catheter Prep 1",
            caption: "Remove the blue protective caps from each catheter port."
          },
          {
            imageName: "Catheter Prep 2",
            caption: "Attach needleless connectors to the white and blue ports; leave the brown port without a connector."
          },
          {
            imageName: "Catheter Prep 3",
            caption: "Leave the brown port open to allow passage of the catheter over the guidewire in a later step."
          },
          {
            imageName: "Catheter Prep 4",
            caption: "Attach sterile saline and flush all three ports."
          },
          {
            imageName: "Guidewire Prep 1",
            caption: "Remove the protective end cap from the guidewire."
          },
          {
            imageName: "Guidewire Prep 2",
            caption: "Retract the guidewire tip until it is seated within the hub."
          }
        ]
      },
      {
        header: "Ultrasound Preparation",
        body: "Have an assistant apply ultrasound gel to the probe and insert it into the sterile transducer sheath. The assistant should grasp the distal end of the sheath and draw it over the probe cable. Secure the sheath with sterile rubber bands and apply sterile gel to the covered probe.",
        callout: "Place sterile gel on the drape in an easily accessible location for use during the procedure.",
        images: [
          {
            imageName: "Ultrasound Prep 1",
            caption: "Open the packaging and prepare the ultrasound transducer sheath."
          },
          {
            imageName: "Ultrasound Prep 2",
            caption: "Cover the nonsterile transducer with the sterile transducer sheath with an assistant and wrap both rubber bands over the cover, ensuring all air bubbles are removed over the transducer interface."
          },
          {
            imageName: "Ultrasound Prep 3",
            caption: "You may place the sterile gel on your sterile field for easy accessibility during the procedure."
          }
        ]
      },
      {
        header: "Local Anesthesia",
        body: "Draw 1% lidocaine into a 5 mL syringe. Using the ultrasound probe, re-identify the planned needle entry site. Create a small intradermal wheal at the entry point, then infiltrate additional lidocaine along the anticipated needle tract toward the internal jugular vein.",
        callout: "Aspirate before each injection to avoid intravascular administration.",
        images: [
          {
            imageName: "Lidocaine Prep 1",
            caption: "Use a blunt needle to draw 1% lidocaine into a 5 mL syringe."
          },
          {
            imageName: "Lidocaine Prep 2",
            caption: "Replace the blunt needle with an appropriately sized injection needle."
          },
          {
            imageName: "Lidocaine Prep 3",
            caption: "Create a wheal at the entry site."
          },
          {
            imageName: "Lidocaine Prep 4",
            caption: "Under ultrasound guidance, advance the injection needle along the planned tract. Aspirate to confirm nonvascular placement, then inject lidocaine to anesthetize the tract."
          }
        ]
      },
      {
        header: "Needle Entry",
        body: "Center the internal jugular vein on the ultrasound display. Insert the introducer needle at a minimum 45° angle while maintaining continuous aspiration. Advance in a stepwise fashion: move the needle forward, identify the tip under ultrasound, and repeat until the tip is visualized within the vessel and brisk venous blood return is obtained. Once intravascular, lower the needle to a shallower angle while maintaining adequate blood return.",
        callout: "Before needle insertion, ensure the guidewire and a gauze pad are within immediate reach.",
        images: [
          {
            imageName: "Introducer Needle 1",
            caption: "Attach the introducer needle to the provided syringe. Align the needle bevel face-up with the syringe markings to aid orientation."
          },
          {
            imageName: "Introducer Needle 2",
            caption: "Ensure the internal jugular vein is centered on the ultrasound screen."
          },
          {
            imageName: "CL Negative Pressure",
            caption: "Under ultrasound guidance, insert the introducer needle at a 45–60° angle. Apply continuous negative pressure on the syringe immediately after skin entry."
          }
        ]
      },
      {
        header: "Guidewire Placement",
        body: "Stabilize the introducer needle with your nondominant hand. Detach the syringe and confirm dark, nonpulsatile venous flow. If pulsatile flow is observed, withdraw the needle and apply firm pressure with gauze for at least 10 minutes to achieve hemostasis. Advance the guidewire smoothly through the introducer needle, ensuring there is no resistance. If a new arrhythmia appears on telemetry, immediately retract the guidewire. Once the guidewire is in place, remove the introducer needle.",
        callout: "Maintain continuous control of the guidewire at all times once it is within the vessel.",
        images: [
          {
            imageName: "Introducer Needle 4",
            caption: "Once the tip of the needle enters the vessel, there should be brisk blood return."
          },
          {
            imageName: "Introducer Needle 5",
            caption: "At this point, the guidewire should be easily accessible. Drop the ultrasound probe and steady the needle with your non-dominant hand."
          },
          {
            imageName: "Guidewire Placement 1",
            caption: "Remove the introducer syringe and assess for a slow, steady blood return. If present, advance the guidewire through the introducer needle. If pulsatile flow is noted, remove the needle immediately and apply firm pressure for at least 10 minutes."
          },
          {
            imageName: "Guidewire Placement 2",
            caption: "The guidewire is usually advanced until the 3rd marking, which corresponds to 30 cm, though the exact distance may vary depending on the patient’s anatomy and the insertion site."
          },
          {
            imageName: "Guidewire Placement 3",
            caption: "Finally, remove the introducer needle while maintaining control of the guidewire."
          }
        ]
      },
      {
        header: "Visualize Venous Placement",
        body: "Use ultrasound to confirm guidewire position within the vein in both transverse and longitudinal views. In the transverse view, identify the guidewire within the vessel and track it until it disappears beneath the clavicle. Apply gentle compression to confirm the guidewire is within the vein. Rotate to the longitudinal view and again visualize and follow the guidewire within the vessel, using light compression to verify venous placement.",
        callout: "If arterial placement is suspected, the guidewire may be removed and pressure applied—but only if the dilator has not yet been inserted.",
        images: [
          {
            videoName: "CL Confirmation",
            caption: "The internal jugular vein is scanned in both transverse and longitudinal views to visualize the guidewire’s path within the vessel. Venous placement is confirmed by demonstrating compressibility of the vessel with gentle probe pressure.",
            isVideo: true
          }
        ]
      },
      {
        header: "Tract Dilation",
        body: "Using a scalpel, create a small skin nick at the entry site, orienting the blade away from the guidewire. Advance the dilator over the wire with a gentle twisting motion to enlarge the tract, then remove the dilator. Keep gauze immediately available to apply light pressure at the entry site.",
        callout: "Maintain continuous control of the guidewire with one hand at all times.",
        images: [
          {
            imageName: "Skin Nick 1",
            caption: "The scalpel's sharp edge should face away from the guidewire."
          },
          {
            imageName: "Skin Nick 2",
            caption: "The scalpel should be advanced just enough to allow the dilator to pass over the guidewire."
          },
          {
            imageName: "Dilator Insertion 1",
            caption: "Carefully bend the guidewire into a loop, ensuring it does not kink. Then, pass the dilator over the guidewire."
          },
          {
            imageName: "Dilator Insertion 2",
            caption: "Have gauze nearby. Grasp the dilator near its tip and advance it through the skin and subcutaneous tissue with a gentle twisting motion, carefully enlarging the tract up to the internal jugular vein."
          },
          {
            imageName: "Dilator Insertion 3",
            caption: "While maintaining control of the guidewire, remove the dilator and hold pressure over the insertion site with gauze."
          }
        ]
      },
      {
        header: "Catheter Insertion",
        body: "Advance the catheter over the guidewire. Once fully seated, remove the guidewire and attach a securement hub to the remaining Luer lock. Aspirate from each lumen to confirm free blood return, then flush with saline to ensure patency and clear residual blood. Clamp each port.",
        callout: "The guidewire is long; it may be gently looped in one hand—without bending or kinking—while threading the catheter.",
        images: [
          {
            imageName: "CL Catheter Insertion 1",
            caption: "Advance the catheter over the guidewire while ensuring you have control of the guidewire at all times."
          },
          {
            imageName: "CL Catheter Insertion 2",
            caption: "Advance the catheter over the guidewire until the guidewire reaches the end of the brown port. If the external length of the guidewire is insufficient, gently retract the guidewire while advancing the catheter to ensure it fully emerges through the port."
          },
          {
            imageName: "CL Catheter Insertion 3",
            caption: "Continue to advance the catheter until the hub is fully seated against the skin. Then remove the guidewire."
          },
          {
            imageName: "Flushing Ports 1",
            caption: "Attach the final needless connector to the brown port."
          },
          {
            imageName: "Flushing Ports 2",
            caption: "Aspirate until blood enters the lumen of each port."
          },
          {
            imageName: "Flushing Ports 3",
            caption: "Then flush with sterile saline to clear the line."
          },
          {
            imageName: "Clamping",
            caption: "Clamp each line near the base of each port."
          }
        ]
      },
      {
        header: "Skin Suturing and Dressing",
        body: "Secure the catheter hub to the skin with the brand name oriented upward. Place one suture on each side of the hub. Apply a sterile chlorhexidine-impregnated dressing over the insertion site.",
        images: [
          {
            imageName: "Suturing",
            caption: "Suture the catheter in place. It can be helpful to place the suture through the skin on the side of the catheter insertion site to draw the catheter hub deeper into the tissue."
          },
          {
            imageName: "Dressing 1",
            caption: "Place the CHG dressing over the catheter insertion site."
          },
          {
            imageName: "Dressing 2",
            caption: "Apply the second dressing piece on the opposite side of the tubing."
          },
          {
            imageName: "Dressing 3",
            caption: "Use the third dressing piece to fully seal the site and write the dressing date."
          }
        ]
      },
      {
        header: "Post-Procedure Care",
        body: "Obtain a chest radiograph to confirm catheter tip position—ideally at the cavoatrial junction—and to exclude pneumothorax. \n\nThe expected location of a central venous catheter tip can be estimated using three radiographic landmarks:\n\n1. Approximately two vertebral body levels inferior to the carina\n2. The intersection of the bronchus intermedius with the superior right heart border\n3. The intersection of the superior right heart border with the superior vena cava (SVC) contour",
        images: [
          {
            imageName: "CL CXR",
            caption: "Case courtesy of Henry Knipe, Radiopaedia.org. From the case rID: 29809"
          }
        ]
      }
    ],
    tipsAndTricks: []
  },
  {
    id: "lumbar-puncture",
    title: "Lumbar Puncture",
    category: "diagnosticSampling",
    iconName: "brain",
    clinicalInfo: [
      {
        type: "indications",
        items: [
          "Obtain cerebrospinal fluid for analysis",
          "Measure opening pressure",
          "Administer medications such as antibiotics, anesthetics, or chemotherapy"
        ]
      },
      {
        type: "contraindications",
        items: [
          { text: "Signs of herniation", severity: "absolute" },
          { text: "Markedly increased ICP with focal deficits", severity: "absolute" },
          { text: "Severe cardiorespiratory instability", severity: "absolute" },
          { text: "Skin infection at the puncture site", severity: "relative" },
          { text: "Significant coagulopathy", severity: "relative", explanation: "In patient with coagulopathy, risk for spinal hematoma increases to 0.23% (CI: 0.15-0.34%). Refer to spinal hematoma complication for references." }
        ]
      },
      {
        type: "complications",
        items: [
          {
            name: "Post-Dural Puncture Headache (PDPH)",
            incidenceRate: { mean: "11%", range: "9.1% - 13.3%" },
            references: [
              {
                title: "Atraumatic Versus Conventional Lumbar Puncture Needles: A Systematic Review and Meta-Analysis",
                urlString: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(17)32451-0/abstract"
              }
            ]
          },
          {
            name: "Spinal Hematoma",
            incidenceRate: { mean: "0.20%", range: "0.16% - 0.24%" },
            references: [
              {
                title: "Association of Lumbar Puncture With Spinal Hematoma in Patients With and Without Coagulopathy",
                urlString: "https://jamanetwork.com/journals/jama/fullarticle/2771609"
              }
            ]
          },
          {
            name: "Meningitis",
            incidenceRate: { mean: "0.002%" },
            references: [
              {
                title: "Nosocomial Bacterial Meningitis. New England Journal of Medicine",
                urlString: "https://www.nejm.org/doi/full/10.1056/NEJMra0804573"
              }
            ]
          },
          {
            name: "Nerve Root Irritation",
            incidenceRate: { mean: "12.5%" },
            references: [
              {
                title: "Atraumatic Versus Conventional Lumbar Puncture Needles: A Systematic Review and Meta-Analysis",
                urlString: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(17)32451-0/abstract"
              }
            ]
          },
          {
            name: "Traumatic Tap",
            incidenceRate: { mean: "6.5%" },
            references: [
              {
                title: "Atraumatic Versus Conventional Lumbar Puncture Needles: A Systematic Review and Meta-Analysis",
                urlString: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(17)32451-0/abstract"
              }
            ]
          },
          {
            name: "Herniation",
            incidenceRate: { mean: "0.13%" },
            references: [
              {
                title: "Cranial Computed Tomography, Lumbar Puncture, and Clinical Deterioration in Bacterial Meningitis: A Nationwide Cohort Study",
                urlString: "https://academic.oup.com/cid/article/67/6/920/4924491"
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        header: "Patient Positioning",
        body: "Place the patient either sitting upright or in lateral decubitus position. The lateral position is preferred for opening pressure measurement.",
        callout: "Encourage the patient to curl forward to widen interspinous spaces",
        images: []
      },
      {
        header: "Identify Landmarks",
        body: "Identify the lumbar puncture level by palpating the highest points of the iliac crests and projecting an intercristal (Tuffier’s) line to the midline, which typically intersects the L4–L5 interspace. \n\nThe needle is inserted at the L3–L4 or L4–L5 interspace, below the termination of the conus medullaris, which in adults most commonly lies at the L1–L2 level.",
        images: [
          {
            imageName: "LP Lumbar Diagram",
            caption: "The highest points of the iliac crest and the spinous process found along the horizontal line between these two points usually identifies the level of the L4 spinous process or L4-L5 interspinous space."
          },
          {
            imageName: "LP Landmark Palpation",
            caption: "The landmarks are palpated bilaterally and a transverse line is projected to the midline, identifying the spinous process and corresponding L4–L5 interspinous space."
          }
        ]
      },
      {
        header: "Skin Preparation",
        body: "After identifying the interspace by palpation, mark the intended needle insertion site with a sterile skin marker (or gently indent the skin with a syringe tip). \n\nPrepare the skin using chlorhexidine or povidone–iodine, applied in concentric outward circles and allowed to dry completely. \n\nPlace sterile drapes to establish a sterile field before proceeding with local anesthesia.",
        images: [
          {
            imageName: "LP Site Marking",
            caption: "After identifying the needle entry site, mark the location with a skin marker or by gently indenting the skin with the syringe tip."
          },
          {
            imageName: "LP Sterilization",
            caption: "Cleanse the skin using concentric outward circular motions starting at the needle entry site to sterilize a wide area of the back, and allow the antiseptic to dry completely before proceeding."
          },
          {
            imageName: "LP Drape",
            caption: "Place a sterile drape over the back, positioning the needle entry site at the center of the fenestration."
          }
        ]
      },
      {
        header: "Local Anesthesia",
        body: "Inject a lidocaine wheal or topical anesthetic, then infiltrate local anesthetic subcutaneously along the intended needle tract.",
        callout: "Aspirate before each injection to avoid intravascular administration",
        images: [
          {
            imageName: "LP Anesthetic Wheal",
            caption: "Inject a small amount of lidocaine intradermally at the entry site to raise a skin wheal."
          },
          {
            imageName: "LP Anesthetic Tract",
            caption: "Infiltrate local anesthetic (e.g., lidocaine) along the planned needle tract, taking care to aspirate before each injection to avoid intravascular administration."
          }
        ]
      },
      {
        header: "Needle Insertion",
        body: "With the stylet in place, insert the needle with the bevel facing cephalad and the needle angled toward the umbilicus. \n\nAdvance through ligamentum flavum indicated by a subtle pop.",
        callout: "Check for CSF return in 2 mm increments",
        images: [
          {
            imageName: "LP Needle Bevel",
            caption: "Insert the spinal needle with the bevel oriented cranially"
          },
          {
            imageName: "LP Needle Angle",
            caption: "The needle should be angled cephalad about 15°, aiming toward the umbilicus."
          },
          {
            videoName: "LP Insertion Check",
            caption: "Once past the ligamentum flavum, remove the stylet the check for CSF return. If none, reinsert the stylet and advance the needle by 2 mm. Then, repeat.",
            isVideo: true
          }
        ]
      },
      {
        header: "Troubleshooting Needle Insertion",
        body: "If bone is contacted, reposition without withdrawing fully. \n\nIf CSF return occurs but flow is sluggish, rotate the needle 90 degrees as a nerve root may obscure the side port.",
        images: [
          {
            videoName: "LP Readjustment",
            caption: "If contacting bone, readjust the angle of the needle without fully withdrawing.",
            isVideo: true
          },
          {
            videoName: "LP Needle Rotation",
            caption: "If CSF flow is sluggish, rotate the needle 90 degrees.",
            isVideo: true
          }
        ]
      },
      {
        header: "Opening Pressure",
        body: "Ensure the patient is in the lateral decubitus position, which allows for accurate measurement of opening pressure. \n\nAttach the stopcock to the lumbar puncture needle, keeping the stopcock closed toward the patient to prevent CSF loss.\n\nThe manometer often comes in two parts. You may choose to assemble the manometer first, then attach it to the stopcock. \n\nOpen the stopcock to allow CSF to rise in the manometer column. Wait for the CSF column to stabilize, then record the opening pressure. \n\nPosition the collection tube under the stopcock. Open the stopcock to the tube and manometer to collect CSF from the manometer. Once collection is complete, close the stopcock to the patient before removing the stopcock and needle assembly.",
        callout: "Ensure the first collection tube is open and available close by",
        images: [
          {
            videoName: "LP Manometer Start",
            caption: "The 3-way stopcock starts facing toward the patient and then is turned away from the patient to allow for pressure reading.",
            isVideo: true
          },
          {
            imageName: "LP Manometer Attach",
            caption: "3-way stopcock and manometer attached to spinal needle, allowing CSF to flow into the manometer."
          },
          {
            imageName: "LP Manometer Attach (Extension)",
            caption: "Extension tubing, 3-way stopcock, and manometer attached to spinal needle, allowing CSF to flow into the manometer."
          },
          {
            videoName: "LP Manometer High Reading",
            caption: "CSF fluid rising above the 25 cm H2O mark signifies increased intracranial pressure.",
            isVideo: true
          }
        ]
      },
      {
        header: "CSF Collection",
        body: "Adults produce 500 – 600 mL of CSF daily (0.3 – 0.6 mL/min), replacing the total CNS volume of about 160 mL roughly four times per day. \n\nAllow CSF to drip passively into the tubes. Collect 3 – 4 mL per tube for a total of 12 - 16 mL. \n\nThe collected volume is quickly replenished by ongoing CSF production, generally within 20 – 60 minutes.",
        callout: "Never aspirate cerebrospinal fluid",
        images: [
          {
            videoName: "LP Manometer Drain",
            caption: "After recording the opening pressure, position a collection tube beneath the stopcock and open the stopcock toward the patient to collect CSF from the manometer.",
            isVideo: true
          },
          {
            videoName: "LP Collection with Stopcock",
            caption: "To continue collecting without the manometer, close the stopcock to the patient, remove the manometer, and then reopen the stopcock to allow CSF flow into the collection tube.",
            isVideo: true
          },
          {
            imageName: "LP CSF Collection",
            caption: "If no manometer is used, simply collect CSF directly from the spinal needle by removing the stylet."
          },
          {
            imageName: "LP CSF Tubes",
            caption: "3-4 mL of CSF should be collected, per tube."
          }
        ]
      },
      {
        header: "Post-Procedure Care",
        body: "Replace the stylet before removing the needle. This prevents arachnoid tissue from being threaded back through the dural opening during needle removal. Apply a bandage. \n\nMonitor for delayed complications such as worsening pain or neurologic symptoms.",
        images: [
          {
            videoName: "LP Stylet Removal",
            caption: "Replace the stylet into the needle. Then remove the needle while placing pressure with gauze.",
            isVideo: true
          },
          {
            imageName: "LP Bandaid",
            caption: "Apply a bandaid to the area."
          }
        ]
      },
      {
        header: "Lumbar Puncture Orders",
        bullets: [
          "CSF Cell count w/ Manual Differential",
          "CSF Glucose w/ Serum Glucose",
          "CSF Protein",
          "CSF Lactate",
          "CSF Cytology",
          "CSF Gram Stain, Culture, and Sensitivities",
          "CSF AFB Culture",
          "CSF Fungal Culture",
          "CSF Cryptococcal Antigen",
          "CSF Lyme Disease IgG/IgM Ab WB",
          "CSF HSV ½ PCR",
          "CSF Varicella zoster Ab IgG",
          "CSF Treponema pallidum VDRL/RPR",
          "CSF Oligoclonal Bands",
          "CSF Autoimmune Panels (e.g., Anti-NMDA Receptor Antibody)"
        ],
        images: []
      }
    ],
    tipsAndTricks: [
      {
        title: "Optimize Positioning with Assistance",
        description: "In the lateral decubitus (fetal) position, an assistant can help maintain spinal alignment by supporting the shoulders and hips or knees, encouraging maximal lumbar flexion, and minimizing rotation or movement during needle insertion.",
        evidenceLevel: "commonPractice",
        research: [
          {
            title: "Freedman M, Levin MC. How To Do Lumbar Puncture. Merck Manual Professional Version. Merck & Co., Inc. Published May 2024. Updated Aug 2024. Accessed February 11, 2026.",
            urlString: "https://www.merckmanuals.com/professional/neurologic-disorders/how-to-do-lumbar-puncture/how-to-do-lumbar-puncture"
          }
        ]
      }
    ]
  },
  {
    id: "nasogastric-tube",
    title: "Nasogastric Tube",
    category: "airwayAndTubes",
    iconName: "wind",
    clinicalInfo: [
      {
        type: "indications",
        items: [
          "Stomach decompression",
          "Reduce aspiration risk in ventilated patients",
          "Administer medications, nutrition, or contrast",
          "Assist in evaluating upper GI bleeding"
        ]
      },
      {
        type: "contraindications",
        items: [
          { text: "Major facial trauma", severity: "absolute" },
          { text: "Esophageal strictures", severity: "relative", explanation: "The risk of esophageal perforation is high." },
          { text: "Diverticula", severity: "relative", explanation: "The risk of esophageal perforation is high." },
          { text: "Caustic ingestions", severity: "absolute", explanation: "The risk of esophageal perforation is high." },
          { text: "Altered Mental Status", severity: "absolute", explanation: "Patient's who cannot protect their airway should be intubated prior to procedure." }
        ]
      },
      {
        type: "complications",
        items: [
          "Epistaxis",
          "Sinusitis",
          "Sore throat",
          "Esophageal injury or perforation",
          "Aspiration",
          "Pneumothorax",
          "Intracranial placement"
        ]
      }
    ],
    steps: [
      {
        header: "Anesthetizing the Oropharynx",
        body: "Placing an NG tube can be quite uncomfortable. Options for anesthesia include lidocaine gel instilled into the nostril, which the patient can sniff and swallow. Other options include a benzocaine spray to the back of the throat.",
        callout: "Always checking for local anesthetic allergies.",
        images: []
      },
      {
        header: "Measuring NG Tube Length",
        body: "Place an absorbent pad or towel under the chin along the chest. Take the nasogastric tube and use it as a measuring tape. Measure from nose to mandible to xiphoid.",
        images: [
          { imageName: "2 Nasogastric Tube", caption: "Measuring from nose to mandible." },
          { imageName: "3 Nasogastric Tube", caption: "Measuring from mandible to xiphoid process." }
        ]
      },
      {
        header: "Patient Positioning",
        body: "Position the patient upright at 45–90°. The head should be in a neutral or slightly flexed ('sniffing') position to align the nasal passage and esophagus.",
        images: [
          { imageName: "1 Nasogastric Tube", caption: "Patient positioned with absorbent pad for NG tube insertion." }
        ]
      },
      {
        header: "Insert the Tube",
        body: "Lubricate the distal end of the tube and gently advance it along the floor of the nasal cavity, directing it posteriorly. When the tube reaches the oropharynx and induces gagging, pause and instruct the patient to tuck their chin and take small sips of water through a straw. Advance the tube in coordination with swallowing to facilitate passage past the laryngeal inlet to the predetermined depth. If awake, ensure that the patient can speak and is not in distress. \n\nOnce in appropriate position, evaluate by injecting air into the NG tube while auscultating for a 'whoosh' over the stomach. This is only a preliminary check and should not replace radiographic confirmation.",
        callout: "Having an emesis bin available can help, as patients may gag or vomit.",
        images: [
          { imageName: "4 Nasogastric Tube", caption: "Lubricating the distal tip of the NG tube." },
          { imageName: "5 Nasogastric Tube", caption: "Insertion of tube directly posterior along the nasal cavity." },
          { imageName: "8 Nasogastric Tube", caption: "Toomey syringe connected to NG tube for injection of air." },
          { imageName: "9 Nasogastric Tube", caption: "Auscultating stomach for 'whoosh' sound to temporarily confirm placement." }
        ]
      },
      {
        header: "Secure the Tube",
        body: "Clean the nasal bridge with a skin preparation (e.g., an alcohol swab) to improve adhesion. Secure the nasogastric tube to the patient’s nose using split tape. Split one end of the tape lengthwise to create two tails, place the unsplit portion across the nasal bridge over the tube, and wrap the two tails snugly around the tube in opposite directions. Ensure the tube is firmly secured without excessive tension or pressure on the nares.",
        images: [
          { imageName: "6 Nasogastric Tube", caption: "Silk tape split longitudinally to create two tails halfway." },
          { imageName: "7 Nasogastric Tube", caption: "Tails of silk tape wrapped around tube with unsplit tape placed across nasal bridge." }
        ]
      },
      {
        header: "Order Chest X-Ray",
        body: "Order a chest radiograph to confirm correct placement of the nasogastric tube in the stomach. \n\nThe tube should follow the path of the esophagus midline, appearing to bisect the carina on frontal radiograph. The tip should be below the left hemidiaphragm, ideally 10 cm beyond the gastroesophageal junction.",
        callout: "Placement must be verified before initiating suction or administering any substances through the tube.",
        images: [
          {
            imageName: "Nasogastric Tube CXR",
            caption: "Case courtesy of Ian Bickle, Radiopaedia.org. From the case rID: 29342"
          }
        ]
      }
    ],
    tipsAndTricks: [
      {
        title: "Stiffen the Tube with Cooling",
        description: "Place the nasogastric tube in ice water before insertion to increase stiffness, which may facilitate advancement through the oropharynx and esophagus.",
        evidenceLevel: "someEvidence",
        research: [
          {
            title: "Chun DH, Kim NY, Shin YS, Kim SH. A randomized, clinical trial of frozen versus standard nasogastric tube placement. World J Surg. 2009;33(9):1789-1792.",
            urlString: "https://onlinelibrary.wiley.com/doi/10.1007/s00268-009-0144-x"
          },
          {
            title: "Factors affecting nasogastric tube insertion. Crit Care Med",
            urlString: "https://pubmed.ncbi.nlm.nih.gov/6690206/"
          }
        ]
      }
    ]
  },
  {
    id: "paracentesis",
    title: "Paracentesis",
    category: "fluidDrainage",
    iconName: "droplet",
    clinicalInfo: [
      {
        type: "indications",
        items: [
          "New onset of ascites of unknown etiology",
          "Pre-existing ascites with suspicion for SBP",
          "Surveillance paracentesis",
          "Alleviation of symptoms"
        ]
      },
      {
        type: "contraindications",
        items: [
          { text: "Disseminated intravascular coagulation", severity: "absolute" },
          { text: "Pregnancy", severity: "relative" },
          { text: "Bowel obstruction", severity: "relative" },
          { text: "Intraabdominal adhesions", severity: "relative" },
          { text: "Overlying skin infection", severity: "relative", explanation: "Move to a site that avoids the infection, cutaneous vessels, scars, or hematomas" }
        ]
      },
      {
        type: "complications",
        items: [
          {
            name: "Hypotension",
            incidenceRate: { mean: "26%" },
            references: [
              {
                title: "Total paracentesis in non‐alcoholic cirrhotics with massive ascites: Mid‐term effects on systemic and hepatic haemodynamics and renal function. Journal of Gastroenterology and Hepatology",
                urlString: "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1440-1746.1994.tb01567.x"
              }
            ]
          },
          {
            name: "Hyponatremia",
            incidenceRate: { mean: "17%" },
            references: [
              {
                title: "Does This Patient Have Bacterial Peritonitis or Portal Hypertension? How Do I Perform a Paracentesis and Analyze the Results? JAMA",
                urlString: "https://jamanetwork.com/journals/jama/fullarticle/1028634"
              }
            ]
          },
          {
            name: "Hepatorenal Syndrome",
            incidenceRate: { mean: "" },
            references: [
              {
                title: "Does This Patient Have Bacterial Peritonitis or Portal Hypertension? How Do I Perform a Paracentesis and Analyze the Results? JAMA",
                urlString: "https://jamanetwork.com/journals/jama/fullarticle/1028634"
              }
            ]
          },
          {
            name: "Persistent Ascitic Fluid Leakage",
            incidenceRate: { mean: "0.71%", range: "0% - 2.35%" },
            references: [
              {
                title: "Does This Patient Have Bacterial Peritonitis or Portal Hypertension? How Do I Perform a Paracentesis and Analyze the Results? JAMA",
                urlString: "https://jamanetwork.com/journals/jama/fullarticle/1028634"
              }
            ]
          },
          {
            name: "Infection",
            incidenceRate: { mean: "0.16%" },
            references: [
              {
                title: "Incidence of Infectious Complications After an Ultrasound-Guided Intervention. American Journal of Roentgenology",
                urlString: "https://www.ajronline.org/doi/epdf/10.2214/AJR.09.3168"
              }
            ]
          },
          {
            name: "Significant Bleeding",
            incidenceRate: { mean: "0.41%", range: "0% - 2.7%" },
            references: [
              {
                title: "Does This Patient Have Bacterial Peritonitis or Portal Hypertension? How Do I Perform a Paracentesis and Analyze the Results? JAMA",
                urlString: "https://jamanetwork.com/journals/jama/fullarticle/1028634"
              }
            ]
          },
          {
            name: "Bowel Perforation",
            incidenceRate: { mean: "0.83%", range: "0.10% - 3.0%" },
            references: [
              {
                title: "Does This Patient Have Bacterial Peritonitis or Portal Hypertension? How Do I Perform a Paracentesis and Analyze the Results? JAMA",
                urlString: "https://jamanetwork.com/journals/jama/fullarticle/1028634"
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        header: "Patient Preparation",
        body: "Explain the procedure and obtain consent. Position the patient supine with head slightly elevated. Use ultrasound to locate a safe pocket of fluid at least 5 cm in depth in a lower lateral quadrant. An alternative entry site is 2 cm below the umbilicus in the midline.",
        images: [
          {
            imageName: "Patient Preparation",
            caption: "Ensure at least 5 cm pocket of fluid for safe insertion of paracentesis needle and catheter."
          }
        ]
      },
      {
        header: "Skin Preparation",
        body: "Use an empty 5 mL syringe and apply negative pressure to the chosen needle entry site to make a mark. Use chlorhexidine to cleanse the site. Drape the field with the small fenestrated drape. Overlap another drape to extend the sterile field.",
        images: [
          { imageName: "Skin Preparation 1", caption: "Apply negative pressure to site of insertion." },
          { imageName: "Skin Preparation 2", caption: "Cleanse site with chlorhexidine prep." },
          { imageName: "Skin Preparation 3", caption: "Remove circular and horizontal adhesive liner." },
          { imageName: "Skin Preparation 4", caption: "Center the fenestration at the center of the site of insertion. Ensure the horizontal adhesive is placed at top of the abdomen." },
          { imageName: "Skin Preparation 5", caption: "Place the white sterile drape at the bottom of the blue drape to extend the sterile field." }
        ]
      },
      {
        header: "Local Anesthetic",
        body: "Attach the filter straw to a 10-mL syringe and draw up 10 mL of 1% lidocaine. Create a small intradermal wheal at the planned entry site. Allow up to 30 seconds for adequate anesthesia of the superficial tissues. \n\nAdvance the needle slowly while aspirating, intermittently infiltrating lidocaine to anesthetize the deeper tissue layers. Continue this stepwise approach until the peritoneum is reached, indicated by the return of ascitic fluid into the syringe. At that point, withdraw the needle slightly and inject a small amount of lidocaine just superficial to the peritoneum to ensure adequate analgesia before proceeding.",
        images: [
          { imageName: "Local Anesthetic 1", caption: "10 mL of lidocaine 1%, 10 mL syringe, and filter straw." },
          { imageName: "Local Anesthetic 2", caption: "Aspirate the lidocaine using the filter straw into a 10 mL syringe." },
          { imageName: "Local Anesthetic 3", caption: "Expel all air from the syringe before use." },
          { imageName: "Local Anesthetic 4", caption: "Create a small intradermal lidocaine wheal, then wait approximately 30 seconds before re-puncturing the skin." },
          { imageName: "Local Anesthetic 5", caption: "Apply gentle negative pressure while advancing the needle, administering lidocaine incrementally as you proceed." }
        ]
      },
      {
        header: "Catheter Preparation",
        body: "Remove both components of the protective sheath from the introducer needle and assemble the introducer needle with the catheter drainage system. Ensure that the threaded valve hub is fully seated and securely engaged within the introducer needle hub. Confirm that the introducer needle tip extends beyond the pigtail catheter. If available, using sterile technique, verify proper function of the color-change safety indicator by pressing the Veress needle against a firm surface; this should expose the red caution indicator at the introducer needle hub, confirming that the mechanism is working correctly. Finally, check that the stopcock control arm is turned off to the pigtail catheter.",
        images: [
          { imageName: "Catheter Preparation 1", caption: "Remove the plastic sheath from the safety introducer needle assembly." },
          { imageName: "Catheter Preparation 2", caption: "Remove the plastic hub from the base introducer needle assembly." },
          { imageName: "Catheter Preparation 3", caption: "Gently load the safety introducer needle assembly into the proximal end of the catheter drainage assembly." },
          { imageName: "Catheter Preparation 4", caption: "Slowly thread the safety introducer needle assembly through the catheter drainage assembly." },
          { imageName: "Catheter Preparation 5", caption: "Confirm that the threaded valve hub is fully engaged and that the sharp distal tip of the safety introducer needle assembly extends beyond the catheter tip." },
          { imageName: "Catheter Preparation 6", caption: "Visualize the color change indicator when the blunt obturator is being activated." },
          { imageName: "Catheter Preparation 7", caption: "Ensure stopcock arm is facing towards the same direction end of the needle." }
        ]
      },
      {
        header: "Catheter Insertion",
        body: "Create a medium-sized skin nick with the scalpel at the planned entry site. Proceed using either a 45-degree angular approach or a Z-tract technique by pulling the skin caudally prior to insertion. Advance the introducer slowly while applying gentle negative pressure, using your non-dominant hand to stabilize the device close to the needle tip. \n\nWhen ascitic fluid is aspirated, stop advancing. Thread the catheter fully off the needle into the peritoneal cavity, then withdraw the needle, leaving the catheter in place.",
        images: [
          { imageName: "Catheter Insertion 1", caption: "Create a small incision at the planned site of puncture where previously anesthetized with lidocaine." },
          { imageName: "Catheter Insertion 2", caption: "Stabilize the Safe-T-Centesis device with your non-dominant hand at the point of entry while applying gentle negative pressure while advancing the apparatus." },
          { imageName: "Catheter Insertion 3", caption: "Once you start aspirate fluid, advance the catheter drainage assembly off the safety introducer needle assembly into effusion, while holding the safety introducer needle assembly in position." },
          { imageName: "Catheter Insertion 4", caption: "Remove the safety introducer needle assembly once the catheter drainage assembly is fully inserted into the abdomen." }
        ]
      },
      {
        header: "Diagnostic Fluid Collection",
        body: "Attach a 20-mL syringe to the stopcock control arm. Open the stopcock and aspirate approximately 30 mL of ascitic fluid. Dispense the fluid into the three provided collection vials, distributing the sample evenly for diagnostic testing.",
        images: [
          { imageName: "Diagnostic Fluid Collection 1", caption: "Attach 20-mL syringe to the rear port of the stopcock." },
          { imageName: "Diagnostic Fluid Collection 2", caption: "Turn the stopcock 90 degrees." },
          { imageName: "Diagnostic Fluid Collection 3", caption: "Remove approximately 20-30cc for diagnostic testing." },
          { imageName: "Diagnostic Fluid Collection 4", caption: "Collect the ascitic fluid starting with specimen vial 1, 2, and 3." }
        ]
      },
      {
        header: "Therapeutic Fluid Collection",
        body: "Large-volume paracentesis may be performed using either manual aspiration or wall suction. \n\nManual Extraction: Connect the one-way Y-shaped tubing to the stopcock control arm. Attach a 60-mL syringe to the central port of the Y-tubing and connect a collection bag to the distal port. Use the 60-mL syringe as a pump to aspirate ascitic fluid from the abdomen and then expel it into the collection bag, repeating as needed. \n\nSuction-Assisted Extraction: Connect the suction container housing to the stopcock control arm and attach it to a suction canister. Open the stopcock valve and release the clamp to initiate drainage. \n\nIf diagnostic samples are required during large-volume removal, attach a 60-mL syringe to the available side port on the stopcock control arm and aspirate fluid for laboratory analysis.",
        images: [
          { imageName: "Therapeutic Fluid Collection Manual 1", caption: "Attach the drainage bag to the longer end of the Y-shaped tubing." },
          { imageName: "Therapeutic Fluid Collection Manual 2", caption: "The short end will be connected to the rear port of the stopcock, 50cc syringe in the middle of the Y, and the drainage bag at the long end of the Y tubing." },
          { imageName: "Therapeutic Fluid Collection Manual 3", caption: "Open up the apparatus by turning the stopcock 90 degrees towards the yellow cap." },
          { imageName: "Therapeutic Fluid Collection Manual 4", caption: "Perform the drainage using an alternating aspiration-and-injection technique, remembering to count each cycle." },
          { imageName: "Therapeutic Fluid Collection Suction 0", caption: "For wall mount/large volume removal of ascitic fluid, use the extension set tubing and 5-in-1 white adapter." },
          { imageName: "Therapeutic Fluid Collection Suction 5", caption: "Exchange the plastic vacuum bottle spike with the white 5-in-1 adapter." },
          { imageName: "Therapeutic Fluid Collection Suction 1", caption: "Attach male Luer end of extension set to rear port of stopcock." },
          { imageName: "Therapeutic Fluid Collection Suction 2", caption: "Attach the wall suction drainage tubing to the white plastic attachment." },
          { imageName: "Therapeutic Fluid Collection Suction 3", caption: "Ensure that the simple tubing is open." },
          { imageName: "Therapeutic Fluid Collection Suction 4", caption: "Open up the apparatus by turning the stopcock 90 degrees towards the yellow cap." },
          { imageName: "Diagnostic Sampling", caption: "If there is difficulty in the suction, manually flush the pigtail catheter by attaching the 50cc syringe to the 3 point stopcock (where the yellow cap is)." }
        ]
      },
      {
        header: "Post-Procedure Care",
        body: "Remove the catheter and apply a sterile dressing to the entry site. Observe the patient for complications, including hypotension, bleeding, or persistent fluid leakage. Patients undergoing large-volume paracentesis (>5 L removed) may require intravenous albumin, based on clinical judgment and institutional protocol. In addition, the 2021 Practice Guidance by the AASLD recommends albumin infusion in patients with hemodynamic instability, hyponatremia, and/or the presence of AKI even for smaller volume paracentesis.",
        images: [
          { imageName: "Post-Procedure Care 1", caption: "Remove catheter." },
          { imageName: "Post-Procedure Care 2", caption: "Cover puncture site with bandage." }
        ]
      },
      {
        header: "Common Paracentesis Orders",
        bullets: [
          "Body Fluid Cell count",
          "Body Fluid Culture",
          "Pathology Non-Gyn Cytology Request",
          "Body Fluid Glucose",
          "Body Fluid Protein",
          "Body Fluid Lactate Dehydrogenase",
          "Body Fluid Albumin Level Body Fluid",
          "Body Fluid Triglyceride",
          "Body Fluid Bilirubin",
          "Body Fluid Amylase"
        ],
        callout: "Body Fluid = Peritoneal",
        images: []
      }
    ],
    tipsAndTricks: []
  },
  {
    id: "peripheral-iv",
    title: "Peripheral IV",
    category: "vascularAccess",
    iconName: "droplet",
    clinicalInfo: [
      {
        type: "indications",
        items: [
          "Medication delivery",
          "Hydration/PPN",
          "Blood product transfusion"
        ]
      },
      {
        type: "contraindications",
        items: [
          { text: "Overlying skin infection", severity: "relative" },
          { text: "Previous infiltration", severity: "relative" },
          { text: "Burns", severity: "relative" },
          { text: "Fistula/surgical sites", severity: "relative" }
        ]
      },
      {
        type: "complications",
        items: [
          "Pain/bruising",
          "Infiltration",
          "Phlebitis",
          "Thrombosis/embolism",
          "Nerve injury",
          "Infection"
        ]
      }
    ],
    steps: [
      {
        header: "Prepare the Site",
        body: "Apply a tourniquet 8–10 cm proximal to the intravenous site you plan to access. Inspect and gently palpate veins. Clean the skin thoroughly with chlorhexidine or an alcohol swab and allow it to dry.",
        images: [
          { imageName: "6B6AC5E5-51F4-49EA-9388-428E65B2A358_1_105_c", caption: "Supplies gathered for venipuncture." },
          { imageName: "E71E99D0-E604-4803-8501-876E78B6C39D_1_105_c", caption: "Wrapping tourniquet around the arm." },
          { imageName: "2DDDC7D5-22AF-4C52-9C98-08172943FE2E_1_105_c", caption: "Crossing the tails of the tourniquet." },
          { imageName: "0ECEEABD-5498-4C64-AB60-2975B69CCF7A_1_105_c", caption: "Tucking the distal tail tightly under the proximal tail, leaving a small pull tab to allow for easy removal." }
        ]
      },
      {
        header: "Site Selection",
        body: "The forearm veins are optimal for comfort and durability. Antecubital veins, such as the median cubital vein, are often easiest, especially in more urgent situations. Lower extremity veins are suboptimal due to higher complication rates.",
        callout: "Avoid arteries by palpating for pulses.",
        images: [
          { imageName: "5657F1E8-1814-4558-A676-3462A3C71284_1_105_c", caption: "Palpating the veins on the forearm." },
          { imageName: "3D6A8A75-7EE7-4796-ADDA-CD923918AE41_1_105_c", caption: "Cleansing the entry site with an alcohol swab." }
        ]
      },
      {
        header: "Venipuncture Set Up",
        body: "Prior to inserting the needle, ensure the flow clamp is unclamped. Attach the catheter tube connector to the syringe.",
        images: []
      },
      {
        header: "Insert the Needle",
        body: "Use the nondominant hand to maintain traction to the skin distal to the insertion site to prevent the vein from rolling. With the bevel up, enter the skin at a shallow angle (5–30° based on depth). Look for blood flashback, then lower the angle and advance the catheter and needle, very slightly, further along the vein.",
        images: [
          { imageName: "B667223B-CC3F-4895-8FF9-B829E2C14BF1_1_105_c", caption: "Insertion of needle at appropriate angle to skin." },
          { imageName: "A18D52FB-9A85-4E47-8C39-F3629361E397_1_201_a", caption: "Once flash is achieved, the angle of the needle is dropped and advanced slightly." }
        ]
      },
      {
        header: "Advance the Catheter",
        body: "Advance the catheter over the needle and into the vein. Remove the needle, applying its safety mechanism, and release the tourniquet.",
        images: [
          { imageName: "7AFFCFAB-0D08-4523-958E-9EC329A17F68_1_201_a", caption: "Advancing the catheter by steadying the needle with thumb and middle finger while pushing forward on the catheter with the index finger." },
          { imageName: "61E19428-ED4C-46D3-A180-CE0A2A863696_1_105_c", caption: "Pulling out the needle via the safety mechanism with the catheter fully inserted into the vein." }
        ]
      },
      {
        header: "Flush The Vein",
        body: "Attach the saline syringe to the venipuncture tubing. Apply negative pressure to the syringe and watch for blood in the line. Then, flush with saline to confirm patency and check for swelling or discomfort.",
        callout: "Always ensure you take down the tourniquet before flushing the vein.",
        images: [
          { imageName: "139DE459-1D3D-4DD0-90FE-F89845F487EE_1_105_c", caption: "Drawing negative pressure to pull back blood, then flushing the line with saline." },
          { imageName: "DEB3CD5D-8291-46B4-A71B-6D6582E77F05_1_105_c", caption: "Closing the flow clamp." }
        ]
      },
      {
        header: "Dress and Connect",
        body: "Secure with a transparent occlusive dressing. Loop and tape the tubing to reduce tension and accidental dislodgement. Label the dressing with the insertion date.",
        images: [
          { imageName: "5AD8A956-08FA-471D-A05A-16291A62A76D_1_105_c", caption: "Placing the tegaderm over the catheter." },
          { imageName: "D015DB44-F574-4DF8-BE09-0BB1B83F7FC7_1_105_c", caption: "Secure the second piece of the dressing under the tubing." },
          { imageName: "FAF81C9D-7FD9-4227-87F8-9D73AA8F5021_1_105_c", caption: "Place the final dressing piece over the tubing." },
          { imageName: "AA33D873-52CE-4DEA-9331-9E2D5C084B0C_1_105_c", caption: "Write the date of the peripheral IV insertion." }
        ]
      }
    ],
    tipsAndTricks: []
  },
  {
    id: "phlebotomy",
    title: "Phlebotomy",
    category: "diagnosticSampling",
    iconName: "droplet",
    clinicalInfo: [
      {
        type: "indications",
        items: [
          "Obtain blood for diagnostic testing"
        ]
      },
      {
        type: "complications",
        items: [
          "Bruising",
          "Pain at site",
          "Vasovagal response",
          "Nerve irritation",
          "Phlebitis"
        ]
      }
    ],
    steps: [
      {
        header: "Vein Assessment",
        body: "Apply a tourniquet and inspect for suitable veins. Select a straight, palpable vein and allow the skin to dry completely after antiseptic cleaning.",
        images: [
          { imageName: "E71E99D0-E604-4803-8501-876E78B6C39D_1_105_c", caption: "Wrapping tourniquet around the arm." },
          { imageName: "2DDDC7D5-22AF-4C52-9C98-08172943FE2E_1_105_c", caption: "Crossing the tails of the tourniquet." },
          { imageName: "0ECEEABD-5498-4C64-AB60-2975B69CCF7A_1_105_c", caption: "Tucking the distal tail tightly under the proximal tail, leaving a small pull tab to allow for easy removal." }
        ]
      },
      {
        header: "Prepare for Venipuncture",
        body: "Assemble the venipuncture needle and vacutainer. You should have the collection tube, tape, and gauze readily available.",
        images: [
          { imageName: "5657F1E8-1814-4558-A676-3462A3C71284_1_105_c", caption: "Palpating the veins on the forearm." },
          { imageName: "3D6A8A75-7EE7-4796-ADDA-CD923918AE41_1_105_c", caption: "Cleansing the entry site with an alcohol swab." },
          { imageName: "5B6870B8-3510-4503-93BE-A2A11E46B345_1_105_c", caption: "Connecting the vacutainer to the needle tubing and setting up for the blood draw." }
        ]
      },
      {
        header: "Perform the Draw",
        body: "Insert the needle smoothly at 15° to 30° angle. Release the tourniquet once blood begins to flow, and collect the tubes in the appropriate order. Gently invert each tube several times immediately after filling.",
        images: [
          { imageName: "5DD615A9-AF61-4FF1-8EEA-252C856A565C_1_105_c", caption: "Insertion of needle at 15-30° angle." },
          { imageName: "4F6ABF56-2E72-4BDC-AA6D-5F98F3AEBB6B_1_105_c", caption: "Releasing tourniquet when blood is flowing." },
          { imageName: "EB59A836-4D95-4D03-998C-C55751BE1D04_1_105_c", caption: "Insertion of collection tube into vacutainer." }
        ]
      },
      {
        header: "Post-Draw Care",
        body: "Remove the needle while engaging the safety device and dispose of it directly into a sharps bin. Apply pressure to ensure hemostasis. Place a small bandaid if needed.",
        images: [
          { imageName: "265ABA8E-E420-49AB-B77B-2749824DB5EB_1_105_c", caption: "Removal of needle and placing pressure with gauze." },
          { imageName: "B95E27AF-E860-43AD-A7E8-8ED89AE90F1C_1_105_c", caption: "Ensure needle retraction with safety mechanism." },
          { imageName: "2684382D-3D28-4D87-9AEE-CC5610C57D52_4_5005_c", caption: "Tape gauze in place." }
        ]
      },
      {
        header: "Labeling at the Bedside",
        body: "Label every tube in the patient's presence using their correct identifiers.",
        images: []
      }
    ],
    tipsAndTricks: []
  },
  {
    id: "central-line-removal",
    title: "Central Line Removal",
    category: "vascularAccess",
    iconName: "bandage",
    clinicalInfo: [
      {
        type: "indications",
        items: [
          "Central line no longer needed",
          "Suspected catheter-related infection",
          "Catheter malfunction or occlusion"
        ]
      },
      {
        type: "complications",
        items: [
          "Bleeding or Hematoma",
          "Catheter fragment retention",
          "Air embolism"
        ]
      }
    ],
    steps: [
      {
        header: "Prepare Patient",
        body: "Explain the procedure to the patient. Position the patient supine or in Trendelenburg position to minimize the risk of air embolism.",
        images: [
          {
            imageName: "Central Line Removal Supine",
            caption: "Patient positioned supine in preparation for central line removal."
          }
        ]
      },
      {
        header: "Remove Dressing and Sutures",
        body: "Carefully remove the existing dressing. Clean the insertion site with an alcohol swab or chlorhexidine swab. Using the suture removal kit, cut and remove any securing sutures. Remove any securing device if present.",
        images: [
          { imageName: "Central Line Removal Bandage 1", caption: "Folding bandage back from insertion site." },
          { imageName: "Central Line Removal Bandage 2", caption: "Folding bandage around tubing for easier removal." },
          { imageName: "Central Line Removal Cleanse", caption: "Cleaning the insertion site with an alcohol swab or chlorhexidine swab." },
          { imageName: "Central Line Removal Suture and Scalpel", caption: "Removing sutures with either scissors or a scalpel." },
          { imageName: "Central Line Removal Tweezers", caption: "Removing entire suture with tweezers." }
        ]
      },
      {
        header: "Remove Catheter",
        body: "Instruct the patient to hold their breath at end-expiration or perform Valsalva maneuver during removal to prevent air embolism. Place a sterile gauze pad over the entry site and with steady, gentle traction, pull the catheter straight out along its tract. Do not force removal if resistance is encountered.",
        callout: "Remove during end inspiration for mechanically ventilated patients",
        images: [
          {
            imageName: "Central Line Removal Removal Prep",
            caption: "Ensure all supplies are at bedside including occlusive dressing, sterile gauze, and scissors with specimen cup if sending catheter tip for culture."
          },
          {
            imageName: "Central Line Removal Gauze",
            caption: "Place sterile gauze over insertion site while removing catheter during end-expiration or Valsalva maneuver in a non-intubated patient."
          }
        ]
      },
      {
        header: "Apply Pressure and Dressing",
        body: "Immediately apply firm manual pressure with sterile gauze for at least 5 minutes, or until hemostasis is achieved. \n\nOnce hemostasis is confirmed, apply an occlusive dressing to create an airtight seal. \n\nInstruct the patient to remain supine for approximately 30 minutes and maintain the occlusive dressing in place for at least 24 - 48 hours.",
        callout: "Prolonged manual pressure may be required when larger-bore catheters are used or in patients with coagulopathy",
        images: [
          {
            imageName: "Central Line Removal Pressure",
            caption: "Applying pressure to catheter site immediately upon removal to ensure hemostasis."
          },
          {
            imageName: "Central Line Removal Occlusive Dressing",
            caption: "Placing an airtight occlusive dressing over the site once bleeding has stopped."
          }
        ]
      },
      {
        header: "Inspect Catheter",
        body: "Inspect the removed catheter to ensure it is intact. Document the catheter length. If catheter-related infection is suspected, cut the distal 5 cm using sterile technique and send for culture in a sterile specimen cup.",
        images: [
          {
            imageName: "Central Line Removal Specimen",
            caption: "Cut the distal 5 cm using sterile technique and send for culture in a sterile specimen cup."
          }
        ]
      }
    ],
    tipsAndTricks: []
  }
];
