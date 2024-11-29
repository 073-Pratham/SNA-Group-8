// List of buttons and their descriptions
const buttons = [
  {
    id: 1,
    label: "205123071",
    description:
      "Name: Prashant Patel <br /> Roll No.: 205123071 <br /> Topic: Influence analysis and Centrality Measures <br /> Ppt link: <a href='https://docs.google.com/presentation/d/1VUm_BRUruQgtRkKOy4sgJpuCIQhJHS7u/edit?usp=sharing&ouid=117348173201902231756&rtpof=true&sd=true' target='_blank' class='text-blue-500 underline'>click here</a> <br /> Centrality Measures Code Link: <a href='https://colab.research.google.com/drive/1A_B2RjScxvwWlOFWtqPCVpvaGZmyKmHT?usp=sharing' target='_blank' class='text-blue-500 underline'>click here</a> ",
  },
  {
    id: 2,
    label: "205123073",
    description:
      "Name: Pratham <br /> Roll No.: 205123073 <br /> Topic: Social Influence analysis models <br /> Ppt link: <a href='https://docs.google.com/presentation/d/12XD3GXGoz1yCCNB0bkRkDhLeNGhklKLe/edit#slide=id.p1' target='_blank' class='text-blue-500 underline'>click here</a> <br /> IC Model Code Link: <a href='https://drive.google.com/file/d/16QDSBOjbvF3UZ2y7SBvejn7RF0IM4uZi/view?usp=sharing' target='_blank' class='text-blue-500 underline'>click here</a> <br /> LT Model Code Link: <a href='https://drive.google.com/file/d/1XjGUy14wZWXusixe9mvOC9VkBIR8KX-G/view?usp=sharing' target='_blank' class='text-blue-500 underline'>click here</a> <br /> Live code link: <a href='https://colab.research.google.com/drive/1JsElF0rCS4HSIsZv4sXJPZ2wkgzN_B_y#scrollTo=aqHodx5tyuNA' target='_blank' class='text-blue-500 underline'>click here</a>",
  },
  {
    id: 3,
    label: "205123075",
    description:
      "Name: Priyanshu Miglani <br /> Roll No.: 205123075 <br /> Topic: Social Influence analysis Methods <br /> Ppt link: <a href='https://docs.google.com/presentation/d/1wdTRlwAErqtojemIWg3z2pqxdCWYvkrWiklNZxk8T6g/edit?usp=sharing' target='_blank' class='text-blue-500 underline'>click here</a> <br /> Greedy Method Code: <a href='https://drive.google.com/file/d/1dTrOneZTm3sXL-IhFjSW7kH84he48MOd/view?usp=sharing' target='_blank' class='text-blue-500 underline'>click here</a> <br /> Heuristic Method Code: <a href='https://drive.google.com/file/d/1y0zwdD7si9isfILbmI5eCA1I5er6h3ED/view?usp=sharing' target='_blank' class='text-blue-500 underline'>click here</a> <br /> Live code link: <a href='https://colab.research.google.com/drive/1T4NrLEWGHjSyQ37yTHbVnYgVdurMfamH?usp=sharing' target='_blank' class='text-blue-500 underline'>click here</a>",
  },
  {
    id: 4,
    label: "205123077",
    description:
      "Name: Rahul <br /> Roll No. : 205123077 <br /> Topic: Influence Evaluation <br /> Ppt link: <a href='https://docs.google.com/presentation/d/1T6TP7Yysxzp_e1cFRIbYELzOzeJslp0U/edit?usp=sharing&ouid=117348173201902231756&rtpof=true&sd=true' target='_blank' class='text-blue-500 underline'>click here</a> <br /> Code link: <a href='https://colab.research.google.com/drive/1bIuIfkErIe-teimvTGG4TFII4ETfdxAH#scrollTo=a4230806-68d3-4b9e-ae48-92b4b74346d4' target='_blank' class='text-blue-500 underline'>click here</a>",
  },
  {
    id: 5,
    label: "205123079",
    description:
      "Name: Rahul Kumar <br /> Roll No: 205123079 <br /> Topic: Social Dominance Theory <br /> Ppt link: <a href='https://docs.google.com/presentation/d/1u1AlAVB5-dIJ1JRopm5UuysLIvDZjepQ/edit?usp=sharing&ouid=104028922755489747037&rtpof=true&sd=true' target='_blank' class='text-blue-500 underline'>click here</a> <br /> Code link: <a href='https://colab.research.google.com/drive/1zHsTISHSa0lpz3ANZaqTLagkXmqys0zp?usp=sharing' target='_blank' class='text-blue-500 underline'>click here</a>",
  },
];

function createButtons() {
  const container = document.getElementById("button-container");
  buttons.forEach((btn) => {
    const button = document.createElement("button");
    button.textContent = btn.label;
    button.className =
      "w-full py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition";
    button.onclick = () => showDescription(btn.description);
    container.appendChild(button);
  });
}

function showDescription(description) {
  const descriptionBox = document.getElementById("description-box");
  descriptionBox.innerHTML = description;
  descriptionBox.classList.remove("hidden");
}

createButtons();
