const { createApp, ref } = Vue;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();

const App = {
  setup() {
    const projects = [
      {
        title: "Tea Card Collection",
        description: "A card gallery featuring different teas, their tastes, smells, and short descriptions.",
        whatILearned: "In this lab I practiced using JavaScript objects, arrays, and Vuetify cards to display a collection with images and text.",
        image: "images/project1.png",
        url: "https://jingyi12333.github.io/codinginquiryproject1.github.io/"
      },
      {
        title: "Pet Grooming Game",
        description: "An interactive point-and-click game where the player completes grooming actions in the correct order.",
        whatILearned: "I learned about functions, conditional logic, and reactivity to handle changes in the user interface and validate user choices.",
        image: "images/project2.png",
        url: "https://jingyi12333.github.io/codinginquiryproject2.github.io/"
      },
      {
        title: "Canada Immigration Dashboard",
        description: "A data dashboard visualizing immigration trends and policy information using charts and tables.",
        whatILearned: "I practiced using Vuetify components like Sparkline, Stepper, and Data Table to transform complex datasets into an interactive experience.",
        image: "images/project3.png",
        url: "https://jingyi12333.github.io/codinginquiryproject3.github.io/"
      }
    ];

    const openDrawer = ref(false);

    function toggleDrawer() {
      openDrawer.value = !openDrawer.value;
    }


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
      projects,
      openDrawer,
      toggleDrawer,
      immigrationTargets,
      policies,
      immigrationByCountry,
      countryHeaders,
      step,
    };
  },
};

createApp(App).use(vuetify).mount("#app");