import * as React from 'react';
import { Typography, Row, Col } from 'antd';
import { 
    HomeTwoTone, EnvironmentTwoTone, 
    IdcardTwoTone, BankTwoTone,
    FilePdfTwoTone, BugTwoTone,
    MailTwoTone, CodeTwoTone,
    LikeTwoTone, CameraTwoTone
} from '@ant-design/icons';

const { Text, Title, Link } = Typography;

const Click = ( props ) => {
    return <Text mark><Link className="link" href={props.link} target="_blank">{props.text}</Link></Text> 
}

const Page = () => {
    return <div className="container" style={{padding: '10px'}}>
        <Row>
            <Col span={24}>
                <Title level={1}>
                    Hey I'm Imtiaz Khaled<br />
                    I love playing and <Click link="https://imtiazkhaled.itch.io/" text="making games"/> <br />
                    Checkout <Click link="https://gitraffe.com/" text="Gitraffe"/> and <Click link="https://blazeoj.com/" text="BlazeOJ"/>
                    <br />
                    During college I interned @ <Click link="https://www.text-em-all.com/" text="Text-Em-All"/>
                    , <Click link="https://ayokasystems.com/" text="Ayoka Systems"/> and <Click link="https://bluetechbd.com/" text="BluetechBD"/><br />
                    Nice articles <Click link="https://www.theshorthorn.com/news/for-uta-student-hackathon-team-winning-is-in-the-code/article_133c3eb8-6de8-11e9-a1f8-1bf4fa4b99df.html" text="[link1]"/> 
                    , <Click link="https://www.theshorthorn.com/news/annual-hackuta-competition-inspires-innovation-brings-tech-company-scouting-opportunities/article_ecf3f8e2-e40a-11e9-b5aa-abfdf8fbfffc.html" text="[link2]"/> about 
                    me, and my team.  
                </Title>
            </Col>
            <Col span={24}>
                <Row className="bottom">
                    <Col span={8}>
                        <Title level={3}>
                            <Link href="mailto://imtiazkhaled07@gmail.com" target="_blank">
                                <MailTwoTone twoToneColor="red" />
                                <Text strong> Email</Text>
                            </Link> <br />
                            <Link href="https://github.com/ImtiazKhaled" target="_blank"> 
                                <BugTwoTone twoToneColor="black" /> 
                                <Text strong> Github</Text>
                            </Link> <br />
                            <Link href="https://devpost.com/ImtiazMujtabaKhaled" target="_blank"> 
                                <CodeTwoTone twoToneColor="blue" /> 
                                <Text strong> Devpost</Text>
                            </Link> <br />
                            <Link href="https://www.linkedin.com/in/imtiazkhaled/" target="_blank"> 
                                <LikeTwoTone /> 
                                <Text strong> LinkedIn</Text>
                            </Link> <br />
                            <Link href="https://www.instagram.com/verynicepixels/" target="_blank"> 
                                <CameraTwoTone twoToneColor="magenta" />
                                <Text strong> Instagram</Text>
                            </Link> <br />
                        </Title>
                    </Col> 
                    <Col span={16} className="quick-info">
                        <Title level={3}>
                            <div>
                                <Link href="https://docs.citrix.com/en-us/citrix-app-layering/4.html" target="_blank">
                                    <Text strong>SWE @ Citrix, App Layering </Text><IdcardTwoTone /> 
                                </Link>
                            </div>
                            <div>
                                <Text strong>UT, Arlington</Text> <BankTwoTone twoToneColor="#df6300" />
                            </div>
                            <div>
                                <Text strong>Burlington, MA</Text> <EnvironmentTwoTone twoToneColor="#52c41a" />
                            </div>
                            <div>
                                <Text strong>Dhaka, Bangladesh</Text> <HomeTwoTone twoToneColor="#eb2f96" />
                            </div>
                            <Link href="https://storage.googleapis.com/imkkhld/portfolio-site/imtiaz-khaled-resume.pdf" target="_blank"> 
                                <Text strong>Resume </Text>
                                <FilePdfTwoTone twoToneColor="purple" />
                            </Link> <br />
                        </Title>
                    </Col>  
                </Row>
            </Col>
        </Row>
    </div>
}

export default Page;