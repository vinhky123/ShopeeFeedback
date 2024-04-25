document.getElementById("urlForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn chặn reload trang khi submit form
  var url = $("#urlInput").val(); // Lấy giá trị từ ô nhập URL
  sendRequest(url); // Gửi yêu cầu đến localhost
});

// Hàm gửi yêu cầu đến localhost và xử lý kết quả
function sendRequest(url) {
  $.ajax({
    url: "http://localhost:5000/api", // Thay your_port_here bằng số port của bạn
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({ url: url }),
    beforeSend: function () {
      // Thay đổi nút submit thành nút loading và vô hiệu hóa nó
      var submitButton = $("#urlForm button[type='submit']");
      submitButton.html(
        '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...'
      );
      submitButton.attr("disabled", true);
    },
    success: function (response) {
      // Cập nhật giá trị của thanh progress bar
      var positiveProgressBar = $("#positiveProgressBar");
      var negativeProgressBar = $("#negativeProgressBar");
      var postiveProgressText = $("#positiveProgressText");
      var negativeProgressText = $("#negativeProgressText");

      $("#progress-container").show();

      positiveProgressBar
        .css("width", response + "%")
        .attr("aria-valuenow", response)
        .text("Positive " + response + "%");
      negativeProgressBar
        .css("width", 100 - response + "%")
        .attr("aria-valuenow", 100 - response)
        .text("Negative " + (100 - response) + "%");
    },
    or: function (xhr, status, error) {
      console.error("Error:", error);
    },
    complete: function () {
      // Đặt lại nút submit về trạng thái ban đầu
      var submitButton = $("#urlForm button[type='submit']");
      submitButton.html("Submit");
      submitButton.attr("disabled", false);

      var successAlert = $("#successAlert");
      successAlert.show();
    },
  });
}
