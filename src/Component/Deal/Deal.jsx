import React, { useEffect, useState } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Carousel from 'react-multi-carousel';
import stars from '../img/stars.png';
import 'react-multi-carousel/lib/styles.css';
import './Deal.css';

function Deal() {

    const API_URL = "https://jsonplaceholder.typicode.com/comments";
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setUsers(data);
        console.log(data);
    }

  return (
    <>
        <div className='sellerHead'>
            <h1>Deal of the Day</h1>
            <Link className='sellerLink'>See All -{'>'} </Link>
        </div>
        <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlaySpeed={3000}
        centerMode={true}
        className="Sellers"
        containerClass="container-padding-bottom"
        dotListClass=""
        draggable
        focusOnSelect
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
            desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 5,
            partialVisibilityGutter: 40
            },
            mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
            },
            tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
            }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        // showDots
        sliderClass=""
        slidesToSlide={1}
        // swipeable
        >
        {users.map((e,id) => (
            <div key={id} className='tabs'>
            <p><span style={{ textDecoration: "line-through" }}>{e.id}</span> <span style={{ color: 'red' }}>{e.postId}</span></p>
            <img
                src={stars}
                style={{ width: '5em' }}
                />
            {/* <p>{e.email}</p> */}
            <span style={{ marginTop: '10px' }}>{e.name}</span>
            <img
                src="https://vuestore.doyenhub.com/img/350/350/resize/avatar/noimage.png"
                style={{ width: '120px' }}
                />
            </div>
        ))}
        </Carousel>
      <div className='fadeDeal' />
    </>
  )
}

export default Deal;