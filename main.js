const specificationsData = [
  {
    category: "General",
    details: [
      {
        title: "Launch Date",
        value: "September 14, 2021 (Official)",
      },
      {
        title: "Brand",
        value: "Apple",
      },
      {
        title: "Model",
        value: "iPhone 13 Pro Max",
      },
      {
        title: "Operating System",
        value: "iOS v15",
      },
      {
        title: "Quick Charging",
        value: "Yes",
      },
      {
        title: "Rear Camera",
        value: "12 MP + 12 MP + 12 MP",
      },
      {
        title: "Front Camera",
        value: "12 MP",
      },
    ],
  },

  {
    category: "Design",
    details: [
      {
        title: "Height",
        value: "160.8 mm",
      },
      {
        title: "Width",
        value: "78.1 mm",
      },
      {
        title: "Weight",
        value: "238 grams",
      },
      {
        title: "Waterproof",
        value:
          "Yes, Water resistant (up to 30 minutes in a depth of 6 meter), IP68",
      },
    ],
  },
  {
    category: "Storage",
    details: [
      {
        title: "Internal Memory",
        value: "128 GB",
      },
    ],
  },
];

const specificationsContainer = document.querySelector(
  ".specifications-container"
);

const generateHTML = () => {
  specificationsData.forEach((s) => {
    const tableRowsHTML = s.details
      .map((detail) => {
        return `<tr>
        <th>${detail.title}</th>
        <td>${detail.value}</td>
      </tr>`;
      })
      .join("");

    const HTML = `<h3>
        ${s.category} (${s.details.length})
        <span class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </h3>
      <table>
          <tbody>
            ${tableRowsHTML}
          </tbody>
        </table>`;

    const category = document.createElement("div");
    category.classList.add("category");
    category.innerHTML = HTML;

    specificationsContainer.appendChild(category);
  });
};

generateHTML();

const categoryHeadings = document.querySelectorAll(
  ".specifications-container h3"
);

categoryHeadings.forEach((h) => {
  h.addEventListener("click", () => {
    h.classList.toggle("active");
    const table = h.nextElementSibling;

    if (h.classList.contains("active")) {
      table.style.display = "table";
      return;
    }

    table.style.display = "none";
  });
});
