import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';

    function RenderDish({dish}) {
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
    
    function RenderComments({dish}){
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

    const DishDetail = (props) =>{
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row"> 
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments dish={props.dish}/>
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


export default DishDetail;