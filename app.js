/* ==========================================
   CONCEPTLENS
   Classes 9-12 | Topic-wise Practice
   ========================================== */

"use strict";

/* 1. SYLLABUS */

const syllabus = {
  "9": {
    Mathematics: [
      "Number Systems",
      "Polynomials",
      "Coordinate Geometry",
      "Linear Equations in Two Variables",
      "Lines and Angles",
      "Triangles",
      "Quadrilaterals",
      "Circles",
      "Statistics",
      "Probability"
    ],
    Science: [
      "Matter in Our Surroundings",
      "Atoms and Molecules",
      "Structure of the Atom",
      "The Fundamental Unit of Life",
      "Tissues",
      "Motion",
      "Force and Laws of Motion",
      "Gravitation",
      "Work and Energy",
      "Sound"
    ],
    English: [
      "Reading Comprehension",
      "Tenses",
      "Modals",
      "Subject-Verb Agreement",
      "Reported Speech"
    ],
    Hindi: [
      "अपठित गद्यांश",
      "अनुच्छेद लेखन",
      "पत्र लेखन",
      "व्याकरण"
    ]
  },

  "10": {
    Mathematics: [
      "Real Numbers",
      "Polynomials",
      "Pair of Linear Equations in Two Variables",
      "Quadratic Equations",
      "Arithmetic Progressions",
      "Triangles",
      "Coordinate Geometry",
      "Introduction to Trigonometry",
      "Circles",
      "Statistics",
      "Probability"
    ],
    Science: [
      "Chemical Reactions and Equations",
      "Acids, Bases and Salts",
      "Metals and Non-metals",
      "Carbon and Its Compounds",
      "Life Processes",
      "Control and Coordination",
      "Heredity",
      "Light: Reflection and Refraction",
      "Electricity",
      "Our Environment"
    ],
    English: [
      "Reading Comprehension",
      "Formal Letters",
      "Analytical Paragraphs",
      "Grammar"
    ],
    Hindi: [
      "अपठित गद्यांश",
      "पत्र लेखन",
      "अनुच्छेद लेखन",
      "व्याकरण"
    ]
  },

  "11": {
    Physics: [
      "Units and Measurements",
      "Motion in a Straight Line",
      "Motion in a Plane",
      "Laws of Motion",
      "Work, Energy and Power"
    ],
    Chemistry: [
      "Structure of Atom",
      "Classification of Elements",
      "Chemical Bonding",
      "Thermodynamics"
    ],
    Mathematics: [
      "Sets",
      "Relations and Functions",
      "Trigonometric Functions",
      "Complex Numbers",
      "Straight Lines"
    ],
    English: [
      "Reading Comprehension",
      "Grammar",
      "Writing Skills"
    ]
  },

  "12": {
    Physics: [
      "Electric Charges and Fields",
      "Electrostatic Potential and Capacitance",
      "Current Electricity",
      "Moving Charges and Magnetism",
      "Ray Optics"
    ],
    Chemistry: [
      "Solutions",
      "Electrochemistry",
      "Chemical Kinetics",
      "Coordination Compounds"
    ],
    Mathematics: [
      "Relations and Functions",
      "Matrices",
      "Determinants",
      "Continuity and Differentiability",
      "Integrals",
      "Probability"
    ],
    English: [
      "Reading Comprehension",
      "Writing Skills",
      "Grammar"
    ]
  }
};


/* 2. HELPER FUNCTIONS */

const $ = id => document.getElementById(id);

function normalizeText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function fillDropdown(element, items, placeholder) {
  if (!element) {
    console.error("Dropdown element not found.");
    return;
  }

  element.replaceChildren();

  const firstOption = document.createElement("option");
  firstOption.value = "";
  firstOption.textContent = placeholder;
  element.appendChild(firstOption);

  items.forEach(item => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    element.appendChild(option);
  });
}

function clearQuestionArea() {
  if ($("questionNumber")) $("questionNumber").textContent = "";
  if ($("questionText")) {
    $("questionText").textContent =
      "Choose your class, subject and topic to begin.";
  }
  if ($("questionHint")) {
    $("questionHint").textContent = "Your question will appear here.";
  }
  if ($("questionCount")) {
    $("questionCount").textContent = "No questions answered yet.";
  }

  if ($("options")) $("options").replaceChildren();

  if ($("feedback")) {
    $("feedback").replaceChildren();
    $("feedback").hidden = true;
  }

  if ($("confidenceOptions")) {
    $("confidenceOptions").replaceChildren();
  }

  ["submitButton", "checkButton", "nextButton", "confidenceBlock"]
    .forEach(id => {
      if ($(id)) $(id).hidden = true;
    });

  if ($("startButton")) $("startButton").hidden = false;
}


/* 3. CLASS → SUBJECT DROPDOWN */

function updateSubjects() {
  const classDropdown = $("classSelect");
  const subjectDropdown = $("subjectSelect");
  const topicDropdown = $("topicSelect");

  if (!classDropdown || !subjectDropdown || !topicDropdown) {
    console.error(
      "Check HTML IDs: classSelect, subjectSelect, topicSelect"
    );
    return;
  }

  const selectedClass = classDropdown.value;
  const classData = syllabus[selectedClass] || {};

  fillDropdown(
    subjectDropdown,
    Object.keys(classData),
    "Select Subject"
  );

  fillDropdown(topicDropdown, [], "Select Topic");

  if ($("subjectBadge")) {
    $("subjectBadge").textContent = "Select a subject";
  }

  clearQuestionArea();
}


/* 4. SUBJECT → TOPIC DROPDOWN */

function updateTopics() {
  const selectedClass = $("classSelect")?.value;
  const selectedSubject = $("subjectSelect")?.value;

  const topics =
    syllabus[selectedClass]?.[selectedSubject] || [];

  fillDropdown($("topicSelect"), topics, "Select Topic");

  if ($("subjectBadge")) {
    $("subjectBadge").textContent =
      selectedSubject || "Select a subject";
  }

  clearQuestionArea();
}

/* ==========================================
   PART 2: QUESTION BANK
   ========================================== */

const questionBank = {
  "9": {
    Mathematics: {
      "Number Systems": [
        {
          question: "Which of the following is an irrational number?",
          options: ["1/2", "0.25", "√2", "4"],
          answer: 2,
          explanation: "√2 cannot be expressed as a ratio of two integers."
        },
        {
          question: "What is the decimal expansion of 1/4?",
          options: ["0.25", "0.333...", "0.5", "0.75"],
          answer: 0,
          explanation: "1 ÷ 4 = 0.25, which is a terminating decimal."
        }
      ],
      "Polynomials": [
        {
          question: "What is the degree of 5x³ + 2x² − 7?",
          options: ["1", "2", "3", "5"],
          answer: 2,
          explanation: "The highest power of x is 3, so the degree is 3."
        },
        {
          question: "If p(x) = x + 3, what is p(2)?",
          options: ["2", "3", "5", "6"],
          answer: 2,
          explanation: "Substitute x = 2: p(2) = 2 + 3 = 5."
        }
      ],
      "Coordinate Geometry": [
        {
          question: "What are the coordinates of the origin?",
          options: ["(1, 1)", "(0, 0)", "(0, 1)", "(1, 0)"],
          answer: 1,
          explanation: "The origin is the point where both axes meet: (0, 0)."
        }
      ],
      "Linear Equations in Two Variables": [
        {
          question: "Which ordered pair satisfies x + y = 5?",
          options: ["(1, 2)", "(2, 3)", "(4, 4)", "(0, 3)"],
          answer: 1,
          explanation: "For (2, 3), x + y = 2 + 3 = 5."
        }
      ],
      "Lines and Angles": [
        {
          question: "If one angle of a linear pair is 70°, what is the other angle?",
          options: ["70°", "90°", "110°", "180°"],
          answer: 2,
          explanation: "Angles in a linear pair add up to 180°. So 180° − 70° = 110°."
        }
      ],
      "Triangles": [
        {
          question: "The sum of the three interior angles of a triangle is:",
          options: ["90°", "180°", "270°", "360°"],
          answer: 1,
          explanation: "The interior angles of every triangle add up to 180°."
        }
      ],
      "Quadrilaterals": [
        {
          question: "What is the sum of the interior angles of a quadrilateral?",
          options: ["180°", "270°", "360°", "540°"],
          answer: 2,
          explanation: "The interior angles of a quadrilateral add up to 360°."
        }
      ],
      "Circles": [
        {
          question: "A line segment from the centre of a circle to its circumference is called:",
          options: ["Chord", "Diameter", "Radius", "Arc"],
          answer: 2,
          explanation: "The radius joins the centre to a point on the circle."
        }
      ],
      "Statistics": [
        {
          question: "What is the mean of 2, 4 and 6?",
          options: ["3", "4", "5", "6"],
          answer: 1,
          explanation: "Mean = (2 + 4 + 6) ÷ 3 = 4."
        }
      ],
      "Probability": [
        {
          question: "What is the probability of getting heads when a fair coin is tossed?",
          options: ["0", "1/4", "1/2", "1"],
          answer: 2,
          explanation: "There are two equally likely outcomes, so the probability is 1/2."
        }
      ]
    },

    Science: {
      "Matter in Our Surroundings": [
        {
          question: "Which state of matter has a fixed shape and fixed volume?",
          options: ["Solid", "Liquid", "Gas", "All states"],
          answer: 0,
          explanation: "Solids generally have a fixed shape and a fixed volume."
        }
      ],
      "Atoms and Molecules": [
        {
          question: "What is the chemical formula of water?",
          options: ["CO₂", "H₂O", "O₂", "NaCl"],
          answer: 1,
          explanation: "A water molecule contains two hydrogen atoms and one oxygen atom."
        }
      ],
      "Structure of the Atom": [
        {
          question: "Which particle has a negative charge?",
          options: ["Proton", "Neutron", "Electron", "Nucleus"],
          answer: 2,
          explanation: "Electrons carry a negative electric charge."
        }
      ],
      "The Fundamental Unit of Life": [
        {
          question: "Which cell structure controls most cell activities?",
          options: ["Nucleus", "Cell wall", "Vacuole", "Cytoplasm only"],
          answer: 0,
          explanation: "The nucleus contains genetic material and helps control cell activities."
        }
      ],
      "Tissues": [
        {
          question: "Which plant tissue transports water?",
          options: ["Phloem", "Xylem", "Epidermis", "Cork"],
          answer: 1,
          explanation: "Xylem transports water and minerals from the roots to other plant parts."
        }
      ],
      "Motion": [
        {
          question: "What is the SI unit of speed?",
          options: ["Kilometre", "Metre per second", "Second", "Metre"],
          answer: 1,
          explanation: "Speed is measured in metres per second (m/s) in SI units."
        }
      ],
      "Force and Laws of Motion": [
        {
          question: "Which law is also known as the law of inertia?",
          options: ["Newton's first law", "Newton's second law", "Newton's third law", "Law of gravitation"],
          answer: 0,
          explanation: "Newton's first law describes the tendency of an object to resist changes in its state of motion."
        }
      ],
      "Gravitation": [
        {
          question: "What force attracts objects towards Earth?",
          options: ["Magnetic force", "Friction", "Gravitational force", "Muscular force"],
          answer: 2,
          explanation: "Earth's gravitational force attracts objects towards its centre."
        }
      ],
      "Work and Energy": [
        {
          question: "When is work done by a force equal to zero?",
          options: ["When displacement is zero", "When displacement is large", "Always", "Only when speed increases"],
          answer: 0,
          explanation: "Work is zero when there is no displacement in the direction of the force."
        }
      ],
      "Sound": [
        {
          question: "Sound cannot travel through:",
          options: ["Air", "Water", "Steel", "Vacuum"],
          answer: 3,
          explanation: "Sound needs a medium to travel and cannot travel through a vacuum."
        }
      ]
    }
  },

  "10": {
    Mathematics: {
      "Real Numbers": [
        {
          question: "Which of these is an irrational number?",
          options: ["√9", "0.5", "√7", "3"],
          answer: 2,
          explanation: "√7 is irrational because 7 is not a perfect square."
        }
      ],
      "Polynomials": [
        {
          question: "For a quadratic polynomial, the number of zeroes can be at most:",
          options: ["1", "2", "3", "4"],
          answer: 1,
          explanation: "A polynomial of degree 2 can have at most two zeroes."
        }
      ],
      "Pair of Linear Equations in Two Variables": [
        {
          question: "The graphs of two distinct parallel lines have:",
          options: ["One intersection", "No intersection", "Two intersections", "Always the same line"],
          answer: 1,
          explanation: "Distinct parallel lines never meet, so the system has no solution."
        }
      ],
      "Quadratic Equations": [
        {
          question: "Which is the standard form of a quadratic equation?",
          options: ["ax + b = 0", "ax² + bx + c = 0, a ≠ 0", "ax³ + b = 0", "x + y = 0"],
          answer: 1,
          explanation: "A quadratic equation has degree 2 and can be written as ax² + bx + c = 0, with a ≠ 0."
        }
      ],
      "Arithmetic Progressions": [
        {
          question: "Find the common difference of 3, 7, 11, 15, ...",
          options: ["2", "3", "4", "5"],
          answer: 2,
          explanation: "Subtract consecutive terms: 7 − 3 = 4."
        }
      ],
      "Triangles": [
        {
          question: "If two triangles are similar, their corresponding angles are:",
          options: ["Unequal", "Equal", "Always 90°", "Always 60°"],
          answer: 1,
          explanation: "Similar triangles have equal corresponding angles and proportional corresponding sides."
        }
      ],
      "Coordinate Geometry": [
        {
          question: "What is the distance between (0, 0) and (3, 4)?",
          options: ["3 units", "4 units", "5 units", "7 units"],
          answer: 2,
          explanation: "Distance = √((3 − 0)² + (4 − 0)²) = √25 = 5 units."
        }
      ],
      "Introduction to Trigonometry": [
        {
          question: "In a right-angled triangle, sin θ equals:",
          options: ["Adjacent / Hypotenuse", "Opposite / Hypotenuse", "Opposite / Adjacent", "Hypotenuse / Opposite"],
          answer: 1,
          explanation: "Sine is the ratio of the opposite side to the hypotenuse."
        }
      ],
      "Circles": [
        {
          question: "A tangent to a circle is perpendicular to the radius at the:",
          options: ["Centre", "Point of contact", "Any point outside", "Diameter's midpoint only"],
          answer: 1,
          explanation: "The radius drawn to the point of contact is perpendicular to the tangent."
        }
      ],
      "Statistics": [
        {
          question: "The median is the:",
          options: ["Most frequent value", "Middle value after arranging data", "Sum of all values", "Largest value"],
          answer: 1,
          explanation: "The median is the middle value in ordered data, or the average of the two middle values when there is an even number of values."
        }
      ],
      "Probability": [
        {
          question: "A fair die is rolled. What is the probability of getting a 6?",
          options: ["1/2", "1/3", "1/6", "1"],
          answer: 2,
          explanation: "There is one favourable outcome out of six equally likely outcomes."
        }
      ]
    },

    Science: {
      "Chemical Reactions and Equations": [
        {
          question: "What is a balanced chemical equation?",
          options: ["One with equal numbers of each type of atom on both sides", "One with no products", "One with only one reactant", "One without symbols"],
          answer: 0,
          explanation: "A balanced equation has the same number of atoms of each element on both sides."
        }
      ],
      "Acids, Bases and Salts": [
        {
          question: "An acidic solution generally has a pH:",
          options: ["Less than 7", "Equal to 7", "Greater than 7", "Always 14"],
          answer: 0,
          explanation: "At ordinary school-level conditions, acidic solutions have pH below 7."
        }
      ],
      "Metals and Non-metals": [
        {
          question: "Which property is generally shown by metals?",
          options: ["Brittleness in all cases", "Good electrical conductivity", "No lustre", "Poor heat conductivity"],
          answer: 1,
          explanation: "Most metals conduct heat and electricity well."
        }
      ],
      "Carbon and Its Compounds": [
        {
          question: "What is the ability of carbon to form bonds with other carbon atoms called?",
          options: ["Ionisation", "Catenation", "Neutralisation", "Corrosion"],
          answer: 1,
          explanation: "Catenation is the ability of an element to form chains or rings with its own atoms."
        }
      ],
      "Life Processes": [
        {
          question: "Which process releases energy from food in cells?",
          options: ["Respiration", "Excretion", "Transport", "Growth only"],
          answer: 0,
          explanation: "Cellular respiration releases usable energy from food molecules."
        }
      ],
      "Control and Coordination": [
        {
          question: "Which system helps coordinate rapid responses in the human body?",
          options: ["Digestive system", "Nervous system", "Skeletal system only", "Excretory system"],
          answer: 1,
          explanation: "The nervous system coordinates rapid responses using electrical signals."
        }
      ],
      "Heredity": [
        {
          question: "Genes are made of or carried by which molecule?",
          options: ["DNA", "Starch", "Fat", "Water"],
          answer: 0,
          explanation: "Genes are segments of DNA that carry hereditary information."
        }
      ],
      "Light: Reflection and Refraction": [
        {
          question: "The angle of incidence is measured from the:",
          options: ["Mirror surface", "Normal", "Reflected ray only", "Principal axis only"],
          answer: 1,
          explanation: "Angles of incidence and reflection are measured from the normal to the surface."
        }
      ],
      "Electricity": [
        {
          question: "What is the SI unit of electric current?",
          options: ["Volt", "Ohm", "Ampere", "Watt"],
          answer: 2,
          explanation: "Electric current is measured in amperes (A)."
        }
      ],
      "Our Environment": [
        {
          question: "Which organisms are usually producers in an ecosystem?",
          options: ["Green plants", "Carnivores", "Fungi only", "Herbivores"],
          answer: 0,
          explanation: "Green plants make organic food using light energy and act as producers."
        }
      ]
    }
  },

  "11": {
    Physics: {
      "Units and Measurements": [
        {
          question: "What is the SI unit of length?",
          options: ["Centimetre", "Kilometre", "Metre", "Millimetre"],
          answer: 2,
          explanation: "The SI base unit of length is the metre (m)."
        }
      ],
      "Motion in a Straight Line": [
        {
          question: "The slope of a displacement-time graph represents:",
          options: ["Acceleration", "Velocity", "Force", "Work"],
          answer: 1,
          explanation: "The slope gives change in displacement divided by time, which is velocity."
        }
      ],
      "Motion in a Plane": [
        {
          question: "A vector quantity has:",
          options: ["Magnitude only", "Direction only", "Magnitude and direction", "Neither magnitude nor direction"],
          answer: 2,
          explanation: "A vector is described by both magnitude and direction."
        }
      ],
      "Laws of Motion": [
        {
          question: "Newton's second law relates force to:",
          options: ["Mass and acceleration", "Distance and time only", "Temperature and pressure", "Energy and power only"],
          answer: 0,
          explanation: "For constant mass, Newton's second law is expressed as F = ma."
        }
      ],
      "Work, Energy and Power": [
        {
          question: "What is the SI unit of work?",
          options: ["Watt", "Joule", "Newton", "Pascal"],
          answer: 1,
          explanation: "Work is measured in joules (J)."
        }
      ],
      "Structure of Atom": [
        {
          question: "The atomic number of an element equals its number of:",
          options: ["Neutrons only", "Protons", "Protons plus neutrons", "Shells"],
          answer: 1,
          explanation: "Atomic number is the number of protons in the nucleus."
        }
      ],
      "Classification of Elements": [
        {
          question: "Elements in the same group of the periodic table generally have the same number of:",
          options: ["Electron shells", "Valence electrons for main-group elements", "Neutrons", "Isotopes"],
          answer: 1,
          explanation: "Main-group elements in the same group generally have the same number of valence electrons."
        }
      ],
      "Chemical Bonding": [
        {
          question: "An ionic bond is formed mainly by:",
          options: ["Sharing electrons equally", "Transfer of electrons and electrostatic attraction", "Sharing neutrons", "Mixing nuclei"],
          answer: 1,
          explanation: "Ionic bonding involves electron transfer and attraction between oppositely charged ions."
        }
      ],
      "Thermodynamics": [
        {
          question: "Which symbol is commonly used for heat supplied to a system?",
          options: ["Q", "m", "v", "n"],
          answer: 0,
          explanation: "Q is commonly used to represent heat transferred to or from a system."
        }
      ]
    },

    Mathematics: {
      "Sets": [
        {
          question: "If A = {1, 2} and B = {2, 3}, what is A ∩ B?",
          options: ["{1, 3}", "{2}", "{1, 2, 3}", "∅"],
          answer: 1,
          explanation: "The intersection contains elements common to both sets. Here, only 2 is common."
        }
      ],
      "Relations and Functions": [
        {
          question: "A function assigns each input:",
          options: ["Exactly one output", "At least two outputs", "No output", "Any number of outputs"],
          answer: 0,
          explanation: "Every input in a function's domain must have exactly one output."
        }
      ],
      "Trigonometric Functions": [
        {
          question: "What is sin 30°?",
          options: ["0", "1/2", "√3/2", "1"],
          answer: 1,
          explanation: "The standard trigonometric value of sin 30° is 1/2."
        }
      ],
      "Complex Numbers": [
        {
          question: "What is the value of i²?",
          options: ["1", "−1", "i", "0"],
          answer: 1,
          explanation: "The imaginary unit i is defined so that i² = −1."
        }
      ],
      "Straight Lines": [
        {
          question: "What is the slope of a horizontal line?",
          options: ["0", "1", "Undefined", "−1"],
          answer: 0,
          explanation: "A horizontal line has no vertical change, so its slope is zero."
        }
      ]
    },

    Chemistry: {
      "Structure of Atom": [
        {
          question: "The atomic number of an element equals its number of:",
          options: ["Neutrons only", "Protons", "Protons plus neutrons", "Shells"],
          answer: 1,
          explanation: "Atomic number is the number of protons in the nucleus."
        }
      ],
      "Classification of Elements": [
        {
          question: "Elements in the same group of the periodic table generally have the same number of:",
          options: ["Electron shells", "Valence electrons for main-group elements", "Neutrons", "Isotopes"],
          answer: 1,
          explanation: "Main-group elements in the same group generally have the same number of valence electrons."
        }
      ],
      "Chemical Bonding": [
        {
          question: "An ionic bond is formed mainly by:",
          options: ["Sharing electrons equally", "Transfer of electrons and electrostatic attraction", "Sharing neutrons", "Mixing nuclei"],
          answer: 1,
          explanation: "Ionic bonding involves electron transfer and attraction between oppositely charged ions."
        }
      ],
      "Thermodynamics": [
        {
          question: "Which symbol is commonly used for heat supplied to a system?",
          options: ["Q", "m", "v", "n"],
          answer: 0,
          explanation: "Q is commonly used to represent heat transferred to or from a system."
        }
      ]
    }
  },

  "12": {
    Physics: {
      "Electric Charges and Fields": [
        {
          question: "What is the SI unit of electric charge?",
          options: ["Ampere", "Coulomb", "Volt", "Ohm"],
          answer: 1,
          explanation: "Electric charge is measured in coulombs (C)."
        }
      ],
      "Electrostatic Potential and Capacitance": [
        {
          question: "What is the SI unit of capacitance?",
          options: ["Farad", "Tesla", "Joule", "Watt"],
          answer: 0,
          explanation: "Capacitance is measured in farads (F)."
        }
      ],
      "Current Electricity": [
        {
          question: "According to Ohm's law, at constant temperature:",
          options: ["V = IR", "V = I/R", "I = VR", "R = VI"],
          answer: 0,
          explanation: "Ohm's law states that potential difference V equals current I multiplied by resistance R."
        }
      ],
      "Moving Charges and Magnetism": [
        {
          question: "The SI unit of magnetic field is:",
          options: ["Weber", "Tesla", "Farad", "Coulomb"],
          answer: 1,
          explanation: "Magnetic field is measured in teslas (T)."
        }
      ],
      "Ray Optics": [
        {
          question: "A convex lens can make parallel rays of light:",
          options: ["Diverge only", "Converge at a focus", "Stop moving", "Become sound waves"],
          answer: 1,
          explanation: "A convex lens converges parallel rays towards its principal focus."
        }
      ],
      "Solutions": [
        {
          question: "Molarity is the number of moles of solute per:",
          options: ["Kilogram of solvent", "Litre of solution", "Litre of solvent only", "Mole of solvent"],
          answer: 1,
          explanation: "Molarity is moles of solute divided by the volume of solution in litres."
        }
      ],
      "Electrochemistry": [
        {
          question: "Oxidation involves:",
          options: ["Gain of electrons", "Loss of electrons", "Gain of neutrons", "No electron change ever"],
          answer: 1,
          explanation: "Oxidation is defined as loss of electrons."
        }
      ],
      "Chemical Kinetics": [
        {
          question: "The rate of a chemical reaction describes the change in concentration per unit:",
          options: ["Mass", "Time", "Temperature only", "Volume only"],
          answer: 1,
          explanation: "Reaction rate measures concentration change per unit time."
        }
      ],
      "Coordination Compounds": [
        {
          question: "The species that donates an electron pair to a central metal ion is called a:",
          options: ["Ligand", "Isotope", "Catalyst only", "Solvent always"],
          answer: 0,
          explanation: "A ligand donates an electron pair to the central metal atom or ion."
        }
      ]
    },

    Mathematics: {
      "Relations and Functions": [
        {
          question: "A function assigns each input:",
          options: ["Exactly one output", "At least two outputs", "No output", "Any number of outputs"],
          answer: 0,
          explanation: "Each input in the domain of a function has exactly one output."
        }
      ],
      "Matrices": [
        {
          question: "A matrix with 2 rows and 3 columns has order:",
          options: ["3 × 2", "2 × 3", "2 × 2", "3 × 3"],
          answer: 1,
          explanation: "Matrix order is written as rows × columns, so the order is 2 × 3."
        }
      ],
      "Determinants": [
        {
          question: "The determinant of [[a, b], [c, d]] is:",
          options: ["ad − bc", "ab − cd", "ac − bd", "a + b + c + d"],
          answer: 0,
          explanation: "For a 2 × 2 matrix, the determinant is ad − bc."
        }
      ],
      "Continuity and Differentiability": [
        {
          question: "The derivative of x² with respect to x is:",
          options: ["x", "2x", "x³", "2"],
          answer: 1,
          explanation: "Using the power rule, d(x²)/dx = 2x."
        }
      ],
      "Integrals": [
        {
          question: "What is ∫ 1 dx?",
          options: ["1", "x + C", "0", "x² + C"],
          answer: 1,
          explanation: "The indefinite integral of 1 with respect to x is x + C."
        }
      ],
      "Probability": [
        {
          question: "The probability of an impossible event is:",
          options: ["0", "1/2", "1", "2"],
          answer: 0,
          explanation: "An impossible event has probability zero."
        }
      ]
    }
  }
};

/* ==========================================
   PART 3: PRACTICE FUNCTIONS
   ========================================== */

let currentQuestions = [];
let currentQuestionIndex = 0;
let selectedAnswer = null;
let correctAnswers = 0;
let hasAnswered = false;


/* GET QUESTIONS FOR SELECTED TOPIC */

function getSelectedQuestions() {
  const selectedClass = $("classSelect")?.value;
  const selectedSubject = $("subjectSelect")?.value;
  const selectedTopic = $("topicSelect")?.value;

  if (!selectedClass || !selectedSubject || !selectedTopic) {
    alert("Please select class, subject and topic first.");
    return [];
  }

  const questions =
    questionBank[selectedClass]?.[selectedSubject]?.[selectedTopic];

  if (!questions || questions.length === 0) {
    alert(
      "Questions for this topic have not been added yet. Please select another topic."
    );
    return [];
  }

  return questions;
}


/* CLEAR OLD QUESTION DISPLAY */

function clearQuestionArea() {
  currentQuestions = [];
  currentQuestionIndex = 0;
  selectedAnswer = null;
  correctAnswers = 0;
  hasAnswered = false;

  const idsToClear = [
    "questionText",
    "questionHint",
    "feedback",
    "options",
    "confidenceBlock",
    "confidenceOptions"
  ];

  idsToClear.forEach(id => {
    const element = $(id);
    if (element) element.replaceChildren();
  });

  if ($("questionNumber")) {
    $("questionNumber").textContent = "";
  }

  if ($("questionCount")) {
    $("questionCount").textContent = "";
  }

  if ($("submitButton")) $("submitButton").hidden = true;
  if ($("checkButton")) $("checkButton").hidden = true;
  if ($("nextButton")) $("nextButton").hidden = true;

  if ($("startButton")) $("startButton").hidden = false;
}


/* START PRACTICE */

function startPractice() {
  currentQuestions = getSelectedQuestions();

  if (!currentQuestions.length) return;

  currentQuestionIndex = 0;
  correctAnswers = 0;

  if ($("startButton")) $("startButton").hidden = true;

  renderQuestion();
}


/* DISPLAY CURRENT QUESTION */

function renderQuestion() {
  const question = currentQuestions[currentQuestionIndex];

  if (!question) {
    showResults();
    return;
  }

  selectedAnswer = null;
  hasAnswered = false;

  if ($("questionNumber")) {
    $("questionNumber").textContent =
      `Question ${currentQuestionIndex + 1}`;
  }

  if ($("questionCount")) {
    $("questionCount").textContent =
      `${currentQuestionIndex + 1} of ${currentQuestions.length}`;
  }

  if ($("questionText")) {
    $("questionText").textContent = question.question;
  }

  if ($("questionHint")) {
    $("questionHint").textContent =
      "Choose the answer you think is correct.";
  }

  if ($("feedback")) {
    $("feedback").textContent = "";
    $("feedback").className = "";
  }

  const optionsContainer = $("options");

  if (!optionsContainer) {
    console.error("HTML element with ID 'options' was not found.");
    return;
  }

  optionsContainer.replaceChildren();

  question.options.forEach((optionText, index) => {
    const optionButton = document.createElement("button");

    optionButton.type = "button";
    optionButton.textContent = optionText;
    optionButton.className = "conceptlens-option";
    optionButton.style.display = "block";
    optionButton.style.width = "100%";
    optionButton.style.margin = "8px 0";
    optionButton.style.padding = "12px";
    optionButton.style.cursor = "pointer";

    optionButton.addEventListener("click", () => {
      if (hasAnswered) return;

      selectedAnswer = index;

      Array.from(optionsContainer.children).forEach(button => {
        button.style.outline = "none";
        button.setAttribute("aria-pressed", "false");
      });

      optionButton.style.outline = "2px solid #6c63ff";
      optionButton.setAttribute("aria-pressed", "true");
    });

    optionsContainer.appendChild(optionButton);
  });

  if ($("checkButton")) $("checkButton").hidden = false;
  if ($("submitButton")) $("submitButton").hidden = false;
  if ($("nextButton")) $("nextButton").hidden = true;

  if ($("confidenceBlock")) {
    $("confidenceBlock").hidden = false;
  }

  if ($("confidenceOptions")) {
    $("confidenceOptions").hidden = false;
  }
}


/* CHECK ANSWER AND SHOW EXPLANATION */

function checkAnswer() {
  if (hasAnswered) return;

  if (selectedAnswer === null) {
    alert("Please select an option first.");
    return;
  }

  const question = currentQuestions[currentQuestionIndex];
  const optionsContainer = $("options");
  const feedback = $("feedback");

  hasAnswered = true;

  const isCorrect = selectedAnswer === question.answer;

  if (isCorrect) {
    correctAnswers++;
  }

  if (optionsContainer) {
    Array.from(optionsContainer.children).forEach((button, index) => {
      button.disabled = true;

      if (index === question.answer) {
        button.style.border = "2px solid #269b62";
      }

      if (index === selectedAnswer && !isCorrect) {
        button.style.border = "2px solid #d9534f";
      }
    });
  }

  if (feedback) {
    feedback.replaceChildren();

    const resultTitle = document.createElement("strong");
    resultTitle.textContent = isCorrect
      ? "Correct! "
      : "Not quite. ";

    const explanation = document.createElement("p");
    explanation.textContent = question.explanation;

    feedback.append(resultTitle, explanation);
    feedback.setAttribute("role", "status");
  }

  if ($("checkButton")) $("checkButton").hidden = true;
  if ($("submitButton")) $("submitButton").hidden = true;
  if ($("nextButton")) {
    $("nextButton").hidden = false;
    $("nextButton").textContent =
      currentQuestionIndex === currentQuestions.length - 1
        ? "See Results"
        : "Next Question";
  }
}


/* MOVE TO NEXT QUESTION */

function nextQuestion() {
  if (!hasAnswered) {
    alert("Please check your answer before continuing.");
    return;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex >= currentQuestions.length) {
    showResults();
    return;
  }

  renderQuestion();
}


/* SHOW FINAL SCORE */

function showResults() {
  const optionsContainer = $("options");
  const questionText = $("questionText");
  const feedback = $("feedback");

  if (optionsContainer) optionsContainer.replaceChildren();

  if (questionText) {
    questionText.textContent = "Practice Complete!";
  }

  if ($("questionNumber")) {
    $("questionNumber").textContent = "Your Results";
  }

  if ($("questionCount")) {
    $("questionCount").textContent =
      `${correctAnswers} / ${currentQuestions.length} correct`;
  }

  if (feedback) {
    feedback.replaceChildren();

    const resultMessage = document.createElement("p");
    resultMessage.textContent =
      `You answered ${correctAnswers} out of ${currentQuestions.length} questions correctly.`;

    const encouragement = document.createElement("p");
    const percentage =
      currentQuestions.length > 0
        ? (correctAnswers / currentQuestions.length) * 100
        : 0;

    encouragement.textContent =
      percentage === 100
        ? "Excellent work! You got every question correct."
        : percentage >= 50
          ? "Good effort! Review the explanations and practise again."
          : "Keep practising. Review the explanations and try again.";

    feedback.append(resultMessage, encouragement);
  }

  if ($("checkButton")) $("checkButton").hidden = true;
  if ($("submitButton")) $("submitButton").hidden = true;
  if ($("nextButton")) $("nextButton").hidden = true;
  if ($("confidenceBlock")) $("confidenceBlock").hidden = true;
  if ($("confidenceOptions")) $("confidenceOptions").hidden = true;

  if ($("startButton")) {
    $("startButton").hidden = false;
    $("startButton").textContent = "Practise Again";
  }
}

/* ==========================================
   PART 4: CONNECT DROPDOWNS AND BUTTONS
   ========================================== */

function setupConceptLens() {
  const classDropdown = $("classSelect");
  const subjectDropdown = $("subjectSelect");
  const topicDropdown = $("topicSelect");

  // Check required HTML dropdowns
  if (!classDropdown || !subjectDropdown || !topicDropdown) {
    console.error(
      "ConceptLens setup failed. Check HTML IDs: classSelect, subjectSelect, topicSelect."
    );
    return;
  }

  // Fill the initial dropdowns
  fillDropdown(
    classDropdown,
    Object.keys(syllabus),
    "Select Class"
  );

  fillDropdown(
    subjectDropdown,
    [],
    "Select Subject"
  );

  fillDropdown(
    topicDropdown,
    [],
    "Select Topic"
  );

  clearQuestionArea();

  // Class → Subject
  classDropdown.addEventListener("change", updateSubjects);

  // Subject → Topic
  subjectDropdown.addEventListener("change", updateTopics);

  // Clear the practice area when topic changes
  topicDropdown.addEventListener("change", clearQuestionArea);

  // Connect Start Practice button
  if ($("startButton")) {
    $("startButton").addEventListener("click", startPractice);
  }

  // Connect Check Answer button
  if ($("checkButton")) {
    $("checkButton").addEventListener("click", checkAnswer);
  }

  // Connect Submit button if your HTML has one
  if ($("submitButton")) {
    $("submitButton").addEventListener("click", checkAnswer);
  }

  // Connect Next Question button
  if ($("nextButton")) {
    $("nextButton").addEventListener("click", nextQuestion);
  }

  // Connect common modal close buttons if present
  const modalClosePairs = [
    ["closePlanX", "planModal"],
    ["closePlanButton", "planModal"],
    ["closeAd", "adModal"],
    ["skipAd", "adModal"]
  ];

  modalClosePairs.forEach(([buttonId, modalId]) => {
    const button = $(buttonId);
    const modal = $(modalId);

    if (button && modal) {
      button.addEventListener("click", () => {
        modal.hidden = true;
      });
    }
  });

  // Connect plan buttons if present
  ["openPlanTop", "openPlan", "explorePlan"].forEach(buttonId => {
    const button = $(buttonId);
    const modal = $("planModal");

    if (button && modal) {
      button.addEventListener("click", () => {
        modal.hidden = false;
      });
    }
  });

  // Connect continue button if present
  if ($("continueFree")) {
    $("continueFree").addEventListener("click", () => {
      if ($("adModal")) $("adModal").hidden = true;
      if ($("planModal")) $("planModal").hidden = true;
    });
  }

  console.log("ConceptLens setup complete!");
}


/* ==========================================
   INITIALIZE WEBSITE
   ========================================== */

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupConceptLens);
} else {
  setupConceptLens();
}