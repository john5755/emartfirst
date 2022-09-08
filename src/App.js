import './App.css';
import MenuCard from './components/MenuCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faUpload } from '@fortawesome/free-solid-svg-icons';

library.add(faHouse)

function App() {
  // tabMenu
  const tabMenu = ['전체', '든든하고 건강하게', '여름과일', '피코크', '신선', '냉동', '명절과일']

  // SearchResult
  const [items, setItems] = useState([])
  const [results, setResults] = useState([])
  const [pageNum, setPageNum] = useState(0) // item 숫자에 따른 페이지 숫자
  const [nowNum, setNowNum] = useState(0) // 현재 활성화된 page

  // page 바꾸기
  function changePages(idx, event){
    const before = document.getElementsByClassName('pageNum active')
    before.item(0).classList.remove('active')
    const target = event.target
    target.setAttribute('class', 'pageNum active')
    setNowNum(idx)
  }

  // tab에 따른 items 교체
  function changeItems(idx, event){
    if (idx === 0){
      getResult()
    } else{
    const filters = results.filter(item => item.categoryId === idx)
    if (filters.length > 10) {
      setPageNum(parseInt(filters.length/10))
      if (filters.length % 10 === 0){
        const minusone = pageNum - 1
        setPageNum(minusone)
      } 
    } else {
      setPageNum(0)
    }
    setItems(filters)
    axios.get('/api/items.json')
    .then(res=>{
        setResults(res.data)
    })}
    setNowNum(0)
  }

  // 전체 items 세팅
  function getResult(){
    axios.get('/api/items.json')
    .then(res=>{
        setResults(res.data)
        setItems(res.data)            
        if (res.data.length > 10) {
          setPageNum(parseInt(res.data.length/10))
          if (res.data.length % 10 === 0){
            const minusone = pageNum - 1
            setPageNum(minusone)
          }
        }
    })
  }

  // go to top
  function topFunction() {
    document.querySelector('.scrollbox').scrollTop = 0
  }

  useEffect(()=>{
    getResult()
  },[])

  return (
    <div style={{maxWidth: '576px'}}>
      <nav style={{display:'flex' }}>
        <div className='nav-back' style={{float:'left', display:'flex', alignItems:'center', marginLeft:'10px'}}>
          <FontAwesomeIcon style={{marginRight:'10px', cursor:'pointer'}} icon="fa-solid fa-arrow-left" />
          <FontAwesomeIcon style={{cursor:'pointer'}} icon="fa-solid fa-house" />
        </div>
        <h4 className='nav-title'>금주의 전단광고</h4>
        <div className='nav-menu' style={{float:'right', display:'flex', alignItems:'center'}}>
          <FontAwesomeIcon icon="fa-solid fa-bars" style={{float:'right', flexGrow:1, cursor:'pointer'}} />
        </div>
      </nav>
      <div style={{fontWeight:'bold', marginLeft:'10px'}}>금주의 전단상품을 만나보세요</div>
      <div className='wrapper page'>
        <div style={{display: 'flex', height:'15%'}}>
          <div className='dropdown'>
            <span style={{lineHeight: '80px'}}>
              <FontAwesomeIcon className='dropbtn' icon="fa-solid fa-caret-down" style={{cursor: 'pointer'}} />
            </span>
            <div className='dropdown-content'>
            {tabMenu.map((tab, index)=>(
              <a className='tabs' href='#' onClick={(e)=>changeItems(index, e)}>
                {tab}
              </a>
            ))}
            </div>
          </div>
          <div className='tabbox' style={{display:'flex'}}>
          {tabMenu.map((tab, index)=>(
            <>
            <input type="radio" name='tab' aria-controls={tab} id={tab} className="tabset"></input>
            <label className='tabs' for={tab} onClick={(e)=>changeItems(index, e)}>
              {tab}
            </label>
            </>
          ))}
          </div>
        </div>
        <div className='scrollbox'>
          {items.slice(10*nowNum,10*nowNum+10).map((item, index)=>(          
            <MenuCard
            key={index}
            imageThumbnail={item.imageThumbnail}
            price={item.price}
            discountPrice={item.discountPrice}
            name={item.name}
            discount={item.discount}
            likes={item.likes}
            comments={item.comments}></MenuCard>
            ))}
          {pageNum ? (
          <div className='pageBox'>
            <ul className='pagination'>
              <li onClick={(e)=>changePages(0, e)}><a href='#' className='pageNum active'>1</a></li>
              {[...Array(pageNum)].map((num, idx) => (
                <li onClick={(e)=>changePages(idx+1, e)}><a href='#' className='pageNum'>{idx+2}</a></li>
              ))}
            </ul>
          </div>): (<div></div>)}
          <span className='fa-stack fa-2x' style={{float:'right'}}>
            <FontAwesomeIcon icon={faUpload} onClick={topFunction} style={{cursor:'pointer'}}/>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
