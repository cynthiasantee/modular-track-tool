import React, {useEffect, useState} from 'react';
import './App.css';
import SearchBox from './SearchBox';
import list from './list';
import CardList from './CardList'
import styled from 'styled-components/macro';
import CheckboxList from './CheckboxList';

function App() {
  const [field, setField] = useState('');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    console.log(tags);
  }, [tags])

  const onCheck = (tag) => {
    if (tags.includes(tag)) {
      setTags(tags.filter(t => t !== tag))
    } else {
      setTags([...tags, tag])
    }
  };

  const taglist = Array.from(new Set (list
    .map((listItem) => [listItem.tags])
    .flat()
    .reduce((sum, value) => [...sum,...value] ,[])
    .sort()
    )
  );

  const onSearchChange = (event) => {
      setField(event.target.value)
  }; 

  const filteredCards = list.filter(info =>{
    console.log(info.name, info.tags)
      return info.name.includes(field) && (info.tags.some(tag => tags.includes(tag)) || tags.length === 0)
  });
  
  return (
    <AppContainer>
        <SearchBoxContainer>
          <SearchBox searchChange={onSearchChange}/>
        </SearchBoxContainer>
        <CheckboxAndCardContainer>
          <CheckboxContainer>
            <CheckboxList taglist={taglist} checkedTags={tags} onBoxClick={onCheck}/>
          </CheckboxContainer>
          <CardContainer>
            <CardList list={filteredCards}/>
          </CardContainer>
        </CheckboxAndCardContainer>
    </AppContainer>
  );
};

const AppContainer = styled.div `
  background-color: #212121;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const SearchBoxContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const CheckboxAndCardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CheckboxContainer = styled.div`
  margin-left: 5px;
  overflow: scroll;
  height: 100vh;
  position: fixed;
  padding-right: 10px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: fit-content;
`;

export default App;
