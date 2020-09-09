import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';
class DishDetail extends Component {
    renderDish(dish) {
        if(dish != null){
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                     <b> <CardTitle>{dish.name}</CardTitle></b>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            )
        }
    }
    
    renderComments(dish){
        if(dish != null){
            const CommentSection=dish.comments.map((com)=>{
                return(
                  <ul key={com.id} className="list-unstyled">
                    <li>{com.comment}</li>
                    <li>-- {com.author} , {dateFormat(com.date,"mediumDate")}</li>
                  </ul>
                );
              });
            
              return(
                <div>
                    <h4>Comments</h4>
                    {CommentSection}
                </div>
              );   
        }
        else{
            return(
                <div></div>
            )
        }
    }

    render() {
    if (this.props.dish != null) {
        return (
            <div className="container">
                <div className="row"> 
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
    }
}

export default DishDetail;