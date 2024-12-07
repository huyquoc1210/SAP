# Modules

MessageToast :Toast success là một cửa sổ nhỏ lên, không gây gây gián đoạn cho các thông báo tự động thành công hoặc thông tin tự động biến mất sau vài giây.Toast sẽ tự động biến mất sau một thời gian ,trừ khi ng dùng di chuyên chuột qua toast hoặc chạm vào nó

Note:

- Nếu message được cấu hình chưa code HTML hoặc script thì chúng sẽ thoát
- Ngắt dòng (\r\n, \n\r, \r, \n) sẽ được hiển thị.
- Mỗi lần chỉ có thể hiển thị một thông báo ở cùng một nơi.

```ts
sap.m.MessageToast.show("This message should appear in the message toast", {
  duration: 3000, // default
  width: "15em", // default
  my: "center bottom", // default
  at: "center bottom", // default
  of: window, // default
  offset: "0 0", // default
  collision: "fit fit", // default
  onClose: null, // default
  autoClose: true, // default
  animationTimingFunction: "ease", // default
  animationDuration: 1000, // default
  closeOnBrowserNavigation: true, // default
});
```

Khi nào nên sử dụng

- Bạn muốn hiện thị một thông báo thông tin thành công ngắn
- Bạn không muốn làm gián đoạn người dùg khi đang thực hiện 1 action
- Bạn muốn xác nhận một action thành công

Khi nào không nên sử dụng

- Bạn muốn hiển thị một thông báo lỗi hoặc cảnh báo.
- Bạn muốn làm gián đoạn người dùng khi họ đang thực hiện một hành động.
- Bạn muốn đảm bảo rằng người dùng đã đọc tin nhắn trước khi họ rời khỏi trang.
- Bạn muốn người dùng có thể sao chép một phần nội dung tin nhắn
