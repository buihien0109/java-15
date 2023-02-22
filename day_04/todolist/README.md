Một sản phẩm trong có cấu trúc như sau
- id - Integer : ID của sản phẩm
- name - String : Tên sản phẩm
- brand - String : Thương hiệu
- count - Integer : Số sản phẩm trong giỏ
        
Và thực hiện các công việc sau

1. Trả về danh sách tất cả sản phẩm
2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng (Tổng tiền mỗi sản phẩm = price * count)
3. Tìm các sản phẩm của thuơng hiệu "Apple"
4. Tìm các sản phẩm có giá > 20000000
5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
8. Sắp xếp giỏ hàng theo price tăng dần
9. Sắp xếp giỏ hàng theo count giảm dần
10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng

Yêu cầu 1 : 
- Sử dụng Javacore để thực hiện các yêu cầu trên (kiến thức sử dụng : Stream API)

Yêu cầu 2 :
- Sử dụng Springboot để viết các API thực hiện các chức năng trên (API có thể không cần đặt theo đúng chuẩn RESTFul, mỗi yêu cầu là 1 API, URL có thể đặt bất kỳ)
    - Sử dụng FakeDB (tự tạo danh sách sản phẩm phía backend)
    - Sử dụng file CSV để lưu dữ liệu và đọc dữ liệu từ file để xử lý (sử dụng trang https://www.mockaroo.com/ để fake data trong file CSV)
    - Sử dụng JPA (MySQL hoặc PostgreSQL), SpringBoot kết nối với MySQL