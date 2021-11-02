import React, {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {icons} from '@assets';
import {Block, Header, NotifiList} from '@components';
import styles from './style';

const noti = [
  {
    id: 1,
    title: 'Top sản phẩm giảm giá đang được rao bán!',
    time: '3 giờ trước',
    image: 'https://p.turbosquid.com/ts-thumb/xj/I0MFEa/Kd/thumbnail/jpg/1632216275/2000x2000/fit_q99/e0f8fd0d8853a14ec04ac4ea03a43d191fb8b56c/thumbnail.jpg',
    content: 'Giảm giá đến 1% nhanh tay rước vài em điện thoại xịn xò nào!',
  },

  {
    id: 2,
    title: 'Đặt hàng thành công!',
    time: '3 giờ trước',
    image: 'https://p.turbosquid.com/ts-thumb/xj/I0MFEa/Kd/thumbnail/jpg/1632216275/2000x2000/fit_q99/e0f8fd0d8853a14ec04ac4ea03a43d191fb8b56c/thumbnail.jpg',
    content: 'Đơn hàng sẽ giao tới bạn trong 3 ngày tới!',
  },

  {
    id: 3,
    title: 'Đặt hàng thành công!',
    time: '3 giờ trước',
    image: 'https://p.turbosquid.com/ts-thumb/xj/I0MFEa/Kd/thumbnail/jpg/1632216275/2000x2000/fit_q99/e0f8fd0d8853a14ec04ac4ea03a43d191fb8b56c/thumbnail.jpg',
    content: 'Sao hủy zậy a zai? Ko hài lòng gì à? Mua lại đi :>',
  },

  {
    id: 4,
    title: 'Đặt hàng thành công!',
    time: '3 giờ trước',
    image: 'https://p.turbosquid.com/ts-thumb/xj/I0MFEa/Kd/thumbnail/jpg/1632216275/2000x2000/fit_q99/e0f8fd0d8853a14ec04ac4ea03a43d191fb8b56c/thumbnail.jpg',
    content: 'Nhanh tay rước em iPhone 13 tuyệt đẹp nào!',
  },

  {
    id: 5,
    title: 'Đánh giá app ngay, nhận quà liền tay!',
    time: '3 giờ trước',
    image: 'https://p.turbosquid.com/ts-thumb/xj/I0MFEa/Kd/thumbnail/jpg/1632216275/2000x2000/fit_q99/e0f8fd0d8853a14ec04ac4ea03a43d191fb8b56c/thumbnail.jpg',
    content: 'Nhận ngay voucher giảm 1k trên đơn hàng 990k!',
  },
];
const NotificationScreens = () => {
  const [data, setData] = useState(noti);
  console.log(data);
  return (
    <Block flex style={styles.container}>
      <Header title="Thông báo"/>
      <NotifiList data={data} />
    </Block>
  );
};

export default NotificationScreens;
