const branches = [
  {
    name: "🎯 IQ PLUS สาขา Adcurve (ติดมงฟอร์ตประถม)",
    note: "ชั้น 2 ฝั่ง KFC",
    googleMapsUrl: "https://maps.app.goo.gl/sEmrFv9rZi4hoorT8",
  },
  {
    name: [
      "🎯 IQ PLUS สาขามงฟอร์ตมัธยม ซอย 10 (ตรงข้ามประตู 1)",
      "🎯 IQ PLUS สาขามงฟอร์ตมัธยม ซอย 12",
    ],
    googleMapsUrl: "https://maps.app.goo.gl/joFFa73CPG85npLbA",
  },
];

const branchList = document.getElementById("branchList");

function createBranchCard(branch) {
  const article = document.createElement("article");
  article.className = "branch-card";

  const title = document.createElement("h2");
  title.className = "branch-name";
  if (Array.isArray(branch.name)) {
    branch.name.forEach((name) => {
      const line = document.createElement("span");
      line.className = "branch-name-line";
      line.textContent = name;

      title.appendChild(line);
    });
  } else {
    title.textContent = branch.name;
  }

  const actions = document.createElement("div");
  actions.className = "branch-actions";

  const mapLink = document.createElement("a");
  mapLink.className = "button map-button";
  mapLink.href = branch.googleMapsUrl;
  mapLink.target = "_blank";
  mapLink.rel = "noopener noreferrer";
  mapLink.textContent = "เปิด Google Maps";

  actions.appendChild(mapLink);

  article.appendChild(title);

  if (branch.note) {
    const note = document.createElement("p");
    note.className = "branch-note";
    note.textContent = branch.note;
    article.appendChild(note);
  }

  article.appendChild(actions);

  return article;
}

function renderBranches() {
  branchList.innerHTML = "";
  branches.forEach((branch) => {
    branchList.appendChild(createBranchCard(branch));
  });
}

renderBranches();
