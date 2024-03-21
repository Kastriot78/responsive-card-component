import React from 'react'

const Card = ({ link, imageSrc, thumbTitle, monthTitle, dateTitle, cardTitle, statusTitle, textTitle, buttonLink, buttonText }) => {
    return (
        <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="card-item">
                <a href={link}>
                    <div className='card_thumbnail'>
                        <img src={imageSrc} alt="" />
                        <div className="venue">
                            <span>
                                <i className="fa-solid fa-location-dot"></i>
                            </span>
                            {thumbTitle}
                        </div>
                        <div className="time">
                            <span className="month-title">{monthTitle}</span>
                            <span className="date-title">{dateTitle}</span>
                        </div>
                    </div>
                </a>
                <div className="card-content d-flex flex-column">
                    <h2 className='card__title'>{cardTitle}</h2>
                    <div className='status'>
                        <span>{statusTitle}</span>
                    </div>
                    <div className='text-content'>{textTitle}</div>
                    <div className='button_wrapper'>
                        <a href={buttonLink} className='btn card__btn'>{buttonText}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
