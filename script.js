document.getElementById("urlForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn chặn reload trang khi submit form
  var url = $("#urlInput").val(); // Lấy giá trị từ ô nhập URL
  console.log("URL:", url);
  sendRequest(url); // Gửi yêu cầu đến localhost
});

// Hàm gửi yêu cầu đến localhost và xử lý kết quả
function sendRequest(url) {
  $.ajax({
    url: "http://localhost:5000/api", // Thay your_port_here bằng số port của bạn
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(url),
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

      sum = response[0] + response[1];
      percentagePositive = ((response[0] / sum) * 100).toFixed(2);
      percentageNegative = 100 - percentagePositive
      $("#progress-container").show();

      positiveProgressBar
        .css("width", percentagePositive + "%")
        .attr("aria-valuenow", percentagePositive)
        .text("Positive " + response[0]);
      negativeProgressBar
        .css("width", percentageNegative + "%")
        .attr("aria-valuenow", percentageNegative)
        .text("Negative " + response[1]);
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
