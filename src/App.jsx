import "./App.css";
import axios from "axios";
import Pagination from "./components/Pagination";
import Table from "./components/Table";
import SearchComp from "./components/SearchComp";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [dataKey, setDataKey] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [back, setBack] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      setPosts(response.data);
      setBack(response.data);
    };
    fetchPosts();
    Slice();
  }, []);

  useEffect(() => {
    Slice();
  }, [currentPage, back]);

  const Slice = () => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const res = back.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentPosts(res);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // Get Current posts

  const HandleSearch = (val) => {
    const res = posts.filter((obj) => {
      if (
        obj.id.includes(val) ||
        obj.name.includes(val) ||
        obj.email.includes(val) ||
        obj.role.includes(val)
      ) {
        return true;
      } else {
        return false;
      }
    });
    setBack(res);
    setCurrentPage(1);
  };

  const handleSomeSelect = () => {
    dataKey.map(() => {
      const updatedList = back.filter((item) => !dataKey.includes(item["id"]));
      setBack(updatedList);
    });
  };
  const handleDelete = (idd) => {
    const newArray = back.filter((item) => item["id"] !== idd);
    setBack(newArray);
  };
  return (
    <>
      <Modal data={back} id={id} setBack={setBack} />
      <div className='h-screen'>
        <div className='flex flex-col items-center gap-2 pr-6 pl-6 pt-2 h-full justify-between'>
          <div className='w-[90%] h-full flex flex-col gap-2'>
            <div className='flex gap-6'>
              <SearchComp HandleSearch={HandleSearch} />
              <button
                className='btn btn-md btn-secondary'
                onClick={handleSomeSelect}
              >
                Delete
              </button>
            </div>
            <Table
              data={currentPosts}
              handleDelete={handleDelete}
              setDataKey={setDataKey}
              posts={posts}
              setId={setId}
            />
          </div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={back.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
}

export default App;
