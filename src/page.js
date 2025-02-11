import * as React from 'react';
import { Typography, Row, Col } from 'antd';
import { 
    HomeTwoTone, EnvironmentTwoTone, 
    BankTwoTone, BugTwoTone,
    LikeTwoTone, CameraTwoTone
} from '@ant-design/icons';

const { Text, Title, Link } = Typography;

const Click = ( props ) => {
    return <Link className="link" href={props.link} target="_blank">{props.text}</Link>
}

const Page = () => {
    return <div className="container">
        <Row>
            <Col span={24}>
                <Title level={1}>
                    Hey I'm Imtiaz Khaled<br /><br />
                    I solve problems at <Click link="https://www.citrix.com/" text="Citrix" />, 
                     <Click link="https://docs.citrix.com/en-us/citrix-app-layering/4.html" text="AppLayering" />. <br />
                    I love nature and <Click link="https://imtiazkhaled.itch.io/" text="making games"/>. <br />
                    During college I interned @ <Click link="https://www.text-em-all.com/" text="Text-Em-All"/>
                    , <Click link="https://ayokasystems.com/" text="Ayoka Systems"/> and <Click link="https://bluetechbd.com/" text="BluetechBD"/><br />
                    Nice articles <Click link="https://www.theshorthorn.com/news/for-uta-student-hackathon-team-winning-is-in-the-code/article_133c3eb8-6de8-11e9-a1f8-1bf4fa4b99df.html" text="[link1]"/> 
                    , <Click link="https://www.theshorthorn.com/news/annual-hackuta-competition-inspires-innovation-brings-tech-company-scouting-opportunities/article_ecf3f8e2-e40a-11e9-b5aa-abfdf8fbfffc.html" text="[link2]"/> about 
                    me, and my college hackathon team. <br /><br />
                </Title>
            </Col>
        </Row>
        <Row>
            <Col span={8}>
                <Link className="bottom-icons" href="https://github.com/ImtiazKhaled" target="_blank"> 
                    <BugTwoTone twoToneColor="#134611" /> 
                    <Text className="bottom-text" strong> Github</Text>
                </Link>
            </Col>
            <Col span={8}>
                <Link className="bottom-icons" href="https://www.linkedin.com/in/imtiazkhaled/" target="_blank"> 
                    <LikeTwoTone twoToneColor="#134611" /> 
                    <Text className="bottom-text" strong> LinkedIn</Text>
                </Link>
            </Col>
            <Col span={8}>
                <Link className="bottom-icons" href="https://www.instagram.com/verynicepixels/" target="_blank"> 
                    <CameraTwoTone twoToneColor="#134611" />
                    <Text className="bottom-text" strong> Instagram</Text>
                </Link>
            </Col>
        </Row>
    </div>
}

export default Page;