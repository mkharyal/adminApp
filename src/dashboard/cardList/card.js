import React from "react";

class Card extends React.Component {
    render() {
        return <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-uppercase mb-1">
                                {this.props.card.name}
                            </div>
                        </div>
                        <div class="col-auto">
                            Kharyal
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Card;