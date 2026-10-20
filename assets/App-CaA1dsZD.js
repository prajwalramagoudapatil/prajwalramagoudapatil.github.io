import{n as e,t}from"./rolldown-runtime-BVbofQct.js";import{t as n}from"./react-DBU-4GXn.js";var r=e(n(),1),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(i),o=[`attr`,`size`,`title`];function s(e,t){if(e==null)return{};var n,r,i=c(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function c(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(null,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?u(Object(n),!0).forEach(function(t){f(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function f(e,t,n){return(t=ee(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ee(e){var t=te(e,`string`);return typeof t==`symbol`?t:t+``}function te(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function p(e){return e&&e.map((e,t)=>r.createElement(e.tag,d({key:t},e.attr),p(e.child)))}function m(e){return t=>r.createElement(ne,l({attr:d({},e.attr)},t),p(e.child))}function ne(e){var t=t=>{var{attr:n,size:i,title:a}=e,c=s(e,o),u=i||t.size||`1em`,f;return t.className&&(f=t.className),e.className&&(f=(f?f+` `:``)+e.className),r.createElement(`svg`,l({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,c,{className:f,style:d(d({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:`http://www.w3.org/2000/svg`}),a&&r.createElement(`title`,null,a),e.children)};return a===void 0?t(i):r.createElement(a.Consumer,null,e=>t(e))}function h(e){return m({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`4`},child:[]},{tag:`path`,attr:{d:`M12 2v2`},child:[]},{tag:`path`,attr:{d:`M12 20v2`},child:[]},{tag:`path`,attr:{d:`m4.93 4.93 1.41 1.41`},child:[]},{tag:`path`,attr:{d:`m17.66 17.66 1.41 1.41`},child:[]},{tag:`path`,attr:{d:`M2 12h2`},child:[]},{tag:`path`,attr:{d:`M20 12h2`},child:[]},{tag:`path`,attr:{d:`m6.34 17.66-1.41 1.41`},child:[]},{tag:`path`,attr:{d:`m19.07 4.93-1.41 1.41`},child:[]}]})(e)}function g(e){return m({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z`},child:[]}]})(e)}function re(e){return m({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`ellipse`,attr:{cx:`12`,cy:`5`,rx:`9`,ry:`3`},child:[]},{tag:`path`,attr:{d:`M3 5V19A9 3 0 0 0 21 19V5`},child:[]},{tag:`path`,attr:{d:`M3 12A9 3 0 0 0 21 12`},child:[]}]})(e)}function ie(e){return m({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z`},child:[]}]})(e)}function ae(e){return m({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z`},child:[]},{tag:`path`,attr:{d:`M9 13a4.5 4.5 0 0 0 3-4`},child:[]},{tag:`path`,attr:{d:`M6.003 5.125A3 3 0 0 0 6.401 6.5`},child:[]},{tag:`path`,attr:{d:`M3.477 10.896a4 4 0 0 1 .585-.396`},child:[]},{tag:`path`,attr:{d:`M6 18a4 4 0 0 1-1.967-.516`},child:[]},{tag:`path`,attr:{d:`M12 13h4`},child:[]},{tag:`path`,attr:{d:`M12 18h6a2 2 0 0 1 2 2v1`},child:[]},{tag:`path`,attr:{d:`M12 8h8`},child:[]},{tag:`path`,attr:{d:`M16 8V5a2 2 0 0 1 2-2`},child:[]},{tag:`circle`,attr:{cx:`16`,cy:`13`,r:`.5`},child:[]},{tag:`circle`,attr:{cx:`18`,cy:`3`,r:`.5`},child:[]},{tag:`circle`,attr:{cx:`20`,cy:`21`,r:`.5`},child:[]},{tag:`circle`,attr:{cx:`20`,cy:`8`,r:`.5`},child:[]}]})(e)}var oe=t((e=>{var t=n(),r=Symbol.for(`react.element`),i=Symbol.for(`react.fragment`),a=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,c={},l=null,u=null;for(i in n!==void 0&&(l=``+n),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)a.call(t,i)&&!s.hasOwnProperty(i)&&(c[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)c[i]===void 0&&(c[i]=t[i]);return{$$typeof:r,type:e,key:l,ref:u,props:c,_owner:o.current}}e.Fragment=i,e.jsx=c,e.jsxs=c})),_=t(((e,t)=>{t.exports=oe()})),v=_(),y=960,b=[{label:`Home`,target:`home`},{label:`About`,target:`about`},{label:`Projects`,target:`projects`},{label:`Certificates`,target:`certificates`},{label:`Skills`,target:`skills`},{label:`Contact`,target:`contact`}],x={header:{position:`sticky`,top:0,zIndex:100,backdropFilter:`blur(18px)`,background:`color-mix(in srgb, var(--bg) 82%, transparent)`,borderBottom:`1px solid var(--border)`},nav:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`12px`,padding:`10px 20px`,position:`relative`,minWidth:0},brand:{color:`var(--text-h)`,textDecoration:`none`,fontFamily:`var(--nav-heading)`,fontSize:`1.6rem`,fontWeight:600,flex:`1 1 auto`,minWidth:0,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},navLinks:{display:`flex`,alignItems:`center`,gap:`8px`},navActions:{display:`flex`,alignItems:`center`,gap:`10px`},link:{border:`none`,background:`transparent`,color:`var(--text)`,font:`inherit`,fontFamily:`var(--mono)`,padding:`10px 14px`,borderRadius:`999px`,cursor:`pointer`,transition:`background-color 0.2s ease, color 0.2s ease, transform 0.2s ease`},themeButton:{border:`1px solid var(--border)`,background:`var(--surface)`,color:`var(--text-h)`,font:`inherit`,padding:`10px 14px`,borderRadius:`999px`,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,gap:`8px`,transition:`background-color 0.2s ease, color 0.2s ease, transform 0.2s ease`,whiteSpace:`nowrap`},menuButton:{display:`none`,border:`1px solid var(--border)`,background:`transparent`,color:`var(--text-h)`,borderRadius:`12px`,width:`44px`,height:`44px`,cursor:`pointer`,padding:0,alignItems:`center`,justifyContent:`center`},menuPanel:{position:`absolute`,top:`calc(100% + 12px)`,right:`20px`,left:`20px`,display:`flex`,flexDirection:`column`,gap:`8px`,padding:`14px`,borderRadius:`20px`,border:`1px solid var(--border)`,background:`var(--bg)`,boxShadow:`var(--shadow)`},mobileLink:{border:`none`,background:`transparent`,color:`var(--text-h)`,font:`inherit`,textAlign:`left`,padding:`12px 14px`,borderRadius:`12px`,cursor:`pointer`}};function S({theme:e,onToggleTheme:t}){let[n,i]=(0,r.useState)(()=>window.innerWidth<=y),[a,o]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=()=>{let e=window.innerWidth<=y;i(e),e||o(!1)};return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let s=e=>{if(e===`home`){window.scrollTo({top:0,behavior:`smooth`}),o(!1);return}if(e===`contact`){console.log(`Scrolling to contact section ${e}`);let t=document.querySelector(`footer`);t&&t.scrollIntoView({behavior:`smooth`,block:`start`}),o(!1);return}let t=document.getElementById(e);if(t){let e=t.getBoundingClientRect().top+window.pageYOffset-50;window.scrollTo({top:e,behavior:`smooth`})}o(!1)},c=e===`dark`?`Light Theme`:`Dark Theme`,l=e===`dark`?(0,v.jsx)(h,{size:18}):(0,v.jsx)(g,{size:18}),u=e=>{e.currentTarget.style.background=`var(--accent-bg)`,e.currentTarget.style.color=`var(--text-h)`,e.currentTarget.style.transform=`translateY(-1px)`},d=(e,t=`var(--text)`)=>{e.currentTarget.style.background=`transparent`,e.currentTarget.style.color=t,e.currentTarget.style.transform=`translateY(0)`},f=(0,v.jsxs)(`div`,{style:x.navActions,children:[(0,v.jsx)(`div`,{style:x.navLinks,children:b.map(e=>(0,v.jsx)(`button`,{type:`button`,style:x.link,onClick:()=>s(e.target),onMouseEnter:u,onMouseLeave:e=>d(e),children:e.label},e.target))}),(0,v.jsx)(`button`,{type:`button`,style:x.themeButton,onClick:t,"aria-label":`Switch to ${c}`,onMouseEnter:u,onMouseLeave:e=>d(e,`var(--text-h)`),children:(0,v.jsx)(`span`,{"aria-hidden":`true`,style:{display:`inline-flex`,lineHeight:0},children:l})})]});return(0,v.jsx)(`header`,{style:x.header,children:(0,v.jsxs)(`nav`,{className:`navbar-nav`,style:x.nav,"aria-label":`Primary`,children:[(0,v.jsx)(`a`,{href:`#home`,style:{...x.brand,maxWidth:n?`calc(100% - 64px)`:`none`,fontSize:n?`1.33rem`:x.brand.fontSize,textAlign:n?`left`:`initial`},onClick:e=>{e.preventDefault(),s(`home`)},children:`<Prajwal Patil />`}),n?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`button`,{type:`button`,style:{...x.menuButton,display:`inline-flex`},"aria-expanded":a,"aria-controls":`mobile-navigation`,"aria-label":a?`Close navigation menu`:`Open navigation menu`,onClick:()=>o(e=>!e),children:(0,v.jsx)(`span`,{"aria-hidden":`true`,style:{fontSize:`20px`,lineHeight:1},children:a?`X`:`☰`})}),a&&(0,v.jsxs)(`div`,{id:`mobile-navigation`,style:x.menuPanel,children:[b.map(e=>(0,v.jsx)(`button`,{type:`button`,style:x.mobileLink,onClick:()=>s(e.target),children:e.label},e.target)),(0,v.jsxs)(`button`,{type:`button`,style:x.mobileLink,onClick:()=>{t(),o(!1)},"aria-label":`Switch to ${c}`,children:[(0,v.jsx)(`span`,{"aria-hidden":`true`,style:{display:`inline-flex`,lineHeight:0,marginRight:`8px`},children:l}),c]})]})]}):f]})})}var C=80,w=40,T=1800,E=400;function D({strings:e=[]}){let[t,n]=(0,r.useState)(``),[i,a]=(0,r.useState)(`typing`),[o,s]=(0,r.useState)(0),[c,l]=(0,r.useState)(0),u=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=e[o];return i===`typing`&&(c<t.length?u.current=setTimeout(()=>{n(t.slice(0,c+1)),l(e=>e+1)},C):u.current=setTimeout(()=>a(`erasing`),T)),i===`erasing`&&(c>0?u.current=setTimeout(()=>{n(t.slice(0,c-1)),l(e=>e-1)},w):u.current=setTimeout(()=>{s(t=>(t+1)%e.length),a(`typing`)},E)),()=>clearTimeout(u.current)},[i,c,o,e]),(0,v.jsxs)(`span`,{className:`typewriter`,children:[t,(0,v.jsx)(`span`,{className:`cursor`,"aria-hidden":`true`,children:`|`})]})}function O(){return(0,v.jsxs)(v.Fragment,{children:[`Hi, There!`,(0,v.jsx)(`span`,{className:`wave`,children:`👋🏻`})]})}var k=`/assets/Prajwal-photo-DcV8HNeW.jpg`,A=()=>(0,v.jsxs)(`section`,{className:`hero`,id:`home`,children:[(0,v.jsxs)(`div`,{className:`hero-content`,children:[(0,v.jsxs)(`h1`,{children:[(0,v.jsx)(O,{}),` `,(0,v.jsxs)(`div`,{children:[`  I'm `,(0,v.jsx)(`span`,{children:`Prajwal Patil`}),` `]})]}),(0,v.jsxs)(`h2`,{children:[` `,(0,v.jsx)(D,{strings:[`Flutter Developer`,`AI/ML Engineer`,`Full Stack Developer`]}),` `]}),(0,v.jsx)(`p`,{children:`I build intelligent systems using Machine Learning, Deep Learning, and Generative AI. Passionate about solving real-world problems with scalable and impactful solutions.`}),(0,v.jsxs)(`div`,{className:`hero-buttons`,children:[(0,v.jsx)(`a`,{href:`#projects`,className:`btn primary`,children:`View Projects`}),(0,v.jsx)(`a`,{href:`https://github.com/prajwalramagoudapatil`,rel:`noreferrer`,className:`btn primary`,children:`GitHub`})]})]}),(0,v.jsx)(`div`,{className:`hero-image`,children:(0,v.jsx)(`img`,{src:k,alt:`Prajwal`})})]}),j=`/assets/developer-FEa5sPAK.png`,M=`/assets/resume-BB2NRXn4.pdf`,N=()=>(0,v.jsxs)(`section`,{className:`about`,id:`about`,children:[(0,v.jsx)(`h2`,{className:`about-title`,children:`About Me`}),(0,v.jsxs)(`div`,{className:`about-container`,children:[(0,v.jsx)(`div`,{className:`about-image-card`,children:(0,v.jsx)(`img`,{src:j,alt:`Prajwal Patil`})}),(0,v.jsx)(`div`,{className:`about-content`,children:(0,v.jsxs)(`div`,{className:`about-content-card`,children:[(0,v.jsxs)(`div`,{className:`about-text`,children:[(0,v.jsx)(`p`,{children:`I am a Computer Science graduate with a strong interest in Artificial Intelligence, Machine Learning, and Full Stack Development. I enjoy building scalable applications and solving real-world problems using modern technologies.`}),(0,v.jsx)(`p`,{children:`I have hands-on experience working with Python, React, Node.js, and various ML frameworks like TensorFlow and scikit-learn. I have also built projects involving RAG pipelines, deep learning, and web applications.`}),(0,v.jsx)(`p`,{children:`I am currently looking for opportunities where I can contribute, learn, and grow as an AI/ML Engineer while building impactful solutions.`})]}),(0,v.jsxs)(`div`,{className:`about-info`,children:[(0,v.jsxs)(`div`,{className:`about-info-item`,children:[(0,v.jsx)(`strong`,{children:`Name:`}),` Prajwal Patil`]}),(0,v.jsxs)(`div`,{className:`about-info-item`,children:[(0,v.jsx)(`strong`,{children:`Email:`}),` prajwalpatil6987@gmail.com`]}),(0,v.jsxs)(`div`,{className:`about-info-item`,children:[(0,v.jsx)(`strong`,{children:`Location:`}),` India`]})]}),(0,v.jsx)(`a`,{href:M,download:!0,className:`btn primary about-download`,children:`Download Resume`})]})})]})]}),P=[{title:`AI Agent CRM for HCP Interactions`,description:`Built an AI-powered CRM system for pharmaceutical sales representatives to log, summarize, and manage HCP interactions using LangGraph agents. The application extracts structured information from natural language, generates summaries with Groq LLMs, resolves HCP records, and stores interactions in PostgreSQL through a FastAPI backend.`,tech:[`Python`,`FastAPI`,`LangGraph`,`Groq`,`PostgreSQL`,`React`,`Redux`,`Tailwind CSS`],github:`https://github.com/prajwalramagoudapatil/ai-agent-crm-hcp`,demo:`https://youtu.be/23kgjpcb71U?si=IiHjmWCUBhSstC3x`},{title:`LLM Fine-Tuning with LoRA`,description:`Fine-tuned an open-source Large Language Model using LoRA and Hugging Face PEFT in Google Colab. Prepared datasets, configured training with Transformers, evaluated model performance, and demonstrated efficient parameter-efficient fine-tuning for domain-specific tasks.`,tech:[`Python`,`PyTorch`,`Hugging Face`,`Transformers`,`PEFT`,`LoRA`,`Google Colab`],github:`https://colab.research.google.com/drive/1fGVba6kd19y5ZUGU6y7bUYO1XYuznJeP?usp=sharing`},{title:`Haryana Gaushala RAG System`,description:`Built a Retrieval-Augmented Generation system using LangChain and ChromaDB to answer queries from PDF documents.`,tech:[`Python`,`LangChain`,`ChromaDB`,`LLM`],github:`https://github.com/prajwalramagoudapatil/haryana-gaushala-rag-gpt`},{title:`Object Localization (TensorFlow)`,description:`Implemented CNN-based model for object classification and bounding box prediction using IoU metric.`,tech:[`TensorFlow`,`CNN`,`Python`],github:`https://github.com/prajwalramagoudapatil/object-localization-tensorflow`},{title:`Aircraft Damage Classification`,description:`Deep learning model using VGG16 and BLIP to detect aircraft damage and generate captions.`,tech:[`Python`,`VGG16`,`Transformers`],github:`https://github.com/prajwalramagoudapatil/crack-or-dent-classification`},{title:`Department Chat App`,description:`Real-time chat application with polls using Flutter and Firebase.`,tech:[`Flutter`,`Firebase`,`Dart`],github:`https://github.com/prajwalramagoudapatil/chatapp`},{title:`E-Learning Platform`,description:`Web app with educational content and quizzes built using PHP and MySQL.`,tech:[`PHP`,`MySQL`,`JavaScript`],github:`https://github.com/prajwalramagoudapatil/e-learning-website`},{title:`SEE Room Allocation System`,description:`Full-stack web app to automate exam room allocation using MERN stack.`,tech:[`React`,`Node.js`,`Express`],github:`#`}],F=()=>(0,v.jsxs)(`section`,{className:`projects`,id:`projects`,children:[(0,v.jsx)(`h2`,{children:`My Projects`}),(0,v.jsx)(`div`,{className:`projects-container`,children:P.map((e,t)=>(0,v.jsxs)(`div`,{className:`project-card`,children:[(0,v.jsx)(`h3`,{children:e.title}),(0,v.jsx)(`p`,{children:e.description}),(0,v.jsx)(`div`,{className:`tech-stack`,children:e.tech.map((e,t)=>(0,v.jsx)(`span`,{children:e},t))}),(0,v.jsxs)(`div`,{className:`project-links`,children:[(0,v.jsx)(`a`,{href:e.github,target:`_blank`,rel:`noreferrer`,children:`GitHub`}),e.demo&&(0,v.jsx)(`a`,{href:e.demo,target:`_blank`,rel:`noreferrer`,children:`Live Demo`})]})]},t))})]}),I=[{title:`Introduction to Data Science in Python`,issuer:`University of Michigan`,link:`https://www.coursera.org/account/accomplishments/verify/7QYRX1QVUB0E`,summary:`Built a solid foundation in Python-based data science workflows, including CSV handling, data cleaning, sampling, and statistical testing.`,skills:[`Python`,`Pandas`,`NumPy`,`Data Analysis`,`Statistical Analysis`]},{title:`Applied Plotting, Charting & Data Representation in Python`,issuer:`University of Michigan`,link:`https://www.coursera.org/account/accomplishments/verify/Y9G4Z6SIQLVU`,summary:`Focused on building effective visualizations and choosing the right chart types for communicating insights from data.`,skills:[`Matplotlib`,`Data Visualization`,`Pandas`,`Scatter Plots`,`Graphing`]},{title:`Applied Social Network Analysis in Python`,issuer:`University of Michigan`,link:`https://www.coursera.org/account/accomplishments/verify/38M61P74WDGO`,summary:`Worked with graph-based data using NetworkX to analyze connectivity, centrality, and network evolution.`,skills:[`Network Analysis`,`Graph Theory`,`Python`,`Predictive Analytics`,`Pandas`]},{title:`Applied Machine Learning in Python`,issuer:`University of Michigan`,link:`https://www.coursera.org/account/accomplishments/verify/QIM7QDUWYIZM`,summary:`Covered core machine learning workflows including feature engineering, clustering, predictive modeling, and model evaluation.`,skills:[`Machine Learning`,`Scikit-learn`,`Feature Engineering`,`Model Evaluation`,`Regression`]},{title:`DevOps on AWS: Code, Build, and Test`,issuer:`Amazon Web Services`,link:`https://www.coursera.org/account/accomplishments/verify/DZ6E14OPQHN9`,summary:`Explored DevOps practices on AWS, with emphasis on CI/CD, code quality workflows, testing, and deployment pipelines.`,skills:[`AWS`,`DevOps`,`CI/CD`,`Cloud Deployment`,`Test Automation`]},{title:`Applied Text Mining in Python`,issuer:`University of Michigan`,link:`https://www.coursera.org/account/accomplishments/verify/MFX9UDEKVI6M`,summary:`Studied text processing and introductory NLP techniques for classification, topic grouping, and document analysis in Python.`,skills:[`NLP`,`Text Mining`,`Scikit-learn`,`Feature Engineering`,`Python`]},{title:`React Basics`,issuer:`Meta`,link:`https://www.coursera.org/account/accomplishments/verify/V026Z1XTWKMZ`,summary:`Strengthened core React concepts including reusable components, props, forms, and interactive UI development.`,skills:[`React`,`JavaScript`,`HTML`,`CSS`,`UI Components`]}],L=()=>(0,v.jsxs)(`section`,{className:`certificates`,id:`certificates`,children:[(0,v.jsxs)(`div`,{className:`certificates-header`,children:[(0,v.jsx)(`h2`,{children:`Certificates`}),(0,v.jsx)(`p`,{children:`A selection of certifications that shaped my foundation in data science, machine learning, cloud workflows, and modern frontend development.`})]}),(0,v.jsx)(`div`,{className:`certificates-grid`,children:I.map(e=>(0,v.jsxs)(`article`,{className:`certificate-card`,children:[(0,v.jsx)(`div`,{className:`certificate-meta`,children:(0,v.jsx)(`span`,{className:`certificate-issuer`,children:e.issuer})}),(0,v.jsx)(`h3`,{children:e.title}),(0,v.jsx)(`p`,{children:e.summary}),(0,v.jsx)(`div`,{className:`certificate-skills`,children:e.skills.map(e=>(0,v.jsx)(`span`,{children:e},e))}),(0,v.jsx)(`a`,{href:e.link,target:`_blank`,rel:`noreferrer`,children:`View Certificate`})]},e.link))})]});function R(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z`},child:[]}]})(e)}function z(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M15.601 5.53c-1.91.035-3.981.91-5.63 2.56-2.93 2.93-2.083 8.53-1.088 9.525.805.804 6.595 1.843 9.526-1.088a9.74 9.74 0 0 0 .584-.643c.043-.292.205-.66.489-1.106a1.848 1.848 0 0 1-.537.176c-.144.265-.37.55-.676.855-.354.335-.607.554-.76.656a.795.795 0 0 1-.437.152c-.35 0-.514-.308-.494-.924-.22.316-.425.549-.612.7a.914.914 0 0 1-.578.224c-.194 0-.36-.09-.496-.273a1.03 1.03 0 0 1-.193-.507 4.016 4.016 0 0 1-.726.583c-.224.132-.47.197-.74.197-.3 0-.543-.096-.727-.288a.978.978 0 0 1-.257-.524v.004c-.3.276-.564.48-.79.611a1.295 1.295 0 0 1-.649.197.693.693 0 0 1-.571-.275c-.145-.183-.218-.43-.218-.739 0-.464.101-1.02.302-1.67.201-.65.445-1.25.733-1.797l.842-.312a.21.21 0 0 1 .06-.013c.063 0 .116.047.157.14.04.095.061.221.061.38 0 .451-.104.888-.312 1.31-.207.422-.532.873-.974 1.352-.018.23-.027.388-.027.474 0 .193.036.345.106.458.071.113.165.169.282.169a.71.71 0 0 0 .382-.13c.132-.084.333-.26.602-.523.028-.418.187-.798.482-1.142.324-.38.685-.569 1.08-.569.206 0 .37.054.494.16a.524.524 0 0 1 .186.417c0 .458-.486.829-1.459 1.114.088.43.32.646.693.646a.807.807 0 0 0 .417-.117c.129-.076.321-.243.575-.497.032-.252.118-.495.259-.728.182-.3.416-.544.701-.73.285-.185.537-.278.756-.278.276 0 .47.127.58.381l.677-.374h.186l-.292.971c-.15.488-.226.823-.226 1.004 0 .19.067.285.202.285.086 0 .181-.045.285-.137.104-.092.25-.232.437-.42v.001c.143-.155.274-.32.392-.494-.19-.084-.285-.21-.285-.375 0-.17.058-.352.174-.545.116-.194.275-.29.479-.29.172 0 .258.088.258.265 0 .139-.05.338-.149.596.367-.04.687-.32.961-.842l.228-.01c1.059-2.438.828-5.075-.83-6.732-1.019-1.02-2.408-1.5-3.895-1.471zm4.725 8.203a8.938 8.938 0 0 1-1.333 2.151 1.09 1.09 0 0 0-.012.147c0 .168.047.309.14.423.092.113.206.17.34.17.296 0 .714-.264 1.254-.787-.001.04-.003.08-.003.121 0 .146.012.368.036.666l.733-.172c0-.2.003-.357.01-.474.01-.157.033-.33.066-.517.02-.11.07-.216.152-.315l.186-.216a5.276 5.276 0 0 1 .378-.397c.062-.055.116-.099.162-.13a.26.26 0 0 1 .123-.046c.055 0 .083.035.083.106 0 .07-.052.236-.156.497-.194.486-.292.848-.292 1.084 0 .175.046.314.136.418a.45.45 0 0 0 .358.155c.365 0 .803-.269 1.313-.808v-.381c-.361.426-.623.64-.784.64-.109 0-.163-.067-.163-.2 0-.1.065-.316.195-.65.19-.486.285-.836.285-1.048a.464.464 0 0 0-.112-.319.36.36 0 0 0-.282-.127c-.165 0-.354.077-.567.233-.213.156-.5.436-.863.84.053-.262.165-.622.335-1.08l-.809.156a6.54 6.54 0 0 0-.399 1.074c-.04.156-.07.316-.092.48a7.447 7.447 0 0 1-.49.45.38.38 0 0 1-.229.08.208.208 0 0 1-.174-.082.352.352 0 0 1-.064-.222c0-.1.019-.214.056-.343.038-.13.12-.373.249-.731l.308-.849zm-17.21-2.927c-.863-.016-1.67.263-2.261.854-1.352 1.352-1.07 3.827.631 5.527 1.7 1.701 4.95 1.21 5.527.632.467-.466 1.07-3.827-.631-5.527-.957-.957-2.158-1.465-3.267-1.486zm12.285.358h.166v.21H15.4zm.427 0h.166v.865l.46-.455h.195l-.364.362.428.684h-.198l-.357-.575-.164.166v.41h-.166zm1.016 0h.166v.21h-.166zm.481.122h.166v.288h.172v.135h-.172v.717c0 .037.006.062.02.075.012.013.037.02.074.02a.23.23 0 0 0 .078-.01v.141a.802.802 0 0 1-.136.014.23.23 0 0 1-.15-.043.15.15 0 0 1-.052-.123v-.79h-.141v-.136h.141zm-3.562.258c.081 0 .15.012.207.038.057.024.1.061.13.11s.045.106.045.173h-.176c-.006-.111-.075-.167-.208-.167a.285.285 0 0 0-.164.041.134.134 0 0 0-.06.117c0 .035.015.065.045.088.03.024.08.044.15.06l.16.039a.47.47 0 0 1 .224.105c.047.046.07.108.07.186a.3.3 0 0 1-.052.175.327.327 0 0 1-.152.116.585.585 0 0 1-.226.041c-.136 0-.24-.03-.309-.088-.069-.059-.105-.149-.109-.269h.176c.004.037.01.065.017.084a.166.166 0 0 0 .034.054c.044.043.112.065.204.065a.31.31 0 0 0 .177-.045.139.139 0 0 0 .067-.119.116.116 0 0 0-.038-.09.287.287 0 0 0-.124-.055l-.156-.038a1.248 1.248 0 0 1-.159-.05.359.359 0 0 1-.098-.061.22.22 0 0 1-.058-.083.32.32 0 0 1-.016-.108c0-.096.036-.174.109-.232a.45.45 0 0 1 .29-.087zm1.035 0a.46.46 0 0 1 .202.043.351.351 0 0 1 .187.212.577.577 0 0 1 .023.126h-.168a.256.256 0 0 0-.078-.168.242.242 0 0 0-.17-.06.248.248 0 0 0-.155.05.306.306 0 0 0-.1.144.662.662 0 0 0-.034.224.58.58 0 0 0 .035.214.299.299 0 0 0 .101.135.261.261 0 0 0 .157.048c.142 0 .227-.084.256-.252h.167a.519.519 0 0 1-.065.22.35.35 0 0 1-.146.138.464.464 0 0 1-.216.048.448.448 0 0 1-.246-.066.441.441 0 0 1-.161-.192.703.703 0 0 1-.057-.293c0-.085.01-.163.032-.233a.522.522 0 0 1 .095-.182.403.403 0 0 1 .15-.117.453.453 0 0 1 .191-.04zm.603.03h.166v1.046H15.4zm1.443 0h.166v1.046h-.166zm-5.05.618c-.08 0-.2.204-.356.611-.155.407-.308.977-.459 1.71.281-.312.509-.662.683-1.05.175-.387.262-.72.262-.999a.455.455 0 0 0-.036-.197c-.025-.05-.056-.075-.093-.075zm4.662 1.797c-.221 0-.431.188-.629.563-.197.376-.296.722-.296 1.038 0 .12.029.216.088.29a.273.273 0 0 0 .223.111c.221 0 .43-.188.625-.565.196-.377.294-.725.294-1.043a.457.457 0 0 0-.083-.29.269.269 0 0 0-.222-.104zm-2.848.007c-.146 0-.285.11-.417.333-.133.222-.2.51-.2.866.566-.159.849-.452.849-.881 0-.212-.077-.318-.232-.318Z`},child:[]}]})(e)}function B(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z`},child:[]}]})(e)}function V(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0c3.984-3.9 3.986-10.205.085-14.023l-1.744 1.743c2.904 2.905 2.904 7.634 0 10.538s-7.634 2.904-10.538 0-2.904-7.634 0-10.538l4.647-4.646.582-.665zm3.568 3.899a1.327 1.327 0 00-1.327 1.327 1.327 1.327 0 001.327 1.328A1.327 1.327 0 0016.9 5.226 1.327 1.327 0 0015.573 3.9z`},child:[]}]})(e)}function H(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z`},child:[]}]})(e)}function U(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M11.915 0 11.7.215C9.515 2.4 7.47 6.39 6.046 10.483c-1.064 1.024-3.633 2.81-3.711 3.551-.093.87 1.746 2.611 1.55 3.235-.198.625-1.304 1.408-1.014 1.939.1.188.823.011 1.277-.491a13.389 13.389 0 0 0-.017 2.14c.076.906.27 1.668.643 2.232.372.563.956.911 1.667.911.397 0 .727-.114 1.024-.264.298-.149.571-.33.91-.5.68-.34 1.634-.666 3.53-.604 1.903.062 2.872.39 3.559.704.687.314 1.15.664 1.925.664.767 0 1.395-.336 1.807-.9.412-.563.631-1.33.72-2.24.06-.623.055-1.32 0-2.066.454.45 1.117.604 1.213.424.29-.53-.816-1.314-1.013-1.937-.198-.624 1.642-2.366 1.549-3.236-.08-.748-2.707-2.568-3.748-3.586C16.428 6.374 14.308 2.394 12.13.215zm.175 6.038a2.95 2.95 0 0 1 2.943 2.942 2.95 2.95 0 0 1-2.943 2.943A2.95 2.95 0 0 1 9.148 8.98a2.95 2.95 0 0 1 2.942-2.942zM8.685 7.983a3.515 3.515 0 0 0-.145.997c0 1.951 1.6 3.55 3.55 3.55 1.95 0 3.55-1.598 3.55-3.55 0-.329-.046-.648-.132-.951.334.095.64.208.915.336a42.699 42.699 0 0 1 2.042 5.829c.678 2.545 1.01 4.92.846 6.607-.082.844-.29 1.51-.606 1.94-.315.431-.713.651-1.315.651-.593 0-.932-.27-1.673-.61-.741-.338-1.825-.694-3.792-.758-1.974-.064-3.073.293-3.821.669-.375.188-.659.373-.911.5s-.466.2-.752.2c-.53 0-.876-.209-1.16-.64-.285-.43-.474-1.101-.545-1.948-.141-1.693.176-4.069.823-6.614a43.155 43.155 0 0 1 1.934-5.783c.348-.167.749-.31 1.192-.425zm-3.382 4.362a.216.216 0 0 1 .13.031c-.166.56-.323 1.116-.463 1.665a33.849 33.849 0 0 0-.547 2.555 3.9 3.9 0 0 0-.2-.39c-.58-1.012-.914-1.642-1.16-2.08.315-.24 1.679-1.755 2.24-1.781zm13.394.01c.562.027 1.926 1.543 2.24 1.783-.246.438-.58 1.068-1.16 2.08a4.428 4.428 0 0 0-.163.309 32.354 32.354 0 0 0-.562-2.49 40.579 40.579 0 0 0-.482-1.652.216.216 0 0 1 .127-.03z`},child:[]}]})(e)}function W(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z`},child:[]}]})(e)}function G(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M16.361 10.26a.894.894 0 0 0-.558.47l-.072.148.001.207c0 .193.004.217.059.353.076.193.152.312.291.448.24.238.51.3.872.205a.86.86 0 0 0 .517-.436.752.752 0 0 0 .08-.498c-.064-.453-.33-.782-.724-.897a1.06 1.06 0 0 0-.466 0zm-9.203.005c-.305.096-.533.32-.65.639a1.187 1.187 0 0 0-.06.52c.057.309.31.59.598.667.362.095.632.033.872-.205.14-.136.215-.255.291-.448.055-.136.059-.16.059-.353l.001-.207-.072-.148a.894.894 0 0 0-.565-.472 1.02 1.02 0 0 0-.474.007Zm4.184 2c-.131.071-.223.25-.195.383.031.143.157.288.353.407.105.063.112.072.117.136.004.038-.01.146-.029.243-.02.094-.036.194-.036.222.002.074.07.195.143.253.064.052.076.054.255.059.164.005.198.001.264-.03.169-.082.212-.234.15-.525-.052-.243-.042-.28.087-.355.137-.08.281-.219.324-.314a.365.365 0 0 0-.175-.48.394.394 0 0 0-.181-.033c-.126 0-.207.03-.355.124l-.085.053-.053-.032c-.219-.13-.259-.145-.391-.143a.396.396 0 0 0-.193.032zm.39-2.195c-.373.036-.475.05-.654.086-.291.06-.68.195-.951.328-.94.46-1.589 1.226-1.787 2.114-.04.176-.045.234-.045.53 0 .294.005.357.043.524.264 1.16 1.332 2.017 2.714 2.173.3.033 1.596.033 1.896 0 1.11-.125 2.064-.727 2.493-1.571.114-.226.169-.372.22-.602.039-.167.044-.23.044-.523 0-.297-.005-.355-.045-.531-.288-1.29-1.539-2.304-3.072-2.497a6.873 6.873 0 0 0-.855-.031zm.645.937a3.283 3.283 0 0 1 1.44.514c.223.148.537.458.671.662.166.251.26.508.303.82.02.143.01.251-.043.482-.08.345-.332.705-.672.957a3.115 3.115 0 0 1-.689.348c-.382.122-.632.144-1.525.138-.582-.006-.686-.01-.853-.042-.57-.107-1.022-.334-1.35-.68-.264-.28-.385-.535-.45-.946-.03-.192.025-.509.137-.776.136-.326.488-.73.836-.963.403-.269.934-.46 1.422-.512.187-.02.586-.02.773-.002zm-5.503-11a1.653 1.653 0 0 0-.683.298C5.617.74 5.173 1.666 4.985 2.819c-.07.436-.119 1.04-.119 1.503 0 .544.064 1.24.155 1.721.02.107.031.202.023.208a8.12 8.12 0 0 1-.187.152 5.324 5.324 0 0 0-.949 1.02 5.49 5.49 0 0 0-.94 2.339 6.625 6.625 0 0 0-.023 1.357c.091.78.325 1.438.727 2.04l.13.195-.037.064c-.269.452-.498 1.105-.605 1.732-.084.496-.095.629-.095 1.294 0 .67.009.803.088 1.266.095.555.288 1.143.503 1.534.071.128.243.393.264.407.007.003-.014.067-.046.141a7.405 7.405 0 0 0-.548 1.873c-.062.417-.071.552-.071.991 0 .56.031.832.148 1.279L3.42 24h1.478l-.05-.091c-.297-.552-.325-1.575-.068-2.597.117-.472.25-.819.498-1.296l.148-.29v-.177c0-.165-.003-.184-.057-.293a.915.915 0 0 0-.194-.25 1.74 1.74 0 0 1-.385-.543c-.424-.92-.506-2.286-.208-3.451.124-.486.329-.918.544-1.154a.787.787 0 0 0 .223-.531c0-.195-.07-.355-.224-.522a3.136 3.136 0 0 1-.817-1.729c-.14-.96.114-2.005.69-2.834.563-.814 1.353-1.336 2.237-1.475.199-.033.57-.028.776.01.226.04.367.028.512-.041.179-.085.268-.19.374-.431.093-.215.165-.333.36-.576.234-.29.46-.489.822-.729.413-.27.884-.467 1.352-.561.17-.035.25-.04.569-.04.319 0 .398.005.569.04a4.07 4.07 0 0 1 1.914.997c.117.109.398.457.488.602.034.057.095.177.132.267.105.241.195.346.374.43.14.068.286.082.503.045.343-.058.607-.053.943.016 1.144.23 2.14 1.173 2.581 2.437.385 1.108.276 2.267-.296 3.153-.097.15-.193.27-.333.419-.301.322-.301.722-.001 1.053.493.539.801 1.866.708 3.036-.062.772-.26 1.463-.533 1.854a2.096 2.096 0 0 1-.224.258.916.916 0 0 0-.194.25c-.054.109-.057.128-.057.293v.178l.148.29c.248.476.38.823.498 1.295.253 1.008.231 2.01-.059 2.581a.845.845 0 0 0-.044.098c0 .006.329.009.732.009h.73l.02-.074.036-.134c.019-.076.057-.3.088-.516.029-.217.029-1.016 0-1.258-.11-.875-.295-1.57-.597-2.226-.032-.074-.053-.138-.046-.141.008-.005.057-.074.108-.152.376-.569.607-1.284.724-2.228.031-.26.031-1.378 0-1.628-.083-.645-.182-1.082-.348-1.525a6.083 6.083 0 0 0-.329-.7l-.038-.064.131-.194c.402-.604.636-1.262.727-2.04a6.625 6.625 0 0 0-.024-1.358 5.512 5.512 0 0 0-.939-2.339 5.325 5.325 0 0 0-.95-1.02 8.097 8.097 0 0 1-.186-.152.692.692 0 0 1 .023-.208c.208-1.087.201-2.443-.017-3.503-.19-.924-.535-1.658-.98-2.082-.354-.338-.716-.482-1.15-.455-.996.059-1.8 1.205-2.116 3.01a6.805 6.805 0 0 0-.097.726c0 .036-.007.066-.015.066a.96.96 0 0 1-.149-.078A4.857 4.857 0 0 0 12 3.03c-.832 0-1.687.243-2.456.698a.958.958 0 0 1-.148.078c-.008 0-.015-.03-.015-.066a6.71 6.71 0 0 0-.097-.725C8.997 1.392 8.337.319 7.46.048a2.096 2.096 0 0 0-.585-.041Zm.293 1.402c.248.197.523.759.682 1.388.03.113.06.244.069.292.007.047.026.152.041.233.067.365.098.76.102 1.24l.002.475-.12.175-.118.178h-.278c-.324 0-.646.041-.954.124l-.238.06c-.033.007-.038-.003-.057-.144a8.438 8.438 0 0 1 .016-2.323c.124-.788.413-1.501.696-1.711.067-.05.079-.049.157.013zm9.825-.012c.17.126.358.46.498.888.28.854.36 2.028.212 3.145-.019.14-.024.151-.057.144l-.238-.06a3.693 3.693 0 0 0-.954-.124h-.278l-.119-.178-.119-.175.002-.474c.004-.669.066-1.19.214-1.772.157-.623.434-1.185.68-1.382.078-.062.09-.063.159-.012z`},child:[]}]})(e)}function K(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z`},child:[]}]})(e)}function q(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z`},child:[]}]})(e)}function se(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z`},child:[]}]})(e)}function ce(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M6.0988 5.9175C2.7359 5.9175 0 8.6462 0 12s2.736 6.0825 6.0988 6.0825h11.8024C21.2641 18.0825 24 15.3538 24 12s-2.736-6.0825-6.0988-6.0825ZM5.9774 7.851c.493.0124 1.02.2496 1.273.6228.3673.4592.4778 1.0668.8944 1.4932.5604.6118 1.199 1.1505 1.7161 1.802.4892.5954.8386 1.2937 1.1436 1.9975.1244.2335.1257.5202.31.7197.0908.1204.5346.4483.4383.5645.0555.1204.4702.286.3263.4027-.1944.04-.4129.0476-.5616-.1074-.0549.126-.183.0596-.2819.0432a4 4 0 0 0-.025.0736c-.3288.0219-.5754-.3126-.732-.565-.3111-.168-.6642-.2702-.982-.446-.0182.2895.0452.6485-.231.8353-.014.5565.8436.0656.9222.4804-.061.0067-.1286-.0095-.1774.0373-.2239.2172-.4805-.1645-.7385-.007-.3464.174-.3808.3161-.8096.352-.0237-.0359-.0143-.0592.0059-.0811.1207-.1399.1295-.3046.3356-.3643-.2122-.0334-.3899.0833-.5686.1757-.2323.095-.2304-.2141-.5878.0164-.0396-.0322-.0208-.0615.0018-.0864.0908-.1107.2102-.127.345-.1208-.663-.3686-.9751.4507-1.2813.0432-.092.0243-.1265.1068-.1845.1652-.05-.0548-.0123-.1212-.0099-.1857-.0598-.028-.1356-.041-.1179-.1366-.1171-.0395-.1988.0295-.286.0952-.0787-.0608.0532-.1492.0776-.2125.0702-.1216.23-.025.3111-.1126.2306-.1308.552.0814.8155.0455.203.0255.4544-.1825.3526-.39-.2171-.2767-.179-.6386-.1839-.9695-.0268-.1929-.491-.4382-.6252-.6462-.1659-.1873-.295-.4047-.4243-.6182-.4666-.9008-.3198-2.0584-.9077-2.8947-.266.1466-.6125.0774-.8418-.119-.1238.1125-.1292.2598-.139.4161-.297-.2962-.2593-.8559-.022-1.1855.0969-.1302.2127-.2373.342-.3316.0292-.0213.0391-.0419.0385-.0747.1174-.5267.5764-.7391 1.0694-.7267m12.4071.46c.5575 0 1.0806.2159 1.474.6082s.61.9145.61 1.4704c0 .556-.2167 1.078-.61 1.4698v.0006l-.902.8995a2.08 2.08 0 0 1-.8597.5166l-.0164.0047-.0058.0164a2.05 2.05 0 0 1-.474.7308l-.9018.8995c-.3934.3924-.917.6083-1.4745.6083s-1.0806-.216-1.474-.6083c-.813-.8107-.813-2.1294 0-2.9402l.9019-.8995a2.056 2.056 0 0 1 .858-.5143l.017-.0053.0058-.0158a2.07 2.07 0 0 1 .4752-.7337l.9018-.8995c.3934-.3924.9171-.6083 1.4745-.6083zm0 .8965a1.18 1.18 0 0 0-.8388.3462l-.9018.8995a1.181 1.181 0 0 0-.3427.9252l.0053.0572c.0323.2652.149.5044.3374.6917.13.1296.2733.2114.4471.2686a.9.9 0 0 1 .014.1582.884.884 0 0 1-.2609.6304l-.0554.0554c-.3013-.1028-.5525-.253-.7794-.4792a2.06 2.06 0 0 1-.5761-1.0968l-.0099-.0578-.0461.0368a1.1 1.1 0 0 0-.0876.0794l-.9024.8995c-.4623.461-.4623 1.212 0 1.673.2311.2305.535.346.8394.3461.3043 0 .6077-.1156.8388-.3462l.9019-.8995c.4623-.461.4623-1.2113 0-1.673a1.17 1.17 0 0 0-.4367-.2749 1 1 0 0 1-.014-.1611c0-.2591.1023-.505.2901-.6923.3019.1028.57.2694.7962.495.3007.2999.4994.679.5756 1.0968l.0105.0578.0455-.0373a1.1 1.1 0 0 0 .0887-.0794l.902-.8996c.4622-.461.4628-1.2124 0-1.6735a1.18 1.18 0 0 0-.8395-.3462Zm-9.973 5.1567-.0006.0006c-.0793.3078-.1048.8318-.506.847-.033.1776.1228.2445.2655.1874.141-.0645.2081.0508.2557.1657.2177.0317.5394-.0725.5516-.3298-.325-.1867-.4253-.5418-.5662-.8709`},child:[]}]})(e)}function le(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M24 0H0v24h24V0zM8.45 5.16l.2.17v6.24l6.46-6.45h1.96l.2.4-5.14 5.1 5.47 7.94-.2.3h-1.94l-4.65-6.88-2.16 2.08v4.6l-.19.2H7l-.2-.2V5.33l.17-.17h1.48z`},child:[]}]})(e)}function J(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z`},child:[]}]})(e)}function ue(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378 0 1.112.178 2.181.503 3.185.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284.278.173.48.408.71.694.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542.01.026.653 1.552 1.657 2.54.616.605 1.01 1.223 1.082 1.912.055.537-.096 1.059-.38 1.572.637.121 1.294.187 1.967.187.657 0 1.298-.063 1.921-.178-.287-.517-.44-1.041-.384-1.581.07-.69.465-1.307 1.081-1.913 1.004-.987 1.647-2.513 1.657-2.539.021-.074.083-.285.233-.542.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952.23-.286.432-.52.71-.694.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174 1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013 1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164 1.607-.007 2.984-1.155 3.572-1.164.196-.003.305.12.305.454 0 .886-.424 2.328-1.563 3.202-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026-.01.008-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116 1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243 1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444-.034-.016-.104-.008-.2.022q-.094.03-.216.087-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096 3 3 0 0 0-.26.219 2 2 0 0 0-.12.121 2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203 0-.334.109-.457.305-.454m.836 10.354c.824-1.19.766-2.082-.365-3.194-1.13-1.112-1.789-2.738-1.789-2.738s-.246-.945-.806-.858-.97 1.499.202 2.362c1.173.864-.233 1.45-.685.64-.45-.812-1.683-2.896-2.322-3.295s-1.089-.175-.938.647 2.822 2.813 2.562 3.244-1.176-.506-1.176-.506-2.866-2.567-3.49-1.898.473 1.23 2.037 2.16c1.564.932 1.686 1.178 1.464 1.53s-3.675-2.511-4-1.297c-.323 1.214 3.524 1.567 3.287 2.405-.238.839-2.71-1.587-3.216-.642-.506.946 3.49 2.056 3.522 2.064 1.29.33 4.568 1.028 5.713-.624m5.349 0c-.824-1.19-.766-2.082.365-3.194 1.13-1.112 1.789-2.738 1.789-2.738s.246-.945.806-.858.97 1.499-.202 2.362c-1.173.864.233 1.45.685.64.451-.812 1.683-2.896 2.322-3.295s1.089-.175.938.647-2.822 2.813-2.562 3.244 1.176-.506 1.176-.506 2.866-2.567 3.49-1.898-.473 1.23-2.037 2.16c-1.564.932-1.686 1.178-1.464 1.53s3.675-2.511 4-1.297c.323 1.214-3.524 1.567-3.287 2.405.238.839 2.71-1.587 3.216-.642.506.946-3.49 2.056-3.522 2.064-1.29.33-4.568 1.028-5.713-.624`},child:[]}]})(e)}function de(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z`},child:[]}]})(e)}function fe(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187`},child:[]}]})(e)}function pe(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z`},child:[]}]})(e)}function me(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z`},child:[]}]})(e)}function he(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z`},child:[]}]})(e)}function ge(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z`},child:[]}]})(e)}function _e(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z`},child:[]}]})(e)}function ve(e){return m({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm-.006 3.43a3.372 3.372 0 0 1 3.37 3.369v2.199L9.628 5.689a4.261 4.261 0 0 0-.688-.32 3.351 3.351 0 0 1 3.053-1.94zm-4.498 2.6c.588 0 1.17.156 1.684.452l5.734 3.311-2.91 1.678-3.6-2.076a.46.46 0 0 0-.459 0L5.35 10.893c-.22.126-.428.27-.621.433a3.349 3.349 0 0 1-.155-3.61A3.385 3.385 0 0 1 7.496 6.03zm8.723.015a3.383 3.383 0 0 1 3.205 1.672 3.37 3.37 0 0 1-1.235 4.6l-5.736 3.308v-3.357l3.602-2.077a.459.459 0 0 0 .228-.398V6.799c0-.253-.021-.506-.064-.754zm-8.504 4.543v6.617c0 .254.021.505.066.754a3.4 3.4 0 0 1-.285.012 3.383 3.383 0 0 1-2.92-1.684 3.343 3.343 0 0 1-.338-2.555 3.342 3.342 0 0 1 1.57-2.044l1.907-1.1zm.908 0 2.912 1.68v4.152a.46.46 0 0 0 .23.396l2.594 1.498h.002c.22.127.45.235.688.32a3.35 3.35 0 0 1-3.055 1.938 3.373 3.373 0 0 1-3.371-3.367v-6.617zm10.647 2.088a3.347 3.347 0 0 1 .154 3.611 3.372 3.372 0 0 1-4.604 1.233l-1.908-1.1 5.738-3.309a4.31 4.31 0 0 0 .62-.435z`},child:[]}]})(e)}function ye(e){return m({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M5 7l5 5l-5 5`},child:[]},{tag:`path`,attr:{d:`M13 17l6 0`},child:[]}]})(e)}function be(e){return m({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M4 13h5`},child:[]},{tag:`path`,attr:{d:`M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3`},child:[]},{tag:`path`,attr:{d:`M20 8v8`},child:[]},{tag:`path`,attr:{d:`M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5`},child:[]}]})(e)}function xe(e){return m({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z`},child:[]}]})(e)}function Se(e){return m({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256 192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256zM316.13 414.22c-4 0-40.91-35.77-38-38.69.87-.87 6.26-1.48 17.55-1.83 0-26.23.59-68.59.94-86.32 0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88.23 4.54-1.58 6-5.74 5.94-10.13 0-20.27-.11-30.41-.08-4.1 0-5.87-1.53-5.74-6.11.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64-.1-3.39.95-5.17 4.21-5.2 11.07-.08 22.15-.13 33.23-.06 3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 16.82 1 17.69 1.84 2.88 2.91-33.62 38.69-37.58 38.69z`},child:[]}]})(e)}function Ce(e){return m({tag:`svg`,attr:{viewBox:`0 0 496 512`},child:[{tag:`path`,attr:{d:`M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z`},child:[]}]})(e)}function we(e){return m({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z`},child:[]}]})(e)}function Te(e){return m({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z`},child:[]}]})(e)}var Ee=[{category:`Programming Languages`,skills:[{name:`Python`,icon:H},{name:`Java`,icon:U},{name:`C++`,icon:_e},{name:`JavaScript`,icon:J},{name:`Dart`,icon:ge}]},{category:`Frontend`,skills:[{name:`React.js`,icon:B},{name:`HTML`,icon:de},{name:`CSS`,icon:we},{name:`JavaScript`,icon:J}]},{category:`Backend`,skills:[{name:`Node.js`,icon:K},{name:`Express.js`,icon:me},{name:`Django`,icon:he},{name:`REST APIs`,icon:be}]},{category:`AI / ML`,skills:[{name:`TensorFlow`,icon:R},{name:`Keras`,icon:le},{name:`Scikit-learn`,icon:z},{name:`PyTorch`,icon:V},{name:`Computer Vision`,icon:Te}]},{category:`GenAI / LLM`,skills:[{name:`LangChain`,icon:ce},{name:`RAG Pipelines`,icon:ae},{name:`ChromaDB`,icon:ve},{name:`Ollama`,icon:G},{name:`Prompt Engineering`,icon:ye},{name:`OpenAI API`,icon:W},{name:`Hugging Face`,icon:ue}]},{category:`Database & Tools`,skills:[{name:`MySQL`,icon:q},{name:`Oracle SQL`,icon:re},{name:`Firebase`,icon:pe},{name:`Git`,icon:fe}]},{category:`Cloud & Deployment`,skills:[{name:`AWS`,icon:ie}]}],De=()=>(0,v.jsxs)(`section`,{className:`skills`,id:`skills`,children:[(0,v.jsx)(`h2`,{children:`My Skills`}),(0,v.jsx)(`div`,{className:`skills-container`,children:Ee.map((e,t)=>(0,v.jsxs)(`div`,{className:`skill-card`,children:[(0,v.jsx)(`h3`,{children:e.category}),(0,v.jsx)(`div`,{className:`skill-list`,children:e.skills.map(e=>{let t=e.icon;return(0,v.jsxs)(`span`,{className:`skill-chip`,children:[(0,v.jsx)(t,{className:`skill-icon`,"aria-hidden":`true`}),e.name]},e.name)})})]},t))})]}),Oe=[{label:`GitHub`,href:`https://github.com/prajwalramagoudapatil`,icon:(0,v.jsx)(Ce,{})},{label:`LinkedIn`,href:`https://www.linkedin.com/in/prajwal-ramagouda-patil/`,icon:(0,v.jsx)(xe,{})},{label:`LeetCode`,href:`https://leetcode.com/u/Prajwal_R_Patil/`,icon:(0,v.jsx)(se,{})},{label:`HackerRank`,href:`https://www.hackerrank.com/profile/prajwalpatil6987`,icon:(0,v.jsx)(Se,{})}];function ke(){return(0,v.jsx)(`footer`,{className:`footer`,children:(0,v.jsxs)(`div`,{className:`footer-content`,children:[(0,v.jsxs)(`div`,{className:`footer-copy`,children:[(0,v.jsx)(`p`,{className:`footer-eyebrow`,children:`Designed and Developed by `}),(0,v.jsx)(`h2`,{children:`Prajwal Patil`})]}),(0,v.jsxs)(`div`,{className:`footer-details`,children:[(0,v.jsx)(`a`,{href:`mailto:prajwalpatil6987@gmail.com`,children:`prajwalpatil6987@gmail.com`}),(0,v.jsx)(`a`,{href:`tel:+918088756029`,children:`+91 8088756029`}),(0,v.jsx)(`span`,{children:`India`})]}),(0,v.jsx)(`div`,{className:`footer-socials`,"aria-label":`Social links`,children:Oe.map(e=>(0,v.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,"aria-label":e.label,className:`footer-social-link`,children:(0,v.jsx)(`span`,{className:`footer-social-icon`,children:e.icon})},e.label))})]})})}var Ae=`/assets/100_old_painting-BQ4jGA9N.jpg`,je=`/assets/101-9ua-9vvW.jpg`,Me=`/assets/102-D5wv1OK2.jpg`,Ne=`/assets/103-BJ4-IWSD.jpg`,Pe=`/assets/104-Zw6YMrmj.jpg`;function Fe({images:e=[],autoPlay:t=!0,interval:n=3500,className:i=``}){let[a,o]=(0,r.useState)(0),s=e.map(e=>typeof e==`string`?{src:e}:e);if((0,r.useEffect)(()=>{if(s.length<=1||!t)return;let e=window.setInterval(()=>{o(e=>(e+1)%s.length)},n);return()=>window.clearInterval(e)},[t,s.length,n]),(0,r.useEffect)(()=>{a>=s.length&&o(0)},[a,s.length]),!s.length)return(0,v.jsx)(`div`,{className:`img-slider img-slider-empty ${i}`.trim(),children:(0,v.jsx)(`div`,{className:`img-slider-placeholder`,children:`No images added yet`})});let c=e=>{o(e)},l=()=>{o(e=>e===0?s.length-1:e-1)},u=()=>{o(e=>(e+1)%s.length)};return(0,v.jsxs)(`div`,{className:`img-slider ${i}`.trim(),children:[(0,v.jsxs)(`div`,{className:`img-slider-stage`,children:[s.map((e,t)=>{let n=t===a;return(0,v.jsxs)(`figure`,{className:`img-slide ${n?`is-active`:``}`,"aria-hidden":!n,children:[(0,v.jsx)(`img`,{src:e.src,alt:e.alt||`Temple slide ${t+1}`}),(e.title||e.description)&&(0,v.jsxs)(`figcaption`,{className:`img-slide-caption`,children:[e.title&&(0,v.jsx)(`strong`,{children:e.title}),e.description&&(0,v.jsx)(`span`,{children:e.description})]})]},e.src||e.alt||t)}),s.length>1&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`button`,{type:`button`,className:`img-slider-control img-slider-control-prev`,onClick:l,"aria-label":`Show previous image`,children:`<`}),(0,v.jsx)(`button`,{type:`button`,className:`img-slider-control img-slider-control-next`,onClick:u,"aria-label":`Show next image`,children:`>`})]})]}),s.length>1&&(0,v.jsx)(`div`,{className:`img-slider-dots`,role:`tablist`,"aria-label":`Image slides`,children:s.map((e,t)=>(0,v.jsx)(`button`,{type:`button`,className:`img-slider-dot ${t===a?`is-active`:``}`,onClick:()=>c(t),"aria-label":`Go to slide ${t+1}`,"aria-selected":t===a},`${e.src||e.alt||`slide`}-${t}`))})]})}function Ie({entries:e=[],autoPlay:t=!0,interval:n=6500}){let[i,a]=(0,r.useState)(0);if((0,r.useEffect)(()=>{if(e.length<=1||!t)return;let r=window.setInterval(()=>{a(t=>(t+1)%e.length)},n);return()=>window.clearInterval(r)},[t,e.length,n]),(0,r.useEffect)(()=>{i>=e.length&&a(0)},[i,e.length]),!e.length)return null;let o=e[i];return(0,v.jsxs)(`div`,{className:`vachana-slider`,children:[(0,v.jsxs)(`div`,{className:`vachana-slider-head`,children:[(0,v.jsx)(`p`,{className:`temple-section-tag`,children:`Featured Vachanagalu`}),(0,v.jsxs)(`span`,{className:`vachana-slider-count`,children:[i+1,` / `,e.length]})]}),(0,v.jsxs)(`article`,{className:`vachana-slider-card`,children:[(0,v.jsxs)(`p`,{className:`vachana-slider-number`,children:[`Vachana `,o.number]}),(0,v.jsx)(`p`,{className:`vachana-slider-text`,children:o.text})]}),e.length>1&&(0,v.jsx)(`div`,{className:`vachana-slider-dots`,role:`tablist`,"aria-label":`Featured vachana slides`,children:e.map((e,t)=>(0,v.jsx)(`button`,{type:`button`,className:`vachana-slider-dot ${t===i?`is-active`:``}`,onClick:()=>a(t),"aria-label":`Show vachana ${e.number}`,"aria-selected":t===i},e.id))})]})}function Le(){return(0,v.jsx)(`footer`,{className:`temple-footer`,children:(0,v.jsxs)(`div`,{className:`temple-footer-shell`,children:[(0,v.jsxs)(`div`,{className:`temple-footer-copy`,children:[(0,v.jsx)(`p`,{className:`temple-footer-eyebrow`,children:`Shri Kadasiddheshwar Devasthana`}),(0,v.jsx)(`h3`,{children:`Temple information, seva details, and community updates in one place.`}),(0,v.jsx)(`p`,{children:`This website is under development and will continue to grow with more temple history, festival details, and gallery updates.`})]}),(0,v.jsxs)(`div`,{className:`temple-footer-meta`,children:[(0,v.jsxs)(`p`,{children:[(0,v.jsx)(`strong`,{children:`Location:`}),` Bastawad, Hukkeri, Karnataka, 591309`]}),(0,v.jsxs)(`p`,{children:[(0,v.jsx)(`strong`,{children:`Phone:`}),` `,(0,v.jsx)(`a`,{href:`tel:8088756029`,children:`8088756029`})]}),(0,v.jsxs)(`p`,{children:[(0,v.jsx)(`strong`,{children:`WhatsApp:`}),` `,(0,v.jsx)(`a`,{href:`https://wa.me/918088756029`,target:`_blank`,rel:`noopener noreferrer`,children:`Chat with temple team`})]}),(0,v.jsxs)(`p`,{children:[(0,v.jsx)(`strong`,{children:`Map:`}),` `,(0,v.jsx)(`a`,{href:`https://maps.app.goo.gl/GdaHsCB7tByWUyC37`,target:`_blank`,rel:`noopener noreferrer`,children:`Open Google Maps`})]}),(0,v.jsx)(`p`,{children:`© All copyrights are with Shri Kadasiddheshwar Devasthana.`})]})]})})}var Re=`#### 1.\r
ಅರಣ್ಯದ ಬೆಟ್ಟದಲ್ಲಿ ಮೂವರು ಕಳ್ಳರು ಮನೆಮಾಡಿ\r
ಲೆಕ್ಕವಿಲ್ಲದೆ ನರರ ಕೊಲ್ಲುತ್ತಿರ್ಪರು,\r
ಅರಣ್ಯದ ಬೆಟ್ಟವ ಸುಟ್ಟು ಮನೆಯ ಸುಡದೆ\r
ಕಳ್ಳರಕೊಂದಾತನೆ ಪ್ರಾಣಲಿಂಗೈಕ್ಯನು\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 2. \r
\r
ಅರಸು ಪ್ರಧಾನಿ ಗೌಡರಿಗೆ ಅಂಜದೆ,\r
ಬಂಟಂಗೆ ಅಳುಕದೆ ಊರನಾಳಿ\r
ದಾಳಿಹೋದರು ಚಿಲ್ಲಿಂಗಸಂಬಂಧಿಗಳು.\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 3.\r
**tags: Bireshwara, Kurub, Bireshwaraling, Wool\r
ಆಡ ಕೊಂದು ಗಡಿಗೆಯಲಿಕ್ಕಿ,\r
ಕುರಿಯ ಸುಲಿದು ಮಡಿಕೆಯಲಿಕ್ಕಿ,\r
ಹೋತ ಕೊಯ್ದು ಕುಳ್ಳಿಯಲಿಕ್ಕಿ,\r
ಬೆಂಕಿಯಿಲ್ಲದೆ ಪಾಕವ ಮಾಡಿ ಬೀರೇಶ್ವರಲಿಂಗಕ್ಕೆ ಕೊಟ್ಟು,\r
ಕೀಲಿಲ್ಲದ ಕತ್ತರಿಯಿಂದ ಉಣ್ಣಿಯ ಕತ್ತರಿಸಿ,\r
ಬಿರಿಕಿಲ್ಲದೆ ನೂಲು ಮಾಡಿ ಘಟ್ಟಿಸಿ ನೇದು,\r
ಘಳಿಗೆಯ ಮಾಡಿ ವೀರಬೀರಗೆ ಹೊಚ್ಚಿ\r
ಡೊಳ್ಳು ಹೊಡೆದು, ಸತ್ತಿಗೆಯ ನೆರಳಲ್ಲಿ ಪಿರಿಕೆಯ ಹೊಡೆದು,\r
ಕಾಯಕವ ಮಾಡಿ ಹೋಗಬೇಕಣ್ಣ ವೀರಬೀರೇಶ್ವರಲಿಂಗದಲ್ಲಿಗೆ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 4.\r
tags: Health, Advice, Eating, Plate, Banana leaf\r
ಅರಳಿ ಅತ್ತಿ ಆಲದ ಮರವೆಂಬ\r
ವೃಕ್ಷಪರ್ಣದ ಪಾತ್ರೆಯಲ್ಲಿ ಭೋಜನವ ಮಾಡದೆ\r
ಟೆಂಗು ಮಾವು ಬಾಳೆ ವೃಕ್ಷ ಪಾನಪಾತ್ರೆಯಲ್ಲಿ\r
ಭೋಜನವ ಮಾಡಿ ಬಲಭೀಮನಾಗಿ\r
ಕಾಯಕವ ಮಾಡುತ್ತಿರ್ಪರು ನೋಡೆಂದನಯ್ಯಾ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 5.\r
\r
ಆನೆ ಕುದುರೆ ಒಂಟೆ ನಾಯಿ ಕೋತಿಗಳು\r
ಮೊದಲಾದ ಪಂಚವಾಹನಾರೂಢರಾಗಿ ಚರಿಸುವವರಿಗೆ ಸುಂಕ.\r
ಮನೆಯ ಕೆಡಿಸಿ ಮನೆಯ ಕಟ್ಟುವವರಿಗೆ ಸುಂಕ.\r
ಹಾದರನಾಡುವವರಿಗೆ ಸುಂಕ.\r
ತಳಮೇಲು ನಡುಮಧ್ಯ ಚತುದರ್ಶದಲ್ಲಿರುವವರಿಗೆ ಸುಂಕ.\r
ಕಾಮಧೇನುವಿನ ಹಾಲ ಕರದು ಕುಡಿದವರಿಗೆ ಸುಂಕಿಲ್ಲ,\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 6.\r
**tags: Bireshwara, Kurub, Bireshwaraling\r
ಆಡ ಅಣ್ಣ ತಿಂದ, ಕುರಿ ತಮ್ಮ ತಿಂದ,\r
ಹೋತ ಕಿರಿತಮ್ಮ ತಿಂದ, ಹಲವು ಮರಿಗಳವರಪ್ಪ ತಿಂದ.\r
ಅಪ್ಪನ ಎಂಜಲ ಕುರುಬ ತಿಂದು, ಬೀರೇಶ್ವರಲಿಂಗಕ್ಕೆ ಕೊಟ್ಟು\r
ಕಾಯಕವ ಮಾಡುತಿರ್ದರು ನಿಮ್ಮವರು\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 7.\r
\r
ಆಯತಲಿಂಗ ಮರ್ತ್ಯವ ನುಂಗಿತ್ತು.\r
ಸ್ವಾಯತಲಿಂಗ ಸ್ವರ್ಗವ ನುಂಗಿತ್ತು.\r
ಸನ್ನಹಿತಲಿಂಗ ಪಾತಾಳವ ನುಂಗಿತ್ತು.\r
ತ್ರಿಣೇಶ್ವರಲಿಂಗ ಬ್ರಹ್ಮಾಂಡವ ನುಂಗಿತ್ತು.\r
ನುಂಗಿದವರ ನುಂಗಿ ಬಾರದೆ ಪೋದರು.\r
ಆದವರು ಪೋದರು, ಆಗದವರು ಪೋದರು,\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 8.\r
\r
ಆರು ಇಲ್ಲದ ಅರಣ್ಯದಲ್ಲೊಂದು\r
ಬೀಜವಿಲ್ಲದ ವೃಕ್ಷ ಪುಟ್ಟಿತ್ತು.\r
ಆ ವೃಕ್ಷಕ್ಕೆ ಹೂವಿಲ್ಲದೆ ಕಾಯಿಯಾಯಿತ್ತು; ಕಾಯಿಯಿಲ್ಲದೆ ಹಣ್ಣಾಗಿತ್ತು.\r
ಗಾಳಿಯಿಲ್ಲದೆ ಗಂಧವ ತೋರಿತ್ತು.\r
ಆ ವಾಸನಕ್ಕೆ ಪಕ್ಕವಿದಲ್ಲದ ಹಕ್ಕಿ ಹಾರಿಹೋಗಿ\r
ಹಣ್ಣನೆ ಕಚ್ಚಿತ್ತು.\r
ಆ ಹಣ್ಣಿನ ರಸ ಭೂಮಿಯಮೇಲೆ ಸುರಿಯಲು\r
ಭೂಮಿ ಬೆಂದು, ಸಮುದ್ರ ಬತ್ತಿ,\r
ಅರಸನ ಮಾರ್ಬಲವೆಲ್ಲ ಪ್ರಳಯವಾಗಿ,\r
ಅರಸು ಪ್ರಧಾನಿ ಸತ್ತು\r
ಅರಸಿ ಅರಮನೆಯಲ್ಲಿ ಬಯಲಾಗಿ,\r
ಎತ್ತ ಹೋದರೆಂದರಿಯಬಲ್ಲರೆ ಗುಹೇಶ್ವರಲಿಂಗವು\r
ತಾನೆಯೆಂದನಯ್ಯ ನಿಮ್ಮ ಶರಣ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 9.\r
**tags: Agriculture, Farming, Grains**\r
ಇಂತಪ್ಪ ವಿಚಾರವ ತಿಳಿಯದೆ\r
ಹತ್ತು ಹೊನ್ನಿಗೆ ಒಂದು ಹೊಲವ ಮಾಡಿ,\r
ಹತ್ತು ಖಂಡಗ ಧಾನ್ಯವ ಬೆಳೆದು,\r
ಹಗೆಯ ಮೆಟ್ಟಿ ಹಗೆಯ ಹಾಕಿ,\r
ಮುಂದೆ ಮಾರಿ ಕಡಬಡ್ಡಿಯ ಕೊಟ್ಟು\r
ತೆಗೆದುಕೊಂಬವರು ಭಕ್ತರೆಂತಪ್ಪರಯ್ಯ ?\r
ಇಂತಪ್ಪವರು ಭಕ್ತರೆಂದರೆ\r
ನಗುವರಯ್ಯ ನಿಮ್ಮ ಶರಣರು\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 10.\r
\r
ಅರಸು ಪ್ರಧಾನಿ ಬಂಟರು ವೀರರು\r
ಮೊದಲಾದ ಸಕಲ ಪ್ರಜೆಗಳ ಸಂಗವ ಮಾಡದೆ,\r
ಕುರುಡರು ಕುಂಟರು ಅಧಮರು\r
ಮೊದಲಾದ ಬಡವರ ಸಂಗವ ಮಾಡಿ,\r
ಅವರು ಕೊಟ್ಟ ಪಡಿಯ ಕೊಂಡುಂಡು\r
ಸುಖದಲ್ಲಿ ಕಾಯಕವ ಮಾಡುತ್ತಿರ್ಪರು ನೋಡೆಂದನಯ್ಯಾ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 11.\r
\r
ಆನೆ ಕುದುರೆ ವೈಲಿ ಪಾಲಿಕಿ ರೂಢರಾದವರು,\r
ಮನೆಯ ಪುರುಷನ ಉಪಚಾರಮಾಡುವ ಸತಿಯರಿಗೆ\r
ಎಣ್ಣೆಯ ತೋರಿ ಮಾರರು.\r
ಎಣ್ಣೆಯ ಕಾಣದೆ, ಎಣ್ಣೆಯ ನಾತಿಗೆ\r
ಮಣ್ಣು ಮುಕ್ಕುವರು ನೋಡೆಂದನಯ್ಯಾ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
\r
#### 12.\r
\r
ಇಂತಪ್ಪ ಲಿಂಗೈಕ್ಯದ ಭೇದವ ತಿಳಿಯದೆ\r
ತಮ್ಮಾತ್ಮನ ಭಿನ್ನಭಾವಮೂಢಮತಿಯಿಂದ\r
ಲಿಂಗೈಕ್ಯವಾಗಬೇಕೆಂದು\r
ಊರಬಿಟ್ಟು ಕಾಂತಾರಕ್ಕೆ ಪೋಗಿ\r
ಗುಡ್ಡ ಗಂಹಾರ ಕಲ್ಲುಪಡಿ ಗುಹೆದಲ್ಲಿ\r
ಅನ್ನ ಉದಕವ ತೊರೆದು, ವಸ್ತ್ರವ ಬಿಟ್ಟು,\r
ಕಂದಮೂಲ ಪರ್ಣಾಹಾರವ ಭಕ್ಷಿಸಿ,\r
ಇರುವ ಮರುಳುಗಳೆಲ್ಲಾ ಮರಣವಾದ ಮೇಲೆ,\r
ಮರಳಿ ವನಚರಪಕ್ಷಿಯಾಗಿ ಗೂಗಿಯಾಗಿ ಪುಟ್ಟುವರಲ್ಲದೆ,\r
ಇವರು ಲಿಂಗೈಕ್ಯವಾಗಲರಿಯರು ನೋಡೆಂದನಯ್ಯ ನಿಮ್ಮ ಶರಣ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 13.\r
\r
ಎನ್ನ ಕಾಳಿಯ ಧ್ವನಿಕೇಳಿ ಬ್ರಹ್ಮ ಬೆದರಿದ,\r
ವಿಷ್ಣು ಹೆದರಿದ, ರುದ್ರ ಲೆಕ್ಕಮರೆದು ಸುಮ್ಮನಿರ್ದ,\r
ದೇವತೆಗಳು ನೇಮದ ಕಟ್ಟಳೆಯನಳಿದು ಭ್ರಷ್ಟರಾದರು.\r
ಈ ಪರಿಯಲ್ಲಿ ಕಾಯಕವ ಮಾಡುತ್ತಿರ್ಪೆನು ನೋಡೆಂದನಯ್ಯಾ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 14.\r
tags: Buffalo, Milk, Naganna,\r
ಎಮ್ಮಿಯ ಕೊಂದು ಹಾಲು ಕರದು,\r
ಗಡಿಗೆಯನೊಡೆದು ಹಾಲು ತುಂಬಿ,\r
ಮಾರಬಲ್ಲಾತನೇ ಗೊಲ್ಲರ ನಾಗಣ್ಣನೆಂಬೆ.\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
\r
#### 15.\r
**tags: Farming, Agriculture\r
ಒಕ್ಕಲಿಗನ ಸಂಗದಲ್ಲಿದ್ದವರಿಗೆ ಬಡತನವಿಲ್ಲ.\r
ಕೂಲಿಮನುಜರ ಸಂಗದಲ್ಲಿದ್ದವರಿಗೆ ದ್ರವ್ಯ ತಾನಿಲ್ಲ.\r
ಒಕ್ಕಲಿಗನ ಸಂಗದಲ್ಲಿದ್ದವರಿಗೆ ಸಾವಿಲ್ಲ.\r
ಕೂಲಿಮನುಜರ ಸಂಗದಲ್ಲಿದ್ದವರಿಗೆ ಸಾವುಂಟು\r
ನೋಡೆಂದನಯ್ಯಾ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 16.\r
**tags: Bijjala, Basavanna, \r
ಕತ್ತೆಯ ಕಟ್ಟದೆ, ಮಡಿಯ ಮುಟ್ಟದೆ,\r
ಬಿಜ್ಜಳನ ಕಪ್ಪಡದ ಹಣವಕೊಂಡುಣ್ಣದೆ,\r
ನಾಯಿಯ ಕಟ್ಟಿ, ಮೈಲಿಗೆಯ ಮುಟ್ಟಿ,\r
ಬಸವನ ಕಪ್ಪಡದ ಹಣವಕೊಂಡುಂಡು,\r
ಸೂರ್ಯನ ನುಂಗಿ ಸೊಪ್ಪೆಯ ಸುಟ್ಟು,\r
ಚಂದ್ರನ ನುಂಗಿ ನಡುರಂಗವ ಸುಟ್ಟು,\r
ಅಗ್ನಿಯ ನುಂಗಿ ಕೋಣೆಯ ಸುಟ್ಟು ಭಸ್ಮವ ಧರಿಸಿ,\r
ಕಾಯಕವ ಮಾಡುತಿರ್ಪರು ನೋಡೆಂದ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನ ಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 17.\r
tags: Health, Milk, \r
ಔಷಧಿಯ ಕೊಂಡು ಬಿಸಿಹಾಲು ಕುಡಿಯದೆ\r
ಹಸಿಹಾಲವ ಕುಡಿದು ಮಹಿಷಾಸುರನ ಮಗನಾಗಿರ್ಪರು,\r
ನಾನು ಔಷಧಿಯ ಕೊಂಡು ಹಸಿಹಾಲು ಕುಡಿಯದೆ\r
ಬಿಸಿಹಾಲು ಕುಡಿದು ಹಿಂಗಿ ನುಂಗಿ\r
ಉಸುರದೆ ಕಾಯಕವ ಮಾಡುತ್ತಿರ್ಪೆನು\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 18.\r
\r
ಕಲ್ಲು ದೇವರೆಂದು ಪೂಜಿಸುವರೆಲ್ಲ\r
ಕಲ್ಲಾಗಿ ಪುಟ್ಟುವರು.\r
ಕಟ್ಟಿಗೆ ದೇವರೆಂದು ಪೂಜಿಸುವರೆಲ್ಲ\r
ಕಟ್ಟಿಗೆಯಾಗಿ ಪುಟ್ಟುವರು.\r
ಮಣ್ಣುದೇವರೆಂದು ಪೂಜಿಸುವರೆಲ್ಲ\r
ಮಣ್ಣಾಗಿ ಪುಟ್ಟುವರು.\r
ನೀರು ದೇವರೆಂದು ಪೂಜಿಸುವರೆಲ್ಲ\r
ನೀರಾಗಿ ಪುಟ್ಟುವರು.\r
ಅಗ್ನಿದೇವರೆಂದು ಪೂಜಿಸುವರೆಲ್ಲರು\r
ಅಗ್ನಿಯಾಗಿ ಪುಟ್ಟುವರು.\r
ಇದಕ್ಕೆ ದೃಷ್ಟಾಂತ: 'ಯದ್ದೃಷ್ಟಂ ತನ್ನಷ್ಟಂ ಯಥಾಭಾವಸ್ತಥಾ ಸಿದ್ಧಿಃ'\r
ಎಂದುದಾಗಿ,\r
ಇಂತಿವರೆಲ್ಲರು ದೇವರೆಂದು ಪೂಜಿಸುವರು\r
ಹುಟ್ಟುಕುರುಡನು ಬೆಣ್ಣೆಯೆಂದು\r
ನರಕವ ಭುಂಜಿಸಿದಂತಾಯಿತ್ತಯ್ಯಾ.\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 19.\r
\r
ಇಂತಪ್ಪ ಲಿಂಗಾಂಗದ ಸಮರಸವ ತಿಳಿಯದೆ,\r
ಆವ ನೇಮ ವ್ರತವ ಪಿಡಿದು ಆಚರಿಸಿದಡೆ\r
ಮುಂದೆ ಭವಬಂಧನವೇ ಪ್ರಾಪ್ತಿಯಾಗುವದು.\r
ಮತ್ತಂ, ವಾರದಫಲ ಬಯಸುವವರಿಗೆ ಗುರುವಿಲ್ಲ.\r
ಮಾಸದ ಫಲ ಬಯಸುವವರಿಗೆ ಲಿಂಗವಿಲ್ಲ.\r
ಚತುರ್ದಶಿ ಫಲ ಬಯಸುವವರಿಗೆ ಜಂಗಮವಿಲ್ಲ.\r
ಆ ಮಾಸದ ಫಲ ಬಯಸುವವರಿಗೆ ಪಾದೋದಕವಿಲ್ಲ.\r
ಗ್ರಹಣ ಫಲ ಬಯಸುವವರಿಗೆ ಪ್ರಸಾದವಿಲ್ಲ.\r
ಇಂತಪ್ಪ ಫಲವ ಬಯಸಿ ಮಾಡಬೇಕೆಂಬವರಿಗೆ\r
ವಿಭೂತಿ, ರುದ್ರಾಕ್ಷಿ, ಮಂತ್ರ ಮೊದಲಾದ ಅಷ್ಟಾವರಣವು ಇಲ್ಲ.\r
ಇತಂಪ್ಪ ವ್ರತಭ್ರಷ್ಟ ಹೊಲೆಯರಿಗೆ ವೀರಮಹೇಶ್ವರರೆಂದಡೆ\r
ನಿರ್ಮಾಯಪ್ರಭುವಿನ ಶರಣರು ನರಕದಲ್ಲಿಕ್ಕದೆ ಬಿಡುವರೆ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ ?\r
\r
\r
#### 20.\r
\r
ಇಂತಪ್ಪ ವಿಚಾರವನು\r
ಸ್ವಾನುಭಾವಗುರುಮುಖದಿಂ ತಿಳಿದು,\r
ವಿಚಾರಿಸಿಕೊಳ್ಳಲರಿಯದೆ ತಮ್ಮ ತನುಮನದ ಉಲ್ಲಾಸದಿಂದ,\r
ಕಾಶಿ ಶ್ರೀಶೈಲ ರಾಮೇಶ್ವರ ಉಳವಿ ಗೋಕರ್ಣ\r
ಕಾರ್ತಿಕ ಕಂಚಿ ಹಂಪಿ ಮೊದಲಾದ\r
ಸಕಲ ಕ್ಷೇತ್ರಯಾತ್ರೆಗಳಲ್ಲಿ ತಿರುಗಿ ತಿರುಗಿ\r
ತನುಮನ ಬಳಲಿ ಶ್ರಮಬಟ್ಟರಲ್ಲದೆ\r
ಶಿವನ ಕಾಣಲರಿಯರು ನೋಡಾ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 21.  IMP\r
\r
ಇಂತೀ ನಿರ್ಣಯದಲ್ಲಿ ವಿಭೂತಿ ಧರಿಸಲರಿಯದೆ\r
ಕುಳ್ಳು ಕಟ್ಟಿಗೆಯ ಸುಟ್ಟು ಬೂದಿಯ ತಂದು,\r
ನೀರಲ್ಲಿ ಕಲಿಸಿದ ಉಂಡಿ ತಂದು,\r
ಜಂಗಮದ ಪಾದೋದಕದಿಂ ಶುದ್ಧಮಾಡಿ ಧರಿಸಿದಡೆ\r
ಭವ ಹಿಂಗುವುದೇ? ಭವ ಹಿಂಗದು.\r
ವಿಶ್ವಾಸದಿಂದ ಚಿದ್ಭಸ್ಮವೆಂದು ಧರಿಸಿದಡೆ\r
ಪುಣ್ಯದ ಫಲ ಪ್ರಾಪ್ತಿಯಾಗುವುದು ಕಾಣಾ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 22. IMP\r
\r
ಕಲ್ಯಾಣಪುರದೊಳಗೆ ಬಿಜ್ಜಳಾಂಕನೆಂಬ ರಾಜನು\r
ಅಷ್ಟವಿಧಪ್ರಧಾನರ ಸಮೂಹದಲ್ಲಿ\r
ಶಿವಭಕ್ತಿ ಇಲ್ಲದೆ ರಾಜ್ಯವನಾಳುತಿರ್ಪನು.\r
ಇಂಗಳೇಶ್ವರನೆಂಬ ಪುರದ ವಿಪ್ರರ ಸಂದಣಿಯಲ್ಲಿ\r
ಬಸವೇಶ್ವರನುದ್ಭವಿಸಿ ಕಲ್ಯಾಣಕ್ಕೆ ಬಂದು\r
ಬಿಜ್ಜಳನ ಅಷ್ಟವಿಧಪ್ರಧಾನರ ನಷ್ಟವಮಾಡಿ,\r
ನವಮಪ್ರಧಾನನಾಗಿ, ಬಿಜ್ಜಳನ ರಾಜ್ಯವನ್ನಾಳುತ್ತ\r
ನಿತ್ಯದಲ್ಲಿ ಹಲವು ಜಂಗಮಕ್ಕೆ ಭೋಜನವ ಮಾಡುತ್ತ\r
ಬಸವಣ್ಣ ಇರ್ಪನು ಕಲ್ಯಾಣಪುರದಲ್ಲಿ ನೋಡೆಂದ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 23. IMP\r
\r
ಕಲ್ಯಾಣನಗರದ ಬಸವೇಶ್ವರನ ಪ್ರಮಥಗಣಂಗಳ\r
ಮಿಕ್ಕಪ್ರಸಾದಕೊಂಡದಲ್ಲಿ ಮರುಳಶಂಕರದೇವರು\r
ಹನ್ನೆರಡುವರ್ಷ ಅಡಗಿರ್ದನೆಂದು\r
ವೇದಾಂತಿ ಸಿದ್ಧಾಂತಿ ಯೋಗಮಾರ್ಗಿಗಳು ಮೊದಲಾದ\r
ಭಿನ್ನಭಾವದ ಶಾಸ್ತ್ರಸಂಧಿಗಳು ಪೇಳುತಿರ್ಪರು.\r
ಇದರ ಭೇದವ ತಿಳಿಯಬಲ್ಲ ಜ್ಞಾನಿಗಳು ಎನಗೆ ಪೇಳಿರಿ,\r
ಇಲ್ಲದ ಅಜ್ಞಾನಿಗಳು ನಮ್ಮ ನಿರ್ಮಾಯಪ್ರಭುವಿನ ಶರಣರ ಕೇಳಿರಿ.\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 24.\r
\r
ಕರ್ಲಭೂಮಿ ಸವುಳ ಭೂಮಿ ಕಲ್ಲು ಭೂಮಿ\r
ಈ ಮೂರು ಭೂಮಿಯ ಹುಲ್ಲಿನ ಹೊಡೆಯ ರಸವ ಸೇವಿಸದೆ,\r
ಕೆಂಪು ಬಿಳುಪು ಮಸಬು ಎಂಬ ಭೂಮಿಯ\r
ಹುಲ್ಲಹೊಡೆಯ ರಸವ ಸೇವಿಸಿ,\r
ಗುರುಕೊಟ್ಟ ಕಾಯಕದಲ್ಲಿರ್ಪರು ನೋಡೆಂದನಯ್ಯಾ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 25.\r
\r
ಕರ್ಲಭೂಮಿ, ನೀರಭೂಮಿ, ಹಾಳಭೂಮಿ\r
ಈ ಮೂರು ಭೂಮಿಯ ಸವಳು ತಾರದೆ,\r
ಕೆಂಪು ಮಸಬು ಬಿಳುಪೆಂಬ ತ್ರಿಭೂಮಿಯ ಸವಳ ತಂದು,\r
ನೀರಿಲ್ಲದ ಮಾಳ ಉಪ್ಪ ಸೇವಿಸಿ\r
ಕಾಯಕವ ಮಾಡುತ್ತಿರ್ಪರು ನೋಡೆಂದನಯ್ಯಾ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 26.\r
\r
ಕುರುಡ, ಕುಂಟ, ಅಧಮರು ಹಾಕಿದ\r
ಗಾಳಕ್ಕೆ ಬಿದ್ದ ಮತ್ಸ್ಯವು ಸತ್ತಿರ್ಪವು.\r
ಅರಸು, ಪ್ರಧಾನಿ, ಮಹಾವೀರರು ಹಾಕಿದ\r
ಗಾಳಕ್ಕೆ ಬಿದ್ದ ಮತ್ಸ್ಯವು ಸಾಯದೆ ಇರ್ಪವು\r
ನೋಡೆಂದನಯ್ಯಾ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 27.  IMP\r
\r
ಗುರುವೆನಲು ಕೊರವದು ಭವಗಜವು.\r
ಗುರುವೆನಲು ಹರಿವದು ಬಹುಜನ್ಮದ ದೋಷವು.\r
ಗುರುವೆನಲು ಮುನ್ನೂರರುವತ್ತು ರೋಗಾದಿ ಬಾಧೆಗಳು\r
ಸಂಹಾರವಾಗುವವು.\r
ಗುರುವೆನಲು ಕಾಲಕಾಮಮಾಯಾದಿಗಳ ಭೀತಿ ಕಂಟಕಗಳು\r
ಸಂಹಾರವಾಗುವವು.\r
ಗುರುವೆನಲು ಸಕಲೈಶ್ವರ್ಯ ದೊರಕೊಂಬುವದು.\r
ಇಂತಪ್ಪ ಗುರುವಿನ ಶ್ರೀಚರಣಕ್ಕೆರಗಿ\r
ನಮೋ ನಮೋ ಎಂದು ಬದುಕಿದೆನಯ್ಯಾ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 28.\r
\r
ಗೊಲ್ಲನ ಕೊಳಲಧ್ವನಿ ಕೇಳಿ\r
ಹಂದಿ ನಾಯಿ ಎಮ್ಮೆ ಕೋಣ ಸರಳ ಕೊಂಬಿನಪಶುಗಳು\r
ಸಾಯದೇ ಇರ್ಪವು.\r
ಕೊಂಬಿಲ್ಲದ ಪಶುವು ಬಸವಣ್ಣ ಚೆನ್ನಬಸವಣ್ಣ ಪ್ರಭುದೇವರು\r
ಮೊದಲಾದ ಏಳುನೂರೆಪ್ಪತ್ತು ಪ್ರಮಥಗಣಂಗಳು ಸತ್ತಿರ್ಪರು.\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 29.\r
\r
ತನ್ನ ಗ್ರಾಮವಬಿಟ್ಟು ಅನ್ಯಗ್ರಾಮದಲ್ಲಿರಲು,\r
ಒಡೆಯರು ನವಮುಗ್ಧರ ಕಳುಹಲು\r
ನವಮುಗ್ಧರ ನವಹಳ್ಳಿಗೆ ಕಳುಹಿ,\r
ಹಣವ ಧಣಿಯಂಗೆ ಮುಟ್ಟಿಸಿ\r
ಕಾಯಕವ ಮಾಡುತ್ತಿರ್ಪರು ನೋಡೆಂದನಯ್ಯಾ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 30. IMP\r
\r
ಇಂದಿನ ಚಿಂತೆಯುಳ್ಳವರೆಲ್ಲ ಹಂದಿಗಳು.\r
ನಾಳಿನ ಚಿಂತೆಯುಳ್ಳವರೆಲ್ಲ ನಾಯಿಗಳು.\r
ತನ್ನ ಚಿಂತೆಯುಳ್ಳವರೆಲ್ಲ ಜೋಗಿಗಳು.\r
ನಿನ್ನ ಚಿಂತೆಯುಳ್ಳವರೆಲ್ಲ ಯೋಗಿಗಳು ನೋಡಾ.\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
\r
#### 31.  IMP\r
\r
ಇಂತೀ ವಿಚಾರವನು ತಿಳಿಯದೆ\r
ಪ್ರಾಣಲಿಂಗಿ ಪ್ರಾಣಲಿಂಗಿ ಎಂದು ಹೆಸರಿಟ್ಟು\r
ಇಷ್ಟಲಿಂಗದಲ್ಲಿ ಅವಿಶ್ವಾಸವ ಮಾಡಿ,\r
ಕ್ರಿಯಾಚಾರದಲ್ಲಿ ಅನಾಚಾರಿಯಾಗಿ,\r
ಜೀವಾತ್ಮನೇ ಪರಮಾತ್ಮನೆಂದು ಅಹಂಕರಿಸಿ,\r
ದೇಹದ ಸಕಲಕರಣವಿಷಯಂಗಳಲ್ಲಿ ಮನಮಗ್ನವಾಗಿ\r
ತನ್ನ ನಿಜದ ನಿಲವ ಮರೆದು,\r
ಪರರಿಗೆ ಶಿವಶರಣಂಗಳ ವಚನವ ನೋಡಿ\r
ಶಿವಾನುಭಾವವ ಪೇಳುವ ಕುನ್ನಿ ಮನುಜರ\r
ಕೂಗ್ಯಾಡಿ ಕೂಗ್ಯಾಡಿ ನರಕದಲ್ಲಿಕ್ಕೆಂದ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
\r
#### 32.\r
\r
ದೇವರು ದೇವರು ಎಂಬಿರಿ ದೇವರಿಗೆ ಪ್ರಳಯವುಂಟೆ ?\r
ದೇವರು ಪ್ರಳಯವಾದಡೆ ಜಗವು ಉಳಿಯಬಲ್ಲುದೆ ?\r
ಎಲಾ ಮರುಳಗಳಿರಾ, ಕಲ್ಲು ದೇವರೆಂಬಿರಿ,\r
ಕಲ್ಲು ದೇವರಾದಡೆ ವಜ್ರಾಯುಧದಿಂದ ಪ್ರಳಯವಾಗದೆ ?\r
ಕಟ್ಟಿಗೆ ದೇವರೆಂಬಿರಿ,\r
ಕಟ್ಟಿಗೆ ದೇವರೆಂದರೆ ಅಗ್ನಿಯಿಂದ ಪ್ರಳಯವಾಗದೆ ?\r
ಮಣ್ಣು ದೇವರೆಂಬಿರಿ,\r
ಮಣ್ಣು ದೇವರಾದಡೆ ಜಲದಿಂದ ಪ್ರಳಯವಾಗದೆ ?\r
ನೀರು ದೇವರೆಂಬಿರಿ,\r
ನೀರು ದೇವರಾದಡೆ ಅಗ್ನಿಯಿಂದ ಅರತುಹೋಗದೆ ?\r
ಅಗ್ನಿ ದೇವರೆಂಬಿರಿ,\r
ಅಗ್ನಿ ದೇವರಾದಡೆ ಜಲದಿಂದ ಪ್ರಳಯವಾಗದೆ ?\r
ಇಂತೀ ದೇವರೆಂದು ನಂಬಿ ಪೂಜಿಸಿದ ಜೀವಾತ್ಮರು\r
ಇರುವೆ ಮೊದಲು ಆನೆ ಕಡೆ\r
ಎಂಬತ್ನಾಲ್ಕುಲಕ್ಷ ಯೋನಿದ್ವಾರದಲ್ಲಿ\r
ರಾಟಾಳ ತಿರುಗಿದಂತೆ\r
ಜನನಮರಣಗಳಿಂದ\r
ಎಡೆಯಾಡುತಿಪ್ಪರು ನೋಡಾ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 33. IMP\r
 **tags: Shivaratri, ** \r
ದ್ವಾದಶಮಾಸ, ಚತುದರ್ಶಿ, ದ್ವಾದಶಿ, ಅಮವಾಸಿಯೊಳಗೆ\r
ಮಾಘಮಾಸದ ಚತುರ್ದಶಿ,\r
ಶಿವರಾತ್ರಿ ಅಮವಾಸ್ಯೆ ಫಲಪುಣ್ಯ ಮಹಾದೊಡ್ಡದು ಎಂದು\r
ಸ್ಕಂದಪುರಾಣ ಬ್ರಹ್ಮೋತ್ತರಕಾಂಡ, ಶ್ರುತಿವಾಕ್ಯಗಳಿಂದ ಕೇಳಿ,\r
ಅಂತಪ್ಪ ಮಾಘಮಾಸದ ಚತುರ್ದಶಿದಿವಸ\r
ಒಂದೊತ್ತು ಉಪವಾಸವ ಮಾಡಿ,\r
ಪತ್ರಿ, ಪುಷ್ಪ. ಕಡ್ಡಿ, ಬತ್ತಿಯ ತಂದು\r
ಸಾಯಂಕಾಲಕ್ಕೆ ಸ್ನಾನವ ಮಾಡಿ,\r
ಜಂಗಮವ ಕರತಂದು ಅರ್ಚಿಸಿ,\r
ಲಿಂಗವ ಪತ್ರಿ, ಪುಷ್ಪ, ಅಭೀಷೇಕ, ಕಡ್ಡಿ, ಬತ್ತಿ,\r
ಏಕಾರತಿ ಪಂಚಾರತಿಗಳಿಂದ ಪೂಜಿಸಿ,\r
ಪಾದೋದಕವ ಸೇವಿಸಿ,\r
ಆ ಮೇಲೆ ತಮ್ಮ ಗೃಹದಲ್ಲಿ ಮಾಡಿದ ಉತ್ತಮವಾದ ಫಲಹಾರ ಜೀನಸುಗಳು\r
ಅಂಜೂರ, ದ್ರಾಕ್ಷಿ, ಹಲಸು, ತೆಂಗು, ಕಾರಿಕ, ಬಾಳೇಹಣ್ಣು\r
ಮೊದಲಾದ ಫಲಹಾರ\r
ಮತ್ತಂ, ಬೆಂಡು, ಬೆತ್ತಾಸ, ಖರ್ಜೂರ, ದೂದುಪೇಡೆ,\r
ಬುಂದೆ, ಲಡ್ಡು ಮೊದಲಾದ ಫಲಹಾರ.\r
ಇಂತಪ್ಪ ಫಲಹಾರ ಜೀನಸು ಎಡೆಮಾಡಿ ಪ್ರಸಾದವೆಂದು ಕೈಕೊಂಡು,\r
ಲಿಂಗಕ್ಕೆ ತೋರಿ ತೋರಿ ತಮ್ಮ ಮನಬಂದ ಪದಾರ್ಥವ\r
ಅಂಗಕ್ಕೆ ಗಡಣಿಸಿಕೊಂಡು,\r
ನಾವು ಇಂದಿನ ದಿವಸ ಉದಯದಿಂ ಸಾಯಂಕಾಲದ ಪರಿಯಂತರವಾಗಿ,\r
ಒಂದೊತ್ತು ಉಪವಾಸ ಮಾಡಿ ಶಿವಯೋಗ ಮಾಡಿದೆವೆಂದು\r
ಮೂಢ ಮಂದಮತಿ ಅಧಮರ ಮುಂದೆ ತಮ್ಮ ಬಿಂಕವ ಪೇಳಿ,\r
ರಾತ್ರಿಯಲ್ಲಿ ಜಾಗರಣಿ ಮಾಡಬೇಕೆಂದು\r
ತಮ್ಮ ಅಂಗದ ಮೇಲಣ ಲಿಂಗವ ಬಿಗಿಬಿಗಿದು ಕಟ್ಟಿಕೊಂಡು\r
ಸ್ಥಾವರಲಿಂಗದ ಗುಡಿಗೆ ಹೋಗಿ ಆ ಲಿಂಗದ ಪೂಜೆಯಿಂದ ಬೆಳಗ ಕಳೆದು\r
ಉದಯಕ್ಕೆ ಶಿವರಾತ್ರಿ ಅಮವಾಸೆ ದೊಡ್ಡದೆಂದು\r
ಹಳ್ಳ ಹೊಳೆಗೆ ಹೋಗಿ, ಛಳಿಯಲ್ಲಿ ತಣ್ಣೀರೊಳಗೆ ಮುಳುಗಿ,\r
ಸ್ನಾನವ ಮಾಡಿ ಬಂದು ಜಂಗಮವ ಕರಿಸಿ,\r
ಮೃಷ್ಟಾನ್ನವ ಹೊಟ್ಟೆತುಂಬ ಘಟ್ಟಿಸಿ,\r
ಶಿವರಾತ್ರಿ ಶಿವಯೋಗದ ಪಾರಣೆಯಾಯಿತೆಂದು\r
ಮಹಾ ಉಲ್ಲಾಸದಿಂ ತಮ್ಮೊಳಗೆ ತಾವೇ ಇಪ್ಪರಯ್ಯಾ.\r
ಇಂತಪ್ಪ ಅವಿಚಾರಿಗಳಾದ ಅಜ್ಞಾನ ಜೀವಾತ್ಮರಿಗೆ\r
ವೀರಮಾಹೇಶ್ವರರೆಂದಡೆ ಪರಶಿವಯೋಗಿಗಳಾದ ಶಿವಶರಣರು ನಗುವರಯ್ಯ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 34.\r
 **tags: Shravan,**\r
ದ್ವಾದಶಮಾಸದೊಳಗೆ ಶ್ರಾವಣಮಾಸದ ಫಲಪುಣ್ಯ ಮಹಾದೊಡ್ಡದೆಂದು,\r
ವೇದ, ಪುರಾಣ, ಶ್ರುತಿವಾಕ್ಯಗಳಿಂದ ಕೇಳಿ,\r
ಅಂತಪ್ಪ ಶ್ರಾವಣಮಾಸ ತಿಂಗಳಪರಿಯಂತರವಾಗಿ,\r
ನಿತ್ಯದಲ್ಲಿ ವ್ರತವನಾಚರಿಸುವರ ಆಚರಣೆಯ ಪೇಳ್ವೆ\r
ಅದೆಂತೆಂದಡೆ : ಶ್ರಾವಣಮಾಸ ಪಾಡ್ಯದಿವಸ ಮೊದಲು ಮಾಡಿ\r
ನಿತ್ಯದಲಿ ಒಬ್ಬ ಜಂಗಮದ ಪಾದವ ಪಿಡಿದು,\r
ಪತ್ರಿ ಪುಷ್ಪ ನಿತ್ಯದಲ್ಲಿ ತಂದು,\r
ಪಾದಪೂಜೆಯ ಮಾಡಿ, ಪಾದೋದಕ ಪ್ರಸಾದವ ಕೊಂಡು\r
ಆ ಜಂಗಮಸಹಿತನಾಗಿ ಮೃಷ್ಟಾನ್ನಭೋಜನವ\r
ಹಾ ಹಾ ಎಂದು ಒಟ್ಟಿಸಿಕೊಂಡು ಒಡಲತುಂಬಿಸಿಕೊಂಡು,\r
ಮತ್ತೆ ಮರಳಿ ಸಾಯಂಕಾಲಕ್ಕೆ ಫಲಹಾರವೆಂದು ಮಾಡಿಸಿ ತಿಂದು,\r
ನಾವು ಶ್ರಾವಣಮಾಸ ಒಂದೊತ್ತು ಉಪವಾಸ,\r
ನಿತ್ಯದಲ್ಲಿ ಜಂಗಮದ ತೀರ್ಥಪ್ರಸಾದ\r
ತಪ್ಪದೆ ಕೊಂಬ ವ್ರತವುಳ್ಳವರೆಂದು\r
ತಮ್ಮ ಬಿಂಕದ ಮಾತ ಮೂಢಾತ್ಮರ ಮುಂದೆ ಬೀರುವರಯ್ಯ.\r
ಇಂತಪ್ಪ ತಾಮಸಗುಣವುಳ್ಳ ಅಹಂಕಾರಿಗೆ\r
ವೀರಮಾಹೇಶ್ವರರೆಂದಡೆ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭು ಮೆಚ್ಚುವನೆ ?\r
ಮೆಚ್ಚನಯ್ಯ ನರಕದಲ್ಲಿಕ್ಕೆಂದ ನೋಡಾ.\r
\r
#### 35.\r
\r
ನವಖಂಡಪೃಥ್ವಿ ಎಂಬುದು ಪಂಚಶತಕೋಟಿ ಯೋಜನ.\r
ಪೂರ್ವ, ಪಶ್ಚಿಮ, ಉತ್ತರ, ದಕ್ಷಿಣಕ್ಕೆ\r
ಮಂಡಲಾಕಾರವಾದ ಭೂಮಂಡಲ ಒಂದೇ\r
ಅಂತಪ್ಪ ಭೂಮಂಡಲದ ಮಧ್ಯದಲ್ಲಿ\r
ಸಪ್ತಸಮುದ್ರ, ಸಪ್ತದ್ವೀಪಾಂತರ\r
ಹಿಮಾಚಲ ಮಹಾಮೇರುವರ್ಪತ ಮೊದಲಾದ\r
ಅಷ್ಟ ಪರ್ವತಂಗಳು.\r
ಕಾಶಿ, ರಾಮೇಶ್ವರ ಮೊದಲಾದ\r
ಮುನ್ನೂರಾ ಅರುವತ್ತು ಕ್ಷೇತ್ರಂಗಳು.\r
ಕೃಷ್ಣಾ, ಭಾಗೀರಥಿ, ಯಮುನಾ, ಸರಸ್ವತಿ, ಗಂಗಾ\r
ಮೊದಲಾದ ಅರುವತ್ತಾರುಕೋಟಿ ತೀರ್ಥಂಗಳು\r
ಇಂತೀ ತೀರ್ಥಕ್ಷೇತ್ರಂಗಳ ತೆತ್ತೀಸಕೋಟಿ ದೇವರ್ಕಳು ಸ್ಥಾಪಿಸಿದರು.\r
ಮತ್ತಂ, ಮಂದಮತಿಗಳಾದ ಜೀವಾತ್ಮರು ಕೂಡಿ,\r
ಇದು ದೇವಭೂಮಿ, ಇದು ಹೊಲೆಭೂಮಿ,\r
ಇದು ಮಠಮಾನ್ಯದ ಭೂಮಿ, ಇದು ಗ್ರಾಮ ಗೃಹದ ಭೂಮಿ,\r
ಇದು ಲಿಂಗಸ್ಥಾಪನೆಯಾದ ರುದ್ರಭೂಮಿ, ಇದು ಶ್ಮಶಾನ ಭೂಮಿ\r
ಎಂದು ಹೆಸರಿಟ್ಟು ಸ್ಥಾಪನೆಯ ಮಾಡುವಿರಿ.\r
ಎಲಾ ದಡ್ಡ ಪ್ರಾಣಿಗಳಿರಾ,\r
ಇದಕೊಂದು ದೃಷ್ಟವ ಪೇಳ್ವೆ ಕೇಳಿರಯ್ಯಾ.\r
ಅದೆಂತೆಂದೊಡೆ : ಒಂದು ನದಿಯಲ್ಲಿ ಕೋಲು ಹಾಕಿ,\r
ಗೆರೆಯ ಬರೆದು ಎರಡು ಮಾಡಿ,\r
ಇದು ಸೀ ಉದಕ, ಇದು ಲವಣೋದಕವೆಂದಡೆ\r
ಆಗಬಲ್ಲುದೇನಯ್ಯಾ ? ಆಗಲರಿಯದು.\r
ಮತ್ತಂ,\r
ಒಂದೇ ಬೇವಿನಮರದೊಳಗೆ\r
ಒಂದು ಶಾಖೆಗೆ ಮಾವಿನಹಣ್ಣು, ಒಂದು ಶಾಖೆಗೆ ಬೇವಿನಹಣ್ಣು,\r
ಒಂದು ಶಾಖೆಗೆ ಬಾಳೆಯಹಣ್ಣು,\r
ಒಂದು ಶಾಖೆಗೆ ಹಸಲು, ನೀರಲಹಣ್ಣು,\r
ಆಗೆಂದಡೆ ಆಗಬಲ್ಲವೇನಯ್ಯಾ ?\r
ಆಗಲರಿಯವು ಎಂಬ ಹಾಗೆ.\r
ಇಂತೀ ದೃಷ್ಟದಂತೆ ಒಂದು ನವಖಂಡಮಂಡಲಭೂಮಿಯೊಳಗೆ,\r
ಇದು ಮಂಗಲಭೂಮಿ, ಇದು ಅಮಂಗಳಭೂಮಿ,\r
ಇದು ಶುದ್ಧಭೂಮಿ, ಇದು ಅಶುದ್ಧಭೂಮಿ,\r
ಎಂದಡೆ ಆಗಬಲ್ಲವೇನಯ್ಯಾ ? ಆಗಲರಿಯವು.\r
ಅದೇನು ಕಾರಣವೆಂದಡೆ : ಆದಿ ಅನಾದಿಯಿಂದತ್ತತ್ತಲಾದ ಪರಶಿವನ\r
ಮಹಾ ಪ್ರಸಾದದಿಂದುದ್ಭವಿಸಿದ ಬ್ರಹ್ಮಾಂಡವು,\r
ಒಮ್ಮೆ ಶುದ್ಧ ಒಮ್ಮೆ ಅಶುದ್ಧವಾಗಬಲ್ಲುದೆ ಎಲೆ ಮರುಳ ಮನುಜರಿರಾ.\r
ನಿಮ್ಮ ಮನದ ಸಂಕಲ್ಪ ವಿಕಲ್ಪದಿಂ\r
ಶುದ್ಧ ಅಶುದ್ಧವಾಗಿ ತೋರುವುದಲ್ಲದೆ.\r
ನಿಮ್ಮ ಮನದ ಸಂಕಲ್ಪವನಳಿದಡೆ\r
ಸಕಲಬ್ರಹ್ಮಾಂಡಗಳೆಲ್ಲ ನಿರ್ಮಳವಾಗಿ ತೋರುವವು.\r
ನಿಮ್ಮ ಮನದ ಸಂಕಲ್ಪವನಳಿಯದಿರ್ದಡೆ\r
ಸಕಲಬ್ರಹ್ಮಾಂಡಗಳೆಲ್ಲ ಅಮಂಗಳವಾಗಿ ತೋರುವವು ನೋಡೆಂದ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 36.\r
\r
ನೀರಲ ಫಲ, ಉತ್ತತ್ತಿ, ಮಾವಿನ ಹಣ್ಣಿನಂತೆ\r
ಇರುವರು ಮರ್ತ್ಯರು.\r
ಹಲಸು, ತೆಂಗು, ದಾಳಿಂಬರದಂತೆ ಇರುವರು\r
ಸ್ವರ್ಗದವರು.\r
ಹಾಲು ಸಕ್ಕರೆ ಬೆಲ್ಲ ತುಪ್ಪದಂತೆ ಇರುವರು ನಿಮ್ಮವರು.\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 37.\r
**tags: guru, parampare, sisya**\r
ನಿರವಯನೆಂಬ ಗಣೇಶ್ವರನ ಶಿಷ್ಯ\r
ನಿರಾಮಯನೆಂಬ ಗಣೇಶ್ವರ.\r
ನಿರಾಮಯನೆಂಬ ಗಣೇಶ್ವರನ ಶಿಷ್ಯ\r
ನಿರಾಕುಳನೆಂಬ ಗಣೇಶ್ವರ.\r
ನಿರಾಕುಳನೆಂಬ ಗಣೇಶ್ವರನ ಶಿಷ್ಯ\r
ನಿರ್ಭೆದ್ಯನೆಂಬ ಗಣೇಶ್ವರ.\r
ನಿರ್ಭೆದ್ಯನೆಂಬ ಗಣೇಶ್ವರನ ಶಿಷ್ಯ\r
ನಿರ್ಮಳ ನಿಜೈಕ್ಯನೆಂಬ ಗಣೇಶ್ವರ.\r
ನಿರ್ಮಳ ನಿಜೈಕ್ಯನೆಂಬ ಗಣೇಶ್ವರನ ಶಿಷ್ಯ\r
ನಿರ್ಭಾವ ನಿಃಪುರುಷ ನಿರಂಜನನೆಂಬ ಗಣೇಶ್ವರ.\r
ನಿರ್ಭಾವ ನಿಃಪುರುಷ ನಿರಂಜನನೆಂಬ ಗಣೇಶ್ವರನ ಶಿಷ್ಯ\r
ನಿರಾಕಾರ ನಿರಾವರಣನೆಂಬ ಗಣೇಶ್ವರ.\r
ನಿರಾಕಾರ ನಿರಾವರಣನೆಂಬ ಗಣೇಶ್ವರನ ಶಿಷ್ಯ\r
ನಿರುಪಮನೆಂಬ ಗಣೇಶ್ವರ.\r
ನಿರುಪಮನೆಂಬ ಗಣೇಶ್ವರನ ಶಿಷ್ಯ\r
ನಿರ್ಗುಣ ನಿರಾಧಾರ ನಿರಾಲಂಬನೆಂಬ ಗಣೇಶ್ವರ.\r
ನಿರ್ಗುಣ ನಿರಾಧಾರ ನಿರಾಲಂಬನೆಂಬ ಗಣೇಶ್ವರನ ಶಿಷ್ಯ\r
ಸರ್ವಾಧಾರ ಸದಾಶಿವನೆಂಬ ಗಣೇಶ್ವರ.\r
ಸರ್ವಾಧಾರ ಸದಾಶಿವನೆಂಬ ಗಣೇಶ್ವರರ ಸ್ವರೂಪರಾದಂಥ\r
ಆದಿನಾಥೇಶ್ವರದೇವರು.\r
ಆದಿನಾಥೇಶ್ವರದೇವರ ಶಿಷ್ಯರು ಸತ್ಯೇಶ್ವರದೇವರು.\r
ಸತ್ಯೇಶ್ವರದೇವರ ಶಿಷ್ಯರು ಘಟಯಂತ್ರದೇವರು.\r
ಘಟಯಂತ್ರದೇವರ ಶಿಷ್ಯರು ಭೃಕುಟೇಶ್ವರದೇವರು.\r
ಭೃಕುಟೇಶ್ವರದೇವರ ಶಿಷ್ಯರು ವಿಶ್ವೇಶ್ವರದೇವರು.\r
ವಿಶ್ವೇಶ್ವರದೇವರ ಶಿಷ್ಯರು ಮುಕ್ತೇಶ್ವರದೇವರು.\r
ಮುಕ್ತೇಶ್ವರದೇವರ ಶಿಷ್ಯರು ಬ್ರಹ್ಮೇಶ್ವರದೇವರು.\r
ಬ್ರಹ್ಮೇಶ್ವರದೇವರ ಶಿಷ್ಯರು ಶಿವದೇವಯ್ಯನವರು.\r
ಶಿವದೇವಯ್ಯನವರ ಶಿಷ್ಯರು ಶಿವಜ್ಞಾನೇಶ್ವರದೇವರು.\r
ಶಿವಜ್ಞಾನೇಶ್ವರದೇವರ ಶಿಷ್ಯರು ಓಂಕಾರದೇವರು.\r
ಓಂಕಾರದೇವರ ಶಿಷ್ಯರು ಸೋಮಲಿಂಗದೇವರು.\r
ಸೋಮಲಿಂಗದೇವರ ಶಿಷ್ಯರು ಸಂಗಮೇಶ್ವರದೇವರು.\r
ಸಂಗಮೇಶ್ವರದೇವರ ಕರಕಮಲದಲ್ಲಿ ಉತ್ಪತ್ಯವಾದ\r
ಶಿಶುವು ಕಾಡಸಿದ್ಧ ನಾನಯ್ಯ.\r
ಹಾಂಗೆಂದು ಅನಾದಿವಿಡಿದು ಬಂದ ಗುರುಶಿಷ್ಯಸಂಬಂಧ,\r
ಹಾಂಗೆ ಅನಾದಿವಿಡಿದು ಬಂದ ಲಿಂಗ,\r
ಅನಾದಿವಿಡಿದು ಬಂದ ಜಂಗಮ,\r
ಅನಾದಿವಿಡಿದು ಬಂದ ಪಾದೋದಕ-ಪ್ರಸಾದ,\r
ಅನಾದಿವಿಡಿದು ಬಂದ ವಿಭೂತಿ-ರುದ್ರಾಕ್ಷಿ-ಮಂತ್ರ,\r
ಅನಾದಿವಿಡಿದು ಬಂದ ಭಕ್ತಿ-ಜ್ಞಾನ-ವೈರಾಗ್ಯ.\r
ಅನಾದಿವಿಡಿದು ಬಂದ ವೀರಶೈವಷಟ್ಸ್ಥಲದ ಆಚಾರವು.\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚೆನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
### 38.\r
\r
ನಿಮ್ಮ ತಂದಿ ಸತ್ತದ್ದು ನೋಡುತ್ತಿದ್ದಿ,\r
ನಿಮ್ಮ ತಂದಿಯ ತಂದಿ ಸತ್ತದ್ದು ಕಾಣುತ್ತಿದ್ದಿ,\r
ನಿಮ್ಮ ಅಜ್ಜ ಪಣಜ ಸತ್ತದ್ದು ಕೇಳುತ್ತಿದ್ದಿ,\r
ನಿಮ್ಮ ತಾಯಿ ಸತ್ತದ್ದು ನೋಡುತ್ತಿದ್ದಿ,\r
ನಿಮ್ಮ ತಾಯಿಯ ತಾಯಿ ಸತ್ತದ್ದು ಕಾಣುತ್ತಿದ್ದಿ,\r
ನಿಮ್ಮ ತಾಯಿಯ ಅಜ್ಜಿ ಪಣಜಿ ಸತ್ತದ್ದು ಕೇಳುತ್ತಿದ್ದಿ.\r
ನಿನ್ನ ಸತಿಸುತರು ಒಡಹುಟ್ಟಿದ ಬಂಧುಗಳು\r
ಸ್ನೇಹಿತರು ಬೀಗರು ಮೊದಲಾದ ಸಕಲಲೋಕಾದಿಲೋಕಂಗಳು\r
ನಿಮ್ಮ ಕಣ್ಣಮುಂದೆ ವೃಕ್ಷದ ಪರ್ಣಗಳು ಉದುರಿದ ಹಾಗೆ\r
ಸಕಲರು ಅಳಿದುಹೋಗುವುದ ನೋಡುತ್ತಿದ್ದಿ.\r
ಇದಲ್ಲದೆ ದೃಷ್ಟಾಂತ: ಒಬ್ಬ ರೋಮಜಋಷಿಗೆ\r
ಮೂರುವರೆಕೋಟಿ ರೋಮಂಗಳುಂಟು,\r
ಅಂತಹ ಋಷಿಗೂ ಕೃತಯುಗ, ತ್ರೇತಾಯುಗ,\r
ದ್ವಾಪರ, ಕಲಿಯುಗವೆಂಬ ಚತುರ್ಯುಗ ಪ್ರಳಯವಾದಲ್ಲಿ\r
ಒಂದು ರೋಮ ಉದುರುವದು.\r
ಹೀಗೆ ಈ ಪರಿಯಲ್ಲಿ ಮೂರುವರೆಕೋಟಿ ರೋಮಂಗಳು\r
ಉದುರಿದಲ್ಲಿ ಆ ರೋಮಋಷಿಯೆಂಬ\r
ಮುನೀಶ್ವರನು ಪ್ರಳಯವಾಗುವನು.\r
ಮತ್ತೆ ದೇವಲೋಕದ ಸನಕ ಸನಂದಾದಿ\r
ಮುನಿಜನಂಗಳು ಅನಂತಕೋಟಿ ಋಷಿಗಳು\r
ಬ್ರಹ್ಮ, ವಿಷ್ಣು, ರುದ್ರ, ಈಶ್ವರ, ಸದಾಶಿವ ಮೊದಲಾದ\r
ತೆತ್ತೀಸಕೋಟಿ ದೇವರ್ಕಳು ಇಂತಿವರೆಲ್ಲರು\r
ಎತ್ತಲಾನುಕಾಲಕ್ಕೆ ಮರಣಕ್ಕೆ ಒಳಗಾದರು.\r
ವೇದಾಗಮ ಶಾಸ್ತ್ರ ಪುರಾಣ ಶ್ರುತಿ ಪ್ರಮಾಣಗಳಿಂದ\r
ಮತ್ತೆ ಹರ, ಗುರು, ಪುರಾತನರ ವಾಕ್ಯದಿಂದ\r
ನಿಮ್ಮ ಉಭಯ ಕರ್ಣದಿಂ ಕೇಳುತ್ತಿದ್ದಿ.\r
ಇಂತೀ ಎಲ್ಲವನು ಕಂಡು ಕೇಳಿ ಗಾಢನಿದ್ರೆಯ ಮನುಷ್ಯನ ಹಾಂಗೆ\r
ನಿನ್ನ ನಿಜಸ್ವರೂಪವ ಮರದು ತ್ರಿವಿಧಮಲವ ಕಚ್ಚಿ\r
ಶುನಿ ಶೂಕರನ ಹಾಗೆ ಕಚ್ಚಿ ಕಡಿದಾಡಿ\r
ಸತ್ತು ಹೋಗುವ ವ್ಯರ್ಥಗೇಡಿ\r
ಮೂಳ ಹೊಲೆಮಾದಿಗರ ಕಿವಿ ಹರಿದು,\r
ಕಣ್ಣುಗುಡ್ಡಿಯ ಮೀಟಿ, ನೆತ್ತಿಯ ಮೇಲೆ ಮೂರು ಪಟ್ಟೆಯನೆ ಕೆತ್ತಿ\r
ಅವನ ಮುಖದ ಮೇಲೆ ಹೆಂಡಗಾರನ ಮುಖದಿಂದ\r
ಲೊಟ್ಟಲೊಟ್ಟನೆ ಉಗುಳಿಸಿ ಪಡುವಲದಿಕ್ಕಿಗೆ ಅಟ್ಟೆಂದ ಕಾಣಾ\r
ವೀರಾಧಿವೀರ ನಿಮ್ಮ ಶರಣ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
### 39.\r
tags: cow, gau, milk,\r
ಪಂಚವರ್ಣದ ಗೋವಿನ ಹಾಲ ಕರದು\r
ಬಿಸಿಲಿಗೆ ಕಾಸಿ ಹಾಲು ಬೆಣ್ಣೆ ತುಪ್ಪವ ಮಾರಿ,\r
ಮೊಸರು ಮಜ್ಜಿಗೆ ಮಾರದೆ\r
ಕಾಯಕ ಮಾಡುತ್ತಿರ್ದೆ ನೋಡೆಂದನಯ್ಯಾ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 40.\r
**tags: gau, dung, vibuti**\r
ಪಂಚವರ್ಣದ ಗೋವಿನ ಶೆಗಣೆಯ\r
ಬೆಂಕಿಲ್ಲದೆ ಸುಟ್ಟು, ನೀರಿಲ್ಲದೆ ನೀರಲ್ಲಿ ಕಲಿಸಿ ಉಂಡಿಗಟ್ಟಿ,\r
ಕೈಯಲ್ಲಿ ಪಿಡಿದು ಸರ್ವಾಂಗದಲ್ಲಿ ಧರಿಸಿ\r
ಕಾಯಕವ ಮಾಡುತಿರ್ದೆನಯ್ಯ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 41.\r
**tags: Cold-pressed, oil, mill**\r
ಪಂಚವರ್ಣದ ಗಾಣ, ಆರೇಣಿನ ಕಣಿ,\r
ಎರಡೆತ್ತು ಹೂಡಿ, ಹುರಿದ ಬೀಜದ ಎಣ್ಣೆಯ ತೆಗೆದು,\r
ಉಂಡವರು ಕೈಕಂಡವ ಆರಿಗೂ ತೋರಿ ಉಸುರದೆ ನುಂಗಿ,\r
ಕಾಯಕವ ಮಾಡುತ್ತಿರ್ಪರು ನೋಡೆಂದನಯ್ಯಾ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 42.\r
tags: Srishaila, Mallayya, Mallikarjuna\r
ಪರ್ವತಮಲ್ಲಯ್ಯನ ಯಾತ್ರೆಗೆ ಹೋಗಬೇಕೆಂಬರಯ್ಯಾ,\r
ಅದೇನು ಕಾರಣವೆಂದಡೆ : ಗ್ರಂಥ : 'ಶ್ರೀಶೈಲಶಿಖರಂ ದೃಷ್ಟ್ವಾ ಪುನರ್ಜನ್ಮ ನ ವಿದ್ಯತೇ'\r
ಎಂದುದಾಗಿ,\r
ಅಂತಪ್ಪ ಪರ್ವತಮಲ್ಲಯ್ಯನ\r
ಶಿಖರವ ಕಂಡಾಕ್ಷಣದಲ್ಲಿ ಮೋಕ್ಷವಾಹುದೆಂದು,\r
ಶ್ರುತಿ ಪುರಾಣ ವಾಕ್ಯಂಗಳ ಕೇಳಬಲ್ಲಂಥ\r
ಭಕ್ತಜನಂಗಳು, ಉಳಿದಂಥ ಕೆಲವು ಗಣಂಗಳು\r
ಇಂತೀ ಸರ್ವರು ಕೂಡಿ ಸಾಲ ಕಡ ಮಾಡಿ\r
ಹೊನ್ನು ತಂದು ಒಂದೊತ್ತು ಬರಿಗಾಲಿಲೆ ನಡೆವುತ್ತ\r
ಆಸತ್ತು, ಬೇಸತ್ತು, ಅಳಲಿ, ಬಳಲಿ\r
ಶಿವಶಿವಾ ಹರಹರಾ ಎಂದು ಮಲ್ಲಯ್ಯನ ನೆನೆವುತ್ತ\r
ಎಡವುತ್ತ, ಮುಗ್ಗುತ್ತ ನಿನ್ನ ಪಾದ ಎಂದು ಕಂಡೆವು ಎನ್ನುತ್ತ,\r
ಸಕಲ ಲೋಕಾದಿಲೋಕಂಗಳೆಲ್ಲ\r
ಇಂತೀ ಪರಿಯಲ್ಲಿ ಹೋಹರಯ್ಯಾ.\r
ಇವರಿಗೆ ಮಲ್ಲಯ್ಯನ ದರುಶನವಿಲ್ಲ.\r
ಅವನ ಶಿಖರವ ಕಾಣಬಾರದು ನೋಡೆಂದ ನಿಮ್ಮ ಶರಣ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 42.\r
tags: Srishaila, Mallayya, Mallikarjuna, Kashi\r
ಪರ್ವತಕ್ಕೆ ಹೋಗಬೇಕಾದರೆ\r
ಮನೆಯ ಸುಟ್ಟು, ಬಸವನ ಕೊಂದು,\r
ಶಿಶುವಿನ ತಲೆಹೊಡೆದು, ಗುರುಲಿಂಗಜಂಗಮವ ಕೊಂದು,\r
ತನ್ನ ಕೈಕಾಲು ತಲೆ ಛೇದಿಸಿ,\r
ತಿದಿಯ ಹಿಡಿದು, ಕಾವಡಿಯನೊಡದು,\r
ಸಾಲಮಾಡದೆ ತಾವು ಗಳಿಸಿದಂಥ ದ್ರವ್ಯವನೊಯ್ಯದೆ\r
ಪೋಗಿ ಕೇಶವನೆಲ್ಲಾ ಬೋಳಿಸಿ,\r
ಪಾತಾಳಗಂಗಿಯ ಸ್ನಾನವ ಮಾಡಿ,\r
ಮನೆಯ ಸುಟ್ಟು ಬೂದಿಯ ಧರಿಸಿ,\r
ಒಂದು ಪಾದವ ಹಿಂದಿಟ್ಟು, ಒಂದು ಪಾದವ ಮುಂದಿಟ್ಟು,\r
ಎಡಕ ಬಂದವನ ಮೆಟ್ಟಿ, ಬಲಕ ಬಂದವನ ಕುಟ್ಟಿ,\r
ಎದುರಿಗೆ ಬಂದವನ ಮೆಟ್ಟಿ, ಅವನಾಚೆಗೆ ದಾಟಿ ಹೋಗಬಲ್ಲರೆ,\r
ಮಲ್ಲಯ್ಯನ ದರುಶನವಾಹುದು,\r
ಆತನ ಶಿಖರ ಕಾಣುವದು.\r
ಕಂಡಾಕ್ಷಣವೇ ನಿರ್ವಯಲಪದವಹುದು.\r
ಇಂತಿದರ ವಿಚಾರವ ತಿಳಿಯಬಲ್ಲರೆ\r
ಕಾಶಿ ಶ್ರೀಶೈಲಯಾತ್ರೆಯ ಮಾಡಬಲ್ಲವರು ಎಂದನಯ್ಯಾ\r
ನಿಮ್ಮ ಶರಣ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 43.\r
\r
ಪುರುಷನ(ಗಂಡನ) ಮರೆದು ಮಾವನ ಪೇಳುವರು.\r
ತಂದೆಯ ಮರೆದು ಮುತ್ಯನ ಪೇಳುವರು.\r
ಇದ್ದುದ ಮರೆದು ಇಲ್ಲದುದ ಪೇಳುವರು,\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ\r
\r
#### 44.\r
**tags: basavanna, Allama, Prabudevaru**\r
ಪ್ರಮಥಗಣಂಗಳ ಪ್ರಸಾದಕೊಂಡದಲ್ಲಿ\r
ಅಡಗಿದ ಗೊತ್ತ ಆರೂ ಅರಿಯರಲ್ಲ,\r
ಬಸವಣ್ಣಂಗೆ ಪ್ರಭುದೇವರು ತೋರಿ ಕೊಟ್ಟನು.\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
### 45. IMP\r
\r
ಪ್ರಾಣಲಿಂಗಿಗೆ ಪದಾರ್ಥಪ್ರೇಮವುಂಟೆ ?\r
ಪ್ರಾಣಲಿಂಗಿಗೆ ಪ್ರಪಂಚದ ಮೋಹವುಂಟೆ ?\r
ಪ್ರಾಣಲಿಂಗಿಗೆ ಸ್ಥಲಕುಲದ ಅಭಿಮಾನ,\r
ಕುಲಗೋತ್ರದ ಹಂಗು ಉಂಟೆ ?\r
ಪ್ರಾಣಲಿಂಗಿಗೆ ಮಾತಾ-ಪಿತಾ, ಸತಿ-ಸುತ\r
ಬಂಧುಗಳ ಸ್ನೇಹಿತರ ಮೋಹವುಂಟೆ ?\r
ಇಂತೀ ಸರ್ವರಲ್ಲಿ ಮಮಕಾರ ಉಳ್ಳಾತ ಅಂಗಪ್ರಾಣಿಯಲ್ಲದೆ\r
ಲಿಂಗಪ್ರಾಣಿ ಆಗಲರಿಯನು ನೋಡಾ.\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 46. IMP\r
**tags: Basavann, Siddharam, Prabhudevaru\r
ಪ್ರಾಣಲಿಂಗಿ ಪ್ರಾಣಲಿಂಗಿ ಎಂಬರಯ್ಯಾ ;\r
ಪ್ರಾಣಲಿಂಗದ ನಿಲವನಾರು ಬಲ್ಲರಯ್ಯಾ ?\r
ಪ್ರಾಣಲಿಂಗದ ನಿಲವ ಉರಿಲಿಂಗಪೆದ್ದಯ್ಯಗಳು ಬಲ್ಲರು.\r
ಪ್ರಾಣಲಿಂಗದ ನಿಲುಕಡೆಯ ಸಿದ್ಧರಾಮಯ್ಯನವರು ಬಲ್ಲರು.\r
ಪ್ರಾಣಲಿಂಗದ ಸ್ವರೂಪವನು ಹಡಪದಪ್ಪಣ್ಣ ಸತ್ಯಣ್ಣನವರು ಬಲ್ಲರು.\r
ಪ್ರಾಣಲಿಂಗದ ನಿಲವ ನುಲಿಯ ಚಂದಯ್ಯ,\r
ನೀಲಲೋಚನೆಯಮ್ಮನವರು ಮೊದಲಾದ\r
ಬಸವಾದಿ ಪ್ರಮಥರು ಪ್ರಭುದೇವರಾಂತ್ಯಮಾದ\r
ಏಳುನೂರಾ ಎಪ್ಪತ್ತು ಪ್ರಮಥಗಣಂಗಳು ಬಲ್ಲರಲ್ಲದೆ\r
ಮಿಕ್ಕಿನ ಜಡಮತಿ ವೇಷಧಾರಿಗಳಾದ\r
ಜೀವರುಗಳೆತ್ತ ಬಲ್ಲರಯ್ಯಾ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
#### 47. IMP\r
\r
ಪ್ರಸಾದಿಗೆ ಪರದ್ರವ್ಯದ ಪ್ರೇಮವುಂಟೆ ?\r
ಪ್ರಸಾದಿಗೆ ಪರಸ್ತ್ರೀಯರ ಮೋಹವುಂಟೆ ?\r
ಪ್ರಸಾದಿಗೆ ಮಾತಾಪಿತ ಸತಿಸುತರ ಮಮಕಾರವುಂಟೆ ?\r
ಒಬ್ಬರಿಗೆ ಉಂಟು, ಒಬ್ಬರಿಗೆ ಇಲ್ಲ.\r
ಈ ಭೇದವ ನಿಮ್ಮ ಶರಣರೇ ಬಲ್ಲರು\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.\r
\r
\r
#### 48.\r
tags: attachment, dwait, dvait, vairagy, \r
ಪ್ರಾಣಲಿಂಗಿಯ ನಿಲವ ಪೇಳ್ವೆ.\r
ಬಲ್ಲರೆ ಪೇಳಿರಿ, ಅರಿಯದಿದ್ದರೆ ಕೇಳಿರಯ್ಯಾ.\r
ಪ್ರಾಣಲಿಂಗಿಗೆ ಪ್ರಪಂಚದ ಪ್ರೇಮವುಂಟೆ ?\r
ಪ್ರಾಣಲಿಂಗಿಗೆ ಮಾತಾಪಿತ, ಸತಿಸುತರುಗಳು\r
ಮೊದಲಾದ ಬಂಧುಗಳ ಸ್ನೇಹಿತರ ಪ್ರೇಮವುಂಟೆ ?\r
ಪ್ರಾಣಲಿಂಗಿಗೆ ಪರದ್ರವ್ಯದ ಪ್ರೇಮವುಂಟೆ ?\r
ಪ್ರಾಣಲಿಂಗಿಗೆ ದ್ವೈತಿಗಳಾದ ವೇದಾಂತಿ, ಸಿದ್ಧಾಂತಿಗಳು\r
ಮೊದಲಾದ ಭಿನ್ನಭಾವದ ಜೀವಾತ್ಮರಲ್ಲಿ ಪ್ರೇಮವುಂಟೆ ?\r
ಪ್ರಾಣಲಿಂಗಿಗೆ ಊಟ ಉಡಿಗೆ ತೊಡಿಗೆ ಮೃಷ್ಟಾನ್ನ ಭೋಜನವ ಸೇವಿಸಿ,\r
ಸಕಲಪದಾರ್ಥವ ಭೋಗಿಸಬೇಕೆಂಬ ಮಮಕಾರವುಂಟೆ ?\r
ಇಂತೀ ಮಾಯಾಪ್ರಪಂಚದ ವಿಲಾಸದ ಮೇಲಣ\r
ಮಮಕಾರವನಳಿದುಳಿದಾತನೇ ಪ್ರಾಣಲಿಂಗಿ, ಇಲ್ಲದಾತನೇ ಅಂಗಲಿಂಗಿ\r
ಮುಖಭಂಗಿತರಾದ ಜೀವರುಗಳು ಎಂದರಯ್ಯಾ\r
ಕಾಡನೊಳಗಾದ ಶಂಕರಪ್ರಿಯ ಚನ್ನಕದಂಬಲಿಂಗ\r
ನಿರ್ಮಾಯಪ್ರಭುವೆ.`,ze=/^#{3,4}\s*(\d+)\.\s*(IMP)?\s*$/i,Be=/^\**tags:\s*(.*?)\**$/i,Ve=e=>e.replace(/^\uFEFF/,``).trim(),He=(e,t)=>({id:`vachana-${String(t+1).padStart(2,`0`)}`,number:e.number,showOnMainPage:e.showOnMainPage,tags:e.tags,text:e.lines.join(`
`)}),Y=(e=>{let t=e.replace(/^\uFEFF/,``).split(/\r?\n/),n=[],r=null;return t.forEach(e=>{let t=e.trimEnd(),i=t.match(ze);if(i){r?.lines.length&&n.push(r),r={number:Number(i[1]),showOnMainPage:!!i[2],tags:[],lines:[]};return}if(!r)return;let a=t.trim();if(!a)return;let o=a.match(Be);if(o){r.tags=o[1].split(`,`).map(e=>Ve(e.replace(/\*/g,``))).filter(Boolean);return}r.lines.push(a.replace(/\*\*/g,``))}),r?.lines.length&&n.push(r),n.map(He)})(Re),Ue=Y.filter(e=>e.showOnMainPage);function We(e){return m({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`5`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`1`,x2:`12`,y2:`3`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`21`,x2:`12`,y2:`23`},child:[]},{tag:`line`,attr:{x1:`4.22`,y1:`4.22`,x2:`5.64`,y2:`5.64`},child:[]},{tag:`line`,attr:{x1:`18.36`,y1:`18.36`,x2:`19.78`,y2:`19.78`},child:[]},{tag:`line`,attr:{x1:`1`,y1:`12`,x2:`3`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`12`,x2:`23`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`4.22`,y1:`19.78`,x2:`5.64`,y2:`18.36`},child:[]},{tag:`line`,attr:{x1:`18.36`,y1:`5.64`,x2:`19.78`,y2:`4.22`},child:[]}]})(e)}function X(e){return m({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{d:`M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z`},child:[]}]})(e)}function Z({theme:e,onToggleTheme:t}){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(`header`,{className:`temple-header`,children:(0,v.jsxs)(`div`,{className:`temple-shell temple-header-row`,children:[(0,v.jsx)(`div`,{className:`temple-header-copy`,children:(0,v.jsxs)(`h1`,{children:[(0,v.jsxs)(`a`,{href:`/skdevasthana`,children:[` `,(0,v.jsx)(`span`,{className:`temple-title-desktop`,children:` Shri Kadasiddheshwar Devasthana`}),` `]}),(0,v.jsxs)(`span`,{className:`temple-title-mobile`,children:[` `,(0,v.jsx)(`a`,{href:`/skdevasthana`,children:`SK Devasthana`})]})]})}),(0,v.jsx)(`button`,{type:`button`,className:`temple-theme-button`,onClick:t,"aria-label":`Switch to ${e===`dark`?`light`:`dark`} theme`,children:(0,v.jsx)(`span`,{"aria-hidden":`true`,children:e===`dark`?(0,v.jsx)(We,{}):(0,v.jsx)(X,{})})})]})})})}var Ge=[{src:Ae,alt:`Historic painting of Shri Kalmeshwar Devasthana`},{src:je,alt:`Temple view of Shri Kalmeshwar Devasthana`},{src:Me,alt:`Temple surroundings at Shri Kalmeshwar Devasthana`},{src:Ne,alt:`Devotional view from Shri Kalmeshwar Devasthana`},{src:Pe,alt:`Another view of Shri Kalmeshwar Devasthana`}],Ke=[{label:`Darshan Timings`,value:`5:00 AM - 12:00 PM, 5:00 PM - 10:30 PM`},{label:`Location`,value:`Bastawad, Taluk: Hukkeri, Belagavi, Karnataka`},{label:`Festival Focus`,value:`Jatre: Ugadi`}],qe=[`Temple exterior image placeholder`,`Deity or garbhagudi image placeholder`,`Festival celebration image placeholder`,`Annadanam or community event image placeholder`],Je=[{title:`Daily Pooja`,copy:`Morning pooja at 9:00 am. Evening pooja at 8:30 pm`},{title:`Special Festival Seva`,copy:`Anna Prasada is served on Amavasya, usually from 10:00 am to 3:30 pm.`},{title:`Visitor Guidance`,copy:`Please follow the traditional dress code to help maintain a peaceful and respectful atmosphere within the temple premises.`}],Ye={label:`Important Notice`};function Xe({theme:e,onToggleTheme:t,onViewAllVachanagalu:n}){return(0,v.jsxs)(`div`,{className:`temple-page`,children:[(0,v.jsx)(Z,{theme:e,onToggleTheme:t}),(0,v.jsxs)(`main`,{className:`temple-main`,children:[(0,v.jsx)(`section`,{className:`temple-hero`,children:(0,v.jsxs)(`div`,{className:`temple-shell temple-hero-grid`,children:[(0,v.jsxs)(`div`,{className:`temple-hero-copy`,children:[(0,v.jsx)(`p`,{className:`temple-eyebrow`,children:`Sacred place for worship and community`}),(0,v.jsxs)(`p`,{className:`temple-lead`,children:[`This Website is intentionally `,(0,v.jsx)(`u`,{children:` static and under development`}),`. It provides information on the temple's history, deity details, timings, celebrations, trust information, and visitor guidance.`]}),(0,v.jsx)(`div`,{className:`temple-highlight-grid`,children:Ke.map(e=>(0,v.jsxs)(`article`,{className:`temple-highlight-card`,children:[(0,v.jsx)(`span`,{children:e.label}),(0,v.jsx)(`strong`,{children:e.value})]},e.label))})]}),(0,v.jsx)(`aside`,{className:`temple-feature-card`,children:(0,v.jsx)(`div`,{className:`temple-image-tall`,children:(0,v.jsx)(Fe,{images:Ge,interval:3500})})})]})}),` `,(0,v.jsx)(`section`,{className:`temple-notice-section`,"aria-label":`Important notice`,children:(0,v.jsx)(`div`,{className:`temple-shell`,children:(0,v.jsxs)(`aside`,{className:`temple-notice-card`,children:[(0,v.jsx)(`p`,{className:`temple-notice-label`,children:Ye.label}),(0,v.jsxs)(`p`,{className:`temple-notice-message`,children:[`Please send photos of the temple and festivals on`,` `,(0,v.jsx)(`a`,{href:`https://wa.me/918088756029`,target:`_blank`,rel:`noopener noreferrer`,children:`WhatsApp`}),` `,`so they can be added to the website gallery.`]})]})})}),(0,v.jsx)(`section`,{className:`temple-section temple-vachana-section`,"aria-label":`Featured vachanagalu`,children:(0,v.jsxs)(`div`,{className:`temple-shell temple-section-shell`,children:[(0,v.jsx)(`div`,{className:`temple-section-intro`,children:(0,v.jsx)(`p`,{className:`temple-section-tag`,children:`Vachanagalu`})}),(0,v.jsxs)(`div`,{className:`temple-vachana-layout`,children:[(0,v.jsxs)(`div`,{className:`temple-vachana-copy`,children:[(0,v.jsx)(`h3`,{children:`Selected vachanas from Shri Kadasiddheshwara Swamiji`}),(0,v.jsx)(`p`,{children:`A few important vachanas are shown here in rotation. You can open the full page to read all the vachanas one below the other.`}),(0,v.jsx)(`button`,{type:`button`,className:`temple-link-button temple-link-button-pill`,onClick:n,children:`View All Vachanagalu`})]}),(0,v.jsx)(Ie,{entries:Ue})]})]})}),(0,v.jsx)(`section`,{className:`temple-section`,id:`about`,children:(0,v.jsxs)(`div`,{className:`temple-shell temple-section-shell`,children:[(0,v.jsx)(`div`,{className:`temple-section-intro`,children:(0,v.jsx)(`p`,{className:`temple-section-tag`,children:`About The Temple`})}),(0,v.jsxs)(`div`,{className:`temple-two-column`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h3`,{children:`History, identity, and spiritual significance`}),(0,v.jsx)(`p`,{children:`Add the temple's story here: when it was established, who the presiding deity is, how devotees connect with the devasthana, and what makes this place important locally.`}),(0,v.jsx)(`p`,{children:`This is also a good place for architecture notes, oral history, and details of the managing trust or committee.`})]}),(0,v.jsxs)(`div`,{className:`temple-info-card`,children:[(0,v.jsx)(`h4`,{children:`Quick Information`}),(0,v.jsxs)(`ul`,{children:[(0,v.jsx)(`li`,{children:`Deity: Shri Kadasiddheshwara`}),(0,v.jsx)(`li`,{children:`Trust / Committee: Shri Kadasiddhshwar Devasthan Trust Committee`}),(0,v.jsx)(`li`,{children:`Nearest town: Hukkeri`}),(0,v.jsx)(`li`,{children:`Best visiting season: All seasons`})]})]})]})]})}),(0,v.jsx)(`section`,{className:`temple-section temple-section-muted`,id:`gallery`,children:(0,v.jsxs)(`div`,{className:`temple-shell temple-section-shell`,children:[(0,v.jsxs)(`div`,{className:`temple-section-intro`,children:[(0,v.jsx)(`p`,{className:`temple-section-tag`,children:`Gallery`}),(0,v.jsx)(`h3`,{children:`Image placeholders ready for real temple photos`}),(0,v.jsxs)(`p`,{className:`temple-notice-message`,children:[`Please send photos of the temple and festivals on`,` `,(0,v.jsx)(`a`,{href:`https://wa.me/918088756029`,target:`_blank`,rel:`noopener noreferrer`,children:`WhatsApp`}),` `,`so they can be added to the website gallery.`]})]}),(0,v.jsx)(`div`,{className:`temple-gallery-grid`,children:qe.map(e=>(0,v.jsx)(`div`,{className:`temple-image-placeholder`,children:e},e))})]})}),(0,v.jsx)(`section`,{className:`temple-section`,id:`darshan`,children:(0,v.jsxs)(`div`,{className:`temple-shell temple-section-shell`,children:[(0,v.jsx)(`div`,{className:`temple-section-intro`,children:(0,v.jsx)(`p`,{className:`temple-section-tag`,children:`Seva & Darshan`})}),(0,v.jsx)(`div`,{className:`temple-cards-grid`,children:Je.map(e=>(0,v.jsxs)(`article`,{className:`temple-detail-card`,children:[(0,v.jsx)(`p`,{className:`temple-card-tag`,children:e.title}),(0,v.jsx)(`p`,{children:e.copy})]},e.title))})]})}),(0,v.jsx)(`section`,{className:`temple-section temple-section-accent`,id:`events`,children:(0,v.jsxs)(`div`,{className:`temple-shell temple-section-shell`,children:[(0,v.jsx)(`div`,{className:`temple-section-intro`,children:(0,v.jsx)(`p`,{className:`temple-section-tag`,children:`Festivals & Events`})}),(0,v.jsxs)(`div`,{className:`temple-two-column`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h3`,{children:`Annual celebrations and recurring rituals`}),(0,v.jsx)(`p`,{children:`Important festival dates, pooja schedules, jatre details, and recurring observances here.`})]}),(0,v.jsxs)(`div`,{className:`temple-schedule-card`,children:[(0,v.jsxs)(`div`,{className:`temple-schedule-item`,children:[(0,v.jsx)(`span`,{children:`Event 01`}),(0,v.jsx)(`strong`,{children:`Vijaya Dashami Pallakki Utsava`}),(0,v.jsx)(`p`,{children:`Shri Kadasiddheshwar's pallakki utsava travels around the village, visiting many gadigi's during Vijaya Dashami.`})]}),(0,v.jsxs)(`div`,{className:`temple-schedule-item`,children:[(0,v.jsx)(`span`,{children:`Event 02`}),(0,v.jsx)(`strong`,{children:`Depavali Padya Pallakki Utsava`}),(0,v.jsx)(`p`,{children:`Shri Kadasiddheshwar's pallakki utsava travels around the village, visiting many gadigi's during Depavali.`})]})]})]})]})}),(0,v.jsx)(`section`,{className:`temple-section`,id:`contact`,children:(0,v.jsxs)(`div`,{className:`temple-shell temple-section-shell`,children:[(0,v.jsx)(`div`,{className:`temple-section-intro`,children:(0,v.jsx)(`p`,{className:`temple-section-tag`,children:`Contact`})}),(0,v.jsxs)(`div`,{className:`temple-two-column`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h3`,{children:`Temple office and visitor support`}),(0,v.jsxs)(`p`,{children:[`Phone numbers, address, `,(0,v.jsx)(`br`,{}),`email, location pin, and office hours.`]})]}),(0,v.jsxs)(`div`,{className:`temple-contact-card`,children:[(0,v.jsxs)(`p`,{children:[(0,v.jsx)(`strong`,{children:`Address:`}),` Bastawad, Hukkeri, Karnataka, 591309`]}),(0,v.jsxs)(`p`,{children:[(0,v.jsx)(`strong`,{children:`Phone:`}),`  `,(0,v.jsx)(`a`,{href:`tel:8088756029`,children:` 8088XXXX29 `})]}),(0,v.jsxs)(`p`,{children:[(0,v.jsx)(`strong`,{children:`Email:`}),` contact@skdevasthana.com`]}),(0,v.jsxs)(`p`,{children:[(0,v.jsx)(`strong`,{children:`Map Link:`}),` `,(0,v.jsx)(`a`,{href:`https://maps.app.goo.gl/GdaHsCB7tByWUyC37`,target:`_blank`,rel:`noopener noreferrer`,children:`View on Google Maps`})]}),(0,v.jsxs)(`p`,{children:[(0,v.jsx)(`strong`,{children:`Office Hours:`}),` 8:30 AM - 8:30 PM`]}),(0,v.jsxs)(`p`,{children:[(0,v.jsx)(`strong`,{children:`WhatsApp: `}),` `,(0,v.jsx)(`a`,{href:`https://wa.me/918088756029`,target:`_blank`,rel:`noopener noreferrer`,children:`Chat on WhatsApp`})]})]})]})]})})]}),(0,v.jsx)(Le,{})]})}function Ze({theme:e,onToggleTheme:t,onBackToTemple:n}){return(0,v.jsxs)(`div`,{className:`temple-page`,children:[(0,v.jsx)(Z,{theme:e,onToggleTheme:t,onBackToTemple:n}),(0,v.jsx)(`main`,{className:`temple-main`,children:(0,v.jsx)(`section`,{className:`temple-section`,children:(0,v.jsxs)(`div`,{className:`temple-shell`,children:[(0,v.jsxs)(`div`,{className:`temple-section-head temple-section-head-stack`,children:[(0,v.jsx)(`p`,{className:`temple-section-tag`,children:`Vachanagalu :`}),` \xA0`,(0,v.jsx)(`p`,{children:`Thoughts shared by Shri Kadasiddheshwara Swamiji`}),(0,v.jsxs)(`div`,{children:[Y.length,` vachanas are currently listed on this page.`]})]}),(0,v.jsx)(`div`,{className:`all-vachana-list`,children:Y.map(e=>(0,v.jsxs)(`article`,{className:`all-vachana-card`,children:[(0,v.jsxs)(`div`,{className:`all-vachana-meta`,children:[(0,v.jsxs)(`p`,{className:`all-vachana-number`,children:[`Vachana `,e.number]}),e.showOnMainPage&&(0,v.jsx)(`span`,{className:`all-vachana-badge`,children:`Featured on main page`})]}),(0,v.jsx)(`div`,{className:`all-vachana-text`,children:e.text}),e.tags.length>0&&(0,v.jsx)(`div`,{className:`all-vachana-tags`,"aria-label":`Vachana tags`,children:e.tags.map(t=>(0,v.jsx)(`span`,{className:`all-vachana-tag`,children:t},`${e.id}-${t}`))})]},e.id))})]})})})]})}var Q=e=>{let t=`/`.endsWith(`/`)?`/`.slice(0,-1):`/`,n=t&&t!==`/`&&e.startsWith(t)?e.slice(t.length):e;return!n||n===`/`?`/`:n.replace(/\/+$/,``)||`/`},$={"/":{title:`Prajwal Patil | Software Developer Portfolio`,description:`Explore Prajwal Patil's software development portfolio, projects, skills, and experience in React, Flutter, Python, and AI.`,canonical:`https://prajwalramagoudapatil.github.io/`},"/skdevasthana":{title:`SK Devasthana | Temple Information`,description:`Explore Shri Kadasiddheshwara Devasthana in Bastawad, Hukkeri, including temple information, history, spiritual content, and Vachanagalu.`,canonical:`https://prajwalramagoudapatil.github.io/skdevasthana/`},"/skdevasthana/vachanagalu":{title:`Vachanagalu | SK Devasthana`,description:`Read Vachanagalu of Shri Kadasiddheshwar and explore spiritual teachings on the SK Devasthana website.`,canonical:`https://prajwalramagoudapatil.github.io/skdevasthana/vachanagalu/`}};function Qe(e){let t=$[e]||$[`/`];document.title=t.title;let n=(e,t,n=`name`)=>{let r=document.head.querySelector(`meta[${n}="${e}"]`);r||(r=document.createElement(`meta`),r.setAttribute(n,e),document.head.appendChild(r)),r.setAttribute(`content`,t)};n(`description`,t.description),n(`og:title`,t.title,`property`),n(`og:description`,t.description,`property`),n(`og:url`,t.canonical,`property`);let r=document.head.querySelector(`link[rel="canonical"]`);r||(r=document.createElement(`link`),r.rel=`canonical`,document.head.appendChild(r)),r.href=t.canonical}function $e(){let[e,t]=(0,r.useState)(`light`),[n,i]=(0,r.useState)(!1),[a,o]=(0,r.useState)(`/`);(0,r.useEffect)(()=>{Qe(a)},[a]),(0,r.useEffect)(()=>{o(Q(window.location.pathname))},[]),(0,r.useEffect)(()=>{let e=`light`;try{let t=window.localStorage.getItem(`theme`);t===`light`||t===`dark`?e=t:window.matchMedia(`(prefers-color-scheme: dark)`).matches&&(e=`dark`)}catch{}t(e),i(!0)},[]),(0,r.useEffect)(()=>{if(n){document.documentElement.setAttribute(`data-theme`,e);try{window.localStorage.setItem(`theme`,e)}catch{}}},[e,n]);let s=()=>{t(e=>e===`dark`?`light`:`dark`)},c=e=>{let t=e.startsWith(`/`)?e:`/${e}`;window.history.pushState({},``,t),o(Q(window.location.pathname)),window.scrollTo({top:0,behavior:`smooth`})};return a===`/skdevasthana/vachanagalu`?(0,v.jsx)(Ze,{theme:e,onToggleTheme:s,onBackToTemple:()=>c(`/skdevasthana`)}):a===`/skdevasthana`?(0,v.jsx)(Xe,{theme:e,onToggleTheme:s,onBackToPortfolio:()=>c(`/`),onViewAllVachanagalu:()=>c(`/skdevasthana/vachanagalu`)}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(S,{theme:e,onToggleTheme:s}),(0,v.jsx)(A,{}),(0,v.jsx)(N,{}),(0,v.jsx)(F,{}),(0,v.jsx)(L,{}),(0,v.jsx)(De,{}),(0,v.jsx)(ke,{})]})}export{_ as n,$e as t};