import React from "react";

class Card extends React.Component {
    render() {
        const card = this.props.card;
        
        return <div class="col-xl-3 col-md-6 mb-4">
            <div class={"card " + card.theme + " shadow h-100 py-2"}>
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class={"text-xs font-weight-bold " + card.class + " text-uppercase mb-1"}>
                                {card.name}
                            </div>
                            <div class={"h5 mb-0 " + card.valueClass + " font-weight-bold text-gray-800"}>
                                {card.value}
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class={"fas " + card.image + " fa-2x text-gray-300"}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Card;