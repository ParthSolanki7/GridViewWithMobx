import React from 'react'
import { List, Avatar } from 'antd';
import { DollarCircleFilled } from '@ant-design/icons';
import IconText from '../../CommonComponents/IconText';

const GridComponent = ({ rowData }) => {
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 5,
            }}
            dataSource={rowData}
            renderItem={item => {
                return (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText icon={DollarCircleFilled} text={item.price} key="list-vertical-star-o" />,
                        ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src={item.image}
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.image} />}
                            title={<span>{item.name}</span>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )
            }}
        />
    )
}

export default GridComponent
