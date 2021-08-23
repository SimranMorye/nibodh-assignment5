import React,{useState} from 'react';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Teamslider() {
// syntax
const [Xyz,setXyz] = useState([9,"po",{Lk:"po"}]);

// const [Var,Function] = useState(initialState) : syntax

console.log({state:Xyz});

const normal = () =>{
    setXyz(56)
}

// react hooks


// state : use to save some information that can be changed later.
// dusra information ko manupulate . without re running the funtion. save time.  
// ans: saare variable data types


// Array
// object
// int
// string



//  








// variable

    var arr2 = [
    {link:"https://en.pimg.jp/063/678/637/1/63678637.jpg"},
    {link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDZ3ahi25NNGcJKECbwOxkNFlOOo9f-hFCA&usqp=CAU"},
    {link:"https://images.theconversation.com/files/174239/original/file-20170616-19763-aw56ik.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"},
    {link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gIq8k1P1_u8X52c8jyWt61qj3X8c2s0rJcBsfPLfZapi0ylUBFj6Qx2c452deX1QYvg&usqp=CAU"},
    {link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVzz-UsZwmPUT-FePmFK_aEr6KGaqcz8tNr8bMaR8dyFsM3TWXsXePPeZgKm3IDewB7z8&usqp=CAU"},
    {link:"https://previews.123rf.com/images/pascreative/pascreative1801/pascreative180100085/94965233-is-a-symbol-related-to-social-humanitarian-cooperation-teamwork-business-charity-or-foundation.jpg"},
    {link:"https://st4.depositphotos.com/11747323/20828/v/1600/depositphotos_208285806-stock-illustration-symbol-related-social-humanitarian-cooperation.jpg"},
    {link:"https://feature.undp.org/multidimensional-poverty-2019/assets/img/00-cover-mobile.png"},
]




    const settings = {
        dots: true,
        infinite: false,
        speed: 600,
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        // arrows:true,
      };
    
    return (
        // dom html tags /components reacts components
        <div>



{/*
</div>button onClick={normal} >state cahnge</*button> */}













             <Slider arrows={true} {...settings}>
         {
             arr2.map(data=>{

                return ( <div>
                    <img className="slider-image-team" src={data.link} alt="" />
                          </div>)
             })
         }
         
          
        </Slider>
        </div>
    )
}