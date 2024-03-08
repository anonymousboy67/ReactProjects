/* eslint-disable react/prop-types */
const initialItems=[
  {id:1, description:"Password", quantity:2, packed:false},
  {id:2, description:"Socks", quantity:12, packed:false},
  {id:3, description:"charger", quantity:1, packed:true},


];

export default function App(){
  return(
    <>
    <Logo/>
    <Form/>
    <PackingList/>
    <Status/>
    </>
  )
}
  function Logo(){
    return<h1>Far Away</h1>;
  }
  function Form(){
    return (
      <>
    <form className="add-form">
    <h3>What do you need for your trip</h3>
    <select>
     {Array.from({length:20},(_,i)=>i+1).map((num)=><option value={num} key={num}>
    </option>))}
    </select>

    <input type="text" placeholder="item.."/>
    <button>Add</button>
    </form>

    </>
    )
  }
  function PackingList(){
    return (
      <div className="list">
      <ul>
      {initialItems.map((item)=>(
      // eslint-disable-next-line react/jsx-key
      <Item item={item}/>
      ))}
      </ul>
      </div>
    )
  }

  // eslint-disable-next-line react/prop-types
  function Item({item}){
    
    return (
    <>
    <span style={item.packed?{textDecoration:"Line-through"}:{}}>
    <li>{item.description}</li>
    </span>
    <button>x</button>
    </>
    )

  }
  function Status(){
    return(
      <footer className="stats">You have  X items on your list, you already packed x (x%)</footer>
    )
  }


