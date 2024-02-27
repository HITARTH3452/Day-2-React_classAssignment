const h2 = React.createElement('h2',{
    style:{
        color:'red'
    }, id: "h2-root" },'hello I am h2 of React')

// const h2 = document.createElement(h2);
// h2.innertext = "Hello I am h2 - React";
// h2.style.color = "red";

const p = React.createElement('p' , {} , "Hello I am para");

const div = React.createElement("div" , {} , [h2, p])

ReactDOM.render(div,document.getElementById('root'));