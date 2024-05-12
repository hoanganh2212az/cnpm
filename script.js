function bookAppointment() {
    var phoneNumber = document.getElementById("phoneNumber").innerText;

    // Check if the phone number is not set
    if (phoneNumber === 'SỬA SĐT ĐẶT LỊCH') { // Assume this text means no phone number is set
        alert("Vui lòng cập nhật số điện thoại");
        showEditPopup(); // Opens the phone number edit popup
        return; // Stop further execution
    }

    var salon = document.getElementById("salon").value;
    var salonText = document.querySelector("#salon option:checked").text;
    var service = document.getElementById("service").value;
    var serviceText = document.querySelector("#service option:checked").text;
    var datetime = document.getElementById("datetime").value;
    var date = new Date(datetime);
    var formattedDateTime = date.getHours() + " giờ - " + date.getMinutes() + " phút; " +
                            date.getDate() + " - " + (date.getMonth() + 1) + " - " + date.getFullYear();

    var popup = document.getElementById("popup");
    var bookingInfo = document.getElementById("bookingInfo");
    bookingInfo.innerHTML = "<strong>Số điện thoại của khách hàng:</strong><br>" + phoneNumber + "<br>" +
                            "Địa chỉ Salon: " + salonText + "<br>" +
                            "Dịch vụ: " + serviceText + "<br>" +
                            "Thời gian: " + formattedDateTime;
    popup.style.display = "block";
}



function chooseRandomSalon() {
    var salons = ['salon1', 'salon2', 'salon3']; // List of salons
    var randomSalon = salons[Math.floor(Math.random() * salons.length)]; // Random selection
    document.getElementById('salon').value = randomSalon; // Set the randomly selected salon
}

function closePopup() {
    window.location.reload();
}

function editAppointment() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function cancelAppointment() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
    var bookingForm = document.getElementById("bookingForm");
    bookingForm.reset();
    alert("Hủy lịch thành công");
}

function showEditPopup() {
    document.getElementById('editPopup').style.display = 'block';
}

function closeEditPopup() {
    document.getElementById('editPopup').style.display = 'none';
}

function updatePhoneNumber() {
    var newPhone = document.getElementById('newPhoneNumber').value;
    if (newPhone) { // Kiểm tra nếu có giá trị mới
        document.getElementById('phoneNumber').innerText = newPhone;
        closeEditPopup();
    } else {
        alert('Vui lòng nhập số điện thoại mới.');
    }
}
