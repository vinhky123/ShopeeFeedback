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
      var positiveFeedbackCount = $("#positiveFeedbackCount");
      var negativeFeedbackCount = $("negativeFeedbackCount");

      // Show navtab
      var navTab = $("#navTab");
      navTab.show();

      // Nếu khong có feedback nào tích hay tiêu cực
      if (response[0] == 0 && response[1] == 0) {
        percentagePositive = 0;
        percentageNegative = 0;
        positiveProgressBar
          .css("width", 100 + "%")
          .removeClass("progress-bar-striped progress-bar-animated bg-success")
          .addClass("bg-secondary")
          .attr("aria-valuenow", percentagePositive)
          .text("No positive/negative feedback");

        // Xử lí 2 tab kia bị disable

        // Feedback tab
        $('#topFeedbackTab')
          .attr({
            'data-bs-toggle': 'tooltip',
            'data-bs-placement': 'bottom',
            'title': 'Disabled because there is no positive/negative feedback'
          });
        $('#topFeedbackTabContent').addClass('disabled');


        // Word frequency tab
        $('#topWordFrequencyTab')
          .attr({
            'data-bs-toggle': 'tooltip',
            'data-bs-placement': 'bottom',
            'title': 'Disabled because there is no positive/negative feedback'
          });
        $('#topWordFrequencyTabContent').addClass('disabled');

      }
      // Nếu có
      else {
        sum = response[0] + response[1];
        percentagePositive = ((response[0] / sum) * 100).toFixed(2);
        percentageNegative = (100 - percentagePositive).toFixed(2);

        positiveProgressBar
          .css("width", percentagePositive + "%")
          .attr("aria-valuenow", percentagePositive)
          .text(percentagePositive);

        positiveFeedbackCount.text(response[0]);

        negativeProgressBar
          .css("width", percentageNegative + "%")
          .attr("aria-valuenow", percentageNegative)
          .text(percentageNegative);
      }
      positiveFeedbackCount.text(response[0]);
      negativeFeedbackCount.text(response[1]);

    },
    or: function (xhr, status, error) {
      console.error("Error:", error);
    },
    complete: function () {
      // Đặt lại nút submit về trạng thái ban đầu
      var submitButton = $("#urlForm button[type='submit']");
      submitButton.html("Again");
      submitButton.attr("disabled", false);

      var successAlert = $("#successAlert");
      successAlert.show();
      submitButton.off('click').on('click', function (e) {
        e.preventDefault();
        location.reload();

      });
    },
  });
}

// Top word frequency tab
var words_pos = ["hay", "đẹp", "ngon", "nhẹ"]; // Thay thế bằng danh sách từ của bạn
var words_neg = ["xấu", "tệ", "khó", "đắng"]; // Thay thế bằng danh sách từ của bạn
var wordFrequency_1 = $("#wordFrequency-1");
var wordFrequency_2 = $("#wordFrequency-2");

words_pos.forEach(word_pos => {
  var span = document.createElement('span');
  span.textContent = word_pos;
  span.style.fontSize = (Math.random() * 4 + 0.5) + 'vw';  // Điều chỉnh kích thước font ngẫu nhiên từ 10px đến 30px
  wordFrequency_1.append(span);
});

words_neg.forEach(word_neg => {
  var span = document.createElement('span');
  span.textContent = word_neg;
  span.style.fontSize = (Math.random() * 4 + 0.5) + 'vw'; // Điều chỉnh kích thước font ngẫu nhiên từ 10px đến 30px
  wordFrequency_2.append(span);
});

// Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})