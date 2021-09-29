import React, {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {icons} from '@assets';
import {Block, Header, NotifiList} from '@components';
import styles from './style';

const noti = [
  {
    id: 1,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg',
    content: 'Đã bình luận bài viết của bạn',
    time: '2 giờ trước',
  },
  {
    id: 2,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg',
    content: 'Đã đánh giá 1 sao sản phẩm của bạn',
    time: '2 giờ trước',
  },
  {
    id: 3,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg',
    content: 'Đã giao thành công',
    time: '3 giờ trước',
  },
  {
    id: 4,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg',
    content: 'Đã mua sản phẩm của bạn',
    time: '2 ngày trước',
  },
  {
    id: 5,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg',
    content: 'Đã yêu thích sản phẩm của bạn',
    time: '2 ngày trước',
  },
  {
    id: 6,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg',
    content: 'Đã nhắn tin cho bạn',
    time: '3 ngày trước',
  },
  {
    id: 7,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg',
    content: 'Đã bình luận bài viết của bạn',
    time: '4 ngày trước',
  },
  {
    id: 8,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg',
    content: 'Đã đánh giá 1 sao sản phẩm của bạn',
    time: '5 ngày trước',
  },
  {
    id: 9,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg',
    content: 'Đã giao thành công',
    time: '6 ngày trước',
  },
  {
    id: 10,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg',
    content: 'Đã mua sản phẩm của bạn',
    time: '7 ngày trước',
  },
  {
    id: 11,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg',
    content: 'Đã yêu thích sản phẩm của bạn',
    time: '8 ngày trước',
  },
  {
    id: 12,
    name: 'Nguyễn Hoài Bão',
    avt: 'https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg',
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
      <NotifiList data={data} />
    </Block>
  );
};

export default NotificationScreens;
