import React from "react";
import Cards from "./components/cards";
import Img1 from "../images/happykid.jpg";
export default function Card2() {
  var array1 = [
    {
      link: Img1,
      title: "To Feed Children",
      des: "Raise fund to helping little hands",
      val: 40,
    },
    {
      link: "https://cdn.givingcompass.org/wp-content/uploads/2018/08/04123226/kenya.jpg",
      title: "Support Communities",
      des: "Raise fund to helping little hands",
      val: 80,
    },
    {
      link: "https://fundsforngosmedia.s3.amazonaws.com/wp-content/uploads/2017/10/09060556/hunger-child-food2635238_640.jpg",
      title: "Every child has a future",
      des: "Raise fund to helping little hands",
      val: 30,
    },
  ];

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-around">
            {/* normal coder */}

            {/* {[
    {link:Img1,
    title:"hero1",
    des:"dretyuuioipdasdasdas",
    val:40
},
    {
    link:"https://picsum.photos/200/300",
    title:"3",
    des:"dkasfdsadasdasdasdasdas",
    val:90
},
    {
    link:"https://picsum.photos/200/300",
    title:"hero4",
    des:"fsdgargaeaef",
    val:17
},
].map(data=><Cards link={data.link} title={data.title} des={data.des} val={data.val}   />    )
} */}

            {/* mentos coder */}

            {array1.map((ok) => (
              <Cards {...ok} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
