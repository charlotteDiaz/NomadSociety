import { Affix, Avatar, Card, Col, Collapse, List, Row, Skeleton } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../../context/UsersState";
import { recomendation } from "../../service/userService";
import './RelatedFriends.scss';

const RelatedFriends = () => {
  const { user } = useContext(GlobalContext);
  const [relatedFriends, setRelatedFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    recomendation(user._id).then((data) => {
        console.log('dentro',data)
      setRelatedFriends(data);
      setLoading(false);
    });
  }, [user]);
  return (
<>
    <Affix
      style={{ position: 'fixed', right: '40px', top: '83px', minWidth: '100px' }}
    >
      <Card title='Sugerencias de amistad' style={{ textAlign: 'center', width: '300px', marginTop: '10', WebkitBoxShadow: '-15px -4px 43px 0px rgba(214,214,214,1)', MozBoxShadow: '-15px -4px 43px 0px rgba(214,214,214,1)', boxShadow: '-15px -4px 43px 0px rgba(214,214,214,1)' }}>
        <Row align='center' gutter={0} justify='center' wrap={false} style={{ width: '100%', height: '100%' }}>
          <Col flex='1 1 40%' style={{ overflowY: 'auto' }}>
            <Skeleton size='large' loading={loading} active>
              <List
                dataSource={relatedFriends}
                renderItem={(friend) =>
                  <ul className="list-friends-suggestions" style={{ borderBottom: '0.5px solid rgba(239,239,239)', cursor: 'pointer', display: 'flex', justifyContent: 'start', flexDirection: 'row', alignItems: 'start', padding: '5px', margin: '10px', height: '100%', width: '90%' }} key={friend?._id} onClick={() => {
                    navigate(`/profile/${friend?._id}`)
                  }}>
                    <Avatar style={{ border: '0.5px solid gray' }} size={50} src={friend?.avatar || 'https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w'} alt={friend?.firstName} />
                    <h4 style={{ textTransform: 'capitalize', cursor: 'pointer', padding: '10px', fontSize: '15px', color: 'rgb(89,138,168)' }}>{friend?.firstName}</h4>
                  </ul>
                }
              />
            </Skeleton>
          </Col>
        </Row>
      </Card>
    </Affix>
  </>
  );
};

export default RelatedFriends;