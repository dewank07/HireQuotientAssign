import React, { useEffect } from "react";

const Table = ({ data, posts, handleDelete, setDataKey, setId } = props) => {
  useEffect(() => {
    // console.log("table", data);
  }, [data, posts]);
  const handleSelectAll = () => {
    setDataKey((prevData) => {
      if (prevData.length != 0) {
        return [];
      } else {
        const newArray = data.map((item) => item.id);
        return newArray;
      }
    });
  };

  const handleCheckBox = (id) => {
    setDataKey((prevData) => {
      if (prevData.includes(id)) {
        return prevData.filter((item) => item !== id);
      } else {
        return [...prevData, id];
      }
    });
  };
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th>
              <label className='flex  flex-col gap-2'>
                <input
                  type='checkbox'
                  className='checkbox'
                  onChange={() => handleSelectAll()}
                />
                Delete 10 entries
              </label>
            </th>
            <th className='text-xl '>Name</th>
            <th className='text-xl '>Email</th>
            <th className='text-xl '>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Dynamic */}
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <th>
                  <label>
                    <input
                      type='checkbox'
                      className='checkbox'
                      value={item.id}
                      onChange={(e) => handleCheckBox(e.target.value)}
                    />
                  </label>
                </th>
                <td>
                  <div className='flex items-center gap-3'>
                    <div>
                      <div className='font-bold'>{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <th>
                  <button
                    className='btn btn-ghost btn-xs'
                    onClick={() => {
                      setId(item.id);
                      document.getElementById("my_modal_1").showModal();
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className='btn btn-ghost btn-xs'
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}

          {/* Dynamic */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
