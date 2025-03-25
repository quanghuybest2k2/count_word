// Đếm số từ trong đoạn văn bản
const countWord = () => {
  // Tách từ và loại bỏ dấu câu
  const doanVanBan = document.getElementById("inputText").value.trim();
  const tu = doanVanBan.split(/\s+/).filter(Boolean);
  const soTu = tu.length;

  // Hiển thị kết quả
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `Số từ trong đoạn văn bản là: ${soTu}`;
  resultDiv.style.opacity = "1";
  resultDiv.style.transform = "scale(1.1)";
  setTimeout(() => (resultDiv.style.transform = "scale(1)"), 300);
};

// Xóa nội dung
const clearContent = () => {
  document.getElementById("inputText").value = "";
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "";
  resultDiv.style.opacity = "0";
};
