import { Col, Container, Row } from 'reactstrap'
import React from 'react'
import "../../styles/project.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import { Autoplay } from "swiper";
import { EffectCoverflow, Autoplay,Pagination } from 'swiper/modules';
import CardSlider from '../../Components/Card_slider/CardSlider';
import imag1 from '../../Assets/Dashboard.png'
import imag2 from '../../Assets/food-e-commerce.png'
import imag3 from '../../Assets/job.png'
import imag4 from '../../Assets/landingPages.png'
import imag5 from "../../Assets/education.png"


const projects = () => {

const projects = [
   {
    id:1,
    img:imag1,
    name:"Dashboard"

   },
   {
    id:2,
    img:imag2,
    name:"Food E-Commerce"
   
},
{
    id:3,
    img:imag3,
    name:"Job-web"

},
{
    id:4,
    img:imag4,
    name:"Landing Pages"
},
{
id:5,
    img:imag5,
    name:"Education website"
}

]


  return <section className='projects' id='projects'>
      <Container>
        <Row>
        <h1 className='title'>projects</h1>
        </Row>
        <div className="ship">

        </div>
        <Row>
            <Col lg='12' className='mb-5'>
            
            
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
            320: { slidesPerView: 1 },    // عرض بطاقة واحدة على الشاشات الصغيرة
            640: { slidesPerView: 2 },    // عرض بطاقتين على الشاشات المتوسطة
            768: { slidesPerView: 3 }     // عرض 3 بطاقات على الشاشات الكبيرة
          }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]} 
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={800} 
        className="mySwiper"
      >
        {
            projects.map((item) => (
                    <SwiperSlide key={item.id}>
                        <CardSlider image={item.img} name={item.name} />
                    </SwiperSlide>
                ))
        }
       
      </Swiper>
            </Col>
        </Row>
      </Container>

  </section>
}

export default projects