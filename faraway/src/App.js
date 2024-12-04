const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
export default function App(){
  return <div className="app">
    <Logo/>
    <form/>
    <PackagingList/>
    <Stats/>


  </div>
}

 function Logo(){
   return <h1>🌴Far Away💼 </h1>
 }


 function Form(){
  return <div className="add-form">
    <h3>What do you need for your trip 😍 ? </h3>
  </div>

 }


 function PackagingList(){

    return(
    <div className="list "> 
    <ul > 
    {initialItems.map(item=><Item item={item}/>)} 
     
    </ul>
    </div>
    );
 }

 function Item({item}){
  return <li>
    <span>
    {item.quantity}
    {item.description}
    
    </span> 
    <button>❌</button>
    </li>
 }
   
 function Stats(){
  return  <footer className="stats">
        <em>you have x items on your list ,and you already packed x  </em>

  </footer>
   
 }


