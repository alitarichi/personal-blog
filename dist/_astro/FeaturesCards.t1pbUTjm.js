import{j as e}from"./jsx-runtime.7faW4zRM.js";import{t as m}from"./bundle-mjs.dQMZEiOx.js";import{C as x}from"./Card.D0VZOW2G.js";import{r as i}from"./index.DhYZZe0J.js";import"./TextButton.D6El01D8.js";const n=[{image:"/assets/images/pill.png",title:"Revolutionary Blockchain API",description:"Effortlessly integrate and manage blockchain data with our cutting-edge API, Designed for seamless connectivity",color:"fuchsia"},{image:"/assets/images/cuboid.png",title:"Decentralized Data Solutions ",description:"Empower Your applications with decentralized data solutions ensuring security and transparency at every step.",color:"lime"},{image:"/assets/images/cone.png",title:"Next-Gen Smart Contracts",description:"Unlock your potential of next-gen smart contracts with our robust and scalable API, tailored for modern blockchain needs",color:"cyan"},{image:"/assets/images/icosahedron.png",title:"Seamless Blockchain integration",description:"Integrate blockchain technology into your projects, with minimal effort and maximum efficiency ",color:"violet"}],v=()=>{const[a,r]=i.useState(0),[l,o]=i.useState(!1);return i.useEffect(()=>{if(l)return;const s=setTimeout(()=>{r(t=>t===n.length-1?0:t+1)},3e3);return()=>{clearTimeout(s)}},[a,l]),e.jsx("section",{className:"py-24 overflow-x-clip md:-mt-28 ",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center",children:"Discover the future of blockchain with Blockforge"}),e.jsx("div",{className:"mt-36 lg:mt-48 flex",children:e.jsx("div",{className:"flex flex-none gap-8",children:n.map(({image:s,title:t,description:c,color:d})=>e.jsx("div",{className:"inline-flex transition-all duration-500",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{transform:`translateX(calc((-100% - 2rem) * ${a}))`},children:e.jsxs(x,{className:"max-w-xs md:max-w-md",color:d,children:[e.jsx("div",{className:"flex justify-center -mt-28",children:e.jsxs("div",{className:"inline-flex relative",children:[e.jsx("div",{className:"absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"}),e.jsx("img",{src:s,alt:"pill",className:"size-40 group-hover:-translate-y-6 transition duration-300"})]})}),e.jsx("h3",{className:"font-heading font-black text-3xl mt-12",children:t}),e.jsx("p",{className:"text-lg text-zinc-400 mt-4",children:c})]},t)}))})}),e.jsx("div",{className:"flex justify-center mt-10",children:e.jsx("div",{className:"bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full",children:n.map(({title:s},t)=>e.jsx("div",{className:m("size-2.5 bg-zinc-500 rounded-full cursor-pointer",t===a&&"bg-zinc-300"),onClick:()=>r(t)},s))})})]})})};export{v as FeaturesCardsSection};
