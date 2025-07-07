// src/Pages/Technologies.js
import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
const {
  html,
  css,
  js,
  react,
  bootstrap,
  vscode,
  git,
  github,
  npm,
  postman,
  TypeScript,
  NodeJS,
  Express,
  mongodb,
  sql,
  RestApi
} = techStackDetails; 
const iconStyle = "h-25 w-auto mx-auto hover:scale-105 transition-transform";

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      {/* Web Tools */}
      <section>
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-dark-heading dark:text-light-heading">
          Web Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-10 pt-6 items-center">
        <img src={html} alt="HTML" title="HTML" className={iconStyle} />
        <img src={css} alt="CSS" title="CSS" className={iconStyle} />
        <img src={bootstrap} alt="Bootstrap" title="Bootstrap" className={iconStyle} />
        <img src={js} alt="JavaScript" title="JavaScript" className={iconStyle} />
        <img src={react} alt="React" title="React" className={iconStyle} />
        <img src={TypeScript} alt="TypeScript" title="TypeScript" className={iconStyle} />
      </section>

      {/* Backend */}
      <section>
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-dark-heading dark:text-light-heading pt-10">
          Backend
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-10 pt-6 items-center">
        <img src={NodeJS} alt="Node.js" title="Node.js" className={iconStyle} />
        <img src={Express} alt="Express.js" title="Express.js" className={iconStyle} />
        <img src={RestApi} alt="REST API" title="REST API" className={iconStyle} />
      </section>

      {/* Database */}
      <section>
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-dark-heading dark:text-light-heading pt-10">
          Database
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-10 pt-6 items-center">
        <img src={mongodb} alt="MongoDB" title="MongoDB" className={iconStyle} />
        <img src={sql} alt="SQL" title="SQL" className={iconStyle} />
      </section>

      {/* API Testing */}
      <section>
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-dark-heading dark:text-light-heading pt-10">
          API Testing
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-10 pt-6 items-center">
        <img src={postman} alt="Postman" title="Postman" className={iconStyle} />
      </section>

      {/* Version Control */}
      <section>
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-dark-heading dark:text-light-heading pt-10">
          Version Control
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-10 pt-6 items-center">
        <img src={git} alt="Git" title="Git" className={iconStyle} />
        <img src={github} alt="GitHub" title="GitHub" className={iconStyle} />
      </section>

      {/* Tools */}
      <section>
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-dark-heading dark:text-light-heading pt-10">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-10 pt-6 items-center">
        <img src={vscode} alt="VS Code" title="VS Code" className={iconStyle} />
        <img src={npm} alt="npm" title="npm" className={iconStyle} />
      </section>
    </main>
  );
}

export default Technologies;
