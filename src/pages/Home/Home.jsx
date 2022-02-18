import React, { useEffect, useState } from 'react';
import EmptyView from '../../components/common/EmptyView/EmptyView';
import List from '../../components/Home/List/List.';
import SearchBar from '../../components/Home/searchbar/Searchbar';
import FilterPennel from '../../components/Home/SidePannel/FilterPennel';
import { dataList } from '../../constant';
import './home.css';

const Home = () => {
    const [selectedCategory, setSelectedCategory ] =useState(null);
    const [selectedRating , setSelectedRating] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
    const [lists, setLists] =useState(dataList);
    const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

    const [cuisines, setCuisines] = useState([
        {
            id:1, checked:false,label:'American'
        },
        {
            id:2, checked:false,label:'Chines'
        },
        {
            id: 3, checked:false,label:'Italian'
        },
      
    ]);
    const handleSelectCategory =(event, value) => !value ?null: setSelectedCategory(value);
    const handleSelectedRating =(event, value) => !value ?null: setSelectedRating(value);
    
    const handleCheckedChange =(id) => {
        const cuisinesStateList = cuisines;
        const changeCheckedCuisines = cuisinesStateList.map(item => item.id=== id? {...item, checked:!item.checked}:item);
        setCuisines(changeCheckedCuisines);
    }
    const handleChangedPrice= (event, value) => setSelectedPrice(value);

   //filter all 
   
  const applyFilters = () => {
    let updatedList = dataList;

    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // Category Filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    // Cuisine Filter
    const cuisinesChecked = cuisines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisinesChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisinesChecked.includes(item.cuisine)
      );
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setLists(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, cuisines, searchInput, selectedPrice]);

    
    return (
        <div className='home'>
                <SearchBar value={searchInput}
                  changeInput={(e) => setSearchInput(e.target.value)}/>
                <div className="home_panelist-wrapper">
                    <div className="home_panel-wrap">
                    <FilterPennel
                     selectToggle={handleSelectCategory}
                     selectedCategory={selectedCategory} 
                     selectRating ={handleSelectedRating}
                     selectedRating={selectedRating}
                     cuisines={cuisines}
                     changeChecked={handleCheckedChange}
                     selectedPrice={selectedPrice}
                     changedPrice={handleChangedPrice}

                     />
                    </div>
                    <div className="home_list-wrap">
                    {resultsFound ? <List list={lists} /> : <EmptyView />}
                  </div>
            </div>
            
        </div>
    );
};

export default Home;