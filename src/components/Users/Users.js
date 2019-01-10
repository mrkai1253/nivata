import React, { Component } from 'react'
import { List,Card,Icon } from 'antd';
import './users.css';


const { Meta } = Card;

const data = [
    {
      name: 'Sreekanth Sasi',
      imageurl: 'https://media.licdn.com/dms/image/C5603AQEIyfl5uBwLSQ/profile-displayphoto-shrink_800_800/0?e=1552521600&v=beta&t=RIgFzeF66O45KWtYkvPgoyR5ftBucZAPAIPfffSnehQ',
      position:'CEO',
      description:'',
      linkedin:'https://www.linkedin.com/in/sreekanth-sasi-b7836b88/',
      github:'https://github.com/d3m0n-r00t'
    },
    {
      name: 'Sanjay KS',
      imageurl: 'https://pps.whatsapp.net/v/t61.11540-24/49037926_348831582597973_41409403198373888_n.jpg?oe=5C3AE04D&oh=b7e24dfc716182e4167391f6e5c1976b',
      position:'CMO',
      description:'',
      linkedin:'',
      github:''
    },
    {
      name: 'Asish Shaji',
      imageurl: 'https://lh3.googleusercontent.com/-pxLi-1mpJis/WrcxcfaplSI/AAAAAAAAAAs/d1QrqrLq3ZoEyuMLnqGKJQRlzd1q9qJsACEwYBhgL/w140-h140-p/me.jpeg',
      position:'CTO',
      description:'',
      linkedin:'https://www.linkedin.com/in/asish-shaji-thomas/',
      github:'https://github.com/mrkai1253/'
    },
   
  ];

export default class componentName extends Component {
  render() {
    return (
      <div>
          <h1 className="team"><Icon type="team" /> Team</h1>
            <List 
                grid={{
                    gutter: 3,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 3,
                    xl: 3,
                    xxl: 3
          }}
                
                dataSource={data}
                className="userlist"
                renderItem={user => (
                <List.Item style={{marginLeft:'20px'}}>
                    <Card
                            hoverable
                            style={{
                                width: 200,
                                padding: '10px',
                                margin: 'auto'
                                }}    
                            cover={<img alt={user.name} src= {user.imageurl}/>}
                            actions={[<a href={user.linkedin}><Icon type="linkedin" /></a>, <a href={user.github}><Icon type="github" /></a>]}
                        >
                        <Meta
                        style
                        ={{
                        fontFamily: 'Space Mono'
                            }}
                        title={user.name}
                        description={user.description}
                        />
                    </Card>
                </List.Item>
                )}
            />
      </div>
    )
  }
}
