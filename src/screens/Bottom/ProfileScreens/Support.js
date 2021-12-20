import {icons} from '@assets';
import {Block, Header} from '@components';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Support = () => {
  const navigation = useNavigation();

  return (
    <Block style={styles.container}>
      <Header
        title={'Hỗ trợ'}
        iconLeft={icons.back}
        leftPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block style={styles.form}>
          {/* Tiêu đề điều khoản */}
          <Text style={styles.txtTitle}>Điều khoản dịch vụ</Text>
          {/* Nội dung điều khoản */}
          <Block>
            <Text style={styles.txtContent}>
              Chào mừng bạn đến với Energy Mobile!
            </Text>
            <Text style={styles.txtContent}>
              Energy Mobile tạo ra các công nghệ và dịch vụ nhằm hỗ trợ mọi tìm
              mua những sản phẩm điện thoại cần thiết. Các Điều khoản này điều
              chỉnh việc bạn sử dụng tính năng, dịch vụ, công nghệ chúng tôi
              cung cấp, trừ khi chúng tôi nêu rõ là áp dụng các điều khoản
              riêng.
            </Text>
            <Text style={styles.txtContent}>
              Bạn không mất phí sử dụng Energy Mobile, nhưng bạn chỉ mất phí khi
              mua hàng. Chúng tôi không bán dữ liệu cá nhân của bạn cho các nhà
              quảng cáo và cũng không chia sẻ thông tin trực tiếp nhận dạng bạn
              (chẳng hạn như tên, địa chỉ email hoặc thông tin liên hệ khác) với
              những đơn vị này trừ khi được bạn cho phép cụ thể. Thay vào đó,
              các nhà quảng cáo có thể cho chúng tôi biết thông tin như kiểu đối
              tượng mà họ muốn nhìn thấy quảng cáo và chúng tôi có thể hiển thị
              những quảng cáo ấy cho người có thể quan tâm. Chúng tôi báo cáo
              cho các nhà quảng cáo về hiệu quả quảng cáo, từ đó những đơn vị
              này có thể nắm được cách mọi người tương tác với nội dung của họ.
              Xem Phần 2 bên dưới để tìm hiểu thêm.
            </Text>
            <Text style={styles.txtContent}>
              Chính sách dữ liệu của chúng tôi giải thích cách chúng tôi thu
              thập và sử dụng dữ liệu cá nhân của bạn để quyết định hiển thị cho
              bạn quảng cáo nào, cũng như để cung cấp tất cả các dịch vụ khác
              được mô tả bên dưới. Bạn cũng có thể chuyển đến phần cài đặt bất
              kỳ lúc nào để xem lại các lựa chọn quyền riêng tư của mình đối với
              cách chúng tôi sử dụng dữ liệu của bạn.Bảo vệ quyền riêng tư của
              mọi người chính là điều mà chúng tôi chú trọng. Chúng tôi không
              bán dữ liệu cá nhân.
            </Text>
            <Text style={styles.txtContent}>
              Chúng tôi không ngừng nỗ lực cải thiện các dịch vụ của mình và
              phát triển những tính năng mới để tạo ra Sản phẩm tốt hơn cho bạn
              cũng như cho cộng đồng của chúng tôi. Do đó, đôi khi chúng tôi cần
              cập nhật các Điều khoản này để phản ánh chính xác những dịch vụ và
              cách làm của mình. Chúng tôi sẽ chỉ thực hiện các thay đổi trong
              trường hợp những quy định này không còn phù hợp nữa hoặc chưa đầy
              đủ và chỉ khi các thay đổi đó là hợp lý cũng như khi đã xem xét
              thích đáng lợi ích của bạn. Chúng tôi sẽ thông báo cho bạn (ví dụ:
              bằng email hoặc thông qua Sản phẩm của mình) ít nhất 30 ngày trước
              khi thực hiện các thay đổi đối với những Điều khoản này, đồng thời
              cho bạn cơ hội xem lại trước khi các thay đổi đó có hiệu lực, trừ
              khi chúng tôi phải thực hiện các thay đổi theo yêu cầu của luật
              pháp. Sau khi bất kỳ Điều khoản đã được cập nhật nào có hiệu lực,
              nếu tiếp tục sử dụng Sản phẩm của chúng tôi thì bạn sẽ chịu sự
              ràng buộc của các điều khoản đó.
            </Text>
            <Text style={styles.txtContent}>
              Chúng tôi nỗ lực cung cấp những Sản phẩm tốt nhất có thể và định
              ra các nguyên tắc rõ ràng cho mọi người dùng. Tuy nhiên, Sản phẩm
              của chúng tôi được cung cấp "nguyên trạng" và chúng tôi không đảm
              bảo rằng Sản phẩm luôn an toàn, bảo mật, không có lỗi hoặc Sản
              phẩm sẽ hoạt động mà không bị gián đoạn, chậm trễ hoặc thiếu sót.
              Trong phạm vi luật pháp cho phép, chúng tôi cũng TỪ CHỐI MỌI BẢO
              ĐẢM, DÙ RÕ RÀNG HAY NGỤ Ý, BAO GỒM CÁC BẢO ĐẢM NGỤ Ý VỀ KHẢ NĂNG
              TIÊU THỤ, SỰ PHÙ HỢP VỚI MỘT MỤC ĐÍCH CỤ THỂ, BẢO ĐẢM VỀ QUYỀN SỞ
              HỮU VÀ KHÔNG VI PHẠM. Chúng tôi không kiểm soát hoặc chi phối hành
              động hay phát ngôn của mọi người và những đối tượng khác. Chúng
              tôi cũng không chịu trách nhiệm về hành động hoặc cách ứng xử (dù
              trực tuyến hay ngoại tuyến) của họ hoặc mọi nội dung mà họ chia sẻ
              (bao gồm nội dung phản cảm, không phù hợp, tục tĩu, bất hợp pháp
              và các nội dung có thể bị phản đối khác).
            </Text>
            <Text style={styles.txtContent}>
              Chúng tôi không thể dự đoán thời điểm phát sinh sự cố về Sản phẩm
              của mình. Vì vậy, trách nhiệm pháp lý của chúng tôi chỉ giới hạn
              trong phạm vi tối đa mà luật áp dụng cho phép và trong mọi trường
              hợp, chúng tôi sẽ không chịu trách nhiệm với bạn về bất kỳ tổn
              thất nào về lợi nhuận, doanh thu, thông tin, dữ liệu hoặc về thiệt
              hại mang tính hệ quả, đặc biệt, gián tiếp, răn đe, trừng phạt hoặc
              ngẫu nhiên phát sinh từ hoặc liên quan đến các Điều khoản này hoặc
              Sản phẩm của Energy Mobile, ngay cả khi chúng tôi đã được thông
              báo về khả năng xảy ra các thiệt hại đó.
            </Text>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default Support;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },

  form: {
    backgroundColor: theme.colors.white,
    margin: getSize.m(16),
  },

  txtTitle: {
    color: theme.colors.blackText,
    fontSize: getSize.m(20),
    fontWeight: '500',
    marginBottom: getSize.m(8),
  },

  txtContent: {
    color: theme.colors.blackText,
    fontSize: getSize.m(16),
    fontWeight: '400',
    marginBottom: getSize.m(4),
  },
});
