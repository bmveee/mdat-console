import React from "react";
import DataTable from './DataTable';
import {dumpKeys} from './src/helpers';

const Content = ({ content }) => {

  return (
    <>
      {/* {content ? console.log(content) : ''} */}

      <div className="p-5 ml-[-0.5rem] mt-[-1.5rem] self-center">
        <DataTable data={content}></DataTable>
        <ul>
          {/* {content.map(({ id, name, email }) => (
            <li key={id}>{name} :: {email}</li>
          ))} */}
          {/* {content?.map(({ id, name, email }) => (
            <li key={id}>
              {name} | {email}
            </li>
          ))} */}
          {content
            ? console.log("keys", dumpKeys(content))
            : console.log("nothing")}
        </ul>
      </div>
    </>
  );
}

export default Content;
