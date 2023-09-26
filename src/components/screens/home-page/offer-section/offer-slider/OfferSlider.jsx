import { useEffect, useRef } from 'react'
import { register } from 'swiper/element/bundle'
import styled from 'styled-components'
import OfferItem from './offer-item/OfferItem.jsx'
import NextIcon from 'assets/icons/arrow-right.svg'
import PrevIcon from 'assets/icons/arrow-left.svg'

register()

const SwiperSlideStyled = styled('swiper-slide')`
	padding: 0 30px;
`

const OfferSlider = () => {
	const swiperRef = useRef(null)
	useEffect(() => {
		const swiperContainer = swiperRef.current

		const params = {
			navigation: true,
			pagination: true,
			simulateTouch: false,
			speed: 700,
			spaceBetween: 30,
			breakpoints: {
				768: {
					simulateTouch: true,
					speed: 500
				}
			},
			injectStyles: [
				`
                    .swiper {
                        padding-bottom: 30px;
                    }
                    .swiper-pagination-bullet {
                        background-color: #F2B63D;
                    }
                    
                    .swiper-button-next svg,
                    .swiper-button-prev svg {
                        display: none;
                    }
                    
                    .swiper-button-next,
                    .swiper-button-prev {
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: 30px;
                    }
                    
                    .swiper-button-prev {
                        background-image: url("${PrevIcon}");
                    }
                                       
                     .swiper-button-next {
                        background-image: url("${NextIcon}");
                    }
                      @media(max-width: 768px) {
                        .swiper {
                            padding-bottom: 50px;
                        }
                        .swiper-button-next,
                        .swiper-button-prev {
                            display: none;
                        }
                    }
            `
			]
		}

		Object.assign(swiperContainer, params)
		swiperContainer.initialize()
	}, [])

	return (
		<swiper-container
			ref={swiperRef}
			init={false}
			data-aos="fade-in"
			data-aos-delay="80"
			data-aos-duration="5000"
		>
			<SwiperSlideStyled>
				<OfferItem />
			</SwiperSlideStyled>
			<SwiperSlideStyled>
				<OfferItem />
			</SwiperSlideStyled>
		</swiper-container>
	)
}

export default OfferSlider
