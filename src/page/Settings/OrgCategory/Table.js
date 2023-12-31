

// Table.js
import React, { useState, useEffect, useCallback} from 'react';
import Datatable from 'react-data-table-component';
import axios from 'axios';
import EditModal from './EditModal';
import ViewModal from './ViewModal';
import Button from 'react-bootstrap/Button';
import '../style/table.css'
import AddModal from './AddModal'
// Import necessary FontAwesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash,faFilter,faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSearch } from 'src/Context/Search';
import DeleteModal from './DeleteModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Filter from './Filter';
import useDebounce from 'src/Context/Debounce';

function Table() {
  const [datas, setDatas] = useState([]);
  const [filteredDatas, setFilteredDatas] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedDatas, setSelectedDatas] = useState(null);
  const [deleteModal,setDeleteModal] =useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [filterValue, setFilterValue] = useState(''); 
  const [query, setQuery] = useState('');    //filter
  const [values, setValues] = useSearch();
  const debouncedKeyword = useDebounce(values.keyword, 300); 

  const handleClose = () => {
    setShowEditModal(false);
    setShowViewModal(false);
    setSelectedDatas(null);
  };

  const getDatas = async () => {
    try {
      const response = await axios.get('http://localhost:3000/orgCategory');
      setDatas(response.data.orgCategory);
      setFilteredDatas(response.data.orgCategory);
    } catch (error) {
      console.error(error);
    }
  };


  const handleUpdate = async (orgId, updatedData) => {
    try {
      const response = await axios.put(`http://localhost:3000/orgCategory/${orgId}`, updatedData);
      console.log('Update response:', response.data);
      getDatas();
      toast.success('Data updated successfully!',{ autoClose: 1000 });

    } catch (error) {
      console.error('Error updating data:', error);
      toast.error('Error updating data. Please try again.',{ autoClose: 1000 });
    }
  };
  const handleEdit = (row) => {
    setSelectedDatas(row);
    setShowEditModal(true);
  };

  const handleViewDetails = (row) => {
    setSelectedDatas(row);
    setShowViewModal(true);
  };


//DELETE MODAL

const deleteModalClose = () => {
  setDeleteModal(false);
};

const deleteModalShow = () => {
  setDeleteModal(true);
};


const handleClickDelete = (row) => {
  setSelectedId(row._id);
  deleteModalShow();
};
  const totalCount = filteredDatas.length;

  const columns = [
   
    {
      name: "ORG CATEGORY",
      selector: (row) =>  <div style={{ textTransform: 'capitalize' }}>{row.name}</div>,
      sortable: true,
   },
    {
      name: "DESCRIPTION",
      selector: (row) => <div style={{ textTransform: 'capitalize' }}>{row.descp}</div>,
    },
    {
      name: "STATUS",
      selector: (row) => <div style={{ textTransform: 'capitalize' }}>{row.status}</div>,
    },
    {
      name: "ACTIONS",
      cell: (row) => (
        <>
        <div>
         <Button  style={{paddingLeft:'0px'}} className='btn  btn-1  mx-1' onClick={() => handleEdit(row)}>
          <FontAwesomeIcon icon={faEdit} /> {/* Edit Icon */}
        </Button>
        <Button className='btn btn-2  mx-1' onClick={() => handleViewDetails(row)}>
          <FontAwesomeIcon icon={faEye} /> {/* View Details Icon */}
        </Button>
       
     
        <Button className='btn btn-3  mx-1' onClick={() => handleClickDelete(row)}>
          <FontAwesomeIcon icon={faTrash} /> {/* Delete Icon */}
        </Button>
         
        </div>
        </>
      ),
    },
  ];

  const handleInputChange = (e) => {
    const keyword = e.target.value;
    setValues({ ...values, keyword });
  };

  useEffect(() => {
    getDatas();
  }, []);

  useEffect(() => {
    if (!Array.isArray(datas)) {
      console.error("Datas is not an array!");
      return;
    }


  const result = datas.filter((item) => {
   
    const statusMatch = item.status.toLowerCase().includes(filterValue.toLowerCase());
   
   return !item.isDeleted && (filterValue === '' || statusMatch);
  });
  setFilteredDatas(result);
}, [datas,filterValue]);



  // Debounce effect for keyword

 useEffect(() => {
  if (debouncedKeyword !== null) {
    search(debouncedKeyword);
  }
}, [debouncedKeyword]);
  
const search = async (keyword) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/orgCategory/key/search?keyword=${keyword}`);
    setFilteredDatas(data.results);
  } catch (error) {
    console.error('Error in search:', error);
  }
};

  return (
    <>
    <ToastContainer/>
    <div className='table-div'>
      <Datatable className='table-data-div'
        title='Organization Category'
        columns={columns}
        data={filteredDatas}
        pagination
        paginationPerPage={5}
        rowsPerPageOptions={[]} 
        fixedHeader
        fixedHeaderScrollHeight='320px'
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={
          <div className='table-top'>
          <div className='d-flex justify-content-start'><AddModal  getDatas={getDatas} /></div>

          <div className="search-input-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon"  type='submit'/>
          <input
            type='text'
            placeholder='Search'
            className='w-35 form-control'
            value={values.keyword}
            onChange={handleInputChange}
          />
        </div>

        <div className='d-flex justify-content-end  end-col' >
     <div className='border-end'>
        <Filter onFilter={(newQuery, newFilterValue) => { setQuery(newQuery); setFilterValue(newFilterValue); }} />

        <div className='count-div'>
              <FontAwesomeIcon icon={faFilter} style={{ marginRight: '5px' }} />
              <span style={{ whiteSpace: 'nowrap' }}>{' '}Results: {totalCount}</span>
            </div>
</div></div>
        </div>
     
        }
        subHeaderAlign='right'
     
      />
      </div>

      {/* Modal for Editing */}
      <EditModal showModal={showEditModal} handleClose={handleClose} selectedDatas={selectedDatas} handleUpdate={handleUpdate} />

      {/* Modal for Viewing Details */}
      <ViewModal showModal={showViewModal} handleClose={handleClose} selectedDatas={selectedDatas} />
   
   
      <DeleteModal deleteclose={deleteModalClose} dlt={deleteModal} id={selectedId} getDatas={getDatas} />
    </>
  );
}

export default Table;