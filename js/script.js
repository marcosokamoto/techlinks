const links = [
    { name: "Dev.To", url: "https://dev.to/codebymarcos" },
    { name: "GitHub", url: "https://github.com/marcosokamoto" },
    { name: "Instagram", url: "https://www.instagram.com/codebymarcos/" },
    { name: "Threads", url: "https://www.threads.net/@codebymarcos" }
];

const linkList = document.getElementById("link-list");

links.forEach(link => {
    const listItem = document.createElement("li");
    const linkElement = document.createElement("a");
    linkElement.textContent = link.name;
    linkElement.href = link.url;
    linkElement.target = "_blank";
    listItem.appendChild(linkElement);
    linkList.appendChild(listItem);
});

