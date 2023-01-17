import React from "react";
import DataTable from './DataTable';
import {dumpKeys} from './src/helpers';

const Content = ({ content }) => {

  return (
    <>
      {/* {content ? console.log(content) : ''} */}

      <div className="p-5 ml-[-0.5rem] mt-[-1.5rem] self-center">
        <DataTable data={content}></DataTable>

      </div>
    </>
  );
}

export default Content;
