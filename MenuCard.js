import React from 'react'

const MenuCard = ({ MenuData }) => {

  return (
    <>
      {MenuData.map((curElem) => {

        return (
          <>
            <div className='card-container'>
              <div className='card'>
                <div className='card-body'>
                  <span className='card-no card-circle subtle' >1</span>
                  <span className="card-author subtle">Breakfast</span>
                  <h5 className="card-title">Maggi</h5>
                  <span className="class-description subtle">
                    Maggi is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                  <div className="card-read">Read more</div>
                  <img src="https://i0.wp.com/vegecravings.com/wp-content/uploads/2020/01/Vegetable-Masala-Maggi-Recipe-Step-By-Step-Instructions-scaled.jpg?fit=806%2C708&quality=65&strip=all&ssl=1" alt="maggi" className="card-media" />

                </div>
                <span className='card-tag subtle'>Order Now</span>
              </div>
            </div>
          </>
        )

      })}

    </>

  )
}

export default MenuCard;