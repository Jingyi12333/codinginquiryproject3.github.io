const { createApp } = Vue;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();

const App = {
  setup() {
    const immigrationTargets = [
      {
        title: "Temporary Resident Targets",
        subtitle: "Plan for 2025 - 2027",
        trend: [673650, 516600, 543600],
      },
      {
        title: "Permanent Resident Targets",
        subtitle: "Plan for 2025 - 2027",
        trend: [395000, 380000, 365000],
      },
    ];

const policies = [
        {
        title: 'Economy and Labour Market Needs',
        description: 'In recent years, Canada welcomed newcomers to support our economy...',
        },
        {
        title: 'Temporary Residents',
        description: 'To ensure a well-managed migration system the Government is reducing...',
        },
        {
        title: 'International Students',
        description: 'In keeping with these reductions, targets for new temporary resident...',
        },
        {
        title: 'Permanent Residents',
        description: 'The 2025-27 Levels Plan projects a decrease in overall permanent...',
        }
];

    const immigrationByCountry = [
      { country: "India", number: "147,190" },
      { country: "Philippines", number: "188,805" },
      { country: "China", number: "129,020" },
      { country: "Syria", number: "29,945" },
      { country: "Nigeria", number: "17,285" },
      { country: "United States of America", number: "33,060" },
    ];

    const countryHeaders = [
      { title: "Country", key: "country" },
      { title: "Number", key: "number" },
    ];

    function step(index) {
      let stepNumber = index + 1;
      return "item." + stepNumber;
    }

    return {
      immigrationTargets,
      policies,
      immigrationByCountry,
      countryHeaders,
      step,
    };
  },
};

createApp(App).use(vuetify).mount("#app");