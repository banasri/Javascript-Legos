import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
export default function App() {
  const [result, setResult] = useState([]);
    const restaurants = [
    {
      id: 1,
      name: "abc",
      rating: 5,
      distance: 15,
      price: 100,
      cuisine: "Italian"
    },
    {
      id: 2,
      name: "xyz",
      rating: 3,
      distance: 10,
      price: 200,
      cuisine: "Indian"
    },
    {
      id: 3,
      name: "pqr",
      rating: 4,
      distance: 30,
      price: 300,
      cuisine: "French"
    }
  ];
  const [formData, setFormData] = useState({
    name : "",
    cuisine : ""
  });

  // useEffect(() => {
  //   // This will log the updated result whenever it changes
  //   console.log('result updated', result);
  // }, [result]);
  
  function handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit');
    console.log(formData);
    console.log('restaurants', restaurants);
    const newList = restaurants.filter((item) => {
      return item.name === formData.name} );
    console.log('newList', newList);
    setResult(newList);
    console.log('result', result);
  }
  function handleChange(event) {
    //console.log('handleChange', event);
    setFormData((prevVal) => {
        return {...prevVal,
        [event.target.name] : event.target.value}
    })
    console.log(formData);
  }

    return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Search Restaurants</h2>
        <input type="text" name="name" value={formData.name} placeholder='Name' onChange={handleChange}></input>
        <input type="text" name="cuisine" value={formData.cuisine} placeholder='Cuisine Type' onChange={handleChange}></input>
        <button type="submit">Search</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Cuisine</th>
            <th>Price</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          {result.length ? result.map((item) => {
            return (<tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.rating}</td>
              <td>{item.cuisine}</td>
              <td>{item.price}</td>
              <td>{item.distance}</td>
            </tr>)
          }) : null}
        </tbody>
      </table>
    </>
  )
}
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {

//   const [name, setName] = useState("");
//   const [cuisine, setCuisine] = useState("");
   
//   const restaurants = [
//     {
//       name: "abc",
//       rating: 5,
//       distance: 15,
//       price: 100,
//       cuisine: "Italian"
//     },
//     {
//       name: "xyz",
//       rating: 3,
//       distance: 10,
//       price: 200,
//       cuisine: "Indian"
//     },
//     {
//       name: "pqr",
//       rating: 4,
//       distance: 30,
//       price: 300,
//       cuisine: "French"
//     }
//   ]
//   const [result, setResult] = useState([]);
//   function handleClick(e) {
//     e.preventDefault();
//     console.log("in handle click")
//     console.log(restaurants);

//     let res = restaurants.filter((item) => {
//       return ((item.name == name)
//         || (item.cuisine == cuisine))
//     });

//     setResult(res);
//     console.log(result);
//   }
//   function handleNameChange(e) {
//     setName(e.target.value);
//     console.log(name);
//   }
//   function handleCuisineChange(e) {
//     setCuisine(e.target.value);
//   }
//   return (
//     <>
//       <form>
//         <h2>Search Restaurants</h2>
//         <input type="text" value={name} placeholder='Name' onChange={handleNameChange}></input>
//         <input type="text" value={cuisine} placeholder='Cuisine Type' onChange={handleCuisineChange}></input>
//         <button onClick={handleClick}>Search</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Rating</th>
//             <th>Cuisine</th>
//             <th>Price</th>
//             <th>Distance</th>
//           </tr>
//         </thead>
//         <tbody>
//           {result.length ? result.map(item => {
//             <tr>
//               <td>item.name</td>
//               <td>item.rating</td>
//               <td>item.cuisine</td>
//               <td>item.price</td>
//               <td>item.distance</td>
//             </tr>
//           }) : null}
//         </tbody>
//       </table>
//     </>
//   )
// }

// export default App
