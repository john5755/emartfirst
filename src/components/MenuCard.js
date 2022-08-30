import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function MenuCard({imageThumbnail, price, discountPrice, name, discount, likes, comments}){
  return(
    <div className="card">
      <div className='item-img'>
        <img src={imageThumbnail} alt="Temp" className='item-img-img'></img>
      </div>
      <div className="container">
        <div style={{display:'flex'}}>
          <h5 style={{textDecoration:'line-through', color:'grey', marginRight:'10px'}}>{price}</h5>
          <h4>{discountPrice}</h4>
        </div>
        <p style={{marginTop:'0px', marginBottom:'8px'}}>{name}</p>
        <button style={{borderColor: 'red', backgroundColor:'white', color:'red', bold:'true'}}>신세계 포인트 {discount}원 적립</button>
        <div style={{marginTop:'5px', marginBottom:'5px'}}>
          <FontAwesomeIcon icon={faHeart}/> {likes} 
          <FontAwesomeIcon icon="fa-solid fa-comment" style={{marginLeft:'15px'}} /> {comments}
        </div>
      </div>
    </div>
  )
}