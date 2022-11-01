// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "HealthcareOS",
  plugins: [
    {
      use: "gridsome-plugin-windicss",
      options: {
        // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
      },
    },
    {
      use: "@gridsome/source-airtable",
      options: {
        apiKey: "keyZWkL3MQY6hTmQ2", // required
        base: "appUHbo54jPvAPkxx", // required
        tables: [
          {
            name: "User",
            typeName: "User",
            select: {},
            links: [
              {
                fieldName: "Appointments",
                typeName: "Encounter",
              },
              {
                fieldName: "Patients",
                typeName: "Patient",
              },
              {
                fieldName: "Orders",
                typeName: "Order",
              },
            ],
          },
          {
            name: "Patient", // required
            typeName: "Patient", // required
            select: {}, // optional,
            links: [
              // optional
              {
                fieldName: "Encounters",
                typeName: "Encounter",
                linkToFirst: true,
              },
              {
                fieldName: "Allergies List",
                typeName: "Allergy",
              },
              {
                fieldName: "MedicationsList",
                typeName: "Medication",
              },
              {
                fieldName: "ProblemsList",
                typeName: "Condition",
              },
              {
                fieldName: "activeOrders",
                typeName: "Order",
              },
            ],
          },
          {
            name: "Allergies", // required
            typeName: "Allergy", // required
            select: {}, // optional,
            links: [
              // optional
            ],
          },
          {
            name: "Medications", // required
            typeName: "Medication", // required
            select: {}, // optional,
            links: [
              {
                fieldName: "Patient",
                typeName: "Patient",
                linkToFirst: true,
              },
            ],
          },
          {
            name: "Conditions", // required
            typeName: "Condition", // required
            select: {}, // optional,
            links: [
              // optional
            ],
          },
          {
            name: "Encounters", // required
            typeName: "Encounter", // required
            select: {}, // optional,
            links: [
              // optional
              {
                fieldName: "Patient",
                typeName: "Patient",
                linkToFirst: true,
              },
              {
                fieldName: "Vitals",
                typeName: "Vital",
                linkToFirst: true,
              },
              {
                fieldName: "Note",
                typeName: "Note",
                linkToFirst: true,
              },
              {
                fieldName: "User",
                typeName: "User",
                linkToFirst: true,
              },
            ],
          },
          {
            name: "Vitals", // required
            typeName: "Vital", // required
            select: {}, // optional,
            links: [
              // optional
              {
                fieldName: "Encounters",
                typeName: "Encounter",
                linkToFirst: true,
              },
            ],
          },
          {
            name: "Medications", // required
            typeName: "Medication", // required
            select: {}, // optional,
            links: [
              // optional
            ],
          },
          {
            name: "Note Categories",
            typeName: "Note",
            select: {},
            links: [],
          },
          {
            name: "Orders",
            typeName: "Order",
            select: {},
            links: [
              {
                fieldName: "Patient",
                typeName: "Patient",
                linkToFirst: true,
              },
            ],
          },
          {
            name: "Medical History",
            typeName: "medicalHistory",
          },
          {
            name: "Social History",
            typeName: "socialHistory",
          },
          {
            name: "Surgical History",
            typeName: "surgicalHistory",
          },
        ],
      },
    },
  ],
  templates: {
    Patient: [
      {
        path: "/patient/:id",
        component: "~/src/templates/Patient.vue",
      },
      {
        name: "Allergy",
        path: "/patient/:id/allergy/",
        component: "~/src/templates/Allergies.vue",
      },
    ],
    Encounter: [
      {
        path: "/appointment/:id",
        component: "./src/templates/encounter/Encounter.vue",
      },
      {
        name: "Vital",
        path: "/appointment/:id/intake/vitals",
        component: "./src/templates/intake/Vitals.vue",
      },
      {
        name: "SocialHistory",
        path: "/appointment/:id/intake/social-hx",
        component: "./src/templates/intake/SocialHx.vue",
      },
      {
        name: "PastMedicalHistory",
        path: "/appointment/:id/intake/past-medical-hx",
        component: "./src/templates/intake/PastMedicalHx.vue",
      },
      {
        name: "ChiefComplaint",
        path: "/appointment/:id/intake/chief-complaint",
        component: "./src/templates/intake/ChiefComplaint.vue",
      },
      {
        name: "Review",
        path: "/appointment/:id/intake/review",
        component: "./src/templates/intake/IntakeReview.vue",
      },
      {
        name: "Note",
        path: "/appointment/:id/note",
        component: "./src/templates/encounter/EncounterNote.vue",
      },
    ],
  },
};
