import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// Mini CardList Project
// 👨CSS
// 👨JSX-CSS => use object {{}}
// 👨JSX-Javascript =>use {} return auto value
// 👨Props-Properties
// 👨Props-Destructuring
// 👨Props-Children
// 👨Simple List
// 👨Propers List
// 👨Kye Prop and Spread Operator
// 👨Even Basic
// 👨Import and Export Statements

const cards = [{
  image: "https://via.placeholder.com/150",
  title: "Card Title",
  description: "Card Description",
},

{
  image: "https://via.placeholder.com/150",
  title: "Card Title 2",
  description: "Card Description 2",
}];

const fruits = ["orange", "apple", "banana"];
const newFruits = fruits.map((fruit) => <h1>{fruit}</h1>);

function CardList(){
  // return (
  //   <main className='card-list'>
  //     <Card title="Jame" text="Card Description" number={1}/>
  //     <Card title="Austin" text="Card Description" number={2}/>
  //     <Card title="Mith" text="Card Description" number={3}/>
  //     <Card title="John" text="Card Description" number={4}/>
  //   </main>
  // );

  // return (
  //   <main className='card-list'>
  //     {newFruits}
  //     <Card image={cardOne.image}
  //           title={cardOne.title}
  //           description={cardOne.description}
  //     >
  //       <p>This is show if only use children properties in react</p>
  //     </Card>
  //     <Card image={cardTwo.image}
  //           title={cardTwo.title}
  //           description={cardTwo.description}
  //     />
  //   </main>
  // );

  return (
    <main className='card-list'>
      {cards.map((card) => {
        const {img,title,description} = card;
        return (
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        );
      })}
    </main>
  );
}


function Card({image,title,description,children}){ //this is destructuring second way
  // const {image,title,description} = props;//Destructuring first Way

  // console.log(props.title);
  // const title =  "Card Title";
  // return (
  //   <section className='card'>
  //     <img src='https://via.placeholder.com/150' alt='card-image'/>
  //     <h1 style={{marginTop:"1rem"}}>{props.title}</h1>
  //     <p>{props.text}</p>
  //     <p>{props.number}</p>
  //   </section>
  // );
  return (
    <section className="card">
      <img src={image} alt='card-image'/>
      <h1 style={{marginTop:"1rem"}}>{title}</h1>
      <p>{description}</p>
      {children}
    </section>
  );
}

// function Description(){
//   return <p style={{marginTop:"0.5rem"}}>Description</p>;
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CardList/>
);


