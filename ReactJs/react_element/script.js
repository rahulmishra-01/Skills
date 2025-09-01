const h1 = React.createElement("div",{className:"heading"}, [
    "Hello",
    React.createElement("span", {key:"world"}, "World"),
    React.createElement("p",{key:"paragraph"},"This is a paragraph"),
    React.createElement("img",{key:"image",src:"./images/demo.jpg",width:"200px",alt:"demo image"})
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(h1);