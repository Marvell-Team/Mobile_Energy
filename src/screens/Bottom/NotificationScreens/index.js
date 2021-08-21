import React, {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {icons} from '@assets';
import {Block, Header, VerticalList} from '@components';
import styles from './style';

const noti = [
  {
    id: 1,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/175359232_743984532948789_2282696370552683691_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nPu3EZJ2n6gAX_3ZAHq&_nc_ht=scontent.fsgn2-1.fna&oh=383ed6b6ae6ac02e637258ae5a896c49&oe=6145D9DA',
    content: 'Đã bình luận bài viết của bạn',
    time: '2 giờ trước',
  },
  {
    id: 2,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/175359232_743984532948789_2282696370552683691_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nPu3EZJ2n6gAX_3ZAHq&_nc_ht=scontent.fsgn2-1.fna&oh=383ed6b6ae6ac02e637258ae5a896c49&oe=6145D9DA',
    content: 'Đã đánh giá 1 sao sản phẩm của bạn',
    time: '2 giờ trước',
  },
  {
    id: 3,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/175359232_743984532948789_2282696370552683691_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nPu3EZJ2n6gAX_3ZAHq&_nc_ht=scontent.fsgn2-1.fna&oh=383ed6b6ae6ac02e637258ae5a896c49&oe=6145D9DA',
    content: 'Đã giao thành công',
    time: '3 giờ trước',
  },
  {
    id: 4,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/175359232_743984532948789_2282696370552683691_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nPu3EZJ2n6gAX_3ZAHq&_nc_ht=scontent.fsgn2-1.fna&oh=383ed6b6ae6ac02e637258ae5a896c49&oe=6145D9DA',
    content: 'Đã mua sản phẩm của bạn',
    time: '2 ngày trước',
  },
  {
    id: 5,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/175359232_743984532948789_2282696370552683691_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nPu3EZJ2n6gAX_3ZAHq&_nc_ht=scontent.fsgn2-1.fna&oh=383ed6b6ae6ac02e637258ae5a896c49&oe=6145D9DA',
    content: 'Đã yêu thích sản phẩm của bạn',
    time: '2 ngày trước',
  },
  {
    id: 6,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/175359232_743984532948789_2282696370552683691_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nPu3EZJ2n6gAX_3ZAHq&_nc_ht=scontent.fsgn2-1.fna&oh=383ed6b6ae6ac02e637258ae5a896c49&oe=6145D9DA',
    content: 'Đã nhắn tin cho bạn',
    time: '3 ngày trước',
  },
  {
    id: 7,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/175359232_743984532948789_2282696370552683691_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nPu3EZJ2n6gAX_3ZAHq&_nc_ht=scontent.fsgn2-1.fna&oh=383ed6b6ae6ac02e637258ae5a896c49&oe=6145D9DA',
    content: 'Đã bình luận bài viết của bạn',
    time: '4 ngày trước',
  },
  {
    id: 8,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/175359232_743984532948789_2282696370552683691_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nPu3EZJ2n6gAX_3ZAHq&_nc_ht=scontent.fsgn2-1.fna&oh=383ed6b6ae6ac02e637258ae5a896c49&oe=6145D9DA',
    content: 'Đã đánh giá 1 sao sản phẩm của bạn',
    time: '5 ngày trước',
  },
  {
    id: 9,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/175359232_743984532948789_2282696370552683691_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nPu3EZJ2n6gAX_3ZAHq&_nc_ht=scontent.fsgn2-1.fna&oh=383ed6b6ae6ac02e637258ae5a896c49&oe=6145D9DA',
    content: 'Đã giao thành công',
    time: '6 ngày trước',
  },
  {
    id: 10,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/175359232_743984532948789_2282696370552683691_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nPu3EZJ2n6gAX_3ZAHq&_nc_ht=scontent.fsgn2-1.fna&oh=383ed6b6ae6ac02e637258ae5a896c49&oe=6145D9DA',
    content: 'Đã mua sản phẩm của bạn',
    time: '7 ngày trước',
  },
  {
    id: 11,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/175359232_743984532948789_2282696370552683691_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nPu3EZJ2n6gAX_3ZAHq&_nc_ht=scontent.fsgn2-1.fna&oh=383ed6b6ae6ac02e637258ae5a896c49&oe=6145D9DA',
    content: 'Đã yêu thích sản phẩm của bạn',
    time: '8 ngày trước',
  },
  {
    id: 12,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/175359232_743984532948789_2282696370552683691_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nPu3EZJ2n6gAX_3ZAHq&_nc_ht=scontent.fsgn2-1.fna&oh=383ed6b6ae6ac02e637258ae5a896c49&oe=6145D9DA',
    content: 'Đã nhắn tin cho bạn',
    time: '9 ngày trước',
  },
];
const NotificationScreens = () => {
  const [data, setData] = useState(noti);
  console.log(data);
  return (
    <Block flex style={styles.container}>
      <Header title="THÔNG BÁO" />
      <VerticalList data={data} />
    </Block>
  );
};

export default NotificationScreens;
