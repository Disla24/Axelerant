var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 100;
  console.log(x);
}

// output: 10
// 100
// 1

console.log(y)
console.log(z)
let y = 10;

var z = 100;

export default function App() {
  return (
    <>
     <Header/>
    </>
  );
}

import React from 'react';
import './style.css';
import Header from "./modules/Header"
export default function App() {
  return (
    <>
     <Header/>
    </>
  );
}

import * as React from 'react';

const HeaderTitle = () => {
  return <div className="header-title-">logo</div>;
};
export default HeaderTitle;

import * as React from 'react';

const HeaderNav = () => {
  return <div className="header-navigation-menu">menu</div>;
};
export default HeaderNav;

h1,
p {
  font-family: Lato;
}
* {
  margin: 0;
}
.header {
  display: flex;
  flex-direction: column;
}
.header-first,
.header-second {
  padding: 16px 130px;
}
.header-second {
  background: #5c524d;
  display: flex;
  justify-content: space-between;
}
.header-navigation-menu {
  flex-basis: 50%;
}
