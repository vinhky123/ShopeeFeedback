// To Top Button -----------------------------------------------------------------------------------------
window.onscroll = function() {scrollButton()};

function scrollButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTopButton").style.display = "block";
  } else {
    document.getElementById("toTopButton").style.display = "none";
  }
}

function goToTop() {
  var top = document.body
  if (top) {
    top.scrollIntoView({behavior: "smooth"});
  }  
}

// Start Button on page 1 -----------------------------------------------------------------------------------------
function goToPage2() {
  var page2 = document.getElementById("page2");
  if (page2) {
    page2.scrollIntoView({behavior: "smooth"});
  }
}

// Control page 3 appearence when clicking on the button on page 2 ---------------------------------------------------------
var page3 = document.getElementById("page3");
var page3Apearence = false;

function togglePage3() {
  if (page3) {
    if (page3Apearence) {
      page3.style.display = "none";
      page3Apearence = false;
    } else {
      page3.style.display = "block";
      page3Apearence = true;
    }
  }
}

// Calling API to localhost -----------------------------------------------------------------------------------------
document.getElementById("urlForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var url = $("#urlInput").val();
  console.log("URL:", url);
  sendRequest(url); 
});

// Hàm gửi yêu cầu đến localhost và xử lý kết quả
function sendRequest(url) {
  $.ajax({
    url: "http://localhost:5000/",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({ "url": url }),
    beforeSend: function () {
      var submitButton = $("#urlForm button[type='submit']");
      submitButton.html(
        '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...'
      );
      submitButton.attr("disabled", true);
    },
    success: function (response) {
      var positiveProgressBar = $("#positiveProgressBar");
      var negativeProgressBar = $("#negativeProgressBar");
      var positiveFeedbackCount = $("#positiveFeedbackCount");
      var negativeFeedbackCount = $("#negativeFeedbackCount");

      var positiveCount = response.positive;
      var negativeCount = response.negative;

      // Nếu khong có feedback nào tích hay tiêu cực
      if (positiveCount == 0 && negativeCount == 0) {
        percentagePositive = 0;
        percentageNegative = 0;
        positiveProgressBar
          .css("width", 100 + "%")
          .removeClass("progress-bar-striped progress-bar-animated bg-success")
          .addClass("bg-secondary")
          .attr("aria-valuenow", percentagePositive)
          .text("No positive/negative feedback");

      }
      // Nếu có
      else {
        sum = positiveCount + negativeCount;
        percentagePositive = ((positiveCount/ sum) * 100).toFixed(2);
        percentageNegative = (100 - percentagePositive).toFixed(2);

        positiveProgressBar
          .css("width", percentagePositive + "%")
          .addClass("positiveProgressBar-active")
          .attr("aria-valuenow", percentagePositive)
          .text(percentagePositive);

        positiveFeedbackCount.text(positiveCount);

        negativeProgressBar
          .css("width", percentageNegative + "%")
          .addClass("negativeProgressBar-active")
          .attr("aria-valuenow", percentageNegative)
          .text(percentageNegative);
        negativeFeedbackCount.text(negativeCount);
      }
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
