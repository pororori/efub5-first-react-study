import React from 'react';
import Card from './Card';
function ProfileCard(props){
    return(
        <Card title="Yujin Lee" backgroundColor="#4ea04e">
            <p>안녕하세요, 유진입니다</p>
            <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
        </Card>
    );
}

export default ProfileCard;