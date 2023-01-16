import React from "react";
import { dumpKeys } from "./src/helpers";
const DataTable = ({ data }) => {
  const columns = dumpKeys(data);
  const take_columns = [
    "id",
    "name",
    "username",
    "email",
    "phone",
    "website"
  ];
  if (data === undefined) {
    return;
    <span>Loading...</span>;
  } else
    return (
      <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-sm">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {take_columns.map((column) => (
                  <th key={column} scope="col" className="px-6 py-3">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {console.log('data_dump', data)}
              {Object.entries(data)?.map(([key, value]) => (
                <tr key={key} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                  {console.log('key', `${key}`, 'value', `${JSON.parse(JSON.stringify(value))}` )}
                  {take_columns.map((column) => (
                    <td key={key+'_'+column}className="px-6 py-4 text-xxs ">{value[column]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
};

export default DataTable;
