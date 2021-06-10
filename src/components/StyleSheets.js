import React from 'react'
import './stylesheets.css'

//inline styling
const parastyled = {
    fontSize: '20px',
    backgroundColor: 'yellow'
}
const StyleSheets = () => {
    return (
        <>
            <h1 className="primary">CSS Stylesheets</h1>
            <p className="secondary">I'm baby tumblr mlkshk butcher pabst. Pinterest chambray gentrify deep v ennui. Chicharrones four dollar toast activated charcoal, food truck bitters aesthetic actually lomo af meditation marfa. Tacos intelligentsia brooklyn coloring book shabby chic vegan poutine tofu taiyaki selvage fingerstache health goth flannel direct trade. Kickstarter plaid helvetica austin.</p>
            <p style={parastyled}>I'm baby tumblr mlkshk butcher pabst. Pinterest chambray gentrify deep v ennui. Chicharrones four dollar toast activated charcoal, food truck bitters aesthetic actually lomo af meditation marfa. Tacos intelligentsia brooklyn coloring book shabby chic vegan poutine tofu taiyaki selvage fingerstache health goth flannel direct trade. Kickstarter plaid helvetica austin.</p>
            <p style={{
                fontSize: '20px',
                backgroundColor: 'gray'
            }}>I'm baby tumblr mlkshk butcher pabst. Pinterest chambray gentrify deep v ennui. Chicharrones four dollar toast activated charcoal, food truck bitters aesthetic actually lomo af meditation marfa. Tacos intelligentsia brooklyn coloring book shabby chic vegan poutine tofu taiyaki selvage fingerstache health goth flannel direct trade. Kickstarter plaid helvetica austin.</p>

        </>
    )
}

export default StyleSheets
