import React from "react"
import Card from "./card"

class CardList extends React.Component {
    render() {
        return (
            <div class="row">
                {
                    this.props.cards.map((card) =>
                        <Card card={card}></Card>
                    )
                }
            </div>
        );
    }
}

export default CardList;