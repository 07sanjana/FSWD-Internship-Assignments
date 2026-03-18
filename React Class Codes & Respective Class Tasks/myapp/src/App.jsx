import React from 'react';


// Creating multiple components
// function Header() {
//   return <h1>My Website</h1>;
// }
// function Footer() {
//   return <p>@ 2026 All Rights Reserved</p>;
// }

// function App() {
//   return (
//     <div>
//       <Header />
//       <p>This is body content</p>
//       <Footer />
//       <Header />
//     </div>
//   );
// }


// Rendering of dynamic components
// function Greetings() {
//   const name = "Sanjana";
//   return <h2>Hello {name}!</h2>
// }

// function App() {
//   return (
//     <Greetings />
//   );
// }


// Lets build a simple profile card
function ProfileCard() {
  return (
    <div style={{
      border: '1px solid gray',
      padding: '20px',
      width: '250px',
      borderRadius: '10px',
    }}>
      <h2>Sanjana</h2>
      <p>Undergraduate Student</p>
      <button>Follow</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <ProfileCard />
      <ProfileCard />
    </div>
  );
}

export default App;