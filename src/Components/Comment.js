import React from 'react';
import CommentDetail from './CommentDetail';
import ApproveDetail from './ApproveDetails';

function Comment (){
    return (
        <div className="ui container comments">
            <ApproveDetail>
                <CommentDetail  author="Prachi"/>
            </ApproveDetail>
            <ApproveDetail>
                <CommentDetail  author="Ankit"/>
            </ApproveDetail>
            <ApproveDetail>
                <CommentDetail  author="Teddy"/>
            </ApproveDetail>
        </div>
    );
}

export default Comment;