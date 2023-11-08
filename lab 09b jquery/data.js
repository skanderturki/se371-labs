let data = `{
  "version": "2.0",
  "name": "Curriculum",
  "levels": [
    {
      "name": "Level_1",
      "courses": [
        {
          "name": "ISC_101",
          "description": "Islamic Ethics 101",
          "code": "ISC_101",
          "credits": "2",
          "type": "University Requirement"
        },
        {
          "name": "ARAB_101",
          "description": "Arabic Writing 1",
          "code": "ARAB_101",
          "credits": "2",
          "type": "University Requirement"
        },
        {
          "name": "ENG_101",
          "description": "English Writing 1",
          "code": "ENG_101",
          "credits": "3",
          "type": "University Requirement"
        },
        {
          "name": "CS_101",
          "description": "Computer Programming 1",
          "code": "CS_101",
          "credits": "4",
          "type": "College Requirement"
        },
        {
          "name": "MATH_111",
          "description": "Calculus 1",
          "code": "MATH_101",
          "credits": "3",
          "type": "College Requirement"
        },
        {
          "name": "CHM_101",
          "description": "General Chemistry 101",
          "code": "CHM_101",
          "credits": "4",
          "type": "Program Requirement"
        }
      ]
    },
    {
      "name": "Level_2",
      "courses": [
        {
          "name": "ISC_103",
          "description": "Islamic Economic System",
          "code": "ISC_103",
          "credits": "2",
          "type": "University Requirement"
        },
        {
          "name": "ENG_103",
          "description": "English Writing II",
          "code": "ENG_103",
          "credits": "3",
          "type": "College Requirement",
          "prerequisites": "//levels.0/courses.2"
        },
        {
          "name": "CS_175",
          "description": "Computer Organization and Digital Logic",
          "code": "CS_175",
          "credits": "3",
          "type": "College Requirement"
        },
        {
          "name": "CS_102",
          "description": "Computer Programming 2",
          "code": "CS_102",
          "credits": "3",
          "type": "College Requirement",
          "prerequisites": "//levels.0/courses.3"
        },
        {
          "name": "STAT_101",
          "description": "Introduction to Statistics and Probability",
          "code": "STAT_101",
          "credits": "3",
          "type": "College Requirment",
          "prerequisites": "//levels.0/courses.4"
        },
        {
          "name": "MATH_113",
          "description": "Calculus 2",
          "code": "MATH_113",
          "credits": "3",
          "type": "Program Requirement",
          "prerequisites": "//levels.0/courses.4"
        }
      ]
    },
    {
      "name": "Level_3",
      "courses": [
        {
          "name": "ISC_105",
          "description": "Holu Quran Sciences",
          "code": "ISC_105",
          "credits": "2",
          "type": "University Requirement"
        },
        {
          "name": "COM_201",
          "description": "Communication Skills",
          "code": "COM_201",
          "credits": "3",
          "type": "University Requirement",
          "prerequisites": "//levels.0/courses.2"
        },
        {
          "name": "CS_285",
          "description": "Discrete Math for Computing",
          "code": "CS_285",
          "credits": "3",
          "type": "College Requirement",
          "prerequisites": "//levels.1/courses.2"
        },
        {
          "name": "CS_210",
          "description": "Data Structures and Algorithms",
          "code": "CS_210",
          "credits": "3",
          "type": "College Requirement"
        },
        {
          "name": "PHY_105",
          "description": "Physics 1",
          "code": "PHY_105",
          "credits": "4",
          "type": "Program Requirement"
        },
        {
          "name": "SE_201",
          "description": "Introduction to Software Engineering",
          "code": "SE_201",
          "credits": "3",
          "type": "Program Requirement",
          "prerequisites": "//levels.1/courses.3 //levels.1/courses.1"
        }
      ]
    },
    {
      "name": "Level_4",
      "courses": [
        {
          "name": "PHY_205",
          "description": "Physics 2",
          "code": "PHY_205",
          "credits": "4",
          "type": "Program Requirement",
          "prerequisites": "//levels.2/courses.4"
        },
        {
          "name": "PSY_101",
          "description": "Introduction to Psychology",
          "code": "PSY_101",
          "credits": "3",
          "type": "University Requirement"
        },
        {
          "name": "CS_330",
          "description": "Introduction to Operating Systems",
          "code": "CS_330",
          "credits": "3",
          "type": "College Requirement",
          "prerequisites": "//levels.1/courses.2 //levels.2/courses.3"
        },
        {
          "name": "MATH_223",
          "description": "Linear Algebra",
          "code": "MATH_223",
          "credits": "3",
          "type": "Program Requirement",
          "prerequisites": "//levels.1/courses.5"
        },
        {
          "name": "SE_311",
          "description": "Software Requirement Analysis",
          "code": "SE_311",
          "credits": "3",
          "type": "Program Requirement",
          "prerequisites": "//levels.2/courses.5"
        },
        {
          "name": "SE_365",
          "description": "Human Computer Interaction",
          "code": "SE_365",
          "credits": "3",
          "type": "Program Requirement",
          "prerequisites": "//levels.2/courses.3"
        }
      ]
    },
    {
      "name": "Level_5",
      "courses": [
        {
          "name": "ISC_203",
          "description": "New Financial Transactions",
          "code": "ISC_203",
          "credits": "2",
          "type": "University Requirement",
          "prerequisites": "//levels.1/courses.0"
        },
        {
          "name": "ARAB_103",
          "description": "Arabic Writing 2",
          "code": "ARAB_103",
          "credits": "2",
          "type": "University Requirement",
          "prerequisites": "//levels.0/courses.1"
        },
        {
          "name": "CS_331",
          "description": "Data Communications and Computer Networks",
          "code": "CS_331",
          "credits": "3",
          "type": "College Requirement",
          "prerequisites": "//levels.2/courses.3 //levels.1/courses.2"
        },
        {
          "name": "CYS_401",
          "description": "Fundamentals of Cybersecurity",
          "code": "CYS_401",
          "credits": "3",
          "type": "Program Requirement"
        },
        {
          "name": "CS_340",
          "description": "Introduction to Database Systems",
          "code": "CS_340",
          "credits": "3",
          "type": "Program Requirement",
          "prerequisites": "//levels.2/courses.3"
        },
        {
          "name": "SE_322",
          "description": "Software Design and Architecture",
          "code": "SE_322",
          "credits": "3",
          "type": "Program Requirement",
          "prerequisites": "//levels.3/courses.4"
        },
        {
          "name": "PE_xxx_1",
          "description": "Physical Education",
          "code": "PE_xxx_1",
          "credits": "1",
          "type": "Program Requirement"
        }
      ]
    },
    {
      "name": "Level_6",
      "courses": [
        {
          "name": "ETHC_303",
          "description": "Society and Ethics, Aspects of Computing",
          "code": "ETHC_303",
          "credits": "3",
          "type": "College Requirement"
        },
        {
          "name": "SE_371",
          "description": "Web Engineering",
          "code": "SE_371",
          "credits": "3",
          "type": "Program Requirements",
          "prerequisites": "//levels.2/courses.3"
        },
        {
          "name": "MATH_221",
          "description": "Numerical Analysis",
          "code": "MATH_221",
          "credits": "3",
          "type": "Program Requirement",
          "prerequisites": "//levels.1/courses.5"
        },
        {
          "name": "SE_401",
          "description": "Software Quality Assurance and Testing",
          "code": "SE_401",
          "credits": "3",
          "type": "Program Requirement",
          "prerequisites": "//levels.4/courses.5"
        },
        {
          "name": "SE_Elective_1",
          "description": "SE Elective 1",
          "code": "SE_xxx_1",
          "credits": "3",
          "type": "Program Requirement"
        },
        {
          "name": "SE_Elective_2",
          "description": "SE Elective 2",
          "code": "SE_xxx_2",
          "credits": "3",
          "type": "Program Requirement"
        }
      ]
    },
    {
      "name": "Level_7",
      "courses": [
        {
          "name": "ARAB_203",
          "description": "Arabic Writing 3",
          "code": "ARAB_203",
          "credits": "2",
          "type": "University Requirement",
          "prerequisites": "//levels.4/courses.1"
        },
        {
          "name": "SE_423",
          "description": "Software Engineering Project Management",
          "code": "SE_423",
          "credits": "3",
          "type": "Program Requirement"
        },
        {
          "name": "SE_411",
          "description": "Software Construction",
          "code": "SE_411",
          "credits": "3",
          "type": "Program Requirement",
          "prerequisites": "//levels.5/courses.3"
        },
        {
          "name": "SE_499",
          "description": "Software Engineering Design and Development Project",
          "code": "SE_499",
          "credits": "3",
          "type": "Program Requirement"
        },
        {
          "name": "SE_Elective_3",
          "description": "SE Elective 3",
          "code": "SE_xxx_3",
          "credits": "3",
          "type": "Program Requirement"
        },
        {
          "name": "SE_Elective_4",
          "description": "SE Elective 4",
          "code": "SE_xxx_4",
          "credits": "3",
          "type": "Program Requirement"
        }
      ]
    },
    {
      "name": "Level_8",
      "courses": [
        {
          "name": "SE_492",
          "description": "Co-op in Software Engineering",
          "code": "SE_492",
          "credits": "10",
          "type": "College Requirement"
        }
      ]
    }
  ]
}`;

data = JSON.parse(data);
